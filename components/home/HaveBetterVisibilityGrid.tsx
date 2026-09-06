import Image from "next/image";
import Link from "next/link";
import defaultData from "@/store/home/visibility.json";

export interface VisibilityCard {
  id: string;
  variant: "photo" | "map" | "headline" | string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface HaveBetterVisibilityGridProps {
  title?: string;
  subtitle?: string;
  cards?: VisibilityCard[];
}

const DEFAULT_CARDS: VisibilityCard[] = defaultData.cards as VisibilityCard[];

export function HaveBetterVisibilityGrid({
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  cards = DEFAULT_CARDS,
}: HaveBetterVisibilityGridProps = {}) {
  return (
    <section id="visibility" className="w-full bg-white py-12 sm:py-16" data-component="cardsContainer">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.03em] text-mp-petrol">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] sm:text-[16.5px] leading-[1.5] text-mp-secondary">
              {subtitle}
            </p>
          )}
        </div>

        {/* ------------------------------------------------ 3-Card Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {cards.map((card) => {
            if (card.variant === "photo") {
              return (
                <div
                  key={card.id}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-[28px] p-7 sm:p-8 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1"
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt || card.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mp-petrol/90 via-mp-petrol/50 to-transparent z-[1]" />

                  <div className="relative z-[2] flex flex-col justify-end">
                    <h3 className="font-display text-[23px] sm:text-[25px] font-bold text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.5] text-white/90">
                      {card.description}
                    </p>
                    {card.linkText && (
                      <Link
                        href={card.href}
                        className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-mp-petrol/45 backdrop-blur-sm px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/20 self-start"
                      >
                        <span>{card.linkText}</span>
                        <span className="text-xs">›</span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            }

            if (card.variant === "headline") {
              return (
                <div
                  key={card.id}
                  className="group flex flex-col justify-between rounded-[28px] bg-mp-parchment p-7 sm:p-8 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    <h3 className="font-display text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-mp-ink">
                      {card.title}
                    </h3>
                  </div>

                  <div className="mt-auto flex flex-col justify-end">
                    <p className="pt-16 sm:pt-20 text-[13px] sm:text-[13.5px] leading-[1.55] text-mp-secondary">
                      {card.description}
                    </p>
                    {card.linkText && (
                      <Link
                        href={card.href}
                        className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-mp-ink/25 bg-transparent px-5 py-2 text-[13px] font-medium text-mp-ink transition-colors hover:bg-mp-petrol/[0.06] self-start"
                      >
                        <span>{card.linkText}</span>
                        <span className="text-xs">›</span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            }

            // Default Map Card
            return (
              <div
                key={card.id}
                className="group flex flex-col justify-between rounded-[28px] bg-mp-parchment p-6 sm:p-7 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1"
              >
                {card.image && (
                  <div className="w-full aspect-[506/316] relative rounded-[20px] overflow-hidden bg-white/60 border border-mp-border/50">
                    <Image
                      src={card.image}
                      alt={card.imageAlt || card.title}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 350px, (min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                )}

                <div className="mt-6 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-display text-[23px] sm:text-[25px] font-bold text-mp-ink leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.55] text-mp-secondary">
                      {card.description}
                    </p>
                  </div>

                  {card.linkText && (
                    <Link
                      href={card.href}
                      className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-mp-ink/25 bg-transparent px-5 py-2 text-[13px] font-medium text-mp-ink transition-colors hover:bg-mp-petrol/[0.06] self-start"
                    >
                      <span>{card.linkText}</span>
                      <span className="text-xs">›</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
