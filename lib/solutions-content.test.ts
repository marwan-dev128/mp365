import { test } from "node:test";
import assert from "node:assert/strict";
import { solutions } from "../prisma/seed-data/solutions";
import { glossaryTerms } from "../prisma/seed-data/glossary";
import { services } from "../prisma/seed-data/services";
import { marketingPages } from "../prisma/seed-data/marketing-pages";
import type { MarketingBlock } from "./marketing-blocks";
import { inlineTokenPattern, stripInlineMarkup } from "./richtext";

// Solution pages are the commercial landing pages. They were 266-347 words
// each with a single 30-word section; these checks keep them from silently
// decaying back, and guard the failure modes that actually shipped before:
// markup rendered raw, links to pages that don't exist, and self-cannibalizing
// duplication of the /compare/ and /pricing/ hubs.

const hasMarkup = (s: string) => inlineTokenPattern().test(s);
const words = (s: string) => stripInlineMarkup(s).trim().split(/\s+/).length;

const SERVICE_SLUGS = new Set(services.map((s) => s.slug));
const TERM_SLUGS = new Set(glossaryTerms.map((t) => t.slug));
const SOLUTION_SLUGS = new Set(solutions.map((s) => s.slug));
const PUBLISHED_MARKETING = new Set(
  marketingPages.filter((p) => p.published !== false).map((p) => `/${p.hub}/${p.slug}/`)
);

const STATIC_PAGES = new Set([
  "/", "/about/", "/contact/", "/services/", "/solutions/", "/industries/",
  "/case-studies/", "/blog/", "/resources/", "/resources/glossary/",
  "/microsoft-consultant-connecticut/",
  "/industries/manufacturing/", "/industries/healthcare/", "/industries/retail/",
]);

const linkTargets = new Set<string>([
  ...STATIC_PAGES,
  ...PUBLISHED_MARKETING,
  ...[...SERVICE_SLUGS].map((s) => `/services/${s}/`),
  ...[...TERM_SLUGS].map((s) => `/resources/glossary/${s}/`),
  ...[...SOLUTION_SLUGS].map((s) => `/solutions/${s}/`),
]);

function bodyWords(s: (typeof solutions)[number]): number {
  const blocks = (s.blocks ?? []) as MarketingBlock[];
  return (
    s.intro.reduce((a, p) => a + words(p), 0) +
    blocks.reduce((a, b) => {
      switch (b.type) {
        case "prose": return a + b.paragraphs.reduce((x, p) => x + words(p), 0);
        case "list": return a + b.items.reduce((x, p) => x + words(p), 0);
        case "steps": return a + b.steps.reduce((x, st) => x + words(st.name) + words(st.description), 0);
        case "table": return a + b.rows.flat().reduce((x, c) => x + words(c), 0);
        default: return a;
      }
    }, 0) +
    (s.faqs ?? []).reduce((a, f) => a + words(f.q) + words(f.a), 0)
  );
}

test("every solution carries real depth, not a stub", () => {
  for (const s of solutions) {
    const n = bodyWords(s);
    assert.ok(n >= 1500, `${s.slug}: only ${n} words — this is the thin-content failure again`);
    assert.ok((s.blocks?.length ?? 0) >= 5, `${s.slug}: ${s.blocks?.length ?? 0} blocks, want >= 5`);
    assert.ok((s.faqs?.length ?? 0) >= 6, `${s.slug}: ${s.faqs?.length ?? 0} FAQs, want >= 6`);
    const types = new Set((s.blocks ?? []).map((b) => b.type));
    assert.ok(types.has("table"), `${s.slug}: no comparison table`);
    assert.ok(types.has("steps"), `${s.slug}: no process steps`);
  }
});

test("heroAnswer stands alone as a quotable answer", () => {
  for (const s of solutions) {
    const n = words(s.heroAnswer);
    assert.ok(n >= 40 && n <= 80, `${s.slug}: heroAnswer is ${n} words, want 40-80`);
    // Reused verbatim as an answer-engine snippet, so it must carry no syntax.
    assert.ok(!hasMarkup(s.heroAnswer), `${s.slug}: markup in heroAnswer`);
    assert.ok(!/&amp;|&lt;|&gt;/.test(s.heroAnswer), `${s.slug}: HTML entity in heroAnswer`);
  }
});

test("titles and descriptions fit the SERP", () => {
  for (const s of solutions) {
    assert.ok(s.metaTitle.length <= 60, `${s.slug}: metaTitle ${s.metaTitle.length} chars`);
    assert.ok(
      s.metaDescription.length >= 120 && s.metaDescription.length <= 170,
      `${s.slug}: metaDescription ${s.metaDescription.length} chars, want 120-170`
    );
    for (const [field, v] of Object.entries({ name: s.name, metaTitle: s.metaTitle, metaDescription: s.metaDescription })) {
      assert.ok(!/&amp;|&lt;|&gt;/.test(v), `${s.slug}: HTML entity in ${field} — "${v}"`);
    }
  }
});

test("every internal link resolves, and no page links to itself", () => {
  for (const s of solutions) {
    const self = `/solutions/${s.slug}/`;
    for (const m of JSON.stringify(s).matchAll(inlineTokenPattern())) {
      const href = m[2];
      if (!href) continue;
      assert.ok(linkTargets.has(href), `${s.slug}: links to "${href}", which is not a real page`);
      assert.notEqual(href, self, `${s.slug}: links to its own URL`);
    }
    for (const slug of s.relatedServiceSlugs ?? [])
      assert.ok(SERVICE_SLUGS.has(slug), `${s.slug}: relatedServiceSlug "${slug}" has no service`);
    for (const slug of s.relatedTermSlugs ?? [])
      assert.ok(TERM_SLUGS.has(slug), `${s.slug}: relatedTermSlug "${slug}" has no glossary term`);
    for (const ref of s.relatedPageRefs ?? []) {
      const isSibling = SOLUTION_SLUGS.has(ref.replace(/^\/solutions\//, "").replace(/\/$/, ""));
      assert.ok(
        PUBLISHED_MARKETING.has(ref) || isSibling,
        `${s.slug}: relatedPageRef "${ref}" is neither a published marketing page nor a sibling solution`
      );
      assert.notEqual(ref, self, `${s.slug}: relatedPageRef points at itself`);
    }
  }
});

// components/marketing/PageBody.tsx renders these fields as plain strings.
test("inline markup only appears where the renderer parses it", () => {
  const raw: string[] = [];
  for (const s of solutions) {
    for (const b of (s.blocks ?? []) as MarketingBlock[]) {
      if (b.heading && hasMarkup(b.heading)) raw.push(`${s.slug} ${b.type}.heading`);
      if (b.type === "steps") for (const st of b.steps) if (hasMarkup(st.name)) raw.push(`${s.slug} steps[].name`);
      if (b.type === "table") for (const h of b.headers) if (hasMarkup(h)) raw.push(`${s.slug} table.header`);
    }
    for (const f of s.faqs ?? []) if (hasMarkup(f.q)) raw.push(`${s.slug} faq.q`);
  }
  assert.deepEqual(raw, [], `markup in fields that render raw:\n${raw.join("\n")}`);
});

test("no price-range block: pricing belongs on the /pricing/ hub", () => {
  // The ranges on /pricing/ are explicitly labelled illustrative. Restating
  // them here would drop that framing and read as a quote.
  for (const s of solutions) {
    for (const b of (s.blocks ?? []) as MarketingBlock[]) {
      assert.notEqual(b.type, "price-range", `${s.slug}: price-range block belongs on /pricing/`);
    }
  }
});

test("no fabricated authority", () => {
  const BANNED = [
    /\b\d+(\.\d+)?\s*(out of|\/)\s*5\b/i,
    /\b\d+\+?\s+(reviews|clients|customers) served\b/i,
    /\b(OTIS|Carlisle|Hunter Panels)\b/,
  ];
  for (const s of solutions) {
    const blob = JSON.stringify(s);
    for (const re of BANNED) assert.ok(!re.test(blob), `${s.slug}: matched ${re}`);
  }
});
