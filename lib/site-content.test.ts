import { test } from "node:test";
import assert from "node:assert/strict";
import { PAGE_CONTENT } from "../content/pages";
import { estimate, ESTIMATOR_QUESTIONS } from "../content/estimator";
import { LIVE_BLOG_POSTS, PAGE_REDIRECTS, PATTERN_REDIRECTS, UNCHANGED_PATHS } from "../content/redirects";
import footer from "../store/footer.json";
import navigation from "../store/navigation.json";
import { inlineTokenPattern } from "./richtext";
import { pageLinks, validatePage } from "./site-content-rules";
import { isLivePath, LIVE_PAGES, LIVE_PATHS, SITE } from "./site-data";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The plan's page-level checklist, run on every published page. The rules live
// in lib/site-content-rules.ts so scripts/check-page.ts shares them.

test("every live page has content, except the blog index", () => {
  const written = new Set(PAGE_CONTENT.map((p) => p.path));
  const missing = LIVE_PAGES.map((p) => p.path).filter((p) => p !== "/blog/" && !written.has(p));
  assert.deepEqual(missing, []);
  for (const p of PAGE_CONTENT) assert.ok(isLivePath(p.path), `${p.path} is not a live page`);
});

test("every page passes the plan's content rules", () => {
  const bad = PAGE_CONTENT.flatMap((p) => validatePage(p).map((e) => `${p.path}: ${e}`));
  assert.deepEqual(bad, []);
});

test("the plan's metadata fits its own length rules", () => {
  for (const p of LIVE_PAGES) {
    assert.ok(p.title_tag.length <= 60, `${p.path}: title is ${p.title_tag.length} chars`);
    assert.ok(
      p.meta_description.length >= 120 && p.meta_description.length <= 155,
      `${p.path}: description is ${p.meta_description.length} chars`
    );
    assert.ok(!/since 2010|not billed/i.test(p.meta_description), `${p.path}: unconfirmed fact in description`);
    assert.ok(p.path.endsWith("/"), `${p.path}: missing trailing slash`);
  }
});

test("no FAQ is copied between pages", () => {
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const p of PAGE_CONTENT) {
    for (const f of p.faqs) {
      const key = f.a.trim().toLowerCase();
      if (seen.has(key)) dupes.push(`${p.path} and ${seen.get(key)}: "${f.q}"`);
      seen.set(key, p.path);
    }
  }
  assert.deepEqual(dupes, []);
});

test("no page is an orphan: each service page receives contextual links from other pages", () => {
  const inbound = new Map<string, Set<string>>();
  for (const p of PAGE_CONTENT) {
    for (const href of pageLinks(p)) {
      if (!inbound.has(href)) inbound.set(href, new Set());
      inbound.get(href)!.add(p.path);
    }
  }
  const thin = LIVE_PAGES.filter((p) => p.type === "Service" || p.type === "Category")
    .filter((p) => (inbound.get(p.path)?.size ?? 0) < 2)
    .map((p) => `${p.path}: ${inbound.get(p.path)?.size ?? 0}`);
  assert.deepEqual(thin, []);
});

test("navigation and footer link only to live pages, and the menu reaches every service", () => {
  const hrefs = (o: unknown) => [...JSON.stringify(o).matchAll(/"(?:href|linkHref)":"(\/[^"]*)"/g)].map((m) => m[1]);
  const dead = [...hrefs(navigation), ...hrefs(footer)].filter((h) => !LIVE_PATHS.has(h));
  assert.deepEqual(dead, []);
  const nav = new Set(hrefs(navigation));
  const unreached = LIVE_PAGES.map((p) => p.path).filter((p) => p !== "/" && !nav.has(p));
  assert.deepEqual(unreached, []);
});

test("inline links use the grammar the renderer supports", () => {
  for (const p of PAGE_CONTENT) {
    const blob = JSON.stringify(p);
    const parsed = [...blob.matchAll(inlineTokenPattern())].map((m) => m[2]).filter(Boolean);
    const raw = [...blob.matchAll(/\]\(([^)]*)\)/g)].map((m) => m[1]);
    assert.equal(parsed.length, raw.length, `${p.path}: a link the renderer cannot parse`);
  }
});

test("schema rules stay as the plan set them", () => {
  assert.ok(SITE.schema.do_not_use.includes("FAQPage"));
});

test("the estimator gives a tier and a model for every path through it, with no numbers", () => {
  const lowest = Object.fromEntries(ESTIMATOR_QUESTIONS.map((q) => [q.id, q.options[0].value]));
  const highest = Object.fromEntries(ESTIMATOR_QUESTIONS.map((q) => [q.id, q.options[q.options.length - 1].value]));
  assert.equal(estimate(lowest).tier.id, "light");
  assert.equal(estimate({ ...highest, style: "Ongoing" }).tier.id, "complex");
  assert.equal(estimate({ ...highest, style: "Ongoing" }).model.label, "Dedicated");
  assert.equal(estimate({ ...lowest, style: "As needed" }).model.label, "Ad hoc");
  assert.deepEqual(estimate(lowest).drivers, []);
  assert.ok(!/[$£€]\s?\d/.test(JSON.stringify(ESTIMATOR_QUESTIONS)), "the estimator never quotes a price");
});

test("redirects land on live pages, with no chains or loops", () => {
  const sources = new Set(PAGE_REDIRECTS.map((r) => r.source));
  assert.equal(sources.size, PAGE_REDIRECTS.length, "a source is listed twice");
  for (const r of [...PAGE_REDIRECTS, ...PATTERN_REDIRECTS]) {
    assert.ok(LIVE_PATHS.has(r.destination), `${r.source} goes to ${r.destination}, which is not live`);
    assert.ok(r.source.endsWith("/"), `${r.source} needs a trailing slash`);
    assert.ok(!sources.has(r.destination), `${r.source} chains through ${r.destination}`);
    assert.ok(!LIVE_PATHS.has(r.source), `${r.source} is a live page, so a redirect would hide it`);
  }
});

test("every live-site URL is unchanged, redirected, or a post waiting to be imported", () => {
  for (const p of UNCHANGED_PATHS) assert.ok(LIVE_PATHS.has(p), `${p} is listed as unchanged but is not live`);
  const posts = new Set(LIVE_BLOG_POSTS);
  for (const r of PAGE_REDIRECTS) {
    assert.ok(!posts.has(r.source.replace(/^\/blog\/|\/$/g, "")), `${r.source} would hide a blog post`);
  }
});

test("the readable redirect plan lists every redirect", () => {
  const doc = readFileSync(join(process.cwd(), "content/REDIRECT-PLAN.md"), "utf8");
  for (const r of [...PAGE_REDIRECTS, ...PATTERN_REDIRECTS]) {
    assert.ok(doc.includes(`\`${r.source}\``), `REDIRECT-PLAN.md is missing ${r.source}`);
  }
});

test("home page sections link only to live pages and carry no unconfirmed claims", () => {
  const dir = join(process.cwd(), "store/home");
  const bad: string[] = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".json"))) {
    const raw = readFileSync(join(dir, file), "utf8");
    for (const m of raw.matchAll(/"(?:href|ctaHref|linkHref|caseStudyHref)":\s*"(\/[^"]*)"/g)) {
      if (!LIVE_PATHS.has(m[1])) bad.push(`${file}: links to ${m[1]}`);
    }
    const text = raw.replace(/"[^"]*\.(?:webp|mp4|png|jpg|svg)"/g, '""');
    const banned = /\bMP365\b|\b20\+|\bsince 20\d\d|\bBusiness Central\b|\bGoogle Workspace\b|\bfixed price\b|\b\d+(?:[-\u2013 ]\d+)? ?weeks?\b|\bTSA\b|\bone business day\b/i;
    const hit = text.match(banned);
    if (hit) bad.push(`${file}: "${hit[0]}"`);
  }
  assert.deepEqual(bad, []);
});

test("Solutions, Industries and their designs never mention ERP", () => {
  const erp = /\bERPs?\b|Business Central|Finance and Operations|Dynamics GP|NetSuite|\bSAP\b/;
  // The whole menu: industry pages reuse its descriptions on their service cards.
  assert.ok(!erp.test(JSON.stringify(navigation)), "the menu mentions ERP");
  for (const p of LIVE_PAGES.filter((x) => x.path.startsWith("/solutions/") || x.path.startsWith("/industries/"))) {
    assert.ok(!erp.test(`${p.title_tag} ${p.meta_description} ${p.h1}`), `${p.path}: ERP in metadata`);
    assert.ok(
      !p.question_keywords_starter.some((q) => erp.test(q)),
      `${p.path}: ERP in a starter question`,
    );
  }
  const dir = join(process.cwd(), "components/industries");
  for (const f of readdirSync(dir)) {
    assert.ok(!erp.test(readFileSync(join(dir, f), "utf8")), `components/industries/${f} mentions ERP`);
  }
});
