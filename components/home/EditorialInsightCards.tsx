import Image from "next/image";
import Link from "next/link";

const INSIGHTS = [
  {
    title: "The $1.7 trillion tax on company growth",
    description:
      "Explore Forrester Consulting’s report, commissioned by Perk, into the true cost of ‘shadow work’.",
    linkText: "Read more",
    href: "/contact/",
    image: "/images/perk/insights/cart.webp",
  },
  {
    title: "Your travel and spend questions, answered",
    description:
      "Practical guides on policy, compliance, per diems, and everything else your team needs to get travel and spend right.",
    linkText: "Explore guides",
    href: "/contact/",
    image: "/images/perk/insights/lightbulb.webp",
  },
  {
    title: "See what Perk saves you",
    description:
      "Run your numbers through our calculator and see exactly what Perk could save your business every year.",
    linkText: "Calculate your savings",
    href: "/contact/",
    image: "/images/perk/insights/graphic.webp",
  },
];

export function EditorialInsightCards() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
      {/* ------------------------------------------------ Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-18">
        <h2 className="font-display text-[clamp(36px,5vw,58px)] font-bold leading-[1.06] tracking-[-0.035em] text-[#14140f]">
          Let’s get to work
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-[#55554d]">
          The reports, insights, and tools you need to power real work.
        </p>
      </div>

      {/* ------------------------------------------------ 3-Column Editorial Cards */}
      <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
        {INSIGHTS.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] sm:rounded-[32px] border border-[#e8e8dc]/70 bg-[#f6f6ee] p-7 sm:p-9 flex flex-col justify-between transition-colors duration-200"
          >
            <div>
              {/* Title */}
              <h3 className="font-display text-[21px] sm:text-[23px] font-bold leading-[1.2] tracking-[-0.03em] text-[#14140f] max-w-[280px]">
                {item.title}
              </h3>

              {/* Graphic Illustration */}
              <div className="my-8 sm:my-12 flex items-center justify-center h-[180px] sm:h-[200px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={200}
                  unoptimized
                  className="max-h-[190px] w-auto object-contain"
                />
              </div>
            </div>

            <div>
              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#55554d]">
                {item.description}
              </p>

              {/* Action Link */}
              <div className="mt-5">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#14140f] underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  <span>{item.linkText}</span>
                  <span className="text-sm font-semibold">›</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
