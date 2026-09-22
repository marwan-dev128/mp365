import Image from "next/image";
import Link from "next/link";
import type { InContentCta as InContentCtaType } from "@/lib/blog-cta";
import { ArrowUpRight } from "@/components/ui/Icons";
import { RichText } from "@/components/RichText";

export function InContentCta({ cta }: { cta: InContentCtaType }) {
  return (
    <aside
      aria-label="Interactive assessment"
      className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-mp-petrol p-7 sm:p-9 lg:p-10 my-10 sm:my-14 text-white shadow-md border border-mp-petrol-deep/60"
    >
      {/* Background Decorative Ambient Radial Glow behind icons */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -bottom-6 h-64 w-64 rounded-full bg-mp-mint/15 blur-3xl"
      />

      <div className="relative z-10 max-w-[320px] sm:max-w-[380px] md:max-w-[410px]">
        {/* Title */}
        <h3 className="font-display text-[21px] sm:text-[24px] font-bold text-white tracking-tight leading-[1.22] text-balance">
          <RichText text={cta.title} />
        </h3>

        {/* Narrative Description */}
        <p className="mt-3 text-[13.5px] sm:text-[14.5px] leading-[1.6] text-white/80 font-normal">
          <RichText text={cta.description} />
        </p>

        {/* Action Buttons Row */}
        <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href={cta.primaryHref}
            className="inline-flex items-center gap-2 rounded-full bg-mp-lime px-6 sm:px-7 py-3 text-[13.5px] sm:text-[14px] font-bold text-mp-ink hover:bg-mp-lime-hover transition-all shadow-2xs mp-press hover:scale-[1.01]"
          >
            <span>{cta.primaryText}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {cta.secondaryHref && cta.secondaryText && (
            <Link
              href={cta.secondaryHref}
              className="text-[12.5px] sm:text-[13px] font-medium text-white/70 hover:text-white underline underline-offset-4 decoration-white/25 hover:decoration-white transition-colors"
            >
              {cta.secondaryText}
            </Link>
          )}
        </div>
      </div>

      {/* Right-Hand Transparent PNG Icons Composition (Positioned on the right, slightly bottom) */}
      <div
        className="pointer-events-none absolute -right-2 -bottom-2 sm:right-2 sm:bottom-0 h-[190px] sm:h-[220px] w-[200px] sm:w-[250px] select-none opacity-20 sm:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        {/* Top-Right: Dynamics 365 3D icon */}
        <div className="absolute right-4 top-2 sm:top-4 w-16 h-16 sm:w-20 sm:h-20 -rotate-6 transition-transform duration-300 hover:rotate-0">
          <Image
            src="/hero-section-icons/image_-_2025-08-08T164136.643-removebg-preview.png"
            alt=""
            width={80}
            height={80}
            className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* Center: Microsoft Copilot 3D icon */}
        <div className="absolute right-20 sm:right-24 top-8 sm:top-10 w-16 h-16 sm:w-20 sm:h-20 rotate-6 transition-transform duration-300 hover:rotate-0 z-10">
          <Image
            src="/hero-section-icons/Microsoft_Copilot_Icon.svg"
            alt=""
            width={84}
            height={84}
            className="w-full h-auto object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Bottom-Right: Business Central 3D icon */}
        <div className="absolute right-2 bottom-2 w-14 h-14 sm:w-18 sm:h-18 rotate-12 transition-transform duration-300 hover:rotate-0">
          <Image
            src="/hero-section-icons/66433f09a327b088760628d9_business-central-logo.png"
            alt=""
            width={72}
            height={72}
            className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Bottom-Left: Power BI 3D icon */}
        <div className="absolute right-28 sm:right-32 bottom-2 sm:bottom-4 w-14 h-14 sm:w-16 sm:h-16 -rotate-12 transition-transform duration-300 hover:rotate-0">
          <Image
            src="/hero-section-icons/power-bi.png"
            alt=""
            width={64}
            height={64}
            className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </aside>
  );
}
