import Image from "next/image";
import Link from "next/link";

export interface MilestoneItem {
  year: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  linkText: string;
  href: string;
}

// The project lifecycle from the plan's facts bank. The `year` slot holds the
// step number: the client does not publish a founding date or company history.
const MILESTONES: MilestoneItem[] = [
  {
    year: "01",
    badge: "UNDERSTAND",
    title: "One focused session to capture the goal",
    description:
      "MP-365 listens, reproduces the issue where something is broken, and confirms the business impact before any work starts.",
    highlights: ["Business goal agreed", "Impact confirmed", "No waiting for kickoff meetings"],
    image: "/images/services/microsoft-365-migration.jpg",
    linkText: "See all services",
    href: "/services/",
  },
  {
    year: "02",
    badge: "QUICK MVP",
    title: "A working version, built fast",
    description:
      "The team gets access and starts working, then delivers a first version early so your people can react to something real.",
    highlights: ["High-level architecture", "Backlog", "A working first version"],
    image: "/images/mp365/discovery/microsoft-365-estate-mapping.webp",
    linkText: "See how pricing works",
    href: "/pricing/",
  },
  {
    year: "03",
    badge: "VALIDATE & REFINE",
    title: "Your team uses it, and feedback changes it",
    description:
      "Your users test the build and MP-365 adjusts it until it fits how they work, before anything goes live.",
    highlights: ["End-to-end testing", "User feedback", "Go-live checklist"],
    image: "/images/services/ma-tenant-migration.jpg",
    linkText: "See client results",
    href: "/clients/",
  },
  {
    year: "04",
    badge: "DEPLOY & HAND OFF",
    title: "Go live, train the team, and you own it",
    description:
      "MP-365 releases the solution, trains your people and documents the build, then stays available for continuous improvement.",
    highlights: ["Change management and training", "Documentation", "Warranty and support"],
    image: "/images/mp365/case-studies/hunter-panels-dynamics-365.webp",
    linkText: "Book a free consultation",
    href: "/contact/",
  },
];

export function EvolutionTimeline() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-mp-border/50">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center rounded-full border border-mp-border bg-mp-parchment/80 px-3.5 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted mb-4">
            <span>HOW MP-365 WORKS</span>
          </div>
          <h2 className="font-display text-[clamp(34px,5vw,56px)] font-bold leading-[1.06] tracking-[-0.035em] text-mp-petrol whitespace-pre-line">
            How a project runs, from first call to hand-off
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] sm:text-[16.5px] leading-[1.65] text-mp-secondary">
            Four stages, built around getting something real in front of your team early.
          </p>
        </div>

        {/* ------------------------------------------------ Stacked Milestone Cards (Home Page Persona Style) */}
        <div className="relative flex flex-col gap-8 sm:gap-12 lg:gap-16 pb-0">
          {MILESTONES.map((item, idx) => (
            <div
              key={item.year}
              style={{
                top: `calc(72px + ${idx * 36}px)`,
                zIndex: idx + 1,
              }}
              className="sticky relative rounded-[28px] sm:rounded-[36px] border border-mp-border bg-mp-parchment p-6 sm:p-8 lg:p-10 transition-shadow duration-300 shadow-sm overflow-hidden"
            >
              {/* Floating Eyebrow Badge at Top-Left */}
              <div className="absolute top-4 sm:top-5 left-6 sm:left-8 lg:left-10 z-10 flex items-center gap-2.5">
                <span className="font-display text-2xl sm:text-3xl font-black text-mp-petrol tracking-tight">
                  {item.year}
                </span>
                <span className="inline-block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-mp-petrol bg-white border border-mp-petrol/20 px-3 py-1 rounded-full shadow-2xs">
                  {item.badge}
                </span>
              </div>

              {/* Milestone Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 sm:pt-10 lg:pt-8">
                {/* Left Text Column */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full py-2">
                  <div>
                    <h3 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[1.14] tracking-[-0.03em] text-mp-ink">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[14px] sm:text-[15.5px] leading-[1.65] text-mp-secondary font-normal">
                      {item.description}
                    </p>

                    {/* Highlights Badges */}
                    <div className="mt-6 pt-4 border-t border-mp-border/60">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-mp-muted mb-3">
                        What this stage includes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center rounded-full bg-mp-saffron border border-black/10 px-3.5 py-1.5 text-xs font-semibold text-black shadow-2xs"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-mp-petrol hover:text-mp-petrol-2 underline underline-offset-4 transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <span className="text-sm font-semibold">›</span>
                    </Link>
                  </div>
                </div>

                {/* Right Media Image */}
                <div className="lg:col-span-6 overflow-hidden rounded-[20px] sm:rounded-[24px] relative h-[260px] sm:h-[320px] lg:h-[360px] w-full bg-mp-card border border-mp-border/60 shadow-xs">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
