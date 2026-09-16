import Link from "next/link";
import { BlogPostCard, type BlogCardPost } from "./BlogPostCard";

/**
 * mp-styled Related Articles section for the foot of an article.
 */
export function RelatedArticles({ posts }: { posts: BlogCardPost[] }) {
  if (!posts.length) return null;

  return (
    <section aria-labelledby="related-articles-heading" className="border-t border-mp-border pt-14 sm:pt-16 pb-12">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center rounded-full border border-mp-border bg-mp-parchment/80 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-mp-petrol mb-3">
            <span>FURTHER READING</span>
          </div>
          <h2
            id="related-articles-heading"
            className="font-display text-[28px] sm:text-[34px] font-bold text-mp-petrol tracking-tight"
          >
            Related enterprise articles
          </h2>
        </div>
        <Link
          href="/blog/"
          className="text-[13px] font-mono font-bold uppercase tracking-wider text-mp-petrol hover:text-mp-petrol-2 hover:underline transition-colors inline-flex items-center gap-1"
        >
          <span>View all articles</span>
          <span className="text-base font-bold">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="flex">
            <BlogPostCard post={post} headingLevel={3} />
          </div>
        ))}
      </div>
    </section>
  );
}
