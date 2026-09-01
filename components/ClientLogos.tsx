import Image from "next/image";

const CLIENTS = [
  {
    name: "Hunter Panels",
    logo: "/images/clients/hunter-panels.webp",
    alt: "Hunter Panels logo",
  },
  {
    name: "Carlisle Construction Materials",
    logo: "/images/clients/carlisle.webp",
    alt: "Carlisle Construction Materials logo",
  },
  {
    name: "Spyglass MTG",
    logo: "/images/clients/spyglass-mtg.webp",
    alt: "Spyglass MTG logo",
  },
  {
    name: "State of Connecticut",
    logo: "/images/clients/state-of-connecticut.webp",
    alt: "State of Connecticut seal logo",
  },
  {
    name: "Blue Buffalo Co.",
    logo: "/images/clients/blue-buffalo.webp",
    alt: "Blue Buffalo Co. logo",
  },
  {
    name: "Post University",
    logo: "/images/clients/post-university.webp",
    alt: "Post University logo",
  },
  {
    name: "Intellinet",
    logo: "/images/clients/intellinet.webp",
    alt: "Intellinet logo",
  },
];

export function ClientLogos() {
  // Duplicate the list for seamless infinite horizontal scroll
  const marqueeList = [...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Trusted by industry leaders"
      className="relative mx-auto max-w-[1240px] px-6 pt-10 pb-4"
    >
      <div className="rounded-[var(--mp-radius-card)] border border-line bg-surface-light/70 p-6 sm:p-8 backdrop-blur-xs">
        <div className="mb-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
              Enterprise Trust &amp; Track Record
            </p>
            <h2 className="mt-1 font-display text-[16px] sm:text-[18px] font-bold text-navy">
              Trusted by leading enterprises, manufacturers &amp; institutions
            </h2>
          </div>
          <span className="hidden text-[12px] font-semibold text-muted/80 sm:inline-block">
            Across Microsoft 365, Dynamics &amp; M&amp;A
          </span>
        </div>

        {/* Carousel / Marquee container with edge fade masks */}
        <div className="relative overflow-hidden">
          {/* Left & Right gradient fade masks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-light via-surface-light/80 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-light via-surface-light/80 to-transparent"
          />

          <div className="mp-animate-marquee flex items-center gap-5 py-2">
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="group flex h-[80px] min-w-[200px] shrink-0 items-center justify-center rounded-[var(--mp-radius-badge)] border border-line/80 bg-surface-card px-6 py-3 shadow-mp-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--mp-border-azure)] hover:shadow-mp-hover"
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={160}
                    height={48}
                    className="max-h-[44px] w-auto max-w-[150px] object-contain opacity-85 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
