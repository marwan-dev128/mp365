import Image from "next/image";

import defaultData from "@/store/home/stats.json";

export interface StatItem {
  id: string;
  iconBg: string;
  iconSrc: string;
  iconAlt: string;
  titleLines: [string, string];
  description: string;
}

export interface FlexiTravelStatsProps {
  stats?: StatItem[];
  footnote?: string;
}

const DEFAULT_STATS: StatItem[] = defaultData.stats as StatItem[];

export function FlexiTravelStats({
  stats = DEFAULT_STATS,
  footnote = defaultData.footnote,
}: FlexiTravelStatsProps = {}) {
  return (
    <section className="w-full bg-mp-petrol py-14 sm:py-20" data-component="cardsSmall">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ 3-Card Row */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-5 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex w-full flex-col justify-start rounded-[28px] border border-white/12 bg-white/[0.07] p-7 sm:p-8 md:max-w-[340px] lg:max-w-[350px] transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Circular Icon Wrapper */}
              <div
                className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-full"
                style={{ backgroundColor: stat.iconBg }}
              >
                <Image
                  src={stat.iconSrc}
                  alt={stat.iconAlt}
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-[26px] sm:text-[28px] lg:text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-white">
                {stat.titleLines[0]}
                <br />
                {stat.titleLines[1]}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[14px] sm:text-[14.5px] leading-[1.55] text-white/75">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------ Footnote */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[12px] leading-[16px] text-white/55">
            {footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
