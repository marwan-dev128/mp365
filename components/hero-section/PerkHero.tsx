import Image from "next/image";
import Link from "next/link";

interface PerkHeroProps {
  settings?: {
    city?: string;
    region?: string;
    phone?: string;
    phoneDisplay?: string;
  };
}

export function PerkHero({ settings: _settings }: PerkHeroProps = {}) {
  return (
    <section className="relative mx-auto max-w-[1360px] px-5 sm:px-8 pt-12 sm:pt-16 pb-0 text-center overflow-hidden">
      {/* ------------------------------------------------ Center Headline */}
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-[clamp(40px,6.2vw,80px)] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#14140f]">
          Automate travel, expenses,
          <br />
          and policies in one platform
        </h1>

        {/* Rating Stars Badge */}
        <div className="mt-5 flex items-center justify-center">
          <Image
            src="/images/perk/rating_badge.webp"
            alt="G2 5-star rating +2,060 reviews"
            width={180}
            height={32}
            className="h-7 w-auto object-contain"
            priority
          />
        </div>

        {/* Dual Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/contact/"
            className="mp-press inline-flex items-center gap-1.5 rounded-full bg-[#beff50] px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-bold text-[#14140f] hover:bg-[#abf23a] transition-colors shadow-2xs"
          >
            <span>Book a demo</span>
            <span className="text-base font-normal">›</span>
          </Link>
          <button
            type="button"
            className="mp-press inline-flex items-center gap-1.5 rounded-full border border-[#14140f] bg-transparent px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold text-[#14140f] hover:bg-black/5 transition-colors"
          >
            <span>Explore our product</span>
            <span className="text-xs">∨</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------ Hero Graphic (Laptop, Mobile & Virtual Card) */}
      <div className="relative mx-auto mt-10 sm:mt-14 max-w-[1240px] px-2 sm:px-4">
        <Image
          src="/images/perk/hero_desktop.webp"
          alt="Perk platform dashboard on laptop, mobile and virtual card"
          width={2560}
          height={600}
          priority
          className="w-full h-auto object-contain drop-shadow-none"
        />
      </div>
    </section>
  );
}
