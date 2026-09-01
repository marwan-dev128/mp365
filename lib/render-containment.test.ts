import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

// Render-site containment.
//
// lib/markup-containment.test.ts already proves the HELPERS are correct:
// buildMetadata strips, every JSON-LD builder strips, excerpt() strips before
// it truncates, and llms-full.txt comes out clean. What nothing tested is
// whether the ~60 .tsx render sites actually CALL them. Every leak found in
// the audit was of that shape — a correct helper sitting one line away from a
// field interpolated straight into JSX.
//
// So this file inspects the SOURCE of app/ and components/ rather than any
// runtime value. It is a lint rule expressed as a test, which is the cheapest
// place to put it in a repo with no custom ESLint plugin.

const ROOTS = ["app", "components"];

/** Fields authored in the DB that carry the lib/richtext.ts inline markup. */
const AUTHORED = [
  "heroAnswer",
  "intro",
  "summary",
  "problem",
  "approach",
  "result",
  "challenges",
  "shortDefinition",
  "expansion",
  "excerpt",
  "tagline",
  "disclaimer",
  "paragraphs",
  "metaDescription",
];

/**
 * Authored copy whose property name is too generic to match on its own
 * (`description` is also a hardcoded nav prop; `note` is also a UI label), so
 * these are matched as whole member expressions instead.
 */
const AUTHORED_PATHS = ["settings\\.description", "step\\.description", "tier\\.note", "block\\.disclaimer"];

/** Calls that flatten their argument. A field inside one is already safe. */
const SAFE_CALLS = ["stripInlineMarkup(", "excerpt(", "plain(", "slugifyHeading("];

function sourceFiles(): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.tsx?$/.test(entry.name) && !entry.name.endsWith(".test.ts")) out.push(full);
    }
  };
  for (const root of ROOTS) walk(join(process.cwd(), root));
  return out.sort();
}

const rel = (file: string) => relative(process.cwd(), file).replace(/\\/g, "/");
const lineOf = (src: string, at: number) => src.slice(0, at).split("\n").length;

/** Blanks out comments so a JSDoc naming a field is not read as a render site. */
function stripComments(src: string): string {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/\/\/[^\n]*/g, (m) => " ".repeat(m.length));
}

/** [start, end) of every argument list opened by one of `prefixes`. */
function callRanges(src: string, prefixes: RegExp): [number, number][] {
  const ranges: [number, number][] = [];
  for (const m of src.matchAll(prefixes)) {
    let depth = 1;
    let i = m.index! + m[0].length;
    while (i < src.length && depth > 0) {
      if (src[i] === "(") depth++;
      else if (src[i] === ")") depth--;
      i++;
    }
    ranges.push([m.index!, i]);
  }
  return ranges;
}

/** [start, end) of every `<RichText ... />` element. */
function richTextRanges(src: string): [number, number][] {
  const ranges: [number, number][] = [];
  for (const m of src.matchAll(/<RichText\b/g)) {
    const end = src.indexOf("/>", m.index!);
    ranges.push([m.index!, end === -1 ? m.index! + 1 : end + 2]);
  }
  return ranges;
}

/**
 * Regions where authored copy is already handled: rendered by the parser, or
 * passed to a builder that strips internally. buildMetadata() and the
 * *Schema() builders are proven field-by-field in markup-containment.test.ts,
 * so their argument lists are not render sites.
 */
function safeRanges(src: string): [number, number][] {
  return [
    ...richTextRanges(src),
    ...callRanges(src, /\b(?:stripInlineMarkup|excerpt|plain|slugifyHeading)\(/g),
    ...callRanges(src, /\b(?:buildMetadata|[a-zA-Z]+Schema)\(/g),
    // Props whose receiving component parses the value. Adding to this list is
    // a deliberate decision: it asserts that component renders through
    // <RichText>. `answerText` is components/PageHero.tsx, which does.
    ...[...src.matchAll(/\banswerText=\{[^{}]*\}/g)].map(
      (m) => [m.index!, m.index! + m[0].length] as [number, number]
    ),
  ];
}

const inRange = (ranges: [number, number][], at: number) =>
  ranges.some(([s, e]) => at >= s && at < e);

/** The `(...)` body of the call that starts at `open`. */
function bodyOf(src: string, open: number): string {
  let depth = 1;
  let i = open + 1;
  while (i < src.length && depth > 0) {
    if (src[i] === "(") depth++;
    else if (src[i] === ")") depth--;
    i++;
  }
  return src.slice(open + 1, i - 1);
}

/**
 * Decides whether one reference to an authored field is a leak.
 *
 * `.length`, `.join()` and a `&&` guard consume the value structurally and
 * never render it. `.map(` DOES render it, one element at a time, so the leak
 * is in the callback body rather than at the accessor — recurse into it.
 * `.slice(` is left to the truncation test below, which reports it better.
 */
function isLeak(src: string, after: number): boolean {
  const rest = src.slice(after);
  if (/^\s*\??\.(length|join|filter|some|every|find|entries|forEach|flatMap)\b/.test(rest)) return false;
  if (/^\s*(&&|\|\||\?[^.])/.test(rest)) return false;
  if (/^\s*\??\.(slice|substring|substr)\s*\(/.test(rest)) return false;

  const map = /^\s*\??\.map\s*\(/.exec(rest);
  if (map) {
    const body = bodyOf(src, after + map[0].length - 1);
    return !(body.includes("<RichText") || SAFE_CALLS.some((c) => body.includes(c)));
  }
  return true;
}

const AUTHORED_RE = new RegExp(
  `\\.(?:${AUTHORED.join("|")})\\b|\\b(?:${AUTHORED_PATHS.join("|")})\\b`,
  "g"
);

test("no authored field reaches JSX without RichText or a flattener", () => {
  const leaks: string[] = [];
  for (const file of sourceFiles()) {
    const src = stripComments(readFileSync(file, "utf8"));
    const safe = safeRanges(src);
    for (const m of src.matchAll(AUTHORED_RE)) {
      if (inRange(safe, m.index!)) continue;
      if (!isLeak(src, m.index! + m[0].length)) continue;
      leaks.push(`${rel(file)}:${lineOf(src, m.index!)} — ${m[0]}`);
    }
  }
  assert.deepEqual(
    leaks,
    [],
    `authored copy rendered without <RichText> / stripInlineMarkup():\n${leaks.join("\n")}`
  );
});

// ---------------------------------------------------------------------------
// Plain-text DOM attributes — where RichText is structurally impossible
// ---------------------------------------------------------------------------

const TEXT_ATTRS = ["aria-label", "alt", "title", "placeholder", "aria-description"];

test("authored copy never reaches a plain-text DOM attribute raw", () => {
  // An attribute value is a string, so a JSX element cannot go there —
  // stripInlineMarkup is the only available guard. Forgetting it reads
  // "Copy link to section: star star Cost star star of bracket switching"
  // aloud to a screen-reader user.
  const attrRe = new RegExp(`(?:${TEXT_ATTRS.join("|")})=\\{((?:[^{}]|\\$\\{[^{}]*\\})*)\\}`, "g");
  const fieldRe = new RegExp(`${AUTHORED_RE.source}|\\bheading\\b`);

  const leaks: string[] = [];
  for (const file of sourceFiles()) {
    const src = stripComments(readFileSync(file, "utf8"));
    for (const m of src.matchAll(attrRe)) {
      const expr = m[1];
      if (!fieldRe.test(expr)) continue;
      if (SAFE_CALLS.some((c) => expr.includes(c))) continue;
      leaks.push(`${rel(file)}:${lineOf(src, m.index!)} — ${m[0].slice(0, 90)}`);
    }
  }
  assert.deepEqual(
    leaks,
    [],
    `authored copy in a plain-text attribute — wrap in stripInlineMarkup():\n${leaks.join("\n")}`
  );
});

// ---------------------------------------------------------------------------
// Truncation order
// ---------------------------------------------------------------------------

test("authored copy is never truncated before it is stripped", () => {
  // `text.slice(0, 130)` on the raw string can sever a link token and publish
  // "see [what actually drives cos…". excerpt() is the strip-then-truncate
  // helper and is the only sanctioned way to shorten authored copy.
  const re = new RegExp(
    `\\.(?:${AUTHORED.join("|")})(?:\\[[^\\]]*\\])?\\s*\\.(?:slice|substring|substr)\\(`,
    "g"
  );
  const leaks: string[] = [];
  for (const file of sourceFiles()) {
    const src = stripComments(readFileSync(file, "utf8"));
    for (const m of src.matchAll(re)) {
      leaks.push(`${rel(file)}:${lineOf(src, m.index!)} — ${m[0]}`);
    }
  }
  assert.deepEqual(
    leaks,
    [],
    `authored copy truncated before stripping — use excerpt(text, n):\n${leaks.join("\n")}`
  );
});
