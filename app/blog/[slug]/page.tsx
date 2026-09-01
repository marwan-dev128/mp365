import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 3600;

// The route is deliberately thin: everything that makes an article an article
// lives in <BlogPostLayout/> (components/blog/), so improving the template
// improves every existing and future post at once. Nothing in this file — or
// in that component — branches on a particular slug.

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}/`,
    noindex: !post.published,
    // og:type=article plus the published/modified/author/section properties,
    // all straight from the row — this is what makes a shared link render as
    // an editorial card instead of a generic site card.
    article: {
      publishedTime: post.datePublished.toISOString(),
      modifiedTime: post.dateModified.toISOString(),
      authors: [post.author.name],
      section: post.clusterLabel,
    },
    // The article's own hero becomes its social card. A post without one
    // falls back to the site's branded card, as every post did before.
    ...(post.imageUrl ? { imagePath: post.imageUrl } : {}),
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostLayout post={post} />;
}
