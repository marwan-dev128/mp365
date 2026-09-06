import { site } from "../prisma/seed-data/site";
import { services } from "../prisma/seed-data/services";
import { solutions } from "../prisma/seed-data/solutions";
import { industries } from "../prisma/seed-data/industries";
import { caseStudies } from "../prisma/seed-data/case-studies";
import { workedExamples } from "../prisma/seed-data/worked-examples";
import { blogPosts } from "../prisma/seed-data/blog";
import { blogClusterCtas } from "../prisma/seed-data/blog-cluster-ctas";
import { glossaryTerms } from "../prisma/seed-data/glossary";
import { marketingPages } from "../prisma/seed-data/marketing-pages";
import { staticPageFaqs } from "../prisma/seed-data/static-page-faqs";
import { standaloneRedirects } from "../prisma/seed-data/redirects";
import type { MarketingHub } from "./data";
import {
  CATEGORY_LABELS,
  CLUSTER_LABELS,
  DEFAULT_BLOG_CTA,
  type ClusterCta,
  type Faq,
} from "./data";
import { ServiceCategory, BlogCluster, CaseStudyKind } from "@prisma/client";

const CATEGORY_MAP: Record<string, ServiceCategory> = {
  Migration: ServiceCategory.Migration,
  Modernization: ServiceCategory.Modernization,
  "Business Applications": ServiceCategory.BusinessApplications,
  Governance: ServiceCategory.Governance,
};

const CLUSTER_MAP: Record<string, BlogCluster> = {
  "M&A Migration": BlogCluster.MAMigration,
  "Dynamics 365": BlogCluster.Dynamics365,
  "Power Platform": BlogCluster.PowerPlatform,
  "Data Governance": BlogCluster.DataGovernance,
};

function inAuthoredOrder<T>(rows: T[], order: string[], key: (r: T) => string): T[] {
  return order
    .map((s) => rows.find((r) => key(r) === s))
    .filter((r): r is T => Boolean(r));
}

function resolveRelatedPagesFallback(refs: string[]) {
  const parsed = refs
    .map((ref) => {
      const [hub, slug] = ref.replace(/^\/|\/$/g, "").split("/");
      return hub && slug ? { hub, slug } : null;
    })
    .filter((p): p is { hub: string; slug: string } => p !== null);
  if (!parsed.length) return [];

  return parsed
    .map(({ hub, slug }) => {
      if (hub === "solutions") {
        const sol = solutions.find((s) => s.slug === slug);
        return sol ? { name: sol.name, href: `/solutions/${slug}/` } : null;
      }
      const page = marketingPages.find(
        (p) => p.hub === hub && p.slug === slug && p.published !== false
      );
      return page ? { name: page.name, href: `/${hub}/${slug}/` } : null;
    })
    .filter((r): r is { name: string; href: string } => Boolean(r));
}

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

export function getPersonBySlugFallback(slug: string) {
  return getPeopleFallback().find((p) => p.slug === slug) ?? null;
}

export function getServicesFallback() {
  return services.map((s, i) => {
    const cat = CATEGORY_MAP[s.category] ?? ServiceCategory.Migration;
    return {
      id: s.slug,
      slug: s.slug,
      name: s.name,
      shortName: s.shortName,
      category: cat,
      categoryLabel: CATEGORY_LABELS[cat],
      metaTitle: s.metaTitle,
      metaDescription: s.metaDescription,
      heroQuestion: s.heroQuestion,
      heroAnswer: s.heroAnswer,
      imageUrl: null as string | null,
      intro: s.intro,
      order: i,
      sections: (s.sections ?? []).map((sec, secIdx) => ({
        id: `${s.slug}-sec-${secIdx}`,
        heading: sec.heading,
        body: sec.body,
        order: secIdx,
        serviceId: s.slug,
        solutionId: null,
      })),
      process: (s.process ?? []).map((proc, procIdx) => ({
        id: `${s.slug}-proc-${procIdx}`,
        name: proc.name,
        description: proc.description,
        order: procIdx,
        serviceId: s.slug,
      })),
      faqs: (s.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
      relatedServiceSlugs: s.relatedServiceSlugs ?? [],
      blocks: s.blocks ?? [],
      relatedTermSlugs: s.relatedTermSlugs ?? [],
      relatedPageRefs: s.relatedPageRefs ?? [],
      createdAt: new Date("2026-01-01"),
      updatedAt: new Date("2026-01-01"),
    };
  });
}

export function getServiceBySlugFallback(slug: string) {
  const all = getServicesFallback();
  const s = all.find((item) => item.slug === slug);
  if (!s) return null;

  const terms = s.relatedTermSlugs.length
    ? glossaryTerms
        .filter((t) => s.relatedTermSlugs.includes(t.slug))
        .map((t) => ({ slug: t.slug, term: t.term }))
    : [];

  const relatedPages = resolveRelatedPagesFallback(s.relatedPageRefs);

  return {
    ...s,
    relatedTerms: inAuthoredOrder(terms, s.relatedTermSlugs, (r) => r.slug),
    relatedPages,
  };
}

export function getSolutionsFallback() {
  return solutions.map((s, i) => ({
    id: s.slug,
    slug: s.slug,
    name: s.name,
    metaTitle: s.metaTitle,
    metaDescription: s.metaDescription,
    heroQuestion: s.heroQuestion,
    heroAnswer: s.heroAnswer,
    imageUrl: null as string | null,
    intro: s.intro,
    order: i,
    blocks: s.blocks ?? [],
    relatedServiceSlugs: s.relatedServiceSlugs ?? [],
    relatedTermSlugs: s.relatedTermSlugs ?? [],
    relatedPageRefs: s.relatedPageRefs ?? [],
    sections: (s.sections ?? []).map((sec, secIdx) => ({
      id: `${s.slug}-sec-${secIdx}`,
      heading: sec.heading,
      body: sec.body,
      order: secIdx,
      serviceId: null,
      solutionId: s.slug,
    })),
    faqs: (s.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  }));
}

export function getSolutionBySlugFallback(slug: string) {
  const allSolutions = getSolutionsFallback();
  const s = allSolutions.find((item) => item.slug === slug);
  if (!s) return null;

  const allServices = getServicesFallback();
  const matchedServices = s.relatedServiceSlugs.length
    ? allServices.filter((srv) => s.relatedServiceSlugs.includes(srv.slug))
    : [];

  const terms = s.relatedTermSlugs.length
    ? glossaryTerms
        .filter((t) => s.relatedTermSlugs.includes(t.slug))
        .map((t) => ({ slug: t.slug, term: t.term }))
    : [];

  const relatedPages = resolveRelatedPagesFallback(s.relatedPageRefs);

  return {
    ...s,
    relatedServices: inAuthoredOrder(
      matchedServices,
      s.relatedServiceSlugs,
      (r) => r.slug
    ),
    relatedTerms: inAuthoredOrder(terms, s.relatedTermSlugs, (r) => r.slug),
    relatedPages,
  };
}

export function getIndustriesFallback() {
  return industries.map((ind, i) => ({
    id: ind.slug,
    slug: ind.slug,
    name: ind.name,
    metaTitle: ind.metaTitle,
    metaDescription: ind.metaDescription,
    heroQuestion: ind.heroQuestion,
    heroAnswer: ind.heroAnswer,
    imageUrl: null as string | null,
    intro: ind.intro,
    challenges: ind.challenges ?? [],
    order: i,
    blocks: ind.blocks ?? [],
    relatedServiceSlugs: ind.relatedServiceSlugs ?? [],
    relatedTermSlugs: ind.relatedTermSlugs ?? [],
    relatedPageRefs: ind.relatedPageRefs ?? [],
    faqs: (ind.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  }));
}

export function getIndustryBySlugFallback(slug: string) {
  const allIndustries = getIndustriesFallback();
  const ind = allIndustries.find((item) => item.slug === slug);
  if (!ind) return null;

  const allServices = getServicesFallback();
  const matchedServices = ind.relatedServiceSlugs.length
    ? allServices.filter((srv) => ind.relatedServiceSlugs.includes(srv.slug))
    : [];

  const terms = ind.relatedTermSlugs.length
    ? glossaryTerms
        .filter((t) => ind.relatedTermSlugs.includes(t.slug))
        .map((t) => ({ slug: t.slug, term: t.term }))
    : [];

  const relatedPages = resolveRelatedPagesFallback(ind.relatedPageRefs);

  return {
    ...ind,
    relatedServices: inAuthoredOrder(
      matchedServices,
      ind.relatedServiceSlugs,
      (r) => r.slug
    ),
    relatedTerms: inAuthoredOrder(terms, ind.relatedTermSlugs, (r) => r.slug),
    relatedPages,
  };
}

export function getCaseStudiesFallback() {
  return caseStudies
    .filter((c) => c.published === true)
    .map((c, i) => ({
      id: c.slug,
      slug: c.slug,
      kind: CaseStudyKind.CLIENT,
      client: c.client,
      industryLabel: c.industry,
      imageUrl: c.imageUrl ?? null,
      metaTitle: c.metaTitle,
      metaDescription: c.metaDescription,
      summary: c.summary,
      problem: c.problem,
      approach: c.approach,
      result: c.result,
      metrics: c.metrics ?? [],
      published: c.published ?? false,
      order: i,
      serviceId: c.serviceSlug,
      service: null as any,
      createdAt: new Date("2026-01-01"),
      updatedAt: new Date("2026-01-01"),
    }));
}

export function getAllCaseStudySlugsFallback() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function getCaseStudyBySlugFallback(slug: string) {
  const c = caseStudies.find((item) => item.slug === slug);
  if (!c) return null;
  const srv = getServicesFallback().find((s) => s.slug === c.serviceSlug);
  return {
    id: c.slug,
    slug: c.slug,
    kind: CaseStudyKind.CLIENT,
    client: c.client,
    industryLabel: c.industry,
    imageUrl: c.imageUrl ?? null,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    summary: c.summary,
    problem: c.problem,
    approach: c.approach,
    result: c.result,
    metrics: c.metrics ?? [],
    published: c.published ?? false,
    order: 0,
    serviceId: c.serviceSlug,
    service: (srv as any) ?? null,
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  };
}

export function getWorkedExamplesFallback() {
  return workedExamples
    .filter((w) => w.published !== false)
    .map((w, i) => ({
      id: w.slug,
      slug: w.slug,
      kind: CaseStudyKind.WORKED_EXAMPLE,
      client: w.client,
      industryLabel: w.industry,
      imageUrl: w.imageUrl ?? null,
      metaTitle: w.metaTitle,
      metaDescription: w.metaDescription,
      summary: w.summary,
      problem: w.problem,
      approach: w.approach,
      result: w.result,
      metrics: w.metrics ?? [],
      published: true,
      order: i,
      serviceId: w.serviceSlug,
      service: null as any,
      createdAt: new Date("2026-01-01"),
      updatedAt: new Date("2026-01-01"),
    }));
}

export function getWorkedExampleBySlugFallback(slug: string) {
  const w = workedExamples.find((item) => item.slug === slug);
  if (!w) return null;
  const srv = getServicesFallback().find((s) => s.slug === w.serviceSlug);
  return {
    id: w.slug,
    slug: w.slug,
    kind: CaseStudyKind.WORKED_EXAMPLE,
    client: w.client,
    industryLabel: w.industry,
    imageUrl: w.imageUrl ?? null,
    metaTitle: w.metaTitle,
    metaDescription: w.metaDescription,
    summary: w.summary,
    problem: w.problem,
    approach: w.approach,
    result: w.result,
    metrics: w.metrics ?? [],
    published: true,
    order: 0,
    serviceId: w.serviceSlug,
    service: (srv as any) ?? null,
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  };
}

export function getBlogPostsFallback() {
  return blogPosts
    .filter((p) => (p as { published?: boolean }).published !== false)
    .map((p) => {
      const clusterEnum = CLUSTER_MAP[p.cluster] ?? BlogCluster.MAMigration;
      const author =
        site.people.find((a) => a.slug === p.authorSlug) ?? site.people[0];
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

export function getGlossaryTermsFallback() {
  return glossaryTerms.map((t, i) => ({
    id: t.slug,
    slug: t.slug,
    term: t.term,
    shortDefinition: t.shortDefinition,
    aliases: t.aliases ?? [],
    sections: t.sections ?? [],
    expansion: t.expansion ?? [],
    relatedTermSlugs: t.relatedTermSlugs ?? [],
    primaryServiceSlug: t.relatedServiceSlugs?.[0] ?? null,
    order: i,
    relatedServices: [],
    faqs: (t.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  }));
}

export function getGlossaryTermBySlugFallback(slug: string) {
  const t = glossaryTerms.find((item) => item.slug === slug);
  if (!t) return null;

  const relatedTermSlugs = t.relatedTermSlugs ?? [];
  const relatedTerms = relatedTermSlugs.length
    ? glossaryTerms
        .filter((item) => relatedTermSlugs.includes(item.slug))
        .map((item) => ({ slug: item.slug, term: item.term }))
    : [];

  return {
    id: t.slug,
    slug: t.slug,
    term: t.term,
    shortDefinition: t.shortDefinition,
    aliases: t.aliases ?? [],
    sections: t.sections ?? [],
    expansion: t.expansion ?? [],
    relatedTermSlugs,
    primaryServiceSlug: t.relatedServiceSlugs?.[0] ?? null,
    order: 0,
    relatedServices: [],
    faqs: (t.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
    relatedTerms,
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  };
}

export function getMarketingPagesFallback(hub: MarketingHub) {
  return marketingPages
    .filter((p) => p.hub === hub && p.published !== false)
    .map((p, i) => ({
      id: `${p.hub}-${p.slug}`,
      type: p.type,
      hub: p.hub,
      slug: p.slug,
      name: p.name,
      metaTitle: p.metaTitle,
      metaDescription: p.metaDescription,
      heroQuestion: p.heroQuestion,
      heroAnswer: p.heroAnswer,
      imageUrl: p.imageUrl ?? null,
      sections: p.sections ?? [],
      relatedServiceSlugs: p.relatedServiceSlugs ?? [],
      relatedPageRefs: (p as { relatedPageRefs?: string[] }).relatedPageRefs ?? [],
      published: p.published,
      order: i,
      faqs: (p.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
      createdAt: new Date("2026-01-01"),
      updatedAt: new Date("2026-01-01"),
    }));
}

export function getAllMarketingPageSlugsFallback(hub: MarketingHub) {
  return marketingPages
    .filter((p) => p.hub === hub)
    .map((p) => ({ slug: p.slug }));
}

export function getMarketingPageBySlugFallback(hub: MarketingHub, slug: string) {
  const p = marketingPages.find((item) => item.hub === hub && item.slug === slug);
  if (!p) return null;

  const allServices = getServicesFallback();
  const matchedServices = p.relatedServiceSlugs.length
    ? allServices.filter((srv) => p.relatedServiceSlugs.includes(srv.slug))
    : [];

  const pageRefs = (p as { relatedPageRefs?: string[] }).relatedPageRefs ?? [];
  const relatedPages = resolveRelatedPagesFallback(
    pageRefs.filter((r) => r !== `/${hub}/${slug}/`)
  );

  return {
    id: `${p.hub}-${p.slug}`,
    type: p.type,
    hub: p.hub,
    slug: p.slug,
    name: p.name,
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    heroQuestion: p.heroQuestion,
    heroAnswer: p.heroAnswer,
    imageUrl: p.imageUrl ?? null,
    sections: p.sections ?? [],
    relatedServiceSlugs: p.relatedServiceSlugs ?? [],
    relatedPageRefs: pageRefs,
    published: p.published,
    order: 0,
    faqs: (p.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
    relatedServices: inAuthoredOrder(
      matchedServices,
      p.relatedServiceSlugs,
      (r) => r.slug
    ),
    relatedPages,
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-01"),
  };
}

export function getStaticPageFaqsFallback(path: string): Faq[] {
  const group = staticPageFaqs.find((g) => g.path === path);
  return group ? group.faqs : [];
}

export function getOldSlugRedirectsFallback(): { source: string; destination: string }[] {
  const redirects: { source: string; destination: string }[] = [];

  for (const s of services) {
    for (const old of s.oldSlugs ?? []) {
      redirects.push({ source: old, destination: `/services/${s.slug}/` });
    }
  }

  for (const s of solutions) {
    for (const old of s.oldSlugs ?? []) {
      redirects.push({ source: old, destination: `/solutions/${s.slug}/` });
    }
  }

  for (const ind of industries) {
    for (const old of ind.oldSlugs ?? []) {
      redirects.push({ source: old, destination: `/industries/${ind.slug}/` });
    }
  }

  for (const r of standaloneRedirects) {
    redirects.push({ source: r.from, destination: r.to });
  }

  return redirects.filter((r) => r.source !== r.destination);
}
