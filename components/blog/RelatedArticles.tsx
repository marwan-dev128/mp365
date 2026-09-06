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
          <p className="text-[11.5px] font-mono font-bold uppercase tracking-[0.16em] text-mp-muted mb-2">
            FURTHER READING
          </p>
          <h2
            id="related-articles-heading"
            className="text-[28px] sm:text-[32px] font-bold text-mp-ink tracking-tight"
          >
            Related articles
          </h2>
        </div>
        <Link
          href="/blog/"
          className="text-[13px] font-mono font-bold uppercase tracking-wider text-mp-ink hover:text-mp-muted underline transition-colors"
        >
          View all articles &rarr;
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
