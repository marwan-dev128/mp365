import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getBlogPosts } from "@/lib/data";
import { planMetadata } from "@/lib/metadata";
import { getSitePage } from "@/lib/site-data";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { parseBlogBody, readingTime } from "@/lib/blog";
import { stripInlineMarkup } from "@/lib/richtext";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";

export const revalidate = 3600;

export const metadata = planMetadata("/blog/");

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  // Extract unique categories
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.clusterLabel))
  );

  const formattedPosts = blogPosts.map((post) => {
    const reading = readingTime(parseBlogBody(post.body));
    return {
      slug: post.slug,
      title: post.title,
      excerpt: stripInlineMarkup(post.excerpt),
      clusterLabel: post.clusterLabel,
      datePublished: post.datePublished,
      readingText: reading.text,
      readingIso: reading.iso,
      imageUrl: post.imageUrl,
      imageAlt: post.imageAlt,
    };
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema(getSitePage("/blog/").breadcrumbs)} />
      <JsonLd
        data={collectionPageSchema({
          path: "/blog/",
          name: getSitePage("/blog/").h1,
          description: getSitePage("/blog/").meta_description,
          items: blogPosts.map((p) => ({ name: p.title, path: `/blog/${p.slug}/` })),
        })}
      />

      {/* mp-styled Header Hero */}
      <section className="w-full relative bg-mp-parchment border-b border-mp-border pt-16 sm:pt-20 pb-14 sm:pb-18">
        <Container>
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-5 text-[12px] font-medium text-mp-muted">
              <Link href="/" className="hover:text-mp-ink hover:underline">
                Home
              </Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page" className="font-semibold text-mp-ink">
                Blog
              </span>
            </nav>
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-mp-muted mb-3">
              INSIGHTS &amp; GUIDES
            </p>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-mp-ink tracking-tight leading-[1.08]">
              {getSitePage("/blog/").h1}
            </h1>
            <p className="text-[16px] sm:text-[18px] text-mp-secondary leading-relaxed mt-4">
              Practical guides on Dynamics 365, Microsoft 365, Copilot and SharePoint from the
              MP-365 team, written for mid-size and enterprise teams.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content & Grid */}
      <Container className="py-12 sm:py-16">
        <BlogCategoryFilter
          posts={formattedPosts}
          categories={categories}
        />
      </Container>

      <CtaBand />
    </>
  );
}
