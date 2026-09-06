import type { Person } from "@prisma/client";

interface LeadershipGridProps {
  people: Person[];
}

const PERSON_DETAILS: Record<
  string,
  {
    initials: string;
    focusAreas: string[];
    bio: string;
  }
> = {
  "mohammed-khaliefa": {
    initials: "MK",
    focusAreas: [
      "M&A Tenant Consolidations",
      "Microsoft 365 Strategy & Scoping",
      "Day-1 Readiness & TSA Exit",
      "Executive Delivery Sponsorship",
    ],
    bio: "Over two decades directing complex Microsoft enterprise migrations and modernization programs. Specializes in building predictable, zero-downtime cutover roadmaps for high-stakes mergers, divestitures, and private equity transactions.",
  },
  "raafat-elfouly": {
    initials: "RE",
    focusAreas: [
      "Dynamics 365 Business Central & F&O",
      "Power Platform Architecture & Governance",
      "Custom Enterprise Data Integrations",
      "Scalable Cloud Security & Identity",
    ],
    bio: "Ph.D. computer scientist and platform architect. Author of 50+ peer-reviewed papers and architect of 20+ commercial software products. Leads technical architecture, solution integrity, and enterprise engineering across all client engagements.",
  },
};

export function LeadershipGrid({ people }: LeadershipGridProps) {
  return (
    <section className="w-full bg-mp-parchment py-16 sm:py-24 border-t border-mp-border">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <p className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted mb-3">
            TECHNICAL LEADERSHIP
          </p>
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-mp-petrol">
            Engineered from the top down
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-mp-secondary">
            Our leadership team remains directly involved in client architecture and delivery. No layers of account managers between you and the experts.
          </p>
        </div>

        {/* 2-Column Executive Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {people.map((p) => {
            const extra = PERSON_DETAILS[p.slug] || {
              initials: p.name.slice(0, 2).toUpperCase(),
              focusAreas: ["Microsoft 365", "Architecture & Delivery"],
              bio: p.credentials,
            };

            return (
              <div
                key={p.slug}
                className="flex flex-col justify-between rounded-[28px] sm:rounded-[36px] border border-mp-border bg-white p-8 sm:p-10 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {/* Monogram Badge */}
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-mp-petrol text-mp-mint font-display font-black text-xl sm:text-2xl shadow-xs shrink-0">
                        {extra.initials}
                      </div>
                      <div>
                        <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-mp-ink leading-tight">
                          {p.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.1em] text-mp-petrol mt-1">
                          {p.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] sm:text-[15px] leading-[1.68] text-mp-secondary font-normal mb-6">
                    {extra.bio}
                  </p>

                  <div className="mb-6 rounded-[20px] bg-mp-parchment/60 border border-mp-border/70 p-4 sm:p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-mp-muted mb-2">
                      Credentials & Experience
                    </p>
                    <p className="text-sm font-semibold text-mp-ink">
                      {p.credentials}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-mp-border/70">
                  <p className="text-xs font-bold uppercase tracking-wider text-mp-muted mb-3">
                    Core Technical Focus
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {extra.focusAreas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="inline-flex items-center rounded-full bg-mp-petrol/[0.06] border border-mp-petrol/15 px-3.5 py-1 text-[12px] font-medium text-mp-petrol"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
