# MP365 — Website Rebuild

Next.js 16 (App Router) implementation of the MP365 rebrand, built for SEO, AEO (answer engines),
GEO (generative engines/AI Overviews/ChatGPT/Perplexity/Copilot), and LLM readability, backed by
PostgreSQL. See [`../plan/website-rebuild-plan.md`](../plan/website-rebuild-plan.md) for the site
build strategy and [`../plan/seo-growth-plan.md`](../plan/seo-growth-plan.md) for the growth/ranking
plan this hub architecture implements.

## Growth hubs (Phase 1–3 of the SEO growth plan)

Five new content hubs (25 pages total: 5 index + 20 detail), DB-backed via the `MarketingPage` model,
cross-linked from services/blog and from the header's **Resources** nav group:

- **`/dynamics-365/`** — 6 product pages (Sales, Customer Service, Finance, Supply Chain, Business
  Central, Field Service). Resolves the cannibalization risk against `/services/dynamics-365/` by
  differentiation, not by skipping it: each product page targets its own product+intent long-tail
  ("Dynamics 365 Sales implementation") with product-specific content, and every page links up to
  `/services/dynamics-365/` for the full-picture/commercial intent, while the service page links down
  to the hub for "which product" intent. Two-way linking, one keyword owner each.
- **`/migrations/`** — GP/NAV/AX → Business Central or Dynamics 365, Salesforce → Dynamics 365
- **`/compare/`** — head-to-head comparisons with real HTML tables (BC vs. F&O, BC vs. NetSuite,
  D365 vs. Salesforce, Power Apps vs. custom development)
- **`/pricing/`** — cost ranges with the factors that move them (tenant migration, BC implementation,
  Dynamics 365 licensing)
- **`/assessments/`** — fixed-scope productized offers (tenant migration, Power Platform health check,
  Business Central readiness)

Each hub has an index page (`app/<hub>/page.tsx`) and a dynamic detail route (`app/<hub>/[slug]/page.tsx`)
rendering typed content blocks (`lib/marketing-blocks.ts` → `components/marketing/PageBody.tsx`): prose,
tables, numbered steps (emits `HowTo` schema), and price-range tiles. Seed content lives in
`prisma/seed-data/marketing-pages.ts`.

**Pricing figures disclaimer:** the dollar ranges in `pricing/tenant-migration-cost`,
`pricing/business-central-implementation-cost`, and the two interactive estimators below are labeled
illustrative, industry-typical ranges — not MP365-specific historical project data. Review and calibrate
them against real closed deals before fully trusting them as public-facing figures; the on-page
disclaimer already flags this to visitors, and both estimator components source their numbers from
these same seeded ranges (not a second, independent set of figures).

### Interactive tools (all 3 from the growth plan)

- **`ProductFitSelector`** (`/services/dynamics-365/`) — 2–3 question decision tree, pure logic, no
  data dependency, routes to the right product/comparison page.
- **`CostEstimator`** (`/pricing/`) — interactive version of the same tiers already published on the
  pricing detail pages; picking a project type and scope highlights the matching published range.
- **`TimelineEstimator`** (`/services/ma-tenant-migration/`) — totals the same phase-by-phase weeks
  already published in the tenant-migration-timeline blog post, adjusted by user count, coexistence
  need, and custom-app scope.

## Design system

Ported 1:1 from the MP-365 enterprise spec at `C:/Working/Khalifa` (`DESIGN_SYSTEM.md` +
`.agents/skills/mp365-design-system/SKILL.md`). Tokens keep the reference's `--mp-*` names so the
two stay reconcilable: Obsidian Navy `#001033`, Electric Azure `#0062FF`, Hyper Cyan `#00D2FF`,
32px hero radius, 20px card radius, layered ambient shadows, spring easing.

- **`app/globals.css`** — all tokens plus the primitives that resist utility classes: the concave
  breadcrumb notch (`.mp-breadcrumb-notch`), the spring compression (`.mp-press`), and the card
  arrow that rotates to 45° on hover.
- **`components/ui/`** — `SectionTag` (azure eyebrow), `DualTitle` (the bold-navy / light-slate
  headline), `ServiceCard` (↗ button, inset media panel, featured azure variant), `Icons` (inline
  SVG only — no icon font, no emoji).
- **`PageHero`** — the curved dark banner with the breadcrumb plate notched into its bottom-right
  corner. It owns breadcrumb rendering *and* the `BreadcrumbList` JSON-LD; there is no separate
  `Breadcrumbs` component any more, so don't reintroduce one or the schema will double-emit.

**Cascade warning:** base element styles in `globals.css` are inside `@layer base` deliberately.
Unlayered CSS beats *every* layered Tailwind utility regardless of specificity — an unlayered
`h1 { color }` silently defeated `text-white` and rendered navy-on-navy. Keep new element defaults
in the layer.

**Committed to one light-mode identity.** The dark navy hero and footer are compositional elements,
not a theme; a dark-mode palette would invert those relationships and lose the design. Every
surface is painted explicitly so the page holds on any host background.

**Three things in the reference were deliberately not implemented**, because they contradict the
real data and the schema audit's findings:

| Reference | Why not |
|---|---|
| "4.9 ★ — 5K+ Enterprise Reviews" badge | No review or rating data exists. This is the fabricated-`AggregateRating` spam risk documented in the audit — it would be a manual-action exposure, and self-serving first-party reviews earn no rich result anyway. |
| Riyadh & Dubai offices | `SiteSettings` records one address: Vernon, CT. The footer uses the real one. |
| "24/7 Support · +1 800-MP-365" | Not a real number. Uses `SiteSettings.phoneDisplay`. |

The newsletter signup from the reference is a link to `/contact/` rather than a form — there is no
mailing-list backend, and a form that silently discards submissions is worse than an honest link.

## Stack

- Next.js 16.3.3, App Router, TypeScript
- **PostgreSQL 17 + Prisma 7** (driver-adapter mode via `@prisma/adapter-pg`) — content lives in the
  database; pages are still statically generated (SSG) with **ISR, `revalidate = 3600`** so the site
  stays fast and fully crawlable while content can change without a code deploy.
- Tailwind CSS v4, brand tokens in `app/globals.css` (light + dark via `prefers-color-scheme`)
- Fonts: Plus Jakarta Sans (display) + Inter (body), self-hosted via `next/font/google`

## Why database-backed pages still have a "solid SEO foundation"

Putting content in Postgres is easy to get wrong for SEO if it turns pages into client-side/SSR-only
fetches — crawlers (and most AI bots) either can't or won't execute JavaScript to see that content. This
build avoids that:

- Every route queries the database **only in React Server Components**, at build/revalidate time — never
  in the browser. The HTML a crawler receives is always fully rendered.
- `export const revalidate = 3600` on every content route means pages are cached as static HTML and only
  re-checked against the database at most once an hour (ISR) — a content edit in Postgres shows up within
  the hour, with zero rebuild/redeploy needed, and zero per-request database latency for visitors.
- `next.config.ts`'s redirect map, `app/sitemap.ts`, and `scripts/generate-llms-full.ts` all read the same
  database at build time, so none of them can drift out of sync the way the old WordPress
  `sitemap.xml` had (it was missing entire sections — see the plan doc's audit).

## Getting started

```bash
npm install
npm run db:up       # starts a local Postgres 17 container (docker-compose.yml)
cp .env.example .env
npm run db:migrate  # applies prisma/migrations, generates the Prisma client
npm run db:seed     # loads prisma/seed-data/* into the database
npm run dev          # http://localhost:3000
```

```bash
npm run build     # production build (regenerates public/llms-full.txt via `prebuild`)
npm run lint
npm test          # node:test unit tests (lib/**/*.test.ts)
npm run db:studio # Prisma Studio — browse/edit content visually
```

## Structured data (schema.org JSON-LD)

Builders live in `lib/schema.ts` and render through `components/JsonLd.tsx`. A full
audit of every page type is at [`../research/SCHEMA-AUDIT-REPORT.md`](../research/SCHEMA-AUDIT-REPORT.md).

**The graph has a spine.** Every page emits a `WebPage` (or `CollectionPage`/`AboutPage`/`ContactPage`)
node at `<url>#webpage`, and every other entity on the page carries a stable `@id` off the same path
(`#service`, `#article`, `#faq`, `#howto`, `#breadcrumb`, `#term`) with `Person` keyed on slug
(`/about/#person-<slug>`). Separate `<script>` blocks resolve into one graph through those `@id`s —
so an `@id` must match byte-for-byte across blocks, including the trailing slash. Constants and
helpers are exported from `lib/schema.ts` (`ORG_ID`, `WEBSITE_ID`, `personId()`); use them rather
than rebuilding the strings.

Five invariants that are load-bearing — don't regress them:

1. **`lib/jsonld-serialize.ts` escapes `<` as `<`.** `JSON.stringify` leaves `<` raw, so a
   `</script` sequence in any editor-writable DB field would close the `<script>` element early
   and silently drop the entire block. Covered by `lib/jsonld-serialize.test.ts`.
2. **Unpublished content emits no entity schema and is `noindex`.** Draft detail pages stay
   reachable by URL for internal review, but `buildMetadata({ noindex: !x.published })` plus an
   `{x.published && <JsonLd …/>}` gate keeps placeholder content out of the index. Applied on
   case-studies, blog, and all five marketing hub detail routes.
3. **There is no separate `LocalBusiness` node.** `ProfessionalService` already subclasses it;
   a second node duplicated every address property and declared itself its own
   `parentOrganization`. Both consumer types resolve from the single `#organization` `@id`.
4. **`metadataBase` and every `@id`/canonical derive from `SITE_URL`** (`lib/config.ts`), not
   from `SiteSettings.url` — otherwise a DB edit would split the site across two origins.
5. **`collectionPageSchema` returns null on an empty list.** `/case-studies/` renders empty while
   every study is a draft; an `ItemList` with no `itemListElement` would assert an empty catalogue.

**Never add** `Review` / `aggregateRating` (no rating data exists — fabricated review markup is a
spam-policy violation, and self-serving first-party reviews earn no rich result anyway), `Offer`
prices derived from the explicitly-illustrative pricing ranges, `SearchAction` (no search feature
exists), or the `ITService` type (**it does not exist in schema.org** — the research docs
recommend it four times regardless). See §4 "DO NOT IMPLEMENT" of the audit report for the full
list with reasoning.

Note: Google **fully deprecated FAQ rich results on 7 May 2026** and removed its HowTo
documentation. The existing `FAQPage`/`HowTo` markup is retained deliberately — it still feeds AI
answer engines — but expect no Google rich result from it.

## Architecture

- **`prisma/schema.prisma`** — the content model: `SiteSettings`, `Person`, `Service`, `Solution`,
  `Industry`, `CaseStudy`, `BlogPost`, `GlossaryTerm`, `MarketingPage` (the 5 growth hubs — see below),
  plus shared `Faq`/`Faq2`, `ContentSection`, `ProcessStep`, and `OldSlug` (redirect source paths) tables.
- **`lib/db.ts`** — the Prisma Client singleton, configured with the `@prisma/adapter-pg` driver adapter
  (required in Prisma 7 for a direct Postgres connection).
- **`lib/data.ts`** — the only module that imports `lib/db.ts`. Every page/component reads through here,
  never through `prisma` directly. Each getter is wrapped in React's `cache()` so repeated calls within
  one request (e.g. a page plus the nav) dedupe to a single query.
- **`lib/config.ts`** — the two constants that intentionally stay *outside* the database: `SITE_URL` and
  `BRAND_NAME`. Changing either is a deploy-level event (domain, canonical URLs, the `<title>` template),
  not a content edit — everything else (NAP, phone, description, tagline, leadership bios, `sameAs`
  links, and all services/solutions/industries/case studies/blog/glossary content) is DB-backed.
- **`lib/schema.ts`** — JSON-LD builders (Organization, LocalBusiness, Service, FAQPage, HowTo, Article,
  Person, BreadcrumbList, DefinedTerm). Deliberately DB-agnostic (take plain data as params) so they're
  easy to unit test.
- **`app/sitemap.ts`** / **`app/robots.ts`** — generated from the database at request/build time.
  `robots.ts` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Bingbot.
- **`public/llms.txt`** — hand-curated entity summary + link index (the emerging llms.txt convention).
- **`scripts/generate-llms-full.ts`** — regenerates `public/llms-full.txt` (a flattened, single-file
  dump of all published content) from the database. Runs automatically via `prebuild`.
- **`prisma/seed-data/*.ts`** — the original hand-authored copy, kept only as the seed source for
  `prisma/seed.ts` (safe to re-run — every row is upserted by its slug). **Nothing in `app/` or `lib/`
  imports these anymore** — edit content in the database (or edit here and re-run `npm run db:seed`),
  not by hand-editing these files and expecting the site to pick it up.

## Content editing workflow

- **Quick edits**: `npm run db:studio` opens Prisma Studio at `http://localhost:5555` — a full visual
  editor for every table (services, FAQs, blog posts, case studies, site settings, etc.).
- **Bulk/scripted edits**: edit `prisma/seed-data/*.ts` and re-run `npm run db:seed` (upserts, safe to
  repeat).
- **Schema changes**: edit `prisma/schema.prisma`, then `npm run db:migrate` to create and apply a new
  migration.
- In production, deploy `npm run db:deploy` (applies pending migrations without prompting) as part of
  your release pipeline, pointed at the production `DATABASE_URL`.

## Known TODOs before launch

- **Case studies are unpublished** (`published: false` in the seed): the problem/approach/result sections
  are placeholders marked `[CONTENT NEEDED: ...]`. They're reachable by direct URL for internal preview
  (the page shows a visible "Draft" notice) but excluded from the public listing, sitemap, and
  `llms-full.txt` until flipped to `published: true` in the database — do not do that with invented
  metrics under a real client's name; confirm scope, quotes, and numbers (and that the client has
  approved being named) first.
- **Contact form**: wired and working — validates, persists to the `ContactSubmission` table, then
  optionally forwards to `CONTACT_WEBHOOK_URL` (store-then-forward, so a webhook outage cannot lose an
  enquiry). Includes a honeypot field for bots. **Set `CONTACT_WEBHOOK_URL`** to get real-time
  notifications; until then, read submissions with `npm run db:studio`. Nobody is watching that table
  by default — wire the webhook before launch.
- **`SiteSettings.foundedYear`** and the Microsoft Partner Center / Clutch / G2 URLs in `sameAs`
  (`prisma/seed-data/site.ts`) are placeholders — fill in and re-seed once available (GEO benefits from
  entity consistency across these directories).
- **Logo**: `components/Logo.tsx` and the generated `app/icon.tsx`/`app/apple-icon.tsx` are a flat
  placeholder monogram matching the rebrand direction (navy + azure, no gradients/bevels) — swap for
  the final production SVG when ready (update all three files to stay consistent).
- **Pricing page figures**: see the "Growth hubs" section above — confirm against real numbers before
  fully trusting them live.
- **Blog posts 4–12 are unreviewed drafts** (`prisma/seed-data/blog.ts`, marked with a comment block).
  Written from general Microsoft-platform practice; they assert no client names, project metrics, or
  engagement specifics — but they have not been checked against MP365's own house view or real project
  experience. Two (Copilot, Power Platform licensing) carry an explicit in-body note to verify against
  current Microsoft documentation, since that surface changes release to release. Edit before treating
  them as published positions.
- **Production database**: `docker-compose.yml` is for local dev only. Point `DATABASE_URL` at a managed
  Postgres instance (Neon, Supabase, RDS, Azure Database for PostgreSQL, etc.) for production, and run
  `npm run db:deploy` + `npm run db:seed` (or a real content import) against it before going live.
- **Deployment**: the site has never been deployed — Vercel/hosting, DNS, Google Search Console, Bing
  Webmaster Tools, IndexNow, and a Google Business Profile all need setting up with accounts only the
  client can create (see Phase 0 of the SEO growth plan).
- Old WordPress site: fix the broken homepage `<title>` ("Dynamics 365 Sales Professional? 2026
  Guide") immediately, independent of this rebuild's launch timeline — see Phase 0 in the plan doc.
