import Link from "next/link";
import defaultData from "@/store/about.json";

export interface WhoWeAreProps {
  badge?: string;
  title?: string;
  lead?: string;
  story?: string[];
  quote?: string;
  quoteLabel?: string;
  pillars?: {
    tag: string;
    title: string;
    desc: string;
  }[];
}

export function WhoWeAre({
  badge = defaultData.whoWeAre.badge,
  title = defaultData.whoWeAre.title,
  lead = defaultData.whoWeAre.lead,
  story = defaultData.whoWeAre.story,
  quote = defaultData.whoWeAre.quote,
  quoteLabel = defaultData.whoWeAre.quoteLabel,
  pillars = defaultData.whoWeAre.pillars,
}: WhoWeAreProps = {}) {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-24 border-t border-mp-border/60">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center rounded-full border border-mp-petrol/20 bg-white px-3.5 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-petrol mb-4 shadow-2xs">
            <span>{badge}</span>
          </div>
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-mp-petrol text-balance">
            {title}
          </h2>
          {lead && (
            <p className="mx-auto mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.6] text-mp-secondary font-medium">
              {lead}
            </p>
          )}
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Narrative Story & Pull Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[24px] sm:rounded-[28px] border border-mp-border/80 bg-white p-6 sm:p-8 md:p-10 shadow-xs">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-[11.5px] font-mono font-bold uppercase tracking-wider text-mp-petrol">
                <span className="h-2 w-2 rounded-full bg-mp-mint" />
                <span>Our Story & Purpose</span>
              </div>
              {story.map((text, idx) => (
                <p
                  key={idx}
                  className="text-[15px] sm:text-[16px] leading-[1.75] text-mp-secondary font-normal"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Pull Quote Plate */}
            <div className="mt-8 rounded-[18px] border border-mp-border/80 bg-mp-parchment/60 p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-2 right-4 text-mp-petrol/10 text-6xl font-serif font-black select-none pointer-events-none">
                “
              </div>
              <p className="relative z-10 text-[14.5px] sm:text-[15.5px] font-medium leading-[1.65] text-mp-ink italic">
                {quote}
              </p>
              <div className="relative z-10 mt-3 flex items-center gap-2 text-[12px] font-mono font-bold text-mp-petrol uppercase tracking-wider">
                <span>— {quoteLabel}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Foundational Identity Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col justify-center rounded-[22px] sm:rounded-[24px] border border-mp-border/80 bg-white p-6 sm:p-7 transition-all hover:border-mp-petrol/40 hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10.5px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-mp-petrol bg-mp-parchment px-2.5 py-0.5 rounded-full border border-mp-border/60">
                    {pillar.tag}
                  </span>
                  <span className="text-xs font-mono font-semibold text-mp-muted group-hover:text-mp-petrol transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-mp-ink group-hover:text-mp-petrol transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[13.5px] sm:text-[14px] leading-[1.6] text-mp-secondary font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}

            {/* Quick Action Link */}
            <div className="rounded-[20px] border border-dashed border-mp-border p-4 sm:p-5 text-center bg-mp-parchment/30">
              <span className="text-xs font-mono text-mp-muted mr-2">Need direct architect scoping?</span>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-mp-petrol hover:underline"
              >
                <span>Speak with an architect</span>
                <span>›</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
