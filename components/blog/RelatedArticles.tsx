import Link from "next/link";
import { SectionTag } from "@/components/ui/SectionTag";
import { ArrowUpRight } from "@/components/ui/Icons";
import { BlogPostCard, type BlogCardPost } from "./BlogPostCard";

/**
 * Topic-relevant further reading at the foot of an article.
 *
 * Ordering is decided in lib/data.ts (same cluster first, then most recent) —
 * not random, and never the current post. Renders nothing when the blog has
 * no other posts to offer, which is the correct behaviour for a one-post
 * cluster rather than padding the rail with unrelated links.
 */
export function RelatedArticles({ posts }: { posts: BlogCardPost[] }) {
  if (!posts.length) return null;

  return (
    <section aria-labelledby="related-articles" className="border-t border-line pt-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionTag>Keep reading</SectionTag>
          <h2
            id="related-articles"
            className="font-display text-[26px] font-extrabold text-navy sm:text-[28px]"
          >
            Related articles
          </h2>
        </div>
        <Link
          href="/blog/"
          className="group inline-flex items-center gap-1.5 text-sm font-bold text-azure hover:text-azure-hover"
        >
          All articles
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug} className="flex">
            <BlogPostCard post={post} headingLevel={3} />
          </li>
        ))}
      </ul>
    </section>
  );
}
