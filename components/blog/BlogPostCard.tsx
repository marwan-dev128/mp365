import Link from "next/link";
import { ArrowUpRight, Clock } from "@/components/ui/Icons";
import { stripInlineMarkup } from "@/lib/richtext";

export type BlogCardPost = {
  slug: string;
  title: string;
  /**
   * Already flattened by the caller (stripInlineMarkup). The card is itself a
   * <Link>, so <RichText/> cannot render here — a nested <a> is invalid HTML —
   * which makes plain text the only valid contract.
   */
  excerpt: string;
  clusterLabel: string;
  datePublished: Date;
  readingText?: string;
  readingIso?: string;
};

/**
 * The blog teaser card, shared by the /blog/ index and the related-articles
 * rail at the foot of every post — so a change to card typography, hover
 * behaviour or metadata lands in both places at once.
 *
 * `headingLevel` exists because the same card sits under an <h1> on the index
 * (where <h2> is correct) and under an <h2> in the related rail (where <h3>
 * is). Hard-coding <h2> would break the outline on every article page.
 */
export function BlogPostCard({
  post,
  headingLevel = 2,
}: {
  post: BlogCardPost;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group mp-press flex h-full w-full flex-col rounded-[var(--mp-radius-card)] border border-line bg-surface-card p-7 shadow-mp-sm hover:-translate-y-1 hover:border-[var(--mp-border-azure)] hover:shadow-mp-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-azure">
          {post.clusterLabel}
        </p>
        <span
          aria-hidden="true"
          className="mp-card-arrow flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface-light text-navy"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <Heading className="mt-3 font-display text-[18px] font-extrabold leading-snug text-navy">
        {post.title}
      </Heading>
      {/* Flattened again at the render site — idempotent, and it keeps the
          guarantee local rather than resting on every caller remembering. */}
      <p className="mt-3 flex-1 text-[13.5px] leading-[1.65] text-ink-2">
        {stripInlineMarkup(post.excerpt)}
      </p>
      <p className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 border-t border-line pt-4 text-[12px] font-medium text-muted">
        <time dateTime={post.datePublished.toISOString()}>
          {post.datePublished.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {post.readingText && (
          <>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <time dateTime={post.readingIso}>{post.readingText}</time>
            </span>
          </>
        )}
      </p>
    </Link>
  );
}
