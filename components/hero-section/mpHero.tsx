import Image from "next/image";
import Link from "next/link";
import defaultData from "@/store/hero.json";

export interface mpHeroProps {
  title?: string;
  ratingBadge?: {
    src: string;
    alt: string;
  };
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
  };
  desktopImage?: {
    src: string;
    alt: string;
  };
  mobileImage?: {
    src: string;
    alt: string;
  };
}

export function mpHero({
  title = defaultData.title,
  ratingBadge = defaultData.ratingBadge,
  primaryCta = defaultData.primaryCta,
  secondaryCta = defaultData.secondaryCta,
  desktopImage = defaultData.desktopImage,
  mobileImage = defaultData.mobileImage,
}: mpHeroProps = {}) {
  return (
    <section className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 pt-12 sm:pt-16 pb-4 text-center overflow-hidden">
      {/* ------------------------------------------------ Center Headline */}
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-[clamp(40px,6.2vw,80px)] font-extrabold leading-[1.03] tracking-[-0.035em] text-mp-petrol whitespace-pre-line">
          {title}
        </h1>

        {/* Rating Stars Badge */}
        {ratingBadge && (
          <div className="mt-5 flex items-center justify-center">
            <Image
              src={ratingBadge.src}
              alt={ratingBadge.alt}
              width={180}
              height={32}
              className="h-7 w-auto object-contain"
              priority
            />
          </div>
        )}

        {/* Dual Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="mp-press inline-flex items-center gap-1.5 rounded-full bg-mp-lime px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-bold text-mp-ink hover:bg-mp-lime-hover transition-colors shadow-2xs"
            >
              <span>{primaryCta.text}</span>
              <span className="text-base font-normal">›</span>
            </Link>
          )}
          {secondaryCta && (
            <button
              type="button"
              className="mp-press inline-flex items-center gap-1.5 rounded-full border border-mp-ink bg-transparent px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold text-mp-ink hover:bg-mp-petrol/[0.06] transition-colors"
            >
              <span>{secondaryCta.text}</span>
              <span className="text-xs">∨</span>
            </button>
          )}
        </div>
      </div>

      {/* ------------------------------------------------ Hero Graphic */}
      <div className="relative mx-auto mt-10 sm:mt-14 max-w-[1240px] px-2 sm:px-4">
        {/* Desktop & Tablet Mockup */}
        {desktopImage && (
          <Image
            src={desktopImage.src}
            alt={desktopImage.alt}
            width={2560}
            height={600}
            priority
            className="w-full h-auto object-contain drop-shadow-none hidden sm:block"
          />
        )}
        {/* Mobile Mockup */}
        {mobileImage && (
          <Image
            src={mobileImage.src}
            alt={mobileImage.alt}
            width={400}
            height={600}
            priority
            className="w-full max-w-[280px] mx-auto h-auto object-contain drop-shadow-none block sm:hidden"
          />
        )}
      </div>
    </section>
  );
}
