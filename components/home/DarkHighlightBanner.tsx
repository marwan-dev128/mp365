import Link from "next/link";
import Image from "next/image";
import { MicrosoftLogo } from "@/components/ui/Icons";
import defaultData from "@/store/home/dark-banner.json";

export interface DarkHighlightBannerProps {
  badge?: string;
  headline?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  bgImage?: string;
  bgAlt?: string;
}

export function DarkHighlightBanner({
  badge = defaultData.badge,
  headline = defaultData.headline,
  subheading,
  ctaText = defaultData.ctaText,
  ctaHref = defaultData.ctaHref,
  bgImage = defaultData.bgImage,
  bgAlt = defaultData.bgAlt,
}: DarkHighlightBannerProps = {}) {
  const cleanBadge = badge?.replace(/^\+\s*/, "");

  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-mp-petrol p-10 sm:p-14 lg:p-20 text-center text-white min-h-[440px] flex flex-col items-center justify-center">
          {/* Background image */}
          {bgImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={bgImage}
                alt={bgAlt || ""}
                fill
                className="object-cover object-center brightness-90 contrast-105"
                sizes="100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mp-petrol/85 via-mp-petrol/50 to-mp-petrol/55 lg:bg-gradient-to-r lg:from-mp-petrol/85 lg:via-mp-petrol/55 lg:to-mp-petrol/30" />
            </div>
          )}

          {/* Content Overlay */}
          <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center">
            {/* Pill Badge */}
            {cleanBadge && (
              <div className="inline-flex items-center gap-2 rounded-full border border-mp-mint/40 bg-mp-petrol/55 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-mp-mint backdrop-blur-xs">
                <MicrosoftLogo className="h-3.5 w-3.5" />
                <span>{cleanBadge}</span>
              </div>
            )}

            {/* Headline */}
            {headline && (
              <h2 className="mt-6 sm:mt-8 font-display text-[clamp(28px,3.8vw,48px)] font-bold leading-[1.14] tracking-[-0.03em] text-white max-w-4xl whitespace-pre-line text-center">
                {headline}
              </h2>
            )}

            {/* Subheading */}
            {subheading && (
              <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[1.65] text-white/85 font-normal text-center">
                {subheading}
              </p>
            )}

            {/* CTA Button */}
            {ctaText && ctaHref && (
              <div className="mt-7 sm:mt-8">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-1.5 rounded-full bg-mp-lime px-6 py-2.5 sm:py-3 text-[13.5px] font-bold text-mp-ink hover:bg-mp-lime-hover transition-colors shadow-2xs"
                >
                  <span>{ctaText}</span>
                  <span className="text-sm font-normal">›</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
