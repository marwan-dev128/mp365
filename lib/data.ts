import { cache } from "react";
import { prisma } from "./db";
import type { BlogCluster as PrismaBlogCluster } from "@prisma/client";
import {
  getBlogClusterCtaFallback,
  getSiteSettingsFallback,
  getPeopleFallback,
  getBlogPostsFallback,
  getBlogPostBySlugFallback,
} from "./seed-fallback";

// Data access for what still lives in the database: site settings, people, blog
// posts and redirects. Service, Pricing, Clients and other page copy lives in
// content/ (see content/types.ts). Each function is wrapped in React's `cache()`
// so repeated calls within one render dedupe to one query.

export const CLUSTER_LABELS: Record<PrismaBlogCluster, string> = {
  MAMigration: "M&A Migration",
  Dynamics365: "Dynamics 365",
  PowerPlatform: "Power Platform",
  DataGovernance: "Data Governance",
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
  ctaText: "Book a discovery call",
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
      if (!settings) return getSiteSettingsFallback();
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

/**
 * 301 redirects, read from the OldSlug table. Empty until the redirect plan for
 * the live site's URLs arrives; add rows with a `targetPath` to activate them.
 */
export async function getOldSlugRedirects() {
  return withFallback(
    async () => {
      const rows = await prisma.oldSlug.findMany({ where: { targetPath: { not: null } } });
      return rows
        .filter((r) => r.path !== r.targetPath)
        .map((r) => ({ source: r.path, destination: r.targetPath as string }));
    },
    () => [] as { source: string; destination: string }[]
  );
}
