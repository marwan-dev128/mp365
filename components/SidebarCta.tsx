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
    <div className="relative overflow-hidden rounded-[var(--mp-radius-card)] bg-navy p-6 text-white border border-white/10">
      <div className="relative z-10">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan">
          {tag}
        </span>
        <p className="mb-2 font-display text-[16px] font-bold text-white">{title}</p>
        <p className="mb-5 text-[13.5px] leading-relaxed text-white/80">{body}</p>
        <Link
          href={ctaHref}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mp-lime px-4 py-2.5 text-sm font-bold text-mp-ink transition-all duration-200 hover:bg-mp-lime-hover"
        >
          <span>{ctaText}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
