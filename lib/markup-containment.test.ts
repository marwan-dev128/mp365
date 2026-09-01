import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { stripInlineMarkup, excerpt } from "./richtext";
import { buildMetadata } from "./metadata";
import {
  webPageSchema,
  collectionPageSchema,
  serviceSchema,
  howToSchema,
  articleSchema,
  personSchema,
  definedTermSchema,
  faqSchema,
  breadcrumbSchema,
} from "./schema";

// Containment tests for the inline markup defined in lib/richtext.ts.
//
// The rule this file enforces: authored copy may reach exactly two kinds of
// destination — HTML rendered through <RichText>, or plain text flattened
// through stripInlineMarkup(). Anything else publishes literal `[label](/path/)`
// and `**` to users, search engines, and LLMs.
//
// The regression these guard: FAQ answers gained internal links, and it turned
// out only faqSchema() and one glossary description were stripping. Every other
// JSON-LD field, every meta description, the llms-full.txt dump, and five card
// components were emitting the raw source.

const MARKED = "See [the cost guide](/pricing/tenant-migration-cost/) and **note this**.";
const FLAT = "See the cost guide and note this.";

/** Walks a JSON-LD object and returns every string value that still has markup. */
function markupLeaks(node: unknown, path = "$"): string[] {
  if (typeof node === "string") {
    return /\]\(\/|\*\*/.test(node) ? [`${path}: ${node}`] : [];
  }
  if (Array.isArray(node)) {
    return node.flatMap((v, i) => markupLeaks(v, `${path}[${i}]`));
  }
  if (node && typeof node === "object") {
    return Object.entries(node).flatMap(([k, v]) => markupLeaks(v, `${path}.${k}`));
  }
  return [];
}

// ---------------------------------------------------------------------------
// excerpt()
// ---------------------------------------------------------------------------

test("excerpt strips markup before truncating, so a link is never cut in half", () => {
  // The bug this replaces: `text.slice(0, 30)` on the raw string yields
  // "See [the cost guide](/pricing/te" — a severed link token on a live card.
  const out = excerpt(MARKED, 30);
  assert.ok(!out.includes("]("), `severed link token in: ${out}`);
  assert.ok(!out.includes("**"), `raw emphasis in: ${out}`);
  assert.ok(!out.includes("/pricing/"), `href leaked into visible copy: ${out}`);
  assert.ok(out.endsWith("…"));
});

test("excerpt returns the flattened text unchanged when it already fits", () => {
  assert.equal(excerpt(MARKED, 500), FLAT);
});

test("excerpt never exceeds its budget by more than the ellipsis", () => {
  for (const n of [10, 25, 40, 80, 130]) {
    const out = excerpt(MARKED, n);
    assert.ok(out.length <= n + 1, `excerpt(${n}) returned ${out.length} chars: ${out}`);
  }
});

test("excerpt does not leave dangling punctuation before the ellipsis", () => {
  for (const n of [12, 18, 24, 31, 44, 57]) {
    const out = excerpt("One, two; three: four — five. six seven eight", n);
    assert.doesNotMatch(out, /[\s,;:.–—-]…$/, `dangling punctuation: ${out}`);
  }
});

// ---------------------------------------------------------------------------
// JSON-LD — every builder, every authored field
// ---------------------------------------------------------------------------

test("no JSON-LD builder publishes raw inline markup", () => {
  const nodes: Record<string, unknown> = {
    webPage: webPageSchema({ path: "/x/", name: MARKED, description: MARKED }),
    collectionPage: collectionPageSchema({
      path: "/x/",
      name: MARKED,
      description: MARKED,
      items: [{ name: MARKED, path: "/x/y/" }],
    }),
    service: serviceSchema({
      name: MARKED,
      description: MARKED,
      path: "/x/",
      serviceType: MARKED,
      areaServed: ["CT"],
      category: MARKED,
      audience: MARKED,
      serviceOutput: MARKED,
    }),
    howTo: howToSchema({
      name: MARKED,
      description: MARKED,
      steps: [{ name: MARKED, description: MARKED }],
      path: "/x/",
    }),
    article: articleSchema({
      headline: MARKED,
      description: MARKED,
      path: "/x/",
      datePublished: "2026-01-01",
      dateModified: "2026-01-01",
      authorName: "A",
      articleSection: MARKED,
    }),
    person: personSchema({ slug: "a", name: MARKED, jobTitle: MARKED, description: MARKED }),
    definedTerm: definedTermSchema({ slug: "a", name: MARKED, description: MARKED, aliases: [MARKED] }),
    faq: faqSchema([{ q: MARKED, a: MARKED }], "/x/"),
    breadcrumb: breadcrumbSchema([{ name: MARKED, path: "/x/" }]),
  };

  const leaks: string[] = [];
  for (const [name, node] of Object.entries(nodes)) {
    leaks.push(...markupLeaks(node, name));
  }
  assert.deepEqual(leaks, [], `raw markup reached JSON-LD:\n${leaks.join("\n")}`);
});

// ---------------------------------------------------------------------------
// <head> — title, description, OpenGraph, Twitter
// ---------------------------------------------------------------------------

test("buildMetadata flattens markup in every text field it emits", () => {
  const meta = buildMetadata({ title: MARKED, description: MARKED, path: "/x/" });
  const leaks = markupLeaks(meta, "metadata");
  assert.deepEqual(leaks, [], `raw markup reached <head>:\n${leaks.join("\n")}`);
  assert.ok(String(meta.description).startsWith("See the cost guide"));
});

// ---------------------------------------------------------------------------
// Seeded copy — the grammar must actually cover what was authored
// ---------------------------------------------------------------------------

// Authored copy is always a single-line double-quoted literal. A matcher that
// spans newlines joins two unrelated quotes and sweeps up the TypeScript
// between them — including JSDoc `/** … */`, which then reads as unclosed
// emphasis. Excluding \n keeps each match to one real string.
function seededStrings(src: string): string[] {
  return (src.match(/"(?:[^"\\\n]|\\.){20,}"/g) ?? []).map((raw) => raw.slice(1, -1));
}

test("every seed-data file parses cleanly — no unclosed or unsupported markup", () => {
  const dir = join(process.cwd(), "prisma/seed-data");
  const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
  assert.ok(files.length >= 5, "expected the seed-data directory to be populated");

  const bad: string[] = [];
  for (const file of files) {
    for (const text of seededStrings(readFileSync(join(dir, file), "utf8"))) {
      const stripped = stripInlineMarkup(text);
      if (/\*\*/.test(stripped)) bad.push(`${file}: unclosed ** in "${text.slice(0, 70)}…"`);
      // A link the grammar cannot match renders as literal text. The grammar
      // only accepts root-relative hrefs, so an external or anchor link here
      // is authored copy that will ship broken.
      if (/\[[^\]]*\]\(/.test(stripped)) {
        bad.push(`${file}: link the grammar cannot render in "${text.slice(0, 70)}…"`);
      }
    }
  }
  assert.deepEqual(bad, [], `seeded copy the renderer cannot handle:\n${bad.join("\n")}`);
});

test("seeded internal links point at paths, not bare slugs or external URLs", () => {
  const dir = join(process.cwd(), "prisma/seed-data");
  const bad: string[] = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    const src = seededStrings(readFileSync(join(dir, file), "utf8")).join("\n");
    for (const m of src.matchAll(/\[[^\]]+\]\(([^)]*)\)/g)) {
      const href = m[1];
      if (!href.startsWith("/")) bad.push(`${file}: "${href}" is not root-relative`);
      else if (!href.endsWith("/")) bad.push(`${file}: "${href}" is missing its trailing slash`);
    }
  }
  // trailingSlash:true means a slashless internal link 308-redirects on every
  // click, so the trailing slash is a correctness issue, not a style one.
  assert.deepEqual(bad, [], `malformed internal links in seeded copy:\n${bad.join("\n")}`);
});

// ---------------------------------------------------------------------------
// The generated LLM dump
// ---------------------------------------------------------------------------

test("public/llms-full.txt contains no raw inline markup", () => {
  // Regenerated by `npm run generate:llms`, which prebuild runs before every
  // build. This is a plain-text surface authored for machines, so a literal
  // `[label](/path/)` here is shipped straight into model context.
  let dump: string;
  try {
    dump = readFileSync(join(process.cwd(), "public/llms-full.txt"), "utf8");
  } catch {
    return; // not generated in this checkout; the build regenerates it
  }
  const links = dump.match(/\[[^\]]+\]\(\/[^)]*\)/g) ?? [];
  const bold = dump.match(/\*\*[^*]+\*\*/g) ?? [];
  assert.deepEqual(
    [...links, ...bold],
    [],
    "llms-full.txt is a plain-text surface — run `npm run generate:llms` after changing seeded copy"
  );
});

// ---------------------------------------------------------------------------
// The plain-text field contract
//
// PageBody renders most authored fields through RichText, but a handful are
// label-shaped and deliberately printed raw: block headings (which also feed an
// aria-label and an sr-only <caption>, where JSX is structurally impossible),
// table header cells, and price tier labels/values. FAQ questions are the same
// case — FaqSection prints `{f.q}` inside <summary>.
//
// lib/glossary-content.test.ts already enforces this for glossary terms. The
// same fields exist in marketing-pages and solutions and were unguarded, which
// is what made an audit flag PageBody:90 as a leak: the render is correct, but
// nothing stopped an author putting markup there.
// ---------------------------------------------------------------------------

test("fields the renderer prints raw contain no inline markup", () => {
  const hasMarkup = (s: string) => /\]\(\/|\*\*/.test(s);
  const raw: string[] = [];
  const check = (where: string, text?: string | null) => {
    if (text && hasMarkup(text)) raw.push(`${where}: ${text.slice(0, 60)}…`);
  };

  const dir = join(process.cwd(), "prisma/seed-data");
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    const src = readFileSync(join(dir, file), "utf8");

    // Field-name-scoped scan: only the keys whose renderers print raw. Reading
    // the source rather than importing keeps this independent of each seed
    // file's export shape, which differs across the five content types.
    for (const key of ["heading", "label", "range", "q"]) {
      const re = new RegExp(`\b${key}:\s*"((?:[^"\\\n]|\\.)*)"`, "g");
      for (const m of src.matchAll(re)) check(`${file} ${key}`, m[1]);
    }
    // table `headers: ["", "A", "B"]` — one array literal per line.
    for (const m of src.matchAll(/\bheaders:\s*\[([^\]]*)\]/g)) {
      for (const cell of m[1].matchAll(/"((?:[^"\\n]|\.)*)"/g)) {
        check(`${file} table.header`, cell[1]);
      }
    }
  }

  assert.deepEqual(
    raw,
    [],
    "these fields render as plain text — move the link into a paragraph, or wrap " +
      `the field in RichText at its render site:\n${raw.join("\n")}`
  );
});
