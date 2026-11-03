// Used when the database is unreachable (see withFallback in lib/data.ts), so a
// build or page never crashes. Mirrors the shape the Prisma queries return.
import { BlogCluster } from "@prisma/client";
import { site } from "../prisma/seed-data/site";
import { blogPosts } from "../prisma/seed-data/blog";
import { blogClusterCtas } from "../prisma/seed-data/blog-cluster-ctas";
import { CLUSTER_LABELS, DEFAULT_BLOG_CTA, type ClusterCta } from "./data";

const CLUSTER_MAP: Record<string, BlogCluster> = {
  "M&A Migration": BlogCluster.MAMigration,
  "Dynamics 365": BlogCluster.Dynamics365,
  "Power Platform": BlogCluster.PowerPlatform,
  "Data Governance": BlogCluster.DataGovernance,
};

export function getBlogClusterCtaFallback(cluster: BlogCluster): ClusterCta {
  const seed = blogClusterCtas.find((c) => CLUSTER_MAP[c.cluster] === cluster);
  if (!seed) return DEFAULT_BLOG_CTA;
  return {
    tag: seed.tag,
    title: seed.title,
    body: seed.body,
    ctaText: seed.ctaText,
    ctaHref: seed.ctaHref ?? "/contact/",
  };
}

export function getSiteSettingsFallback() {
  return {
    id: 1,
    brandName: site.brandName,
    legalName: site.legalName,
    tagline: site.tagline,
    description: site.description,
    url: site.url,
    foundedYear: site.foundedYear,
    phone: site.phone,
    phoneDisplay: site.phoneDisplay,
    email: site.email,
    street: site.address.street,
    city: site.address.city,
    region: site.address.region,
    postalCode: site.address.postalCode,
    country: site.address.country,
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
    areaServed: [...site.areaServed],
    sameAs: [...site.sameAs],
    updatedAt: new Date("2026-01-01"),
  };
}

export function getPeopleFallback() {
  return site.people.map((p, i) => ({
    id: p.slug,
    slug: p.slug,
    name: p.name,
    role: p.role,
    credentials: p.credentials,
    order: i,
  }));
}

export function getBlogPostsFallback() {
  return blogPosts.map((p) => {
    const clusterEnum = CLUSTER_MAP[p.cluster] ?? BlogCluster.MAMigration;
    const author = site.people.find((a) => a.slug === p.authorSlug) ?? site.people[0];
    return {
      id: p.slug,
      slug: p.slug,
      title: p.title,
      metaDescription: p.metaDescription,
      cluster: clusterEnum,
      clusterLabel: CLUSTER_LABELS[clusterEnum],
      authorId: p.authorSlug,
      author: {
        id: author.slug,
        slug: author.slug,
        name: author.name,
        role: author.role,
        credentials: author.credentials,
        order: 0,
      },
      datePublished: new Date(p.datePublished),
      dateModified: new Date(p.dateModified),
      excerpt: p.excerpt,
      body: p.body,
      published: true,
      imageUrl: p.imageUrl ?? null,
      imageAlt: p.imageAlt ?? null,
      faqs: (p.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
      createdAt: new Date(p.datePublished),
      updatedAt: new Date(p.dateModified),
    };
  });
}

export function getBlogPostBySlugFallback(slug: string) {
  return getBlogPostsFallback().find((p) => p.slug === slug) ?? null;
}
