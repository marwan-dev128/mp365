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

const MILESTONES: MilestoneItem[] = [
  {
    year: "2004",
    badge: "FOUNDATION",
    title: "Early Enterprise Exchange & SharePoint Cutovers",
    description:
      "Founded with a core focus on high-reliability Microsoft infrastructure cutovers for regional healthcare and manufacturing enterprises.",
    highlights: ["First 50+ server migrations", "100% on-time cutover record", "Custom script automation"],
    image: "/images/services/microsoft-365-migration.jpg",
    linkText: "Learn about our migration history",
    href: "/services/microsoft-365-migration/",
  },
  {
    year: "2012",
    badge: "CLOUD ERA",
    title: "Early Office 365 & Hybrid Identity Pioneers",
    description:
      "Led early enterprise adoptions of BPOS and Office 365, establishing specialized hybrid identity and Exchange coexistence frameworks.",
    highlights: ["Over 50k mailboxes migrated", "Zero-downtime ADFS & DirSync", "Multi-site hybrid cutovers"],
    image: "/images/mp365/discovery/microsoft-365-estate-mapping.webp",
    linkText: "Explore cloud identity architecture",
    href: "/resources/glossary/day-1-coexistence/",
  },
  {
    year: "2018",
    badge: "M&A FOCUS",
    title: "M&A Tenant Consolidation & TSA Exit Engine",
    description:
      "Formalized M&A-grade migration playbooks for Private Equity firms and Fortune 500 spin-offs needing rapid, compliant TSA exits.",
    highlights: ["Day-1 tenant coexistence framework", "Cross-tenant OneDrive & Teams", "Divestiture security isolation"],
    image: "/images/services/ma-tenant-migration.jpg",
    linkText: "Discover our M&A migration framework",
    href: "/services/ma-tenant-migration/",
  },
  {
    year: "2022",
    badge: "ERP & POWER PLATFORM",
    title: "Dynamics 365 & Power Platform Delivery Integration",
    description:
      "Expanded senior engineering teams to unify tenant migration with Dynamics 365 Business Central ERP and enterprise Power Platform governance.",
    highlights: ["Principal-led solution architecture", "20+ commercial product integrations", "Automated compliance checklists"],
    image: "/images/mp365/case-studies/hunter-panels-dynamics-365.webp",
    linkText: "Read how Hunter Panels deployed D365",
    href: "/case-studies/hunter-panels/",
  },
  {
    year: "2026+",
    badge: "MODERN ENTERPRISE",
    title: "AI Readiness & Zero-Downtime Migration Automation",
    description:
      "Continuous innovation in automated wave planning, Copilot governance, and enterprise data hygiene for 10,000+ seat consolidations.",
    highlights: ["Copilot data governance frameworks", "Wave-planning analytics engine", "20+ years unbroken senior leadership"],
    image: "/images/services/data-governance.jpg",
    linkText: "See our data governance solutions",
    href: "/services/data-governance/",
  },
];

export function EvolutionTimeline() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-mp-border/50">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center rounded-full border border-mp-border bg-mp-parchment/80 px-3.5 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted mb-4">
            <span>20-YEAR TRACK RECORD</span>
          </div>
          <h2 className="font-display text-[clamp(34px,5vw,56px)] font-bold leading-[1.06] tracking-[-0.035em] text-mp-petrol whitespace-pre-line">
            Two decades of enterprise Microsoft evolution
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] sm:text-[16.5px] leading-[1.65] text-mp-secondary">
            From early Exchange server migrations to complex M&amp;A tenant consolidations and Power Platform governance.
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
                        Key Engineering Highlights
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
