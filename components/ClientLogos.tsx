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
  const marqueeList = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Trusted by industry leaders"
      className="relative mx-auto max-w-[1240px] px-6 py-20"
    >
      <div className="mb-8 text-center">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-muted">
          Enterprise Trust &amp; Track Record
        </p>
        <h2 className="mt-2 font-display text-[18px] sm:text-[21px] font-bold text-navy">
          Trusted by leading enterprises, manufacturers &amp; institutions
        </h2>
      </div>

      {/* Direct Seamless Marquee with left/right fade masks */}
      <div className="relative overflow-hidden py-2">
        {/* Left & Right gradient fade masks into white canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/80 to-transparent"
        />

        <div className="mp-animate-marquee flex items-center gap-12 sm:gap-16">
          {marqueeList.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex h-[52px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={client.logo}
                alt={client.alt}
                width={170}
                height={50}
                className="h-auto max-h-[48px] w-auto max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
