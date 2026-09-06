import defaultData from "@/store/contact.json";

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

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export interface ContactHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  phoneDisplay?: string;
  phoneHref?: string;
}

export function ContactHero({
  badge = defaultData.badge,
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  phoneDisplay = defaultData.phoneDisplay,
  phoneHref = defaultData.phoneHref,
}: ContactHeroProps = {}) {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20">
      {/* Background ambient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 h-[500px] w-[900px] rounded-full bg-mp-petrol/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 text-center">
        {/* Eyebrow badge with Microsoft logo */}
        <div className="inline-flex items-center gap-2 rounded-full border border-mp-petrol/20 bg-mp-parchment px-4 py-1.5 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-petrol shadow-2xs mb-6 sm:mb-8">
          <MicrosoftLogo className="h-3.5 w-3.5 shrink-0" />
          <span>{badge}</span>
        </div>

        <h1 className="font-display text-[clamp(36px,5.5vw,60px)] font-black leading-[1.06] tracking-[-0.035em] text-mp-petrol whitespace-pre-line">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[16px] sm:text-[17.5px] leading-[1.65] text-mp-secondary font-normal">
          {subtitle}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={phoneHref}
            className="group/phone inline-flex items-center gap-2.5 rounded-full bg-mp-petrol px-6 py-3 text-sm font-semibold text-mp-mint hover:bg-mp-petrol-2 shadow-2xs transition-all duration-200"
          >
            <PhoneIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/phone:-rotate-12" />
            <span>Call direct: {phoneDisplay}</span>
          </a>
          <span className="text-xs font-semibold text-mp-muted uppercase tracking-wider hidden sm:inline">
            · Mon–Fri 8am–6pm EST
          </span>
        </div>
      </div>
    </section>
  );
}
