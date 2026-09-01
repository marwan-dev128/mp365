import { test } from "node:test";
import assert from "node:assert/strict";
import { industries } from "../prisma/seed-data/industries";
import { solutions } from "../prisma/seed-data/solutions";
import { glossaryTerms } from "../prisma/seed-data/glossary";
import { services } from "../prisma/seed-data/services";
import { marketingPages } from "../prisma/seed-data/marketing-pages";
import type { MarketingBlock } from "./marketing-blocks";
import { inlineTokenPattern, stripInlineMarkup } from "./richtext";

// Industry pages were the last stub page type on the site: ~150 words each,
// an intro paragraph plus a four-bullet list, while every sibling page type
// carried structured depth. These checks hold them to the same bar as
// lib/solutions-content.test.ts and stop them decaying back.

const hasMarkup = (s: string) => inlineTokenPattern().test(s);
const words = (s: string) => stripInlineMarkup(s).trim().split(/\s+/).length;

const SERVICE_SLUGS = new Set(services.map((s) => s.slug));
const TERM_SLUGS = new Set(glossaryTerms.map((t) => t.slug));
const SOLUTION_SLUGS = new Set(solutions.map((s) => s.slug));
const INDUSTRY_SLUGS = new Set(industries.map((i) => i.slug));
const PUBLISHED_MARKETING = new Set(
  marketingPages.filter((p) => p.published !== false).map((p) => `/${p.hub}/${p.slug}/`)
);

const STATIC_PAGES = new Set([
  "/", "/about/", "/contact/", "/services/", "/solutions/", "/industries/",
  "/case-studies/", "/blog/", "/resources/", "/resources/glossary/",
  "/microsoft-consultant-connecticut/",
]);

const linkTargets = new Set<string>([
  ...STATIC_PAGES,
  ...PUBLISHED_MARKETING,
  ...[...SERVICE_SLUGS].map((s) => `/services/${s}/`),
  ...[...TERM_SLUGS].map((s) => `/resources/glossary/${s}/`),
  ...[...SOLUTION_SLUGS].map((s) => `/solutions/${s}/`),
  ...[...INDUSTRY_SLUGS].map((s) => `/industries/${s}/`),
]);

function bodyWords(i: (typeof industries)[number]): number {
  const blocks = (i.blocks ?? []) as MarketingBlock[];
  return (
    i.intro.reduce((a, p) => a + words(p), 0) +
    i.challenges.reduce((a, c) => a + words(c), 0) +
    blocks.reduce((a, b) => {
      switch (b.type) {
        case "prose": return a + b.paragraphs.reduce((x, p) => x + words(p), 0);
        case "list": return a + b.items.reduce((x, p) => x + words(p), 0);
        case "steps": return a + b.steps.reduce((x, st) => x + words(st.name) + words(st.description), 0);
        case "table": return a + b.rows.flat().reduce((x, c) => x + words(c), 0);
        default: return a;
      }
    }, 0) +
    (i.faqs ?? []).reduce((a, f) => a + words(f.q) + words(f.a), 0)
  );
}

test("every industry carries real depth, not a stub", () => {
  for (const i of industries) {
    const n = bodyWords(i);
    assert.ok(n >= 1500, `${i.slug}: only ${n} words — this is the thin-content failure again`);
    assert.ok((i.blocks?.length ?? 0) >= 5, `${i.slug}: ${i.blocks?.length ?? 0} blocks, want >= 5`);
    assert.ok((i.faqs?.length ?? 0) >= 6, `${i.slug}: ${i.faqs?.length ?? 0} FAQs, want >= 6`);
    assert.ok(i.challenges.length >= 5, `${i.slug}: ${i.challenges.length} challenges, want >= 5`);
    const types = new Set((i.blocks ?? []).map((b) => b.type));
    assert.ok(types.has("table"), `${i.slug}: no decision table`);
    assert.ok(types.has("steps"), `${i.slug}: no process steps`);
  }
});

test("heroAnswer stands alone as a quotable answer", () => {
  for (const i of industries) {
    const n = words(i.heroAnswer);
    assert.ok(n >= 40 && n <= 80, `${i.slug}: heroAnswer is ${n} words, want 40-80`);
    assert.ok(!hasMarkup(i.heroAnswer), `${i.slug}: markup in heroAnswer`);
    assert.ok(!/&amp;|&lt;|&gt;/.test(i.heroAnswer), `${i.slug}: HTML entity in heroAnswer`);
  }
});

test("titles and descriptions fit the SERP", () => {
  for (const i of industries) {
    assert.ok(i.metaTitle.length <= 60, `${i.slug}: metaTitle ${i.metaTitle.length} chars`);
    assert.ok(
      i.metaDescription.length >= 120 && i.metaDescription.length <= 170,
      `${i.slug}: metaDescription ${i.metaDescription.length} chars, want 120-170`
    );
    for (const [field, v] of Object.entries({
      name: i.name, metaTitle: i.metaTitle, metaDescription: i.metaDescription,
    })) {
      assert.ok(!/&amp;|&lt;|&gt;/.test(v), `${i.slug}: HTML entity in ${field} — "${v}"`);
    }
  }
});

test("every internal link resolves, and no page links to itself", () => {
  for (const i of industries) {
    const self = `/industries/${i.slug}/`;
    for (const m of JSON.stringify(i).matchAll(inlineTokenPattern())) {
      const href = m[2];
      if (!href) continue;
      assert.ok(linkTargets.has(href), `${i.slug}: links to "${href}", which is not a real page`);
      assert.notEqual(href, self, `${i.slug}: links to its own URL`);
    }
    for (const slug of i.relatedServiceSlugs ?? [])
      assert.ok(SERVICE_SLUGS.has(slug), `${i.slug}: relatedServiceSlug "${slug}" has no service`);
    for (const slug of i.relatedTermSlugs ?? [])
      assert.ok(TERM_SLUGS.has(slug), `${i.slug}: relatedTermSlug "${slug}" has no glossary term`);
    for (const ref of i.relatedPageRefs ?? []) {
      const isSolution = SOLUTION_SLUGS.has(ref.replace(/^\/solutions\//, "").replace(/\/$/, ""));
      assert.ok(
        PUBLISHED_MARKETING.has(ref) || isSolution,
        `${i.slug}: relatedPageRef "${ref}" is neither a published marketing page nor a solution`
      );
      assert.notEqual(ref, self, `${i.slug}: relatedPageRef points at itself`);
    }
  }
});

// components/marketing/PageBody.tsx renders these fields as plain strings.
test("inline markup only appears where the renderer parses it", () => {
  const raw: string[] = [];
  for (const i of industries) {
    for (const b of (i.blocks ?? []) as MarketingBlock[]) {
      if (b.heading && hasMarkup(b.heading)) raw.push(`${i.slug} ${b.type}.heading`);
      if (b.type === "steps") for (const st of b.steps) if (hasMarkup(st.name)) raw.push(`${i.slug} steps[].name`);
      if (b.type === "table") for (const h of b.headers) if (hasMarkup(h)) raw.push(`${i.slug} table.header`);
    }
    for (const f of i.faqs ?? []) if (hasMarkup(f.q)) raw.push(`${i.slug} faq.q`);
  }
  assert.deepEqual(raw, [], `markup in fields that render raw:\n${raw.join("\n")}`);
});

test("no price-range block: pricing belongs on the /pricing/ hub", () => {
  for (const i of industries) {
    for (const b of (i.blocks ?? []) as MarketingBlock[]) {
      assert.notEqual(b.type, "price-range", `${i.slug}: price-range block belongs on /pricing/`);
    }
  }
});

test("no fabricated authority", () => {
  const BANNED = [
    /\b\d+(\.\d+)?\s*(out of|\/)\s*5\b/i,
    /\b\d+\+?\s+(reviews|clients|customers) served\b/i,
    /\b(OTIS|Carlisle|Hunter Panels)\b/,
    // MP365 holds no published partner designation or attestation. Claiming one
    // on an industry page is the highest-risk fabrication for this page type,
    // because compliance buyers read it as a warranty.
    /\bMicrosoft (Solutions )?Partner\b.*\b(designation|tier|gold|silver)\b/i,
    /\bMP365 is (SOC ?2|ISO ?27001|HITRUST|FedRAMP|HIPAA)[- ]?(certified|compliant|attested)/i,
  ];
  for (const i of industries) {
    const blob = JSON.stringify(i);
    for (const re of BANNED) assert.ok(!re.test(blob), `${i.slug}: matched ${re}`);
  }
});

test("each industry links out to the services that do the work", () => {
  // An industry page that names problems but routes nowhere is a dead end for
  // both the reader and internal link equity.
  for (const i of industries) {
    assert.ok(
      (i.relatedServiceSlugs?.length ?? 0) >= 2,
      `${i.slug}: ${i.relatedServiceSlugs?.length ?? 0} related services, want >= 2`
    );
    const links = [...JSON.stringify(i).matchAll(inlineTokenPattern())]
      .map((m) => m[2])
      .filter(Boolean);
    assert.ok(links.length >= 6, `${i.slug}: only ${links.length} inline links in the body, want >= 6`);
  }
});
