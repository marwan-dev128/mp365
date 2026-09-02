import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import {
  getServices,
  getSolutions,
  getIndustries,
  getCaseStudies,
  getWorkedExamples,
  getBlogPosts,
  getGlossaryTerms,
  getMarketingPages,
  MARKETING_HUBS,
} from "@/lib/data";

// Generated from the same DB-backed data that renders the pages — this
// sitemap can never drift out of sync with the site the way the old
// hand-maintained WordPress sitemap.xml had (it was missing whole sections).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, solutions, industries, caseStudies, workedExamples, blogPosts, glossaryTerms, marketingByHub] =
    await Promise.all([
      getServices(),
      getSolutions(),
      getIndustries(),
      getCaseStudies(), // published only — matches what's actually crawlable
      getWorkedExamples(),
      getBlogPosts(),
      getGlossaryTerms(),
      Promise.all(MARKETING_HUBS.map((hub) => getMarketingPages(hub))),
    ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${SITE_URL}/about/`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${SITE_URL}/services/`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_URL}/solutions/`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/industries/`, priority: 0.8, changeFrequency: "monthly" },
    // Omitted while every study is a draft: the hub is noindex in that state
    // (see app/case-studies/page.tsx), and a sitemap should only advertise
    // URLs we actually want indexed. Reappears on first publish.
    ...(caseStudies.length > 0
      ? [
          {
            url: `${SITE_URL}/case-studies/`,
            priority: 0.7,
            changeFrequency: "monthly" as const,
          },
        ]
      : []),
    { url: `${SITE_URL}/blog/`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${SITE_URL}/resources/`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${SITE_URL}/resources/glossary/`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${SITE_URL}/contact/`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${SITE_URL}/microsoft-consultant-connecticut/`, priority: 0.6, changeFrequency: "monthly" },
    // Derived, not hand-listed — a new hub in MARKETING_HUBS appears here
    // automatically instead of being silently missing from the sitemap.
    ...MARKETING_HUBS.map((hub) => ({
      url: `${SITE_URL}/${hub}/`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}/`,
    lastModified: s.updatedAt,
    priority: 0.9,
    changeFrequency: "monthly",
  }));

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${SITE_URL}/solutions/${s.slug}/`,
    lastModified: s.updatedAt,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}/`,
    lastModified: i.updatedAt,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}/`,
    lastModified: c.updatedAt,
    priority: 0.7,
    changeFrequency: "yearly",
  }));

  const workedExampleRoutes: MetadataRoute.Sitemap = [
    ...(workedExamples.length > 0
      ? [{ url: `${SITE_URL}/resources/worked-examples/`, priority: 0.6, changeFrequency: "monthly" as const }]
      : []),
    ...workedExamples.map((e) => ({
      url: `${SITE_URL}/resources/worked-examples/${e.slug}/`,
      lastModified: e.updatedAt,
      priority: 0.6,
      changeFrequency: "yearly" as const,
    })),
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}/`,
    lastModified: p.dateModified,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = glossaryTerms.map((t) => ({
    url: `${SITE_URL}/resources/glossary/${t.slug}/`,
    lastModified: t.updatedAt,
    priority: 0.5,
    changeFrequency: "yearly",
  }));

  const marketingRoutes: MetadataRoute.Sitemap = MARKETING_HUBS.flatMap((hub, i) =>
    marketingByHub[i].map((p) => ({
      url: `${SITE_URL}/${hub}/${p.slug}/`,
      lastModified: p.updatedAt,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    }))
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...workedExampleRoutes,
    ...blogRoutes,
    ...glossaryRoutes,
    ...marketingRoutes,
  ];
}
