import Image from "next/image";

const CLIENTS = [
  { name: "TeamViewer", logo: "/images/perk/logos/teamviewer.webp" },
  { name: "GetYourGuide", logo: "/images/perk/logos/getyourguide.webp" },
  { name: "Nordcloud", logo: "/images/perk/logos/nordcloud.webp" },
  { name: "Wise", logo: "/images/perk/logos/wise.webp" },
  { name: "Fujifilm", logo: "/images/perk/logos/fujifilm.webp" },
  { name: "Workable", logo: "/images/perk/logos/workable.webp" },
  { name: "Nord Security", logo: "/images/perk/logos/nordsecurity.webp" },
  { name: "Lush", logo: "/images/perk/logos/lush.webp" },
  { name: "PrizePicks", logo: "/images/perk/logos/prizepick.webp" },
];

export function ClientLogos() {
  const marqueeList = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Trusted by global teams"
      className="w-full border-y border-[#e0e0d2] bg-[#ebebe0]/50 py-5 sm:py-6 overflow-hidden"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row items-center gap-4 lg:gap-10 px-6 sm:px-8">
        <p className="shrink-0 text-[13px] font-medium tracking-[0.01em] text-[#14140f]/75 whitespace-nowrap">
          Trusted by 1,000s of global teams
        </p>

        {/* Seamless Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Left & Right gradient fade masks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f5f5eb] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f5f5eb] to-transparent"
          />

          <div className="mp-animate-marquee flex items-center gap-10 sm:gap-14">
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex h-[32px] shrink-0 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={130}
                  height={32}
                  className="h-auto max-h-[26px] w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
