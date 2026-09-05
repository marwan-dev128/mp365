import Image from "next/image";
import Link from "next/link";

const ROW_1_CITIES = [
  { name: "London", isHQ: true, image: "/images/perk/cities/london.webp" },
  { name: "Barcelona", isHQ: false, image: "/images/perk/cities/barcelona.webp" },
  { name: "Chicago", isHQ: false, image: "/images/perk/cities/chicago.webp" },
  { name: "Birmingham", isHQ: false, image: "/images/perk/cities/birmingham.webp" },
];

const ROW_2_CITIES = [
  { name: "Boston", isHQ: true, image: "/images/perk/cities/boston.webp" },
  { name: "Edinburgh", isHQ: false, image: "/images/perk/cities/edinburgh.webp" },
  { name: "Miami", isHQ: false, image: "/images/perk/cities/miami.webp" },
  { name: "Berlin", isHQ: false, image: "/images/perk/cities/berlin.webp" },
];

export function LocationPresenceMarquee() {
  const marquee1 = [...ROW_1_CITIES, ...ROW_1_CITIES, ...ROW_1_CITIES];
  const marquee2 = [...ROW_2_CITIES, ...ROW_2_CITIES, ...ROW_2_CITIES];

  return (
    <section className="w-full pt-16 pb-20 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#66665e]">
          FOUNDED IN 2015 • 1,800+ EMPLOYEES
        </p>
      </div>

      {/* Row 1 Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f5f5eb] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f5f5eb] to-transparent"
        />
        <div className="mp-animate-marquee flex items-center gap-14 sm:gap-18">
          {marquee1.map((city, idx) => (
            <div
              key={`r1-${city.name}-${idx}`}
              className="flex items-center gap-4 shrink-0"
            >
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-[22px] bg-[#ebebe0]">
                <Image
                  src={city.image}
                  alt={city.name}
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-[32px] sm:text-[46px] font-extrabold tracking-[-0.03em] text-[#14140f]">
                  {city.name}
                </span>
                {city.isHQ && (
                  <span className="rounded-full bg-[#ebebe0] border border-[#d8d8ca] px-2.5 py-1 text-[11px] font-semibold text-[#14140f]">
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
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f5f5eb] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f5f5eb] to-transparent"
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
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-[22px] bg-[#ebebe0]">
                <Image
                  src={city.image}
                  alt={city.name}
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-[32px] sm:text-[46px] font-extrabold tracking-[-0.03em] text-[#14140f]">
                  {city.name}
                </span>
                {city.isHQ && (
                  <span className="rounded-full bg-[#ebebe0] border border-[#d8d8ca] px-2.5 py-1 text-[11px] font-semibold text-[#14140f]">
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
        <Link
          href="/about/"
          className="mp-press inline-flex items-center gap-1.5 rounded-full bg-[#beff50] px-7 py-3.5 text-sm font-bold text-[#14140f] hover:bg-[#abf23a] transition-colors"
        >
          <span>Get to know us</span>
          <span className="text-sm font-normal">›</span>
        </Link>
        <Link
          href="/contact/"
          className="mp-press inline-flex items-center gap-1.5 rounded-full border border-[#14140f] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#14140f] hover:bg-black/5 transition-colors"
        >
          <span>Join the team</span>
          <span className="text-sm font-normal">›</span>
        </Link>
      </div>

      {/* Footnote Disclaimers */}
      <div className="mx-auto mt-16 max-w-4xl px-6 text-center text-[11px] leading-[1.7] text-[#66665e]/80">
        <p>*225,000 hours saved: Based on average weekly active Perk users and four hours saved per user each week.</p>
        <p>**$3.72M returned to the business per weekday: Based on the hours given back to Perk users and the estimated business value of that time.</p>
        <p>***111,800 tasks handled every day: Based on the average number of actions completed by Perk users across the platform each day.</p>
      </div>
    </section>
  );
}
