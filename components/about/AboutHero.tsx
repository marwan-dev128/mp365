import Link from "next/link";
import defaultData from "@/store/about.json";

function MicrosoftLogo({ className = "h-3.5 w-3.5" }: { className?: string }) {
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
    <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      {/* Background ambient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 h-[500px] w-[900px] rounded-full bg-mp-petrol/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header content */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow badge with Microsoft logo */}
          <div className="inline-flex items-center gap-2 rounded-full border border-mp-petrol/20 bg-mp-parchment px-4 py-1.5 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-petrol shadow-2xs mb-6 sm:mb-8">
            <MicrosoftLogo className="h-3.5 w-3.5 shrink-0" />
            <span>{badge}</span>
          </div>

          <h1 className="font-display text-[clamp(36px,5.5vw,62px)] font-black leading-[1.05] tracking-[-0.035em] text-mp-petrol whitespace-pre-line">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] sm:text-[17.5px] leading-[1.65] text-mp-secondary font-normal">
            {subtitle}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-mp-lime px-7 py-3.5 text-sm font-semibold text-mp-ink hover:bg-mp-lime-hover shadow-2xs transition-colors"
            >
              <span>Book a consultation</span>
              <span className="text-base font-bold leading-none">›</span>
            </Link>
            <Link
              href="/case-studies/"
              className="inline-flex items-center gap-2 rounded-full border border-mp-ink bg-transparent px-6 py-3.5 text-sm font-semibold text-mp-ink hover:bg-mp-petrol/[0.06] transition-colors"
            >
              <span>Explore client stories</span>
              <span className="text-base font-bold leading-none">›</span>
            </Link>
          </div>
        </div>

        {/* 4-Stat Ribbon */}
        {stats && stats.length > 0 && (
          <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="rounded-[24px] sm:rounded-[28px] border border-mp-border bg-mp-parchment p-6 sm:p-7 text-center transition-transform duration-300 hover:-translate-y-1 shadow-2xs"
              >
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="font-display text-[32px] sm:text-[40px] font-black tracking-[-0.03em] text-mp-petrol leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-mp-ink">
                    {s.unit}
                  </span>
                </div>
                <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.5] text-mp-secondary font-normal">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
