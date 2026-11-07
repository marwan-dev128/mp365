// Seeds what the database still owns: site settings, people, blog posts and
// blog CTAs. Page copy lives in content/. Safe to re-run: rows are upserted by
// slug, and posts removed from the seed are deleted.
import "dotenv/config";
import { BlogCluster } from "@prisma/client";
import { prisma } from "../lib/db";
import { site } from "./seed-data/site";
import { blogPosts } from "./seed-data/blog";
import { blogClusterCtas } from "./seed-data/blog-cluster-ctas";

const CLUSTER_MAP: Record<string, BlogCluster> = {
  "M&A Migration": BlogCluster.MAMigration,
  "Dynamics 365": BlogCluster.Dynamics365,
  "Power Platform": BlogCluster.PowerPlatform,
  "Data Governance": BlogCluster.DataGovernance,
  "Copilot & AI": BlogCluster.CopilotAI,
};

async function main() {
  console.log("Seeding SiteSettings + People…");
  const settings = {
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
  };
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: { id: 1, ...settings },
    update: settings,
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

  console.log("Seeding Blog Posts…");
  const stale = await prisma.blogPost.findMany({
    where: { slug: { notIn: blogPosts.map((p) => p.slug) } },
    select: { id: true },
  });
  await prisma.faq.deleteMany({ where: { blogPostId: { in: stale.map((p) => p.id) } } });
  await prisma.blogPost.deleteMany({ where: { id: { in: stale.map((p) => p.id) } } });

  for (const p of blogPosts) {
    const fields = {
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
    };
    const created = await prisma.blogPost.upsert({
      where: { slug: p.slug },
      create: { slug: p.slug, ...fields },
      update: fields,
    });
    await prisma.faq.deleteMany({ where: { blogPostId: created.id } });
    for (const [j, f] of (p.faqs ?? []).entries()) {
      await prisma.faq.create({
        data: { blogPostId: created.id, question: f.q, answer: f.a, order: j },
      });
    }
  }

  await prisma.person.deleteMany({
    where: { slug: { notIn: site.people.map((p) => p.slug) } },
  });

  console.log("Seeding blog cluster CTAs…");
  for (const c of blogClusterCtas) {
    const fields = {
      tag: c.tag,
      title: c.title,
      body: c.body,
      ctaText: c.ctaText,
      ctaHref: c.ctaHref ?? "/contact/",
    };
    await prisma.blogClusterCta.upsert({
      where: { cluster: CLUSTER_MAP[c.cluster] },
      create: { cluster: CLUSTER_MAP[c.cluster], ...fields },
      update: fields,
    });
  }

  // The old redirects pointed at pages that no longer exist. The current plan
  // lives in content/redirects.ts; this table is only for later additions.
  console.log("Clearing old redirects…");
  await prisma.oldSlug.deleteMany({});

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
