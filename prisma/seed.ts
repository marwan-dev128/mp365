// Seeds the database from the same content that originally shipped as
// static TS files (now kept under prisma/seed-data/ for this purpose only —
// nothing in app/ or lib/ imports them anymore; the DB is the runtime
// source of truth). Safe to re-run: every model is upserted by its slug.
import "dotenv/config";
import { ServiceCategory, BlogCluster, CaseStudyKind } from "@prisma/client";
import { prisma } from "../lib/db";
import { site } from "./seed-data/site";
import { services } from "./seed-data/services";
import { solutions } from "./seed-data/solutions";
import { industries } from "./seed-data/industries";
import { caseStudies } from "./seed-data/case-studies";
import { workedExamples } from "./seed-data/worked-examples";
import { blogPosts } from "./seed-data/blog";
import { blogClusterCtas } from "./seed-data/blog-cluster-ctas";
import { standaloneRedirects } from "./seed-data/redirects";
import { glossaryTerms } from "./seed-data/glossary";
import { marketingPages } from "./seed-data/marketing-pages";
import { staticPageFaqs } from "./seed-data/static-page-faqs";

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

async function main() {
  console.log("Seeding SiteSettings + People…");
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: {
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
    },
    update: {
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
    },
  });

  const peopleBySlug: Record<string, string> = {};
  for (const [i, p] of site.people.entries()) {
    const person = await prisma.person.upsert({
      where: { slug: p.slug },
      create: { slug: p.slug, name: p.name, role: p.role, credentials: p.credentials, order: i },
      update: { name: p.name, role: p.role, credentials: p.credentials, order: i },
    });
    peopleBySlug[p.slug] = person.id;
  }

  console.log("Seeding Services…");
  const serviceIdBySlug: Record<string, string> = {};
  for (const [i, s] of services.entries()) {
    const created = await prisma.service.upsert({
      where: { slug: s.slug },
      create: {
        slug: s.slug,
        name: s.name,
        shortName: s.shortName,
        category: CATEGORY_MAP[s.category],
        metaTitle: s.metaTitle,
        metaDescription: s.metaDescription,
        heroQuestion: s.heroQuestion,
        heroAnswer: s.heroAnswer,
        imageUrl: `/images/services/${s.slug}.jpg`,
        intro: s.intro,
        order: i,
        relatedServiceSlugs: s.relatedServiceSlugs,
        blocks: s.blocks ?? [],
        relatedTermSlugs: s.relatedTermSlugs ?? [],
        relatedPageRefs: s.relatedPageRefs ?? [],
      },
      update: {
        name: s.name,
        shortName: s.shortName,
        category: CATEGORY_MAP[s.category],
        metaTitle: s.metaTitle,
        metaDescription: s.metaDescription,
        heroQuestion: s.heroQuestion,
        heroAnswer: s.heroAnswer,
        imageUrl: `/images/services/${s.slug}.jpg`,
        intro: s.intro,
        order: i,
        relatedServiceSlugs: s.relatedServiceSlugs,
        blocks: s.blocks ?? [],
        relatedTermSlugs: s.relatedTermSlugs ?? [],
        relatedPageRefs: s.relatedPageRefs ?? [],
      },
    });
    serviceIdBySlug[s.slug] = created.id;

    await prisma.contentSection.deleteMany({ where: { serviceId: created.id } });
    for (const [j, sec] of (s.sections ?? []).entries()) {
      await prisma.contentSection.create({
        data: { serviceId: created.id, heading: sec.heading, body: sec.body, order: j },
      });
    }

    await prisma.processStep.deleteMany({ where: { serviceId: created.id } });
    for (const [j, step] of (s.process ?? []).entries()) {
      await prisma.processStep.create({
        data: { serviceId: created.id, name: step.name, description: step.description, order: j },
      });
    }

    await prisma.faq.deleteMany({ where: { serviceId: created.id } });
    for (const [j, f] of s.faqs.entries()) {
      await prisma.faq.create({ data: { serviceId: created.id, question: f.q, answer: f.a, order: j } });
    }

    await prisma.oldSlug.deleteMany({ where: { serviceId: created.id } });
    for (const path of s.oldSlugs) {
      await prisma.oldSlug.upsert({
        where: { path },
        create: { path, serviceId: created.id },
        update: { serviceId: created.id, solutionId: null, industryId: null },
      });
    }
  }

  console.log("Seeding Solutions…");
  for (const [i, s] of solutions.entries()) {
    const created = await prisma.solution.upsert({
      where: { slug: s.slug },
      create: {
        slug: s.slug,
        name: s.name,
        metaTitle: s.metaTitle,
        metaDescription: s.metaDescription,
        heroQuestion: s.heroQuestion,
        heroAnswer: s.heroAnswer,
        imageUrl: `/images/solutions/${s.slug}.jpg`,
        intro: s.intro,
        order: i,
        blocks: s.blocks ?? [],
        relatedServiceSlugs: s.relatedServiceSlugs ?? [],
        relatedTermSlugs: s.relatedTermSlugs ?? [],
        relatedPageRefs: s.relatedPageRefs ?? [],
      },
      update: {
        name: s.name,
        metaTitle: s.metaTitle,
        metaDescription: s.metaDescription,
        heroQuestion: s.heroQuestion,
        heroAnswer: s.heroAnswer,
        imageUrl: `/images/solutions/${s.slug}.jpg`,
        intro: s.intro,
        order: i,
        blocks: s.blocks ?? [],
        relatedServiceSlugs: s.relatedServiceSlugs ?? [],
        relatedTermSlugs: s.relatedTermSlugs ?? [],
        relatedPageRefs: s.relatedPageRefs ?? [],
      },
    });

    await prisma.contentSection.deleteMany({ where: { solutionId: created.id } });
    for (const [j, sec] of (s.sections ?? []).entries()) {
      await prisma.contentSection.create({
        data: { solutionId: created.id, heading: sec.heading, body: sec.body, order: j },
      });
    }

    await prisma.faq.deleteMany({ where: { solutionId: created.id } });
    for (const [j, f] of s.faqs.entries()) {
      await prisma.faq.create({ data: { solutionId: created.id, question: f.q, answer: f.a, order: j } });
    }

    await prisma.oldSlug.deleteMany({ where: { solutionId: created.id } });
    for (const path of s.oldSlugs) {
      await prisma.oldSlug.upsert({
        where: { path },
        create: { path, solutionId: created.id },
        update: { solutionId: created.id, serviceId: null, industryId: null },
      });
    }
  }

  console.log("Seeding Industries…");
  for (const [i, ind] of industries.entries()) {
    const created = await prisma.industry.upsert({
      where: { slug: ind.slug },
      create: {
        slug: ind.slug,
        name: ind.name,
        metaTitle: ind.metaTitle,
        metaDescription: ind.metaDescription,
        heroQuestion: ind.heroQuestion,
        heroAnswer: ind.heroAnswer,
        imageUrl: `/images/industries/${ind.slug}.jpg`,
        intro: ind.intro,
        challenges: ind.challenges,
        order: i,
        blocks: ind.blocks ?? [],
        relatedServiceSlugs: ind.relatedServiceSlugs ?? [],
        relatedTermSlugs: ind.relatedTermSlugs ?? [],
        relatedPageRefs: ind.relatedPageRefs ?? [],
      },
      update: {
        name: ind.name,
        metaTitle: ind.metaTitle,
        metaDescription: ind.metaDescription,
        heroQuestion: ind.heroQuestion,
        heroAnswer: ind.heroAnswer,
        imageUrl: `/images/industries/${ind.slug}.jpg`,
        intro: ind.intro,
        challenges: ind.challenges,
        order: i,
        blocks: ind.blocks ?? [],
        relatedServiceSlugs: ind.relatedServiceSlugs ?? [],
        relatedTermSlugs: ind.relatedTermSlugs ?? [],
        relatedPageRefs: ind.relatedPageRefs ?? [],
      },
    });

    await prisma.faq.deleteMany({ where: { industryId: created.id } });
    for (const [j, f] of ind.faqs.entries()) {
      await prisma.faq.create({ data: { industryId: created.id, question: f.q, answer: f.a, order: j } });
    }

    await prisma.oldSlug.deleteMany({ where: { industryId: created.id } });
    for (const path of ind.oldSlugs) {
      await prisma.oldSlug.upsert({
        where: { path },
        create: { path, industryId: created.id },
        update: { industryId: created.id, serviceId: null, solutionId: null },
      });
    }
  }

  console.log("Seeding Case Studies + Worked Examples…");
  // Client rows still contain [CONTENT NEEDED] placeholders and default to
  // unpublished; worked examples declare `published: true` in their seed file.
  for (const [i, c] of [...caseStudies, ...workedExamples].entries()) {
    const kind = c.kind === "WORKED_EXAMPLE" ? CaseStudyKind.WORKED_EXAMPLE : CaseStudyKind.CLIENT;
    const fields = {
      kind,
      client: c.client,
      industryLabel: c.industry,
      imageUrl: c.imageUrl ?? null,
      metaTitle: c.metaTitle,
      metaDescription: c.metaDescription,
      summary: c.summary,
      problem: c.problem,
      approach: c.approach,
      result: c.result,
      metrics: c.metrics,
      serviceId: serviceIdBySlug[c.serviceSlug] ?? null,
      published: c.published ?? false,
      order: i,
    };
    await prisma.caseStudy.upsert({
      where: { slug: c.slug },
      create: { slug: c.slug, ...fields },
      update: fields,
    });
  }

  console.log("Seeding Blog Posts…");
  for (const p of blogPosts) {
    const created = await prisma.blogPost.upsert({
      where: { slug: p.slug },
      create: {
        slug: p.slug,
        title: p.title,
        metaDescription: p.metaDescription,
        cluster: CLUSTER_MAP[p.cluster],
        authorId: peopleBySlug[p.authorSlug],
        datePublished: new Date(p.datePublished),
        dateModified: new Date(p.dateModified),
        excerpt: p.excerpt,
        imageUrl: p.imageUrl ?? null,
        imageAlt: p.imageAlt ?? null,
        body: p.body,
      },
      update: {
        title: p.title,
        metaDescription: p.metaDescription,
        cluster: CLUSTER_MAP[p.cluster],
        authorId: peopleBySlug[p.authorSlug],
        datePublished: new Date(p.datePublished),
        dateModified: new Date(p.dateModified),
        excerpt: p.excerpt,
        imageUrl: p.imageUrl ?? null,
        imageAlt: p.imageAlt ?? null,
        body: p.body,
      },
    });

    await prisma.faq.deleteMany({ where: { blogPostId: created.id } });
    for (const [j, f] of (p.faqs ?? []).entries()) {
      await prisma.faq.create({
        data: { blogPostId: created.id, question: f.q, answer: f.a, order: j },
      });
    }
  }

  console.log("Seeding blog cluster CTAs…");
  for (const c of blogClusterCtas) {
    const data = {
      tag: c.tag,
      title: c.title,
      body: c.body,
      ctaText: c.ctaText,
      ...(c.ctaHref ? { ctaHref: c.ctaHref } : {}),
    };
    await prisma.blogClusterCta.upsert({
      where: { cluster: CLUSTER_MAP[c.cluster] },
      create: { cluster: CLUSTER_MAP[c.cluster], ...data },
      update: data,
    });
  }

  // Redirects whose destination is not a Service/Solution/Industry row —
  // retired WordPress blog posts and category archives, and /about-us/.
  // Without these, 21 indexed URLs 404 at cutover. See seed-data/redirects.ts.
  console.log("Seeding standalone redirects…");
  // Clear only the rows this file owns (targetPath set), so re-seeding cannot
  // strip the FK-based redirects written by the service/solution/industry
  // loops above.
  await prisma.oldSlug.deleteMany({
    where: { targetPath: { not: null }, path: { notIn: standaloneRedirects.map((r) => r.from) } },
  });
  for (const r of standaloneRedirects) {
    await prisma.oldSlug.upsert({
      where: { path: r.from },
      create: { path: r.from, targetPath: r.to },
      update: { targetPath: r.to, serviceId: null, solutionId: null, industryId: null },
    });
  }

  console.log("Seeding Glossary…");
  for (const [i, t] of glossaryTerms.entries()) {
    const created = await prisma.glossaryTerm.upsert({
      where: { slug: t.slug },
      create: {
        slug: t.slug,
        term: t.term,
        shortDefinition: t.shortDefinition,
        aliases: t.aliases ?? [],
        sections: t.sections ?? [],
        relatedTermSlugs: t.relatedTermSlugs ?? [],
        // The first related service is the authored primary; persist that
        // intent, because the relation itself has no order.
        primaryServiceSlug: t.relatedServiceSlugs[0] ?? null,
        expansion: [],
        order: i,
        relatedServices: {
          connect: t.relatedServiceSlugs.map((s) => ({ id: serviceIdBySlug[s] })).filter((c) => c.id),
        },
      },
      update: {
        term: t.term,
        shortDefinition: t.shortDefinition,
        aliases: t.aliases ?? [],
        sections: t.sections ?? [],
        relatedTermSlugs: t.relatedTermSlugs ?? [],
        // The first related service is the authored primary; persist that
        // intent, because the relation itself has no order.
        primaryServiceSlug: t.relatedServiceSlugs[0] ?? null,
        expansion: [],
        order: i,
        relatedServices: {
          set: t.relatedServiceSlugs.map((s) => ({ id: serviceIdBySlug[s] })).filter((c) => c.id),
        },
      },
    });

    await prisma.glossaryFaq.deleteMany({ where: { termId: created.id } });
    for (const [j, f] of (t.faqs ?? []).entries()) {
      await prisma.glossaryFaq.create({
        data: { termId: created.id, question: f.q, answer: f.a, order: j },
      });
    }
  }

  console.log("Seeding Marketing Pages (migrations/compare/pricing/assessments)…");
  const hubCounters: Record<string, number> = {};
  for (const p of marketingPages) {
    const order = hubCounters[p.hub] ?? 0;
    hubCounters[p.hub] = order + 1;

    const created = await prisma.marketingPage.upsert({
      where: { hub_slug: { hub: p.hub, slug: p.slug } },
      create: {
        type: p.type,
        hub: p.hub,
        slug: p.slug,
        name: p.name,
        metaTitle: p.metaTitle,
        metaDescription: p.metaDescription,
        heroQuestion: p.heroQuestion,
        heroAnswer: p.heroAnswer,
        imageUrl: p.imageUrl ?? null,
        sections: p.sections,
        relatedServiceSlugs: p.relatedServiceSlugs,
        published: p.published,
        order,
      },
      update: {
        type: p.type,
        name: p.name,
        metaTitle: p.metaTitle,
        metaDescription: p.metaDescription,
        heroQuestion: p.heroQuestion,
        heroAnswer: p.heroAnswer,
        imageUrl: p.imageUrl ?? null,
        sections: p.sections,
        relatedServiceSlugs: p.relatedServiceSlugs,
        published: p.published,
        order,
      },
    });

    await prisma.faq2.deleteMany({ where: { pageId: created.id } });
    for (const [j, f] of p.faqs.entries()) {
      await prisma.faq2.create({ data: { pageId: created.id, question: f.q, answer: f.a, order: j } });
    }
  }

  // --- Static-page FAQs (homepage, /about/, CT page, hub indexes) ---------
  // These have no parent row, so they're replaced per path rather than per
  // parent id — deleting the whole path first keeps removals in the seed
  // data from lingering in the database.
  console.log("Seeding static-page FAQs…");
  for (const group of staticPageFaqs) {
    await prisma.staticPageFaq.deleteMany({ where: { path: group.path } });
    for (const [j, f] of group.faqs.entries()) {
      await prisma.staticPageFaq.create({
        data: { path: group.path, question: f.q, answer: f.a, order: j },
      });
    }
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
