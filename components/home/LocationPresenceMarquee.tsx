import Image from "next/image";
import Link from "next/link";
import defaultData from "@/store/home/locations.json";

export interface CityItem {
  name: string;
  isHQ: boolean;
  image: string;
}

export interface LocationPresenceMarqueeProps {
  eyebrow?: string;
  row1?: CityItem[];
  row2?: CityItem[];
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  disclaimers?: string[];
}

const DEFAULT_ROW1: CityItem[] = defaultData.row1;
const DEFAULT_ROW2: CityItem[] = defaultData.row2;

export function LocationPresenceMarquee({
  eyebrow = defaultData.eyebrow,
  row1 = DEFAULT_ROW1,
  row2 = DEFAULT_ROW2,
  primaryCta = defaultData.primaryCta,
  secondaryCta = defaultData.secondaryCta,
  disclaimers = defaultData.disclaimers,
}: LocationPresenceMarqueeProps = {}) {
  const marquee1 = [...row1, ...row1, ...row1];
  const marquee2 = [...row2, ...row2, ...row2];

  return (
    <section className="w-full bg-white pt-16 pb-20 overflow-hidden">
      {eyebrow && (
        <div className="text-center mb-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-mp-muted">
            {eyebrow}
          </p>
        </div>
      )}

      {/* Row 1 Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
        />
        <div className="mp-animate-marquee flex items-center gap-14 sm:gap-18">
          {marquee1.map((city, idx) => (
            <div
              key={`r1-${city.name}-${idx}`}
              className="flex items-center gap-4 shrink-0"
            >
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-mp-border bg-white p-4 sm:h-24 sm:w-24 sm:p-5">
                <Image
                  src={city.image}
                  alt={`${city.name} — Microsoft product logo`}
                  width={120}
                  height={120}
                  sizes="96px"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-[32px] sm:text-[46px] font-extrabold tracking-[-0.03em] text-mp-ink">
                  {city.name}
                </span>
                {city.isHQ && (
                  <span className="rounded-full bg-mp-card border border-mp-border px-2.5 py-1 text-[11px] font-semibold text-mp-ink">
                    Headquarter
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 Marquee */}
      <div className="relative w-full overflow-hidden py-3 mt-2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
        />
        <div
          className="mp-animate-marquee flex items-center gap-14 sm:gap-18"
          style={{ animationDirection: "reverse" }}
        >
          {marquee2.map((city, idx) => (
            <div
              key={`r2-${city.name}-${idx}`}
              className="flex items-center gap-4 shrink-0"
            >
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-mp-border bg-white p-4 sm:h-24 sm:w-24 sm:p-5">
                <Image
                  src={city.image}
                  alt={`${city.name} — Microsoft product logo`}
                  width={120}
                  height={120}
                  sizes="96px"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-[32px] sm:text-[46px] font-extrabold tracking-[-0.03em] text-mp-ink">
                  {city.name}
                </span>
                {city.isHQ && (
                  <span className="rounded-full bg-mp-card border border-mp-border px-2.5 py-1 text-[11px] font-semibold text-mp-ink">
                    Headquarter
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dual action buttons */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        {primaryCta && (
          <Link
            href={primaryCta.href}
            className="mp-press inline-flex items-center gap-1.5 rounded-full bg-mp-lime px-7 py-3.5 text-sm font-bold text-mp-ink hover:bg-mp-lime-hover transition-colors"
          >
            <span>{primaryCta.text}</span>
            <span className="text-sm font-normal">›</span>
          </Link>
        )}
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            className="mp-press inline-flex items-center gap-1.5 rounded-full border border-mp-ink bg-transparent px-7 py-3.5 text-sm font-semibold text-mp-ink hover:bg-mp-petrol/[0.06] transition-colors"
          >
            <span>{secondaryCta.text}</span>
            <span className="text-sm font-normal">›</span>
          </Link>
        )}
      </div>

      {/* Footnote Disclaimers */}
      {disclaimers && disclaimers.length > 0 && (
        <div className="mx-auto mt-16 max-w-4xl px-6 text-center text-[11px] leading-[1.7] text-mp-muted/80">
          {disclaimers.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      )}
    </section>
  );
}
