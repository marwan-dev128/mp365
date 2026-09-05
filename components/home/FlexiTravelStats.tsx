import Image from "next/image";

interface StatItem {
  id: string;
  iconBg: string;
  iconSrc: string;
  iconAlt: string;
  titleLines: [string, string];
  description: string;
}

const STATS: StatItem[] = [
  {
    id: "refund",
    iconBg: "#82DCFA", // Brand Cyan
    iconSrc: "/images/perk/stats/refund.svg",
    iconAlt: "Refund",
    titleLines: ["Minimum 80%", "refund*"],
    description: "Get your money back on canceled trips with FlexiTravel.",
  },
  {
    id: "compliance",
    iconBg: "#C8A0FF", // Brand Purple
    iconSrc: "/images/perk/stats/bank.svg",
    iconAlt: "Compliance",
    titleLines: ["90%", "compliance"],
    description: "Stay on budget and on track with travel policies.",
  },
  {
    id: "response-time",
    iconBg: "#FF8C5F", // Brand Orange
    iconSrc: "/images/perk/stats/group.png",
    iconAlt: "Response time",
    titleLines: ["1-minute", "response time"],
    description: "Our customer care team is on hand 24/7. No matter what.",
  },
];

export function FlexiTravelStats() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24" data-component="cardsSmall">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        {/* ------------------------------------------------ 3-Card Row */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-5 lg:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex w-full flex-col justify-start rounded-[28px] bg-[#f6f6ee] p-7 sm:p-8 md:max-w-[340px] lg:max-w-[350px] transition-transform duration-200 hover:-translate-y-1"
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
                  unoptimized
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-[26px] sm:text-[28px] lg:text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-[#14140f]">
                {stat.titleLines[0]}
                <br />
                {stat.titleLines[1]}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[14px] sm:text-[14.5px] leading-[1.55] text-[#5a5a52]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------ Footnote */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[12px] leading-[16px] text-[#71716b]">
            *exact refund amount depends on cancellation rules of booking
          </p>
        </div>
      </div>
    </section>
  );
}
