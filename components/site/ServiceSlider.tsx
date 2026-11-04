import Image from "next/image";
import Link from "next/link";
import { CardTrack } from "./CardTrack";

export type SliderCard = {
  href: string;
  name: string;
  description?: string;
  image: string;
};

/** Photo cards in a slider, for the services inside an area. */
export function ServiceSlider({
  heading,
  label,
  action,
  cards,
  linkText = "See service",
}: {
  heading: string;
  /** Names the slider for screen readers. */
  label: string;
  action?: { href: string; text: string };
  cards: SliderCard[];
  linkText?: string;
}) {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-mp-petrol">
            {heading}
          </h2>
          {action && (
            <Link href={action.href} className="mt-4 inline-block text-[13.5px] font-bold text-mp-petrol underline underline-offset-4">
              {action.text}
            </Link>
          )}
        </div>

        <CardTrack label={label}>
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative flex min-h-[420px] w-[84%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[28px] p-7 transition-transform duration-200 hover:-translate-y-1 sm:min-h-[480px] sm:w-[calc(50%-10px)] sm:p-8 lg:w-[calc((100%-40px)/3)]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 84vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-mp-petrol via-mp-petrol/65 to-transparent" />
              <span className="relative flex flex-col">
                <h3 className="font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[24px]">{card.name}</h3>
                {card.description && <span className="mt-2.5 text-[13.5px] leading-[1.55] text-white/90">{card.description}</span>}
                <span className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-white/50 bg-mp-petrol/45 px-5 py-2 text-[13px] font-medium text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-mp-petrol">
                  {linkText} <span aria-hidden="true">›</span>
                </span>
              </span>
            </Link>
          ))}
        </CardTrack>
      </div>
    </section>
  );
}
