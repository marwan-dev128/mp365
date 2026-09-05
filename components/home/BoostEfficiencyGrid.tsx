import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    id: "hr-integrations",
    hasImage: true,
    image: "/images/perk/efficiency/hr_integrations.webp",
    imageAlt: "HR integrations logos",
    imageType: "contain",
    title: "HR integrations",
    titleLarge: false,
    description:
      "Link your HR tools—like Lucca, Factorial, or HiBob—and sync data in seconds for easy onboarding, managing, and offboarding. Simple, smart, secure.",
    linkText: "Learn more",
    href: "/contact/",
  },
  {
    id: "policies-approvals",
    hasImage: true,
    image: "/images/perk/why/policies.webp",
    imageAlt: "Policies and approvals review flow",
    imageType: "contain",
    title: "Policies and approvals",
    titleLarge: false,
    description:
      "Speed up sign-offs while keeping budgets in check, with allocated reviewers, automated approvals, and preset policies that are actually easy to follow.",
    linkText: "Learn more",
    href: "/contact/",
  },
  {
    id: "centralized-invoicing",
    hasImage: false,
    image: "",
    imageAlt: "",
    imageType: "none",
    title: "Centralized invoicing",
    titleLarge: true,
    description:
      "No more chasing receipts. We collect all your invoices and consolidate them in one place, ready for you to download.",
    linkText: "Learn more",
    href: "/contact/",
  },
  {
    id: "events-platform",
    hasImage: true,
    image: "/images/perk/efficiency/events_platform.webp",
    imageAlt: "Events platform networking meeting",
    imageType: "cover",
    title: "Events platform",
    titleLarge: false,
    description:
      "Send out invites. Save the follow-up. Our event platform lets you track responses at a glance, from attendance to sudden cancellations, flight choices to hotel picks.",
    linkText: "Learn more",
    href: "/contact/",
  },
];

export function BoostEfficiencyGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
      {/* ------------------------------------------------ Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-18">
        <h2 className="font-display text-[clamp(36px,5vw,60px)] font-bold leading-[1.06] tracking-[-0.035em] text-[#14140f]">
          Boost efficiency
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-[#55554d]">
          Get time back and free up focus with preset policies, automated approvals, and integrations that sync with all your systems.
        </p>
      </div>

      {/* ------------------------------------------------ 4-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="rounded-[28px] sm:rounded-[32px] border border-[#e8e8dc]/70 bg-[#f6f6ee] p-7 sm:p-8 flex flex-col justify-between min-h-[490px] transition-colors duration-200"
          >
            {card.hasImage ? (
              <div>
                {/* Visual Media Header */}
                <div className="relative h-[180px] sm:h-[190px] w-full rounded-[20px] overflow-hidden flex items-center justify-center">
                  {card.imageType === "cover" ? (
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                      className="object-cover object-center"
                    />
                  ) : (
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={240}
                      height={160}
                      unoptimized
                      className="max-h-[170px] w-auto object-contain"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-6 font-display text-[21px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.03em] text-[#14140f]">
                  {card.title}
                </h3>
              </div>
            ) : (
              /* No-Image Card Variant: Big Title at Top */
              <div>
                <h3 className="font-display text-[26px] sm:text-[30px] font-bold leading-[1.14] tracking-[-0.03em] text-[#14140f]">
                  {card.title}
                </h3>
              </div>
            )}

            <div>
              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#55554d]">
                {card.description}
              </p>

              {/* Action Button */}
              <div className="mt-6">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#14140f] bg-transparent px-4 py-2 text-[12.5px] font-semibold text-[#14140f] hover:bg-black/5 transition-colors"
                >
                  <span>{card.linkText}</span>
                  <span className="text-sm leading-none font-semibold">›</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
