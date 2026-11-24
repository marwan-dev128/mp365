import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { TIER_PAGES } from "../content/tiers";
import type { TierPage } from "../content/tiers/types";
import { PAGE_CONTENT } from "../content/pages";
import { inlineTokenPattern, stripInlineMarkup } from "./richtext";
import { bannedHits, OUT_OF_SCOPE, pageLinks } from "./site-content-rules";
import { LIVE_PATHS } from "./site-data";

// The tier comparison pages follow the same copy rules as every plan page.

const words = (s: string) => stripInlineMarkup(s).trim().split(/\s+/).filter(Boolean).length;
const norm = (s: string) => stripInlineMarkup(s).toLowerCase();
const BLOG = new Set(
  readdirSync(join(process.cwd(), "prisma/seed-data/blog-posts"))
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => `/blog/${f.replace(/\.ts$/, "")}/`),
);

/** Every string on the page except Microsoft's quotes and source links. */
function copy(p: TierPage): string[] {
  const { tiers, sources, priceHref, breadcrumbs, ...rest } = p;
  void sources;
  void priceHref;
  void breadcrumbs;
  const strings: string[] = [];
  const walk = (v: unknown) => {
    if (typeof v === "string") strings.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  walk(rest);
  walk(tiers.map(({ quote, ...t }) => (void quote, t)));
  return strings;
}

for (const p of TIER_PAGES) {
  test(`${p.path} follows the copy rules`, () => {
    const errs: string[] = [];
    const ok = (c: unknown, m: string) => c || errs.push(m);
    const kw = p.primaryKeyword;
    ok(p.title.length <= 60, `title is ${p.title.length} chars`);
    ok(p.description.length >= 120 && p.description.length <= 155, `description is ${p.description.length} chars`);
    ok(words(p.h1) <= 10, "h1 over 10 words");
    ok(norm(p.h1).includes(kw), "h1 lacks the primary keyword");
    ok(norm(p.intro).includes(kw), "intro lacks the primary keyword");
    ok(norm(p.closing).includes(kw), "closing lacks the primary keyword");
    const sentences = stripInlineMarkup(p.intro).split(/(?<=[.?!])\s+/).filter(Boolean);
    ok(sentences.length <= 3, `intro has ${sentences.length} sentences`);
    ok(p.faqs.length >= 6 && p.faqs.length <= 10, `${p.faqs.length} FAQs`);
    for (const f of p.faqs) {
      const n = words(f.a);
      ok(n >= 30 && n <= 75, `FAQ answer is ${n} words: "${f.q}"`);
      ok(f.q.endsWith("?"), `FAQ question needs ?: "${f.q}"`);
    }
    for (const t of p.tiers) ok(p.matrix.groups.every((g) => g.rows.every((r) => r.cells.length === p.tiers.length)), `${t.id}: matrix row width`);
    for (const q of p.finder.questions) {
      for (const o of q.options) ok(o.needs >= 0 && o.needs < p.tiers.length, `${q.id}: tier index out of range`);
      ok(q.options.some((o) => o.needs === 0), `${q.id}: no answer fits the entry tier`);
    }
    const text = copy(p);
    for (const s of text) errs.push(...bannedHits(s));
    for (const t of p.tiers) errs.push(...bannedHits(t.quote, [OUT_OF_SCOPE]));
    const hrefs = [
      ...text.flatMap((s) => [...s.matchAll(inlineTokenPattern())].map((m) => m[2]).filter(Boolean)),
      ...p.setup.cards.map((c) => c.href),
      ...p.related.links.map((l) => l.href),
    ];
    for (const h of hrefs) ok(LIVE_PATHS.has(h) || BLOG.has(h), `link to ${h}, which is not live`);
    for (const s of p.sources) ok(s.href.startsWith("https://"), `source ${s.label} is not https`);
    assert.deepEqual(errs, []);
  });
}

test("each tier page receives links from its service page", () => {
  const into = (path: string) => PAGE_CONTENT.filter((pc) => pageLinks(pc).includes(path)).map((pc) => pc.path);
  for (const p of TIER_PAGES) {
    const parent = p.breadcrumbs[p.breadcrumbs.length - 2].path;
    assert.ok(into(p.path).includes(parent), `${parent} does not link to ${p.path}`);
  }
});
