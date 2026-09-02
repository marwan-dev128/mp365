import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

import { LEGACY_URLS, STATIC_ROUTES } from "./legacy-urls";
import { standaloneRedirects, intentionally404 } from "../prisma/seed-data/redirects";
import { services } from "../prisma/seed-data/services";
import { solutions } from "../prisma/seed-data/solutions";
import { industries } from "../prisma/seed-data/industries";
import { blogPosts } from "../prisma/seed-data/blog";
import { marketingPages } from "../prisma/seed-data/marketing-pages";
import { glossaryTerms } from "../prisma/seed-data/glossary";
import { caseStudies } from "../prisma/seed-data/case-studies";

// Cutover safety net.
//
// The launch audit found that 21 indexed URLs on the live WordPress site had
// no counterpart on the new build and no way to express one — OldSlug carried
// only three foreign keys. Those URLs are the only pages on the old site with
// recent dates and topical titles, so shipping without them would have thrown
// away whatever ranking the domain has.
//
// A redirect map is exactly the kind of thing that looks right in review and
// is wrong in production: a target slug gets renamed, a post is unpublished,
// two rows claim the same source. These tests read the real seed data, so the
// map cannot silently rot.

/** Every path the new site actually serves, derived from the content model. */
function newSiteRoutes(): Set<string> {
  const routes = new Set<string>(STATIC_ROUTES);

  for (const s of services) routes.add(`/services/${s.slug}/`);
  for (const s of solutions) routes.add(`/solutions/${s.slug}/`);
  for (const i of industries) routes.add(`/industries/${i.slug}/`);
  // Only published posts render; a draft is not a valid redirect target.
  for (const p of blogPosts) routes.add(`/blog/${p.slug}/`);
  for (const p of marketingPages) {
    if (p.published) routes.add(`/${p.hub}/${p.slug}/`);
  }
  for (const t of glossaryTerms) routes.add(`/resources/glossary/${t.slug}/`);
  // Case-study detail pages render even while unpublished (see lib/data.ts),
  // so they are reachable targets — but an unpublished one is noindex, which
  // makes it a poor one. Redirect targets are checked against published only.
  for (const c of caseStudies) {
    if ((c as { published?: boolean }).published) routes.add(`/case-studies/${c.slug}/`);
  }

  return routes;
}

/** Old paths already covered by the Service/Solution/Industry FK columns. */
function fkRedirectSources(): string[] {
  return [
    ...services.flatMap((s) => s.oldSlugs ?? []),
    ...solutions.flatMap((s) => s.oldSlugs ?? []),
    ...industries.flatMap((i) => i.oldSlugs ?? []),
  ];
}

test("every standalone redirect points at a route the new site serves", () => {
  const routes = newSiteRoutes();
  const broken = standaloneRedirects
    .filter((r) => !routes.has(r.to))
    .map((r) => `${r.from} → ${r.to}`);

  assert.deepEqual(
    broken,
    [],
    `redirect target does not exist — these would 301 straight into a 404:\n${broken.join("\n")}`
  );
});

test("no redirect chains: a destination is never itself a redirect source", () => {
  // Chains bleed PageRank and Google gives up after a handful of hops. They
  // appear the moment a slug is renamed twice, which is exactly what happened
  // to /services/application-modernization-2/ on the old site.
  const sources = new Set([...standaloneRedirects.map((r) => r.from), ...fkRedirectSources()]);
  const chained = standaloneRedirects
    .filter((r) => sources.has(r.to))
    .map((r) => `${r.from} → ${r.to} (which itself redirects)`);

  assert.deepEqual(chained, [], `redirect chain:\n${chained.join("\n")}`);
});

test("no redirect points at itself", () => {
  const selfies = standaloneRedirects.filter((r) => r.from === r.to).map((r) => r.from);
  assert.deepEqual(selfies, [], `self-redirect (infinite loop):\n${selfies.join("\n")}`);
});

test("no source is claimed twice, across both redirect mechanisms", () => {
  // OldSlug.path is @unique, so a duplicate is not a bad redirect — it is a
  // seed crash. Better to fail here with the offending path named.
  const all = [...standaloneRedirects.map((r) => r.from), ...fkRedirectSources()];
  const seen = new Set<string>();
  const dupes: string[] = [];
  for (const path of all) {
    if (seen.has(path)) dupes.push(path);
    seen.add(path);
  }
  assert.deepEqual(dupes, [], `duplicate redirect source:\n${dupes.join("\n")}`);
});

test("redirect sources and paths are absolute with a trailing slash", () => {
  // next.config.ts sets trailingSlash:true. A source without the trailing
  // slash never matches; a destination without one costs an extra 308 hop.
  const malformed = standaloneRedirects
    .flatMap((r) => [r.from, r.to])
    .filter((p) => !p.startsWith("/") || !p.endsWith("/"));

  assert.deepEqual(malformed, [], `path must start and end with "/":\n${malformed.join("\n")}`);
});

test("every live WordPress URL either resolves, redirects, or is a declared 404", () => {
  // The whole point of the exercise: nothing on the old site is allowed to
  // disappear by accident. A deliberate 404 must be declared in
  // `intentionally404` so it is visibly a decision.
  const routes = newSiteRoutes();
  const redirected = new Set([...standaloneRedirects.map((r) => r.from), ...fkRedirectSources()]);
  const declared404 = new Set(intentionally404);

  const orphaned = LEGACY_URLS.filter(
    (u) => !routes.has(u) && !redirected.has(u) && !declared404.has(u)
  );

  assert.deepEqual(
    orphaned,
    [],
    `live URL with no destination on the new site — these would 404 at cutover:\n${orphaned.join("\n")}`
  );
});

test("every declared 404 is genuinely absent from the new site", () => {
  // Guards the opposite mistake: a path listed as an intentional 404 that
  // later becomes a real page would keep its "we meant to drop this" label.
  const routes = newSiteRoutes();
  const contradictions = intentionally404.filter((u) => routes.has(u));
  assert.deepEqual(
    contradictions,
    [],
    `declared an intentional 404 but the new site serves it:\n${contradictions.join("\n")}`
  );
});

test("STATIC_ROUTES matches the hand-built pages actually present in app/", () => {
  // Redirect targets are validated against STATIC_ROUTES, so a stale entry
  // would let a redirect to a deleted page pass as valid.
  const appDir = join(process.cwd(), "app");
  const onDisk = new Set<string>();

  const walk = (dir: string, urlPath: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      // Dynamic segments and route groups are not static routes.
      if (entry.name.startsWith("[") || entry.name.startsWith("(") || entry.name.startsWith("_")) {
        continue;
      }
      const next = join(dir, entry.name);
      const nextUrl = `${urlPath}${entry.name}/`;
      if (existsSync(join(next, "page.tsx"))) onDisk.add(nextUrl);
      walk(next, nextUrl);
    }
  };

  if (existsSync(join(appDir, "page.tsx"))) onDisk.add("/");
  walk(appDir, "/");

  const listedButGone = STATIC_ROUTES.filter((r) => !onDisk.has(r));
  const onDiskButUnlisted = [...onDisk].filter((r) => !STATIC_ROUTES.includes(r));

  assert.deepEqual(listedButGone, [], `STATIC_ROUTES lists a page that no longer exists:\n${listedButGone.join("\n")}`);
  assert.deepEqual(
    onDiskButUnlisted,
    [],
    `new hand-built page missing from STATIC_ROUTES:\n${onDiskButUnlisted.join("\n")}`
  );
});
