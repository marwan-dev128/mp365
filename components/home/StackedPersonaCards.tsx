import Image from "next/image";
import Link from "next/link";

const PERSONAS = [
  {
    eyebrow: "FINANCE TEAMS",
    title: "Control without the chaos",
    description:
      "Manage spend effortlessly across teams, entities, and countries and eliminate tedious manual work. With Perk’s AI running 24/7 in the background, your finance team can focus on real work, not chasing down receipts.",
    linkText: "Take control of spend",
    href: "/contact/",
    image: "/images/perk/personas/finance_teams.webp",
    alt: "Finance Teams",
  },
  {
    eyebrow: "TRAVEL MANAGERS",
    title: "Manage the program,\nnothing else.",
    description:
      "The widest inventory on the market, negotiated rates and an AI that handles bookings, changes, and disruptions for you. Now you’re free to focus on strategy, not firefighting.",
    linkText: "Optimize your travel program",
    href: "/contact/",
    image: "/images/perk/personas/travel_managers.webp",
    alt: "Travel Managers",
  },
  {
    eyebrow: "OPERATIONS",
    title: "One platform.\nNo compromises.",
    description:
      "One platform replacing the patchwork. Perk’s AI surfaces insights, enforces policies, and connects travel, spend, and events across every entity.",
    linkText: "Streamline your operation",
    href: "/contact/",
    image: "/images/perk/personas/operations.webp",
    alt: "Operations",
  },
  {
    eyebrow: "TRAVELERS",
    title: "Book it, expense it,\nforget about it",
    description:
      "From in-policy bookings and instant receipt capture to personalized travel itineraries and proactive disruption alerts, Perk lets you focus on the job in hand.",
    linkText: "Make travel and spend effortless",
    href: "/contact/",
    image: "/images/perk/personas/travelers.webp",
    alt: "Travelers",
  },
];

export function StackedPersonaCards() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
      {/* ------------------------------------------------ Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
        <h2 className="font-display text-[clamp(36px,5vw,60px)] font-bold leading-[1.06] tracking-[-0.035em] text-[#14140f]">
          Powerful for companies,
          <br />
          effortless for employees.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-[#55554d]">
          Whatever your role, Perk is built to take on the work that gets in your way.
        </p>
      </div>

      {/* ------------------------------------------------ Stacked Persona Cards */}
      <div className="relative flex flex-col gap-6 sm:gap-8">
        {PERSONAS.map((item, idx) => (
          <div
            key={item.eyebrow}
            style={{
              top: `calc(100px + ${idx * 30}px)`,
              zIndex: idx + 1,
            }}
            className="sticky rounded-[28px] sm:rounded-[34px] border border-[#e8e8dc]/70 bg-[#f6f6ee] p-6 sm:p-8 lg:p-10 transition-shadow duration-300 shadow-sm hover:shadow-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                <div>
                  <p className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#66665e]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-8 sm:mt-14 lg:mt-20 font-display text-[26px] sm:text-[30px] lg:text-[34px] font-bold leading-[1.14] tracking-[-0.03em] text-[#14140f] whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#55554d] max-w-md">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#14140f] underline underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    <span>{item.linkText}</span>
                    <span className="text-sm font-semibold">›</span>
                  </Link>
                </div>
              </div>

              {/* Right Media Image */}
              <div className="lg:col-span-7 overflow-hidden rounded-[20px] sm:rounded-[24px] relative h-[260px] sm:h-[340px] lg:h-[420px] w-full bg-[#ebebe0]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                  priority={idx === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
