import { test } from "node:test";
import assert from "node:assert/strict";
import { blogPosts } from "../prisma/seed-data/blog";
import { services } from "../prisma/seed-data/services";
import { solutions } from "../prisma/seed-data/solutions";
import { glossaryTerms } from "../prisma/seed-data/glossary";
import { marketingPages } from "../prisma/seed-data/marketing-pages";
import { countWords, parseBlogBody } from "./blog";
import { inlineTokenPattern, stripInlineMarkup } from "./richtext";

// Blog posts averaged 265 words each — too thin to rank for the queries they
// target and too thin for an answer engine to cite. These checks keep them
// from silently decaying back, and guard the failure modes that actually
// shipped on this site before: links to pages that do not exist, markup in
// fields the renderer prints raw, and invented authority.

const hasMarkup = (s: string) => inlineTokenPattern().test(s);
const words = (s: string) => stripInlineMarkup(s).trim().split(/\s+/).filter(Boolean).length;

const SERVICE_SLUGS = new Set(services.map((s) => s.slug));
const SOLUTION_SLUGS = new Set(solutions.map((s) => s.slug));
const TERM_SLUGS = new Set(glossaryTerms.map((t) => t.slug));
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
  ...[...SOLUTION_SLUGS].map((s) => `/solutions/${s}/`),
  ...[...TERM_SLUGS].map((s) => `/resources/glossary/${s}/`),
  // Cross-linking between articles is the point of a cluster, so posts are
  // valid targets for each other.
  ...blogPosts.map((p) => `/blog/${p.slug}/`),
]);

test("every post carries real depth, not a stub", () => {
  for (const p of blogPosts) {
    const n = countWords(parseBlogBody(p.body));
    assert.ok(n >= 1200, `${p.slug}: ${n} body words — this is the thin-content failure again`);
    assert.ok(n <= 2600, `${p.slug}: ${n} body words, past the point a reader finishes it`);
    assert.ok(p.body.length >= 5, `${p.slug}: ${p.body.length} blocks, want >= 5`);
  }
});

test("every post has a table or a sequence, because the subjects have both", () => {
  // A comparison table is the shape that answers "X vs Y" and "what does this
  // cost" queries, and it is the shape an answer engine can lift wholesale.
  for (const p of blogPosts) {
    const types = new Set(p.body.map((b) => b.type));
    assert.ok(types.has("table"), `${p.slug}: no table — the flat-prose failure`);
    assert.ok(
      types.has("steps") || types.has("list"),
      `${p.slug}: no scannable sequence or list block`
    );
  }
});

test("every post opens with an un-headed lead that stands alone", () => {
  for (const p of blogPosts) {
    const first = p.body[0];
    assert.ok(first, `${p.slug}: empty body`);
    assert.equal(first.type, "prose", `${p.slug}: first block is ${first.type}, want prose`);
    assert.ok(!first.heading, `${p.slug}: lead block carries a heading`);
  }
});

test("every post answers 3-4 questions", () => {
  for (const p of blogPosts) {
    assert.ok(
      p.faqs.length >= 3 && p.faqs.length <= 5,
      `${p.slug}: ${p.faqs.length} FAQs, want 3-5`
    );
    for (const f of p.faqs) {
      const n = words(f.a);
      assert.ok(n >= 25, `${p.slug}: FAQ answer is ${n} words — too short to be quotable`);
      assert.ok(n <= 90, `${p.slug}: FAQ answer is ${n} words — too long for a snippet`);
      assert.ok(f.q.trim().endsWith("?"), `${p.slug}: FAQ question is not a question: "${f.q}"`);
    }
  }
});

test("every internal link resolves, and no post links to itself", () => {
  for (const p of blogPosts) {
    const self = `/blog/${p.slug}/`;
    for (const m of JSON.stringify(p).matchAll(inlineTokenPattern())) {
      const href = m[2];
      if (!href) continue;
      assert.ok(linkTargets.has(href), `${p.slug}: links to "${href}", which is not a real page`);
      assert.notEqual(href, self, `${p.slug}: links to its own URL`);
    }
  }
});

test("every post links out enough to be part of the site, not an island", () => {
  for (const p of blogPosts) {
    const links = [...JSON.stringify(p).matchAll(inlineTokenPattern())]
      .map((m) => m[2])
      .filter(Boolean);
    assert.ok(links.length >= 6, `${p.slug}: only ${links.length} inline links, want >= 6`);
    assert.ok(
      new Set(links).size >= 5,
      `${p.slug}: only ${new Set(links).size} distinct link targets, want >= 5`
    );
  }
});

test("inline markup only appears where the renderer parses it", () => {
  // Headings, table headers and step names render as plain strings, and FAQ
  // questions reach the FAQPage JSON-LD. Markup in any of them ships raw.
  const raw: string[] = [];
  for (const p of blogPosts) {
    for (const b of p.body) {
      if (b.heading && hasMarkup(b.heading)) raw.push(`${p.slug} ${b.type}.heading`);
      if (b.type === "steps") for (const s of b.steps) if (hasMarkup(s.name)) raw.push(`${p.slug} steps[].name`);
      if (b.type === "table") for (const h of b.headers) if (hasMarkup(h)) raw.push(`${p.slug} table.header`);
    }
    for (const f of p.faqs) if (hasMarkup(f.q)) raw.push(`${p.slug} faq.q`);
    if (hasMarkup(p.excerpt)) raw.push(`${p.slug} excerpt`);
  }
  assert.deepEqual(raw, [], `markup in fields that render raw:\n${raw.join("\n")}`);
});

test("titles and descriptions fit the SERP", () => {
  for (const p of blogPosts) {
    // The rendered <title> appends " | MP365", so the raw title has ~52 to work with.
    assert.ok(p.title.length <= 52, `${p.slug}: title ${p.title.length} chars, want <= 52`);
    assert.ok(
      p.metaDescription.length >= 120 && p.metaDescription.length <= 170,
      `${p.slug}: metaDescription ${p.metaDescription.length} chars, want 120-170`
    );
    for (const [field, v] of Object.entries({
      title: p.title,
      metaDescription: p.metaDescription,
      excerpt: p.excerpt,
    })) {
      assert.ok(!/&amp;|&lt;|&gt;/.test(v), `${p.slug}: HTML entity in ${field} — "${v}"`);
    }
  }
});

test("no fabricated authority: no invented ratings, clients, or prices", () => {
  const BANNED: [RegExp, string][] = [
    [/\b\d+(\.\d+)?\s*(out of|\/)\s*5\b/i, "invented rating"],
    [/\b\d+\+?\s+(reviews|clients|customers) served\b/i, "invented client count"],
    [/\b(OTIS|Carlisle|Hunter Panels)\b/, "named client"],
    // Pricing lives on the /pricing/ hub. Restating a figure here means the
    // two can contradict each other, and the blog is the copy nobody updates.
    [/[$£€]\s?\d/, "price figure — link to /pricing/ instead"],
    [/\b\d+\s*(percent|%)\s+(faster|cheaper|more|less|improvement|reduction)/i, "unmeasured claim"],
    // MP365 holds no published partner designation or attestation.
    [/\bMicrosoft (Solutions )?Partner\b.*\b(designation|tier|gold|silver)\b/i, "partner tier claim"],
    [/\bMP365 is (SOC ?2|ISO ?27001|HITRUST|FedRAMP|HIPAA)[- ]?(certified|compliant|attested)/i, "attestation claim"],
  ];
  for (const p of blogPosts) {
    const blob = JSON.stringify(p);
    for (const [re, why] of BANNED) {
      assert.ok(!re.test(blob), `${p.slug}: ${why} — matched ${re}`);
    }
  }
});

test("illustrative examples are labelled as illustrative", () => {
  // A worked example is useful; a worked example that reads as a real client
  // engagement is a fabricated case study. Any post that describes a scenario
  // has to say it is a typical shape rather than a specific engagement.
  const SCENARIO = /\b(illustrative|typical shape|typical mid-market pattern|rather than a specific engagement)\b/i;
  for (const p of blogPosts) {
    const blob = JSON.stringify(p);
    // Headings that announce a worked example.
    const announces = p.body.some((b) => /illustrative|worked example|looks like/i.test(b.heading ?? ""));
    if (announces) {
      assert.ok(SCENARIO.test(blob), `${p.slug}: presents an example without labelling it illustrative`);
    }
  }
});

test("cluster labels and authors are ones the site actually has", () => {
  const CLUSTERS = new Set(["M&A Migration", "Dynamics 365", "Power Platform", "Data Governance"]);
  const AUTHORS = new Set(["mohammed-khaliefa", "raafat-elfouly"]);
  for (const p of blogPosts) {
    assert.ok(CLUSTERS.has(p.cluster), `${p.slug}: unknown cluster "${p.cluster}"`);
    assert.ok(AUTHORS.has(p.authorSlug), `${p.slug}: unknown author "${p.authorSlug}"`);
    assert.ok(
      p.dateModified >= p.datePublished,
      `${p.slug}: dateModified ${p.dateModified} precedes datePublished ${p.datePublished}`
    );
  }
});

test("slugs are unique and stable", () => {
  // Redirect rows and cross-post links both key off these, so a rename is a
  // breaking change rather than an edit.
  const seen = new Set<string>();
  for (const p of blogPosts) {
    assert.ok(!seen.has(p.slug), `duplicate slug: ${p.slug}`);
    seen.add(p.slug);
  }
  assert.equal(seen.size, blogPosts.length);
});
