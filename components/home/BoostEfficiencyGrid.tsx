import Image from "next/image";
import Link from "next/link";

import defaultData from "@/store/home/efficiency.json";

export interface EfficiencyCard {
  id: string;
  hasImage: boolean;
  image: string;
  imageAlt: string;
  imageType: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface BoostEfficiencyGridProps {
  title?: string;
  subtitle?: string;
  cards?: EfficiencyCard[];
}

const DEFAULT_CARDS: EfficiencyCard[] = defaultData.cards;

export function BoostEfficiencyGrid({
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  cards = DEFAULT_CARDS,
}: BoostEfficiencyGridProps = {}) {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-18">
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-bold leading-[1.06] tracking-[-0.035em] text-mp-petrol">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-mp-secondary">
              {subtitle}
            </p>
          )}
        </div>

      {/* ------------------------------------------------ 4-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-[28px] sm:rounded-[32px] border border-mp-border/70 bg-mp-parchment p-7 sm:p-8 flex flex-col justify-between min-h-[490px] transition-colors duration-200"
          >
            {card.hasImage ? (
              <div>
                {/* Visual Media Header */}
                <div className="relative h-[180px] sm:h-[190px] w-full rounded-[20px] overflow-hidden flex items-center justify-center">
                  {card.imageType === "cover" ? (
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center"
                    />
                  ) : (
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={240}
                      height={160}
                      className="max-h-[170px] w-auto object-contain"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-6 font-display text-[21px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.03em] text-mp-ink">
                  {card.title}
                </h3>
              </div>
            ) : (
              /* No-Image Card Variant: Big Title at Top */
              <div>
                <h3 className="font-display text-[26px] sm:text-[30px] font-bold leading-[1.14] tracking-[-0.03em] text-mp-ink">
                  {card.title}
                </h3>
              </div>
            )}

            <div>
              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-mp-secondary">
                {card.description}
              </p>

              {/* Action Button */}
              <div className="mt-6">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-mp-ink bg-transparent px-4 py-2 text-[12.5px] font-semibold text-mp-ink hover:bg-mp-petrol/[0.06] transition-colors"
                >
                  <span>{card.linkText}</span>
                  <span className="text-sm leading-none font-semibold">›</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
