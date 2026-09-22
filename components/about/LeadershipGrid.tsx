import Image from "next/image";
import Link from "next/link";
import type { Person } from "@prisma/client";

interface LeadershipGridProps {
  people: Person[];
}

const PERSON_DETAILS: Record<
  string,
  {
    initials: string;
    focusAreas: string[];
    bio: string;
    quote?: string;
  }
> = {
  "mp365-team": {
    initials: "MP",
    focusAreas: [
      "Dynamics 365 BC & F&O",
      "Power Platform Governance",
      "Custom Data Integrations",
      "Scalable Identity",
    ],
    bio: "Principal architects and enterprise engineers leading technical architecture, solution integrity, and enterprise engineering across all client engagements.",
    quote: "Architectural rigor and automated validation ensure seamless cloud transformations without business disruption.",
  },
};

export function LeadershipGrid({ people }: LeadershipGridProps) {
  const leader = people.find((p) => p.slug === "mp365-team") || people[0];
  const extra = (leader && PERSON_DETAILS[leader.slug]) || {
    initials: "MP",
    focusAreas: ["Dynamics 365", "Power Platform", "Identity"],
    bio: leader ? leader.credentials : "Enterprise Solutions Architects.",
    quote: "Architectural rigor and automated validation ensure seamless cloud transformations without business disruption.",
  };

  const name = leader ? leader.name : "MP365 Engineering Team";
  const role = leader ? leader.role : "Enterprise Solutions Architects";

  return (
    <section className="w-full relative bg-white pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-8" data-component="featureTabsShowcase">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 feature-tabs-showcase">
        {/* Header */}
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center mb-10 sm:mb-14" data-component="platformShowcaseHeader">
          <div className="inline-flex items-center rounded-full border border-mp-border bg-mp-parchment/80 px-3.5 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted mb-4">
            <span>TECHNICAL LEADERSHIP</span>
          </div>
          <h2 className="font-display text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-mp-petrol text-center">
            Engineered from the top down
          </h2>
          <p className="mt-4 sm:mt-5 max-w-[620px] text-[15px] sm:text-[16px] leading-[1.55] text-mp-secondary font-normal text-center">
            Our leadership team remains directly involved in client architecture and delivery. No layers of account managers between you and the experts.
          </p>
        </div>

        {/* Showcase Panel Card (Without tabs) */}
        <div className="bg-[#EAE4D8] relative overflow-hidden rounded-[24px] md:rounded-[28px] p-4 md:p-0">
          <div className="showcase-panel flex flex-col-reverse md:flex-row md:gap-10 lg:gap-[100px] md:h-[360px] lg:h-[380px] overflow-hidden">
            {/* Left Content */}
            <div className="flex flex-col justify-end gap-5 sm:gap-6 w-full mt-4 md:mt-0 p-4 sm:p-6 md:p-8 md:pt-8 lg:pt-10 md:w-[440px] lg:w-[460px] shrink-0">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mp-petrol text-mp-mint font-display font-black text-lg shadow-xs shrink-0 border border-mp-petrol-deep">
                  {extra.initials}
                </div>
                <div>
                  <h3 className="font-display text-[22px] sm:text-[24px] font-extrabold text-mp-ink leading-tight">
                    {name}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.1em] text-mp-petrol mt-0.5">
                    {role}
                  </p>
                </div>
              </div>

              <p className="text-mp-secondary text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.6]">
                {extra.bio}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {extra.focusAreas.map((area, aIdx) => (
                  <span
                    key={aIdx}
                    className="inline-flex items-center rounded-full bg-white/80 border border-mp-border/80 px-2.5 py-0.5 text-[11px] font-medium text-mp-petrol"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-mp-ink hover:text-mp-petrol group self-start"
                >
                  <span className="underline decoration-1 underline-offset-4 font-semibold">Book a consultation</span>
                  <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </Link>
              </div>
            </div>

            {/* Right Video Visual */}
            <div className="mt-4 md:mt-0 flex-1 flex items-center md:items-end md:justify-end overflow-hidden h-full">
              <video
                src="/videos/mp365/microsoft-365-migration-console.mp4"
                poster="/images/mp365/posters/microsoft-365-migration-console.webp"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="object-contain md:object-cover max-h-full w-auto md:w-full rounded-[18px] md:rounded-none md:rounded-tl-[24px] shadow-sm md:shadow-none"
              />
            </div>
          </div>
        </div>

        {/* Proof Bar Panels */}
        <div className="proof-bar-panels bg-mp-parchment p-5 sm:p-6 md:p-8 mt-3 sm:mt-4 md:mt-5 rounded-[24px] md:rounded-[28px]">
          <div className="proof-bar-panel flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 shrink-0">
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="flex flex-col justify-center border-l border-solid border-mp-border pl-6 sm:pl-8">
                  <span className="font-display text-[30px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-mp-petrol leading-none whitespace-nowrap">
                    50+
                  </span>
                  <span className="mt-1 text-[11.5px] sm:text-[12px] text-mp-muted whitespace-nowrap">
                    peer-reviewed papers
                  </span>
                </div>
                <div className="flex flex-col justify-center border-l border-solid border-mp-border pl-6 sm:pl-8">
                  <span className="font-display text-[30px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-mp-petrol leading-none whitespace-nowrap">
                    20+
                  </span>
                  <span className="mt-1 text-[11.5px] sm:text-[12px] text-mp-muted whitespace-nowrap">
                    software products
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 flex-1 lg:border-l lg:border-mp-border lg:pl-8">
              <div className="flex flex-col max-w-xl">
                <p className="text-mp-ink text-[13px] sm:text-[13.5px] leading-[1.5]">
                  &ldquo;{extra.quote}&rdquo;
                </p>
                <span className="text-mp-muted text-[12px] mt-1">
                  {name} — {role}
                </span>
              </div>
              <div className="shrink-0">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-[13px] sm:text-[13.5px] font-semibold text-mp-ink hover:text-mp-petrol group whitespace-nowrap self-start md:self-center"
                >
                  <span className="underline decoration-1 underline-offset-4">Request scoping consultation</span>
                  <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
