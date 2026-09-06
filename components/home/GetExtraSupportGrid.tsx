import Image from "next/image";
import Link from "next/link";
import defaultData from "@/store/home/support.json";

export interface SupportCard {
  id: string;
  variant: "lime" | "parchment" | "headline" | string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface GetExtraSupportGridProps {
  title?: string;
  subtitle?: string;
  cards?: SupportCard[];
}

const DEFAULT_CARDS: SupportCard[] = defaultData.cards as SupportCard[];

export function GetExtraSupportGrid({
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  cards = DEFAULT_CARDS,
}: GetExtraSupportGridProps = {}) {
  return (
    <section id="support" className="w-full bg-white py-12 sm:py-16" data-component="fourCardsContainer">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.03em] text-mp-petrol">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-[720px] text-[15px] sm:text-[16.5px] leading-[1.5] text-mp-secondary">
              {subtitle}
            </p>
          )}
        </div>

        {/* ------------------------------------------------ 4-Card Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {cards.map((card) => {
            if (card.variant === "lime") {
              return (
                <div
                  key={card.id}
                  className="group flex flex-col justify-between rounded-[28px] bg-mp-band p-6 sm:p-7 min-h-[480px] sm:min-h-[510px] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="w-full aspect-[1.6] relative rounded-[18px] overflow-hidden flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-contain object-center"
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>

                  <div className="mt-6 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-mp-ink leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.55] text-mp-ink/85">
                        {card.description}
                      </p>
                    </div>

                    {card.linkText && (
                      <Link
                        href={card.href}
                        className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-mp-petrol/25 bg-transparent px-5 py-2 text-[13px] font-medium text-mp-ink transition-colors hover:bg-mp-petrol/10 self-start"
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
                  className="group flex flex-col justify-between rounded-[28px] bg-mp-parchment p-6 sm:p-7 min-h-[480px] sm:min-h-[510px] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    <h3 className="font-display text-[28px] sm:text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-mp-ink whitespace-pre-line">
                      {card.title}
                    </h3>
                  </div>

                  <div className="mt-auto flex flex-col justify-end">
                    <p className="pt-16 sm:pt-24 text-[13px] sm:text-[13.5px] leading-[1.55] text-mp-secondary">
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

            // Default Parchment Card
            return (
              <div
                key={card.id}
                className="group flex flex-col justify-between rounded-[28px] bg-mp-parchment p-6 sm:p-7 min-h-[480px] sm:min-h-[510px] transition-transform duration-200 hover:-translate-y-1"
              >
                {card.image && (
                  <div className="w-full aspect-[1.6] relative rounded-[18px] overflow-hidden bg-mp-petrol/[0.06]">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                )}

                <div className="mt-6 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-mp-ink leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.55] text-mp-secondary">
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
