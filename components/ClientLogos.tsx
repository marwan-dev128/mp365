import Image from "next/image";
import defaultData from "@/store/clients.json";

export interface ClientLogoItem {
  name: string;
  logo: string;
}

export interface ClientLogosProps {
  label?: string;
  clients?: ClientLogoItem[];
}

const DEFAULT_CLIENTS: ClientLogoItem[] = defaultData.clients;

export function ClientLogos({
  label = defaultData.label,
  clients = DEFAULT_CLIENTS,
}: ClientLogosProps = {}) {
  // 4x repetition ensures mathematical 50% symmetry for a 100% seamless, jump-free infinite marquee loop
  const marqueeList = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      aria-label={label || "Organizations we have worked with"}
      className="relative w-full overflow-hidden border-y border-mp-border/50 bg-white py-5 sm:py-6 select-none"
    >
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full">
        {label && (
          <p className="shrink-0 pl-6 sm:pl-10 lg:pl-12 2xl:pl-[calc((100vw-1440px)/2+3rem)] text-[13.5px] font-medium tracking-[0.01em] text-mp-petrol/85 whitespace-nowrap">
            {label}
          </p>
        )}

        {/* Full-bleed Marquee Container (extends to right edge of screen) */}
        <div className="relative min-w-0 flex-1 w-full overflow-hidden">
          {/* Left & Right gradient fade masks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent"
          />

          <div className="mp-animate-marquee flex items-center gap-10 sm:gap-14 md:gap-16 py-1.5">
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex h-[42px] sm:h-[48px] md:h-[52px] shrink-0 items-center justify-center cursor-pointer"
                title={client.name}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={48}
                  className="h-auto max-h-[34px] sm:max-h-[40px] md:max-h-[44px] w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[180px] object-contain opacity-75 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
