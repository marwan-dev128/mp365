import defaultData from "@/store/about.json";

export interface ApproachCard {
  tag: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ApproachGridProps {
  title?: string;
  subtitle?: string;
  cards?: ApproachCard[];
}

export function ApproachGrid({
  title = defaultData.philosophy.title,
  subtitle = defaultData.philosophy.subtitle,
  cards = defaultData.philosophy.cards,
}: ApproachGridProps = {}) {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-mp-border/50">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <p className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted mb-3">
            OUR PHILOSOPHY
          </p>
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-mp-petrol">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-mp-secondary">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[28px] sm:rounded-[32px] border border-mp-border bg-mp-parchment p-8 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-mp-muted mb-4">
                  {card.tag}
                </span>
                <h3 className="font-display text-[22px] sm:text-[25px] font-bold leading-[1.18] tracking-[-0.03em] text-mp-ink">
                  {card.title}
                </h3>
                <p className="mt-4 text-[13.5px] sm:text-[14.5px] leading-[1.65] text-mp-secondary">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-mp-border/60">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-mp-petrol">
                  <span className="h-1.5 w-1.5 rounded-full bg-mp-petrol" />
                  <span>{card.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
