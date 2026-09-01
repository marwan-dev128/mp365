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
  tag = "Direct Guidance",
  title,
  body,
  ctaText,
  ctaHref = "/contact/",
}: {
  tag?: string;
  title: string;
  body: string;
  ctaText: string;
  ctaHref?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[var(--mp-radius-card)] bg-navy p-6 text-white shadow-mp-card">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-azure/30 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-cyan/20 blur-2xl"
      />
      <div className="relative z-10">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan backdrop-blur-xs">
          {tag}
        </span>
        <p className="mb-2 font-display text-[16px] font-bold text-white">{title}</p>
        <p className="mb-5 text-[13.5px] leading-relaxed text-white/80">{body}</p>
        <Link
          href={ctaHref}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-azure px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(0,98,255,0.35)] transition-all duration-200 hover:bg-azure-hover hover:shadow-[0_6px_20px_rgba(0,98,255,0.45)]"
        >
          <span>{ctaText}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
