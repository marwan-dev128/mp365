import Link from "next/link";
import Image from "next/image";

export function DarkHighlightBanner() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-10 sm:py-16">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#14140f] p-10 sm:p-14 lg:p-20 text-center text-white min-h-[440px] flex flex-col items-center justify-center">
        {/* Background F1 image with authentic exposure & subtle contrast gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/perk/formula1_bg.webp"
            alt="Audi Revolut F1 Team car"
            fill
            className="object-cover object-center brightness-90 contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/50 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/50 lg:to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xs">
            + PERK - OFFICIAL PARTNER OF THE AUDI REVOLUT F1® TEAM
          </div>

          {/* Headline (Exact 3-line balanced hierarchy) */}
          <h2 className="mt-6 sm:mt-8 font-display text-[clamp(28px,3.8vw,48px)] font-bold leading-[1.14] tracking-[-0.03em] text-white max-w-2xl">
            The team does the real work.
            <br />
            We handle everything they
            <br />
            shouldn&rsquo;t have to.
          </h2>

          {/* CTA Button */}
          <div className="mt-7 sm:mt-8">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#beff50] px-6 py-2.5 sm:py-3 text-[13.5px] font-bold text-[#14140f] hover:bg-[#abf23a] transition-colors"
            >
              <span>Switch to Perk</span>
              <span className="text-sm font-normal">›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
