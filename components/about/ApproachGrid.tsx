import Image from "next/image";
import Link from "next/link";
import defaultData from "@/store/about.json";

export interface ApproachCard {
  tag: string;
  title: string;
  description: string;
  highlight: string;
  image?: string;
  href?: string;
}

export interface ApproachGridProps {
  title?: string;
  subtitle?: string;
  cards?: ApproachCard[];
}

const PILLAR_IMAGES = [
  {
    image: "/images/mp365/discovery/tenant-migration-due-diligence.webp",
    href: "/contact/",
    linkText: "Speak with an architect",
  },
  {
    image: "/images/services/ma-tenant-migration.jpg",
    href: "/services/ma-tenant-migration/",
    linkText: "View M&A cutover framework",
  },
  {
    image: "/images/mp365/case-studies/carlisle-construction-microsoft-365.webp",
    href: "/case-studies/",
    linkText: "Explore enterprise outcomes",
  },
];

export function ApproachGrid({
  title = defaultData.philosophy.title,
  subtitle = defaultData.philosophy.subtitle,
  cards = defaultData.philosophy.cards,
}: ApproachGridProps = {}) {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-mp-border/50">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center rounded-full border border-mp-border bg-mp-parchment/80 px-3.5 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted mb-4">
            <span>OUR PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-[clamp(34px,5vw,56px)] font-bold leading-[1.06] tracking-[-0.035em] text-mp-petrol text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-[15.5px] sm:text-[16.5px] leading-[1.65] text-mp-secondary">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3-Card Static Grid (Same Shape as Why work with MP365 without slider) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card, idx) => {
            const meta = PILLAR_IMAGES[idx] || PILLAR_IMAGES[0];

            return (
              <div
                key={idx}
                className="group rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between bg-mp-parchment border border-mp-border shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-mp-petrol/30"
              >
                <div>
                  {/* Top Media Graphic Container */}
                  <div className="relative h-[200px] sm:h-[220px] w-full rounded-[20px] overflow-hidden flex items-center justify-center bg-white border border-mp-border/60 mb-6">
                    <Image
                      src={meta.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 370px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Category Tag Pill */}
                  <div className="mb-3">
                    <span className="inline-block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-mp-petrol bg-white border border-mp-petrol/20 px-3 py-1 rounded-full shadow-2xs">
                      {card.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display text-[21px] sm:text-[23px] font-bold leading-[1.2] tracking-[-0.03em] text-mp-ink group-hover:text-mp-petrol transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[13.5px] sm:text-[14px] leading-[1.62] text-mp-secondary font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Pill Link Button */}
                <div className="mt-6 pt-4 border-t border-mp-border/60">
                  <Link
                    href={meta.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-mp-ink bg-transparent px-4 py-2 text-[12.5px] font-semibold text-mp-ink hover:bg-mp-petrol hover:text-white hover:border-mp-petrol transition-all"
                  >
                    <span>{card.highlight}</span>
                    <span className="text-sm leading-none font-semibold">›</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
