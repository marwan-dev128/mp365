import Link from "next/link";
import defaultData from "@/store/about.json";

function MicrosoftLogo({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="9" height="9" fill="#F25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
      <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
      <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}

export interface AboutHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  stats?: {
    value: string;
    unit: string;
    label: string;
  }[];
}

export function AboutHero({
  badge = defaultData.badge,
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  stats = defaultData.stats,
}: AboutHeroProps = {}) {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background ambient mesh glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 h-[600px] w-[1000px] rounded-full bg-gradient-to-tr from-mp-petrol/10 via-mp-mint/15 to-transparent blur-3xl opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-1/2 h-[350px] w-[350px] rounded-full bg-mp-saffron/10 blur-2xl opacity-60"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header content */}
        <div className="mx-auto max-w-6xl text-center">
          {/* Eyebrow badge with Microsoft logo */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-mp-petrol/20 bg-mp-parchment/90 backdrop-blur-md px-4 py-2 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-mp-petrol shadow-2xs mb-6 sm:mb-8 transition-transform hover:scale-[1.02]">
            <MicrosoftLogo className="h-4 w-4 shrink-0" />
            <span>{badge}</span>
          </div>

          <h1 className="font-display text-[clamp(38px,6vw,68px)] font-black leading-[1.04] tracking-[-0.035em] text-mp-petrol whitespace-pre-line text-balance">
            {title}
          </h1>

          <p className="mx-auto mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-mp-secondary font-normal">
            {subtitle}
          </p>

          {/* Identity Tag Chips */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {[
              "Independent Solutions Partner",
              "Principal-Led Engineering",
              "20+ Years Platform Practice",
              "Fixed-Scope Delivery",
              "Direct Architect Access",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full bg-mp-petrol/[0.05] border border-mp-petrol/10 px-3.5 py-1 text-[12px] font-medium text-mp-petrol"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2.5 rounded-full bg-mp-saffron px-7 py-3.5 text-sm font-bold text-mp-ink hover:bg-mp-saffron-hover shadow-sm transition-all mp-press hover:scale-[1.02]"
            >
              <span>Book a consultation</span>
              <span className="text-base font-bold leading-none">›</span>
            </Link>
            <Link
              href="/case-studies/"
              className="inline-flex items-center gap-2.5 rounded-full border border-mp-ink bg-white/80 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-mp-ink hover:bg-mp-petrol/[0.06] transition-all mp-press"
            >
              <span>Explore client stories</span>
              <span className="text-base font-bold leading-none">›</span>
            </Link>
          </div>
        </div>

        {/* Command Center Interactive Preview Plate */}
        <div className="mt-14 sm:mt-16 mx-auto max-w-5xl rounded-[28px] sm:rounded-[36px] border border-mp-border bg-mp-parchment/80 p-6 sm:p-8 backdrop-blur-md shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-mp-border/60">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mp-petrol text-mp-mint font-bold text-sm">
                MP
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-mp-ink">
                  Modern Partners 365 Practice Profile
                </h3>
                <p className="text-xs text-mp-muted uppercase tracking-wider">
                  Principal-Led Engineering • 100% In-House Architecture • High-Stakes Delivery
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="inline-flex items-center rounded-full bg-white border border-mp-border px-3 py-1 text-mp-petrol">
                Zero-Downtime Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mp-petrol text-white px-3 py-1">
                Day-1 TSA Exit Ready
              </span>
            </div>
          </div>

          {/* 4-Stat Cards Ribbon */}
          {stats && stats.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="group min-w-0 overflow-hidden rounded-[20px] sm:rounded-[24px] border border-mp-border/80 bg-white p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-mp-petrol/30 hover:shadow-sm flex flex-col justify-between"
                >
                  <div className="flex flex-col items-center justify-center gap-1 min-w-0">
                    <span className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-black tracking-[-0.03em] text-mp-petrol leading-tight group-hover:text-mp-petrol-2 transition-colors break-words max-w-full">
                      {s.value}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-mp-ink break-words max-w-full">
                      {s.unit}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[12px] sm:text-[13px] leading-[1.45] text-mp-secondary font-medium break-words text-balance">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
