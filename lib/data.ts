import { cache } from "react";
import { prisma } from "./db";
import type { ServiceCategory as PrismaServiceCategory, BlogCluster as PrismaBlogCluster } from "@prisma/client";
import {
  getBlogClusterCtaFallback,
  getSiteSettingsFallback,
  getPeopleFallback,
  getPersonBySlugFallback,
  getServicesFallback,
  getServiceBySlugFallback,
  getSolutionsFallback,
  getSolutionBySlugFallback,
  getIndustriesFallback,
  getIndustryBySlugFallback,
  getCaseStudiesFallback,
  getCaseStudyBySlugFallback,
  getAllCaseStudySlugsFallback,
  getWorkedExamplesFallback,
  getWorkedExampleBySlugFallback,
  getBlogPostsFallback,
  getBlogPostBySlugFallback,
  getGlossaryTermsFallback,
  getGlossaryTermBySlugFallback,
  getMarketingPagesFallback,
  getMarketingPageBySlugFallback,
  getAllMarketingPageSlugsFallback,
  getStaticPageFaqsFallback,
  getOldSlugRedirectsFallback,
} from "./seed-fallback";

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

export const DEFAULT_BLOG_CTA: ClusterCta = {
  tag: "Direct guidance",
  title: "Working through this on a real project?",
  body: "Tell us what you are dealing with and we will point you at the right next step.",
  ctaText: "Talk to our team",
  ctaHref: "/contact/",
};

export type Faq = { q: string; a: string };

function mapFaqs(faqs: { question: string; answer: string }[]): Faq[] {
  return faqs.map((f) => ({ q: f.question, a: f.answer }));
}

/**
 * Fallback execution wrapper: If DATABASE_URL is not provided or points to a placeholder,
 * or if the database query fails (e.g. unreachable server during build/CI), it gracefully
 * falls back to the static content seed so builds and pages never crash.
 */
async function withFallback<T>(queryFn: () => Promise<T>, fallbackFn: () => T | Promise<T>): Promise<T> {
  const dbUrl = process.env.DATABASE_URL;
  if (
    !dbUrl ||
    dbUrl.includes("placeholder") ||
    (process.env.VERCEL && (dbUrl.includes("localhost") || dbUrl.includes("127.0.0.1")))
  ) {
    return fallbackFn();
  }
  try {
    return await queryFn();
  } catch {
    return fallbackFn();
  }
}

/** The sidebar CTA for a post's cluster. Content, so it comes from the DB. */
export const getBlogClusterCta = cache(
  async (cluster: PrismaBlogCluster): Promise<ClusterCta> => {
    return withFallback(
      async () => {
        const row = await prisma.blogClusterCta.findUnique({ where: { cluster } });
        if (!row) return DEFAULT_BLOG_CTA;
        return {
          tag: row.tag,
          title: row.title,
          body: row.body,
          ctaText: row.ctaText,
          ctaHref: row.ctaHref,
        };
      },
      () => getBlogClusterCtaFallback(cluster)
    );
  }
);

export const getSiteSettings = cache(async () => {
  return withFallback(
    async () => {
      const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } });
      if (!settings) {
        throw new Error(
          "SiteSettings row missing — run `npm run db:seed` to populate the database."
        );
      }
      return settings;
    },
    () => getSiteSettingsFallback()
  );
});

export const getPeople = cache(async () => {
  return withFallback(
    async () => prisma.person.findMany({ orderBy: { order: "asc" } }),
    () => getPeopleFallback()
  );
});

export const getPersonBySlug = cache(async (slug: string) => {
  return withFallback(
    async () => prisma.person.findUnique({ where: { slug } }),
    () => getPersonBySlugFallback(slug)
  );
});

export const getServices = cache(async () => {
  return withFallback(
    async () => {
      const services = await prisma.service.findMany({
        orderBy: { order: "asc" },
        include: { sections: { orderBy: { order: "asc" } }, process: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
      });
      return services.map((s) => ({
        ...s,
        categoryLabel: CATEGORY_LABELS[s.category],
        faqs: mapFaqs(s.faqs),
      }));
    },
    () => getServicesFallback()
  );
});

export const getServiceBySlug = cache(async (slug: string) => {
  return withFallback(
    async () => {
      const s = await prisma.service.findUnique({
        where: { slug },
        include: { sections: { orderBy: { order: "asc" } }, process: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
      });
      if (!s) return null;

      const [terms, relatedPages] = await Promise.all([
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
        categoryLabel: CATEGORY_LABELS[s.category],
        faqs: mapFaqs(s.faqs),
        relatedTerms: inAuthoredOrder(terms, s.relatedTermSlugs, (r) => r.slug),
        relatedPages,
      };
    },
    () => getServiceBySlugFallback(slug)
  );
});

export const getSolutions = cache(async () => {
  return withFallback(
    async () => {
      const solutions = await prisma.solution.findMany({
        orderBy: { order: "asc" },
        include: { sections: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
      });
      return solutions.map((s) => ({ ...s, faqs: mapFaqs(s.faqs) }));
    },
    () => getSolutionsFallback()
  );
});

function inAuthoredOrder<T>(rows: T[], order: string[], key: (r: T) => string): T[] {
  return order.map((s) => rows.find((r) => key(r) === s)).filter((r): r is T => Boolean(r));
}

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
  return withFallback(
    async () => {
      const s = await prisma.solution.findUnique({
        where: { slug },
        include: { sections: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
      });
      if (!s) return null;

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
    },
    () => getSolutionBySlugFallback(slug)
  );
});

export const getIndustries = cache(async () => {
  return withFallback(
    async () => {
      const industries = await prisma.industry.findMany({
        orderBy: { order: "asc" },
        include: { faqs: { orderBy: { order: "asc" } } },
      });
      return industries.map((i) => ({ ...i, faqs: mapFaqs(i.faqs) }));
    },
    () => getIndustriesFallback()
  );
});

export const getIndustryBySlug = cache(async (slug: string) => {
  return withFallback(
    async () => {
      const i = await prisma.industry.findUnique({
        where: { slug },
        include: { faqs: { orderBy: { order: "asc" } } },
      });
      if (!i) return null;

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
    },
    () => getIndustryBySlugFallback(slug)
  );
});

export const getCaseStudies = cache(async () => {
  return withFallback(
    async () =>
      prisma.caseStudy.findMany({
        where: { published: true, kind: "CLIENT" },
        orderBy: { order: "asc" },
        include: { service: true },
      }),
    () => getCaseStudiesFallback()
  );
});

export const getWorkedExamples = cache(async () => {
  return withFallback(
    async () =>
      prisma.caseStudy.findMany({
        where: { published: true, kind: "WORKED_EXAMPLE" },
        orderBy: { order: "asc" },
        include: { service: true },
      }),
    () => getWorkedExamplesFallback()
  );
});

export const getWorkedExampleBySlug = cache(async (slug: string) => {
  return withFallback(
    async () => {
      const row = await prisma.caseStudy.findUnique({ where: { slug }, include: { service: true } });
      return row && row.kind === "WORKED_EXAMPLE" ? row : null;
    },
    () => getWorkedExampleBySlugFallback(slug)
  );
});

export const getCaseStudyBySlug = cache(async (slug: string) => {
  return withFallback(
    async () => {
      const row = await prisma.caseStudy.findUnique({ where: { slug }, include: { service: true } });
      return row && row.kind === "CLIENT" ? row : null;
    },
    () => getCaseStudyBySlugFallback(slug)
  );
});

export const getAllCaseStudySlugs = cache(async () => {
  return withFallback(
    async () => prisma.caseStudy.findMany({ where: { kind: "CLIENT" }, select: { slug: true } }),
    () => getAllCaseStudySlugsFallback()
  );
});

export const getBlogPosts = cache(async () => {
  return withFallback(
    async () => {
      const posts = await prisma.blogPost.findMany({
        where: { published: true },
        orderBy: { datePublished: "desc" },
        include: { author: true },
      });
      return posts.map((p) => ({ ...p, clusterLabel: CLUSTER_LABELS[p.cluster] }));
    },
    () => getBlogPostsFallback()
  );
});

export const getBlogPostBySlug = cache(async (slug: string) => {
  return withFallback(
    async () => {
      const p = await prisma.blogPost.findUnique({
        where: { slug },
        include: { author: true, faqs: { orderBy: { order: "asc" } } },
      });
      if (!p) return null;
      return { ...p, clusterLabel: CLUSTER_LABELS[p.cluster], faqs: mapFaqs(p.faqs) };
    },
    () => getBlogPostBySlugFallback(slug)
  );
});

export const getRelatedBlogPosts = cache(async (slug: string, limit = 3) => {
  const posts = await getBlogPosts();
  const current = posts.find((p) => p.slug === slug);
  const others = posts.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);

  const sameCluster = others.filter((p) => p.cluster === current.cluster);
  const rest = others.filter((p) => p.cluster !== current.cluster);
  return [...sameCluster, ...rest].slice(0, limit);
});

export const getBlogRelatedServices = cache(async (cluster: PrismaBlogCluster) => {
  const slugs = CLUSTER_SERVICE_SLUGS[cluster] ?? [];
  if (!slugs.length) return [];
  const services = await getServices();
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));
});

export const getGlossaryTerms = cache(async () => {
  return withFallback(
    async () =>
      prisma.glossaryTerm.findMany({
        orderBy: { order: "asc" },
        include: { relatedServices: true },
      }),
    () => getGlossaryTermsFallback()
  );
});

export const getGlossaryTermBySlug = cache(async (slug: string) => {
  return withFallback(
    async () => {
      const t = await prisma.glossaryTerm.findUnique({
        where: { slug },
        include: {
          relatedServices: true,
          faqs: { orderBy: { order: "asc" } },
        },
      });
      if (!t) return null;

      const relatedTerms = t.relatedTermSlugs.length
        ? await prisma.glossaryTerm.findMany({
            where: { slug: { in: t.relatedTermSlugs } },
            select: { slug: true, term: true },
          })
        : [];

      return { ...t, faqs: mapFaqs(t.faqs), relatedTerms };
    },
    () => getGlossaryTermBySlugFallback(slug)
  );
});

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
  return withFallback(
    async () => {
      const pages = await prisma.marketingPage.findMany({
        where: { hub, published: true },
        orderBy: { order: "asc" },
        include: { faqs: { orderBy: { order: "asc" } } },
      });
      return pages.map((p) => ({ ...p, faqs: mapFaqs(p.faqs) }));
    },
    () => getMarketingPagesFallback(hub)
  );
});

export const getMarketingPageBySlug = cache(async (hub: MarketingHub, slug: string) => {
  return withFallback(
    async () => {
      const p = await prisma.marketingPage.findUnique({
        where: { hub_slug: { hub, slug } },
        include: { faqs: { orderBy: { order: "asc" } } },
      });
      if (!p) return null;

      const [services, relatedPages] = await Promise.all([
        p.relatedServiceSlugs.length
          ? prisma.service.findMany({
              where: { slug: { in: p.relatedServiceSlugs } },
              select: { slug: true, name: true },
            })
          : Promise.resolve([]),
        resolveRelatedPages(p.relatedPageRefs.filter((r) => r !== `/${hub}/${slug}/`)),
      ]);

      return {
        ...p,
        faqs: mapFaqs(p.faqs),
        relatedServices: inAuthoredOrder(services, p.relatedServiceSlugs, (r) => r.slug),
        relatedPages,
      };
    },
    () => getMarketingPageBySlugFallback(hub, slug)
  );
});

export const getAllMarketingPageSlugs = cache(async (hub: MarketingHub) => {
  return withFallback(
    async () => prisma.marketingPage.findMany({ where: { hub }, select: { slug: true } }),
    () => getAllMarketingPageSlugsFallback(hub)
  );
});

export const getStaticPageFaqs = cache(async (path: string): Promise<Faq[]> => {
  return withFallback(
    async () => {
      if (prisma.staticPageFaq) {
        const faqs = await prisma.staticPageFaq.findMany({
          where: { path },
          orderBy: { order: "asc" },
        });
        if (faqs && faqs.length > 0) {
          return mapFaqs(faqs);
        }
      }
      return getStaticPageFaqsFallback(path);
    },
    () => getStaticPageFaqsFallback(path)
  );
});

export async function getOldSlugRedirects() {
  return withFallback(
    async () => {
      const rows = await prisma.oldSlug.findMany({
        include: { service: true, solution: true, industry: true },
      });
      return rows
        .map((row) => {
          const target = row.service ?? row.solution ?? row.industry;
          if (target) {
            const base = row.service ? "services" : row.solution ? "solutions" : "industries";
            return { source: row.path, destination: `/${base}/${target.slug}/` };
          }
          if (row.targetPath) {
            return { source: row.path, destination: row.targetPath };
          }
          return null;
        })
        .filter((r): r is { source: string; destination: string } => r !== null && r.source !== r.destination);
    },
    () => getOldSlugRedirectsFallback()
  );
}
