import { test } from "node:test";
import assert from "node:assert/strict";
import { glossaryTerms } from "../prisma/seed-data/glossary";
import type { MarketingBlock } from "./marketing-blocks";
import { stripInlineMarkup, inlineTokenPattern } from "./richtext";

// These entries are the site's answer-engine surface: each one is a standalone
// reference page, and the whole point of rewriting them was depth plus
// accuracy. The checks below are the properties that silently degrade — a
// stale cross-link, markup authored into a field the renderer prints raw, a
// definition that stopped being self-contained.

const hasMarkup = (s: string) => inlineTokenPattern().test(s);
const words = (s: string) => stripInlineMarkup(s).trim().split(/\s+/).length;

const SLUGS = new Set(glossaryTerms.map((t) => t.slug));

test("every term has the fields a reference page needs", () => {
  for (const t of glossaryTerms) {
    assert.ok(t.sections?.length, `${t.slug}: no sections`);
    assert.ok((t.faqs?.length ?? 0) >= 2, `${t.slug}: fewer than 2 FAQs`);
    assert.ok((t.aliases?.length ?? 0) >= 3, `${t.slug}: fewer than 3 aliases`);
    assert.ok(t.relatedServiceSlugs.length > 0, `${t.slug}: no related service`);
  }
});

test("shortDefinition is a self-contained 40-70 word answer", () => {
  for (const t of glossaryTerms) {
    const n = words(t.shortDefinition);
    assert.ok(n >= 40 && n <= 70, `${t.slug}: shortDefinition is ${n} words, want 40-70`);
    // It is quoted standalone by answer engines and reused verbatim as the
    // meta description, so it must not carry link syntax or start mid-thought.
    assert.ok(!hasMarkup(t.shortDefinition), `${t.slug}: markup in shortDefinition`);
    assert.ok(
      /^(A |An |The |[A-Z])/.test(t.shortDefinition),
      `${t.slug}: shortDefinition doesn't open as a sentence`
    );
  }
});

test("cross-links point at terms that exist and never at self", () => {
  for (const t of glossaryTerms) {
    for (const rel of t.relatedTermSlugs ?? []) {
      assert.ok(SLUGS.has(rel), `${t.slug}: relatedTermSlug "${rel}" has no entry`);
      assert.notEqual(rel, t.slug, `${t.slug}: links to itself`);
    }
    for (const m of JSON.stringify(t).matchAll(inlineTokenPattern())) {
      const href = m[2];
      if (!href?.startsWith("/resources/glossary/")) continue;
      const slug = href.replace("/resources/glossary/", "").replace(/\/$/, "");
      assert.ok(slug === "" || SLUGS.has(slug), `${t.slug}: body links to missing term "${slug}"`);
      assert.notEqual(slug, t.slug, `${t.slug}: body links to its own page`);
    }
  }
});

// components/marketing/PageBody.tsx renders these through <RichText>; anything
// NOT in this list is printed as a raw string, so markup authored there would
// show up on the page as literal "**bold**". This is the exact bug that once
// shipped to three live blog posts.
test("inline markup only appears in fields the renderer parses", () => {
  const raw: string[] = [];
  const check = (where: string, text: string) => {
    if (hasMarkup(text)) raw.push(`${where}: ${text.slice(0, 60)}…`);
  };

  for (const t of glossaryTerms) {
    for (const block of (t.sections ?? []) as MarketingBlock[]) {
      if (block.heading) check(`${t.slug} ${block.type}.heading`, block.heading);
      switch (block.type) {
        case "steps":
          for (const s of block.steps) check(`${t.slug} steps.name`, s.name);
          break;
        case "table":
          for (const h of block.headers) check(`${t.slug} table.header`, h);
          break;
        case "price-range":
          for (const tier of block.tiers) check(`${t.slug} price.label`, tier.label);
          break;
      }
    }
    // FAQ questions render as the <summary> text, unparsed.
    for (const f of t.faqs ?? []) check(`${t.slug} faq.q`, f.q);
  }

  assert.deepEqual(raw, [], `markup in fields that render raw:\n${raw.join("\n")}`);
});

test("every term has a primary service, and all three index groups are filled", () => {
  // The index groups by the FIRST related service's category. If a category
  // ends up empty the whole section disappears from the page, which is how
  // "Data governance & compliance" silently vanished once already.
  const CATEGORY: Record<string, string> = {
    "ma-tenant-migration": "Migration",
    "microsoft-365-migration": "Migration",
    "data-governance": "Governance",
    "power-platform": "BusinessApplications",
    "dynamics-365": "BusinessApplications",
    "application-modernization": "Modernization",
    "collaboration-enablement": "Modernization",
    "contract-management": "BusinessApplications",
  };
  const counts: Record<string, number> = {};
  for (const t of glossaryTerms) {
    const primary = t.relatedServiceSlugs[0];
    assert.ok(primary, `${t.slug}: no primary service`);
    const cat = CATEGORY[primary];
    assert.ok(cat, `${t.slug}: primary service "${primary}" is not a known service`);
    counts[cat] = (counts[cat] ?? 0) + 1;
  }
  for (const cat of ["Migration", "Governance", "BusinessApplications"]) {
    assert.ok(counts[cat] > 0, `index group "${cat}" would render empty (counts: ${JSON.stringify(counts)})`);
  }
});

test("no fabricated authority: no invented ratings, counts, or client names", () => {
  // MP365 has no review data and no permission to name clients. Anything that
  // reads as a metric has to come from the user, not from us.
  const BANNED = [
    /\b\d+(\.\d+)?\s*(out of|\/)\s*5\b/i,
    /\b\d+\+?\s+(reviews|clients|customers) served\b/i,
    /\b(OTIS|Carlisle|Hunter Panels)\b/,
  ];
  for (const t of glossaryTerms) {
    const blob = JSON.stringify(t);
    for (const re of BANNED) {
      assert.ok(!re.test(blob), `${t.slug}: matched banned pattern ${re}`);
    }
  }
});
