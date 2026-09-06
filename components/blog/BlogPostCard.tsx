import Link from "next/link";
import Image from "next/image";
import { stripInlineMarkup } from "@/lib/richtext";

export type BlogCardPost = {
  slug: string;
  title: string;
  excerpt: string;
  clusterLabel: string;
  datePublished: Date;
  readingText?: string;
  readingIso?: string;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

/**
 * mp-styled Blog Post Card.
 * Matches mp's card design:
 * - aspect-[372/204] media with rounded corners
 * - hover background overlay with smooth transition
 * - uppercase mono category tag
 * - bold headline and 2-line excerpt
 * - date & reading time metadata
 */
export function BlogPostCard({
  post,
  headingLevel = 2,
}: {
  post: BlogCardPost;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  const dateStr = post.datePublished.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="group relative flex h-full flex-col rounded-[20px] md:rounded-[24px] transition-colors duration-200 bg-brand-card ">
      <Link
        href={`/blog/${post.slug}/`}
        className="flex flex-col flex-grow gap-5 p-5 md:p-6 no-underline"
      >
        {/* Aspect ratio 372/204 image container */}
        <div className="relative aspect-[372/204] w-full overflow-hidden rounded-[14px] md:rounded-[18px] bg-mp-parchment border border-mp-border/60">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 372px"
              className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-mp-parchment via-mp-card to-mp-border p-6 overflow-hidden">
              {/* Abstract decorative geometry */}
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-mp-ink/5 transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute -left-6 -top-6 w-24 h-24 rounded-full bg-mp-lime/25 blur-xl" />
              <div className="relative z-10 flex flex-col items-center text-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-mp-muted bg-white/80 border border-mp-border px-2.5 py-1 rounded-full">
                  {post.clusterLabel}
                </span>
                <span className="font-display font-bold text-[13px] text-mp-ink/70 line-clamp-1 max-w-[240px]">
                  {post.title}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content details */}
        <div className="flex flex-col gap-2.5 flex-1">
          <Heading className="text-balance text-[18px] md:text-[20px] font-bold text-mp-ink tracking-tight leading-[1.3] group-hover:text-mp-ink transition-colors line-clamp-2">
            {post.title}
          </Heading>
          <p className="text-[14px] leading-relaxed text-mp-secondary line-clamp-2 font-normal">
            {stripInlineMarkup(post.excerpt)}
          </p>
        </div>
      </Link>

      {/* Category Pill & Meta */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 pb-5 md:px-6 md:pb-6 pt-1 ">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.1em] text-accent bg-accent-light transition-colors px-3 py-1 rounded-full">
          {post.clusterLabel}
        </span>
        <div className="flex items-center gap-2 text-[11.5px] font-mono text-mp-muted">
          <time dateTime={post.datePublished.toISOString()}>{dateStr}</time>
          {post.readingText && (
            <>
              <span>•</span>
              <time dateTime={post.readingIso}>{post.readingText}</time>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
