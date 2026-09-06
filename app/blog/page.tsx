import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getBlogPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { parseBlogBody, readingTime } from "@/lib/blog";
import { stripInlineMarkup } from "@/lib/richtext";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Blog — Insights & Guides for Modern Enterprise Operations",
  description:
    "Practical guides on Microsoft 365 M&A migration, Dynamics 365, Power Platform governance, and cloud data architecture from the MP365 team.",
  path: "/blog/",
});

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
      <JsonLd
        data={collectionPageSchema({
          path: "/blog/",
          name: "MP365 Blog",
          description:
            "Practical guides on Microsoft 365 M&A migration, Dynamics 365, Power Platform governance, and cloud data architecture from the MP365 team.",
          items: blogPosts.map((p) => ({ name: p.title, path: `/blog/${p.slug}/` })),
        })}
      />

      {/* mp-styled Header Hero */}
      <section className="w-full relative bg-mp-parchment border-b border-mp-border pt-16 sm:pt-20 pb-14 sm:pb-18">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[12px] font-mono font-bold uppercase tracking-[0.18em] text-mp-muted mb-3">
              INSIGHTS &amp; GUIDES
            </p>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-mp-ink tracking-tight leading-[1.08]">
              MP365 Blog
            </h1>
            <p className="text-[16px] sm:text-[18px] text-mp-secondary leading-relaxed mt-4">
              Practical guides, real-world case studies, and engineering strategies for
              cloud migrations, ERP modernizations, and scalable digital operations.
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
