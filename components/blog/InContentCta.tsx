import Link from "next/link";
import type { InContentCta as InContentCtaType } from "@/lib/blog-cta";
import { ArrowUpRight } from "@/components/ui/Icons";

function CtaIcon({ type }: { type: InContentCtaType["iconType"] }) {
  switch (type) {
    case "calculator":
      return (
        <svg className="h-4 w-4 shrink-0 text-mp-petrol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="16" y1="14" x2="16" y2="18" />
          <path d="M16 10h.01" />
          <path d="M12 10h.01" />
          <path d="M8 10h.01" />
          <path d="M12 14h.01" />
          <path d="M8 14h.01" />
          <path d="M12 18h.01" />
          <path d="M8 18h.01" />
        </svg>
      );
    case "assessment":
      return (
        <svg className="h-4 w-4 shrink-0 text-mp-petrol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "checklist":
      return (
        <svg className="h-4 w-4 shrink-0 text-mp-petrol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 11 3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
    case "matrix":
      return (
        <svg className="h-4 w-4 shrink-0 text-mp-petrol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      );
    case "shield":
      return (
        <svg className="h-4 w-4 shrink-0 text-mp-petrol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    default:
      return (
        <svg className="h-4 w-4 shrink-0 text-mp-petrol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
}

export function InContentCta({ cta }: { cta: InContentCtaType }) {
  return (
    <aside
      aria-label="Related interactive tool and consultation"
      className="relative overflow-hidden rounded-[24px] border border-mp-petrol/20 bg-gradient-to-br from-mp-parchment/90 via-white to-mp-parchment/70 p-6 sm:p-8 md:p-9 my-10 shadow-xs before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-mp-petrol"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-48 w-48 -translate-y-12 translate-x-12 rounded-full bg-mp-mint/15 blur-2xl"
      />

      <div className="relative z-10 flex flex-col items-start">
        {/* Eyebrow Badge with Contextual Icon */}
        <div className="inline-flex items-center gap-2 rounded-full border border-mp-petrol/20 bg-white/90 px-3 py-1 text-[11px] font-mono font-bold tracking-[0.12em] uppercase text-mp-petrol shadow-2xs">
          <CtaIcon type={cta.iconType} />
          <span>{cta.badge}</span>
        </div>

        {/* Action Title */}
        <h3 className="font-display text-[21px] sm:text-[25px] font-extrabold text-mp-petrol tracking-tight leading-[1.22] mt-3.5 mb-2 text-balance">
          {cta.title}
        </h3>

        {/* Narrative Description */}
        <p className="text-[14.5px] sm:text-[15.5px] leading-[1.65] text-mp-secondary font-normal max-w-2xl mb-6 text-pretty">
          {cta.description}
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
          <Link
            href={cta.primaryHref}
            className="inline-flex items-center gap-2 rounded-full bg-mp-petrol px-6 py-3 text-[13.5px] sm:text-[14px] font-bold text-mp-mint hover:bg-mp-petrol-deep transition-all shadow-xs hover:scale-[1.01] mp-press"
          >
            <span>{cta.primaryText}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {cta.secondaryHref && cta.secondaryText && (
            <Link
              href={cta.secondaryHref}
              className="text-[12.5px] sm:text-[13px] font-mono font-medium text-mp-muted hover:text-mp-ink underline underline-offset-4 decoration-mp-border hover:decoration-mp-ink transition-colors"
            >
              {cta.secondaryText}
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
