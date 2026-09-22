import Link from "next/link";
import { ArrowUpRight } from "./ui/Icons";

/**
 * The navy conversion card used in page sidebars.
 *
 * Extracted from app/services/[slug]/page.tsx, where this markup was inline,
 * so the blog template and the service template share one implementation
 * rather than drifting into two near-identical navy cards.
 *
 * One card, one primary action, by design — a sidebar with competing CTAs
 * converts worse than a sidebar with one.
 */
export function SidebarCta({
  tag = "Migration guidance",
  title = "Working to a Day-1 or TSA-exit date?",
  body = "Tell us the deal timeline and we will tell you whether the migration plan fits it.",
  ctaText = "Talk to a migration lead",
  ctaHref = "/contact/",
}: {
  tag?: string;
  title?: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-mp-petrol p-6 sm:p-7 text-white border border-mp-petrol-deep shadow-xs">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-mp-mint/10 blur-2xl"
      />
      <div className="relative z-10">
        <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-mp-mint/25 bg-mp-mint/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-mp-mint">
          {tag}
        </span>
        <p className="mb-2.5 font-display text-[17px] sm:text-[18px] font-bold leading-snug text-white">
          {title}
        </p>
        <p className="mb-6 text-[13.5px] leading-relaxed text-white/85">
          {body}
        </p>
        <Link
          href={ctaHref}
          className="styled-button-with-overlay group inline-flex w-full items-center justify-center gap-2 rounded-full bg-mp-lime px-5 py-3 text-sm font-bold text-mp-ink transition-all duration-200 hover:bg-mp-lime-hover shadow-2xs cursor-pointer"
        >
          <span>{ctaText}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
