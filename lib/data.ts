import { cache } from "react";
import { prisma } from "./db";
import type { ServiceCategory as PrismaServiceCategory, BlogCluster as PrismaBlogCluster } from "@prisma/client";

// Data-access layer: every content page reads through here, never through
// `prisma` directly. Each function is wrapped in React's `cache()` so that
// within a single render pass (e.g. a service page plus its nav), repeated
// calls dedupe to one query instead of N. Pages remain statically generated
// (see `export const revalidate` in each route) — this layer only decides
// *what* gets queried, not *when* the page is rendered to HTML.

export const CATEGORY_LABELS: Record<PrismaServiceCategory, string> = {
  Migration: "Migration",
  Modernization: "Modernization",
  BusinessApplications: "Business Applications",
  Governance: "Governance",
};

export const CLUSTER_LABELS: Record<PrismaBlogCluster, string> = {
  MAMigration: "M&A Migration",
  Dynamics365: "Dynamics 365",
  PowerPlatform: "Power Platform",
  DataGovernance: "Data Governance",
};

/**
 * Per-cluster editorial wiring for the blog template: which service pages an
 * article in that cluster should link to, and what the sidebar CTA should
 * offer. Keyed by the CMS's own BlogCluster enum, so a post picks its related
 * services and its CTA up from its cluster rather than from anything
 * hard-coded per slug.
 *
 * Service slugs are resolved against the Service table at render time (see
 * getBlogRelatedServices), so a renamed or retired service silently drops out
 * instead of shipping a link to a 404.
 */
export const CLUSTER_SERVICE_SLUGS: Record<PrismaBlogCluster, string[]> = {
  MAMigration: ["ma-tenant-migration", "microsoft-365-migration"],
  Dynamics365: ["dynamics-365", "power-platform"],
  PowerPlatform: ["power-platform", "application-modernization"],
  DataGovernance: ["data-governance", "ma-tenant-migration"],
};

export type ClusterCta = {
  tag: string;
  title: string;
  body: string;
  ctaText: string;
  ctaHref: string;
};

/**
 * Used only when a cluster has no BlogClusterCta row — a new BlogCluster
 * value shipped ahead of its content, say. Deliberately generic: the point is
 * that an article still renders a working call to action, not that this copy
 * is ever the right copy.
 */
export const DEFAULT_BLOG_CTA: ClusterCta = {
  tag: "Direct guidance",
  title: "Working through this on a real project?",
  body: "Tell us what you are dealing with and we will point you at the right next step.",
  ctaText: "Talk to our team",
  ctaHref: "/contact/",
};

/** The sidebar CTA for a post's cluster. Content, so it comes from the DB. */
export const getBlogClusterCta = cache(
  async (cluster: PrismaBlogCluster): Promise<ClusterCta> => {
    const row = await prisma.blogClusterCta.findUnique({ where: { cluster } });
    if (!row) return DEFAULT_BLOG_CTA;
    return {
      tag: row.tag,
      title: row.title,
      body: row.body,
      ctaText: row.ctaText,
      ctaHref: row.ctaHref,
    };
  }
);

export type Faq = { q: string; a: string };

function mapFaqs(faqs: { question: string; answer: string }[]): Faq[] {
  return faqs.map((f) => ({ q: f.question, a: f.answer }));
}

export const getSiteSettings = cache(async () => {
  const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } });
  if (!settings) {
    throw new Error(
      "SiteSettings row missing — run `npm run db:seed` to populate the database."
    );
  }
  return settings;
});

export const getPeople = cache(async () => {
  return prisma.person.findMany({ orderBy: { order: "asc" } });
});

export const getPersonBySlug = cache(async (slug: string) => {
  return prisma.person.findUnique({ where: { slug } });
});

export const getServices = cache(async () => {
  const services = await prisma.service.findMany({
    orderBy: { order: "asc" },
    include: { sections: { orderBy: { order: "asc" } }, process: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
  });
  return services.map((s) => ({
    ...s,
    categoryLabel: CATEGORY_LABELS[s.category],
    faqs: mapFaqs(s.faqs),
  }));
});

export const getServiceBySlug = cache(async (slug: string) => {
  const s = await prisma.service.findUnique({
    where: { slug },
    include: { sections: { orderBy: { order: "asc" } }, process: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
  });
  if (!s) return null;
  return { ...s, categoryLabel: CATEGORY_LABELS[s.category], faqs: mapFaqs(s.faqs) };
});

export const getSolutions = cache(async () => {
  const solutions = await prisma.solution.findMany({
    orderBy: { order: "asc" },
    include: { sections: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
  });
  return solutions.map((s) => ({ ...s, faqs: mapFaqs(s.faqs) }));
});

/**
 * findMany ignores the order of an `in` filter, so restore the authored
 * order — the first related link is the most relevant one.
 */
function inAuthoredOrder<T>(rows: T[], order: string[], key: (r: T) => string): T[] {
  return order.map((s) => rows.find((r) => key(r) === s)).filter((r): r is T => Boolean(r));
}

/**
 * Turns internal paths like "/pricing/tenant-migration-cost/" or
 * "/solutions/data-analytics/" into { name, href } links, resolving each
 * against the table that owns it and dropping anything that doesn't exist or
 * isn't published — an unpublished target would otherwise be linked from an
 * indexable page into a noindex one.
 *
 * Services and glossary terms are deliberately NOT resolved here: they have
 * their own sidebar sections fed by relatedServiceSlugs / relatedTermSlugs.
 */
async function resolveRelatedPages(refs: string[]) {
  const parsed = refs
    .map((ref) => {
      const [hub, slug] = ref.replace(/^\/|\/$/g, "").split("/");
      return hub && slug ? { hub, slug } : null;
    })
    .filter((p): p is { hub: string; slug: string } => p !== null);
  if (!parsed.length) return [];

  const solutionSlugs = parsed.filter((p) => p.hub === "solutions").map((p) => p.slug);
  const marketingRefs = parsed.filter((p) => p.hub !== "solutions");

  const [marketing, siblings] = await Promise.all([
    marketingRefs.length
      ? prisma.marketingPage.findMany({
          where: { published: true, OR: marketingRefs },
          select: { hub: true, slug: true, name: true },
        })
      : Promise.resolve([]),
    solutionSlugs.length
      ? prisma.solution.findMany({
          where: { slug: { in: solutionSlugs } },
          select: { slug: true, name: true },
        })
      : Promise.resolve([]),
  ]);

  // Keep the authored order across both sources.
  return parsed
    .map(({ hub, slug }) =>
      hub === "solutions"
        ? siblings.find((s) => s.slug === slug) && {
            name: siblings.find((s) => s.slug === slug)!.name,
            href: `/solutions/${slug}/`,
          }
        : marketing.find((r) => r.hub === hub && r.slug === slug) && {
            name: marketing.find((r) => r.hub === hub && r.slug === slug)!.name,
            href: `/${hub}/${slug}/`,
          }
    )
    .filter((r): r is { name: string; href: string } => Boolean(r));
}

export const getSolutionBySlug = cache(async (slug: string) => {
  const s = await prisma.solution.findUnique({
    where: { slug },
    include: { sections: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
  });
  if (!s) return null;

  // Cross-links resolve to real rows, so a slug that no longer exists renders
  // as nothing rather than as a link to a 404. These were previously a
  // hardcoded map inside app/solutions/[slug]/page.tsx, invisible to editors.
  const [services, terms, relatedPages] = await Promise.all([
    s.relatedServiceSlugs.length
      ? prisma.service.findMany({
          where: { slug: { in: s.relatedServiceSlugs } },
          select: { slug: true, name: true },
        })
      : Promise.resolve([]),
    s.relatedTermSlugs.length
      ? prisma.glossaryTerm.findMany({
          where: { slug: { in: s.relatedTermSlugs } },
          select: { slug: true, term: true },
        })
      : Promise.resolve([]),
    resolveRelatedPages(s.relatedPageRefs),
  ]);

  return {
    ...s,
    faqs: mapFaqs(s.faqs),
    relatedServices: inAuthoredOrder(services, s.relatedServiceSlugs, (r) => r.slug),
    relatedTerms: inAuthoredOrder(terms, s.relatedTermSlugs, (r) => r.slug),
    relatedPages,
  };
});

export const getIndustries = cache(async () => {
  const industries = await prisma.industry.findMany({
    orderBy: { order: "asc" },
    include: { faqs: { orderBy: { order: "asc" } } },
  });
  return industries.map((i) => ({ ...i, faqs: mapFaqs(i.faqs) }));
});

export const getIndustryBySlug = cache(async (slug: string) => {
  const i = await prisma.industry.findUnique({
    where: { slug },
    include: { faqs: { orderBy: { order: "asc" } } },
  });
  if (!i) return null;

  // Same resolution as getSolutionBySlug: cross-links become real rows, so a
  // renamed slug renders as nothing instead of linking to a 404. These lived
  // in a hardcoded map inside the route component until the industry pages
  // were rebuilt.
  const [services, terms, relatedPages] = await Promise.all([
    i.relatedServiceSlugs.length
      ? prisma.service.findMany({
          where: { slug: { in: i.relatedServiceSlugs } },
          select: { slug: true, name: true },
        })
      : Promise.resolve([]),
    i.relatedTermSlugs.length
      ? prisma.glossaryTerm.findMany({
          where: { slug: { in: i.relatedTermSlugs } },
          select: { slug: true, term: true },
        })
      : Promise.resolve([]),
    resolveRelatedPages(i.relatedPageRefs),
  ]);

  return {
    ...i,
    faqs: mapFaqs(i.faqs),
    relatedServices: inAuthoredOrder(services, i.relatedServiceSlugs, (r) => r.slug),
    relatedTerms: inAuthoredOrder(terms, i.relatedTermSlugs, (r) => r.slug),
    relatedPages,
  };
});

export const getCaseStudies = cache(async () => {
  return prisma.caseStudy.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
    include: { service: true },
  });
});

// Case study detail pages render even when unpublished (placeholder content
// is visibly marked as such in the UI) so editors can preview drafts by URL;
// only the public listing filters to `published: true`.
export const getCaseStudyBySlug = cache(async (slug: string) => {
  return prisma.caseStudy.findUnique({ where: { slug }, include: { service: true } });
});

export const getAllCaseStudySlugs = cache(async () => {
  return prisma.caseStudy.findMany({ select: { slug: true } });
});

export const getBlogPosts = cache(async () => {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { datePublished: "desc" },
    include: { author: true },
  });
  return posts.map((p) => ({ ...p, clusterLabel: CLUSTER_LABELS[p.cluster] }));
});

export const getBlogPostBySlug = cache(async (slug: string) => {
  const p = await prisma.blogPost.findUnique({ where: { slug }, include: { author: true } });
  if (!p) return null;
  return { ...p, clusterLabel: CLUSTER_LABELS[p.cluster] };
});

/**
 * Further reading for the foot of an article: same-cluster posts first (that
 * is the topical signal the CMS actually carries), then the most recent other
 * posts to fill the row. Never the current post, never a draft — and never
 * random, which is the failure mode that makes a "related" rail worthless for
 * readers and for internal linking alike.
 */
export const getRelatedBlogPosts = cache(async (slug: string, limit = 3) => {
  const posts = await getBlogPosts();
  const current = posts.find((p) => p.slug === slug);
  const others = posts.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);

  const sameCluster = others.filter((p) => p.cluster === current.cluster);
  const rest = others.filter((p) => p.cluster !== current.cluster);
  return [...sameCluster, ...rest].slice(0, limit);
});

/** Service pages relevant to a post's cluster, resolved to live rows. */
export const getBlogRelatedServices = cache(async (cluster: PrismaBlogCluster) => {
  const slugs = CLUSTER_SERVICE_SLUGS[cluster] ?? [];
  if (!slugs.length) return [];
  const services = await getServices();
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));
});

export const getGlossaryTerms = cache(async () => {
  return prisma.glossaryTerm.findMany({
    orderBy: { order: "asc" },
    include: { relatedServices: true },
  });
});

export const getGlossaryTermBySlug = cache(async (slug: string) => {
  const t = await prisma.glossaryTerm.findUnique({
    where: { slug },
    include: {
      relatedServices: true,
      faqs: { orderBy: { order: "asc" } },
    },
  });
  if (!t) return null;

  // Resolve cross-term links to real rows so a stale slug renders as nothing
  // rather than as a link to a 404.
  const relatedTerms = t.relatedTermSlugs.length
    ? await prisma.glossaryTerm.findMany({
        where: { slug: { in: t.relatedTermSlugs } },
        select: { slug: true, term: true },
      })
    : [];

  return { ...t, faqs: mapFaqs(t.faqs), relatedTerms };
});

// --- Marketing hubs: /migrations, /compare, /pricing, /assessments, -------
// --- /dynamics-365 ----------------------------------------------------

export const MARKETING_HUBS = ["migrations", "compare", "pricing", "assessments", "dynamics-365"] as const;
export type MarketingHub = (typeof MARKETING_HUBS)[number];

export const HUB_LABELS: Record<MarketingHub, string> = {
  migrations: "Migrations",
  compare: "Compare",
  pricing: "Pricing",
  assessments: "Assessments",
  "dynamics-365": "Dynamics 365 Products",
};

export const getMarketingPages = cache(async (hub: MarketingHub) => {
  const pages = await prisma.marketingPage.findMany({
    where: { hub, published: true },
    orderBy: { order: "asc" },
    include: { faqs: { orderBy: { order: "asc" } } },
  });
  return pages.map((p) => ({ ...p, faqs: mapFaqs(p.faqs) }));
});

export const getMarketingPageBySlug = cache(async (hub: MarketingHub, slug: string) => {
  const p = await prisma.marketingPage.findUnique({
    where: { hub_slug: { hub, slug } },
    include: { faqs: { orderBy: { order: "asc" } } },
  });
  if (!p) return null;
  return { ...p, faqs: mapFaqs(p.faqs) };
});

export const getAllMarketingPageSlugs = cache(async (hub: MarketingHub) => {
  return prisma.marketingPage.findMany({ where: { hub }, select: { slug: true } });
});

// --- Static-page FAQs ------------------------------------------------------
// Routes that are hand-built React rather than content rows (the homepage,
// /about/, /microsoft-consultant-connecticut/, and the hub indexes) have no
// parent row to hang FAQs off, so theirs are keyed by canonical path. Pass
// the same trailing-slash path used for canonical URLs and JSON-LD @ids.
export const getStaticPageFaqs = cache(async (path: string): Promise<Faq[]> => {
  try {
    if (prisma.staticPageFaq) {
      const faqs = await prisma.staticPageFaq.findMany({
        where: { path },
        orderBy: { order: "asc" },
      });
      if (faqs && faqs.length > 0) {
        return mapFaqs(faqs);
      }
    }
  } catch {
    // fallback below
  }
  return [];
});

// Used by next.config.ts to build the 301 redirect map, and intentionally
// does NOT use React's cache() — next.config.ts loads outside a React
// render, so there's nothing to dedupe against within a request.
export async function getOldSlugRedirects() {
  const rows = await prisma.oldSlug.findMany({
    include: { service: true, solution: true, industry: true },
  });
  return rows
    .map((row) => {
      const target = row.service ?? row.solution ?? row.industry;
      if (!target) return null;
      const base = row.service ? "services" : row.solution ? "solutions" : "industries";
      return { source: row.path, destination: `/${base}/${target.slug}/` };
    })
    // Defensive: an OldSlug row whose path already equals its own target's
    // current URL (a page whose slug never changed) produces a redirect to
    // itself — a real bug caught during a live audit, not a hypothetical.
    // Skip these instead of emitting a self-redirect.
    .filter((r): r is { source: string; destination: string } => r !== null && r.source !== r.destination);
}
