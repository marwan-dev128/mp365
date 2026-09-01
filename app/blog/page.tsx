import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getBlogPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { parseBlogBody, readingTime } from "@/lib/blog";
import { stripInlineMarkup } from "@/lib/richtext";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Blog — Microsoft 365, Dynamics 365 & Power Platform Insights",
  description:
    "Practical guides on Microsoft 365 M&A migration, Dynamics 365, Power Platform governance, and data governance from the MP365 team.",
  path: "/blog/",
});

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/blog/",
          name: "MP365 Blog",
          description:
            "Practical guides on Microsoft 365 M&A migration, Dynamics 365, Power Platform governance, and data governance from the MP365 team.",
          items: blogPosts.map((p) => ({ name: p.title, path: `/blog/${p.slug}/` })),
        })}
      />
      <PageHero
        eyebrow="Blog"
        h1="Practical guides, not marketing filler"
        breadcrumbs={[{ name: "Blog", path: "/blog/" }]}
      />
      <Container className="pt-14">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            // Same helper the article template uses, so the minutes advertised
            // on the card and the minutes shown in the byline can never
            // disagree.
            const reading = readingTime(parseBlogBody(post.body));
            return (
              <li key={post.slug} className="flex">
                <BlogPostCard
                  post={{
                    slug: post.slug,
                    title: post.title,
                    excerpt: stripInlineMarkup(post.excerpt),
                    clusterLabel: post.clusterLabel,
                    datePublished: post.datePublished,
                    readingText: reading.text,
                    readingIso: reading.iso,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
