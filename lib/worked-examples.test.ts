import { test } from "node:test";
import assert from "node:assert/strict";
import { workedExamples } from "../prisma/seed-data/worked-examples";
import { caseStudies } from "../prisma/seed-data/case-studies";
import { services } from "../prisma/seed-data/services";
import { glossaryTerms } from "../prisma/seed-data/glossary";
import { solutions } from "../prisma/seed-data/solutions";
import { industries } from "../prisma/seed-data/industries";
import { marketingPages } from "../prisma/seed-data/marketing-pages";
import { inlineTokenPattern, stripInlineMarkup } from "./richtext";

// Worked examples are illustrative scenarios published in place of client
// case studies that are still awaiting approval. The whole value of the
// section rests on the reader never mistaking one for the other, so these
// checks encode the line: no client, no invented outcome, no figure the site
// does not already publish, and a label that survives every surface.

const words = (s: string) => stripInlineMarkup(s).trim().split(/\s+/).length;
const blob = (e: (typeof workedExamples)[number]) => JSON.stringify(e);

test("every worked example is explicitly a WORKED_EXAMPLE and ships published", () => {
  assert.ok(workedExamples.length >= 3, "expected at least three worked examples");
  for (const e of workedExamples) {
    assert.equal(e.kind, "WORKED_EXAMPLE", `${e.slug}: kind must be WORKED_EXAMPLE`);
    assert.equal(e.published, true, `${e.slug}: worked examples are the published stand-in`);
    assert.match(e.metaTitle, /^Worked Example:/, `${e.slug}: metaTitle must lead with "Worked Example:"`);
    assert.match(e.summary, /illustrative scenario/i, `${e.slug}: summary must say it is illustrative`);
  }
});

test("no worked example names an organization, quotes a person, or carries metrics", () => {
  const CLIENT_NAMES = [
    ...caseStudies.map((c) => c.client),
    /\b(OTIS|Carlisle|Hunter Panels|Blue Buffalo|Intellinet|Post University|Spyglass|State of Connecticut)\b/i,
  ];
  for (const e of workedExamples) {
    const text = blob(e);
    for (const name of CLIENT_NAMES) {
      const re = name instanceof RegExp ? name : new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      assert.ok(!re.test(text), `${e.slug}: names a real client (${name})`);
    }
    assert.deepEqual(e.metrics, [], `${e.slug}: worked examples carry no metrics`);
    // A quotation attributed to a title is a testimonial in disguise.
    assert.ok(
      !/[“"][^”"]{20,}[”"]\s*[—–-]\s*[A-Z][a-z]+ [A-Z]/.test(text),
      `${e.slug}: contains an attributed quotation`
    );
    // The scenario title must describe a situation, not look like a company.
    assert.ok(!/\b(Inc|LLC|Ltd|Corp|Co\.|Group|Holdings)\b/.test(e.client), `${e.slug}: title reads like a company name`);
  }
});

test("no worked example invents an outcome figure", () => {
  // Percentages and "X% faster / reduced by X" are the signature of a
  // fabricated result. Platform facts (licence tiers, dates) are fine; a
  // percentage on a scenario page is not.
  for (const e of workedExamples) {
    const results = e.result.join(" ");
    assert.ok(!/\d+(\.\d+)?\s?%/.test(results), `${e.slug}: percentage in the result section`);
    assert.ok(
      !/\b(reduced|cut|saved|improved|increased|grew|boosted)\b[^.]{0,40}\b\d+/i.test(results),
      `${e.slug}: quantified improvement claim in the result section`
    );
    assert.ok(!/\bROI\b/.test(blob(e)), `${e.slug}: ROI claim`);
  }
});

test("every duration on a worked example is one the site already publishes", () => {
  // The allowed ranges are exactly those on the service and migration pages.
  // A new range here would be an invented MP365 timeline.
  const PUBLISHED = [
    /two to four weeks/, /eight to sixteen weeks/,           // ma-tenant-migration FAQs
    /eight to fourteen weeks/, /four to six months/,         // gp-to-business-central migration page
    /4[–-]6 weeks/, /4[–-]8 weeks/, /2[–-]4 weeks/, /8[–-]16 weeks/, /8[–-]14 weeks/, /4[–-]6 months/,
  ];
  const DURATION = /\b(?:\w+ to \w+|\d+\s?[–-]\s?\d+)\s+(?:weeks?|months?)\b/g;
  for (const e of workedExamples) {
    for (const m of blob(e).matchAll(DURATION)) {
      assert.ok(
        PUBLISHED.some((re) => re.test(m[0])),
        `${e.slug}: duration "${m[0]}" is not one the site publishes`
      );
    }
  }
});

test("every internal link resolves and the example never links to itself", () => {
  const PUBLISHED_MARKETING = new Set(
    marketingPages.filter((p) => p.published !== false).map((p) => `/${p.hub}/${p.slug}/`)
  );
  const targets = new Set<string>([
    "/", "/about/", "/contact/", "/services/", "/solutions/", "/industries/", "/case-studies/",
    "/blog/", "/resources/", "/resources/glossary/", "/resources/worked-examples/",
    ...PUBLISHED_MARKETING,
    ...services.map((s) => `/services/${s.slug}/`),
    ...glossaryTerms.map((t) => `/resources/glossary/${t.slug}/`),
    ...solutions.map((s) => `/solutions/${s.slug}/`),
    ...industries.map((i) => `/industries/${i.slug}/`),
    ...workedExamples.map((e) => `/resources/worked-examples/${e.slug}/`),
  ]);
  const serviceSlugs = new Set(services.map((s) => s.slug));
  for (const e of workedExamples) {
    const self = `/resources/worked-examples/${e.slug}/`;
    const links = [...blob(e).matchAll(inlineTokenPattern())].map((m) => m[2]).filter(Boolean);
    assert.ok(links.length >= 5, `${e.slug}: only ${links.length} links — it should route the reader onward`);
    for (const href of links) {
      assert.ok(targets.has(href), `${e.slug}: links to "${href}", which is not a real page`);
      assert.notEqual(href, self, `${e.slug}: links to itself`);
    }
    assert.ok(serviceSlugs.has(e.serviceSlug), `${e.slug}: serviceSlug "${e.serviceSlug}" has no service`);
    assert.ok(e.imageUrl && e.imageUrl.startsWith("/images/"), `${e.slug}: needs a site image`);
  }
});

test("each worked example carries real depth", () => {
  for (const e of workedExamples) {
    const n = [e.summary, ...e.problem, ...e.approach, ...e.result].reduce((a, p) => a + words(p), 0);
    assert.ok(n >= 700, `${e.slug}: only ${n} words`);
    assert.ok(e.problem.length >= 2 && e.approach.length >= 4 && e.result.length >= 2, `${e.slug}: thin sections`);
    assert.ok(e.metaTitle.length <= 60, `${e.slug}: metaTitle ${e.metaTitle.length} chars`);
    assert.ok(
      e.metaDescription.length >= 120 && e.metaDescription.length <= 170,
      `${e.slug}: metaDescription ${e.metaDescription.length} chars`
    );
  }
});
