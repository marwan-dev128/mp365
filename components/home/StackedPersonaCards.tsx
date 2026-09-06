import Image from "next/image";
import Link from "next/link";
import defaultData from "@/store/home/personas.json";

export interface PersonaItem {
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
  alt: string;
}

export interface StackedPersonaCardsProps {
  title?: string;
  subtitle?: string;
  personas?: PersonaItem[];
}

export function StackedPersonaCards({
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  personas = defaultData.personas,
}: StackedPersonaCardsProps = {}) {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-bold leading-[1.06] tracking-[-0.035em] text-mp-petrol whitespace-pre-line">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-mp-secondary">
              {subtitle}
            </p>
          )}
        </div>

        {/* ------------------------------------------------ Stacked Persona Cards */}
        <div className="relative flex flex-col gap-8 sm:gap-12 lg:gap-16 pb-0">
          {personas.map((item, idx) => (
            <div
              key={item.eyebrow}
              style={{
                top: `calc(72px + ${idx * 40}px)`,
                zIndex: idx + 1,
              }}
              className="sticky relative rounded-[28px] sm:rounded-[36px] border border-mp-border bg-mp-parchment p-6 sm:p-8 lg:p-10 transition-shadow duration-300 shadow-sm"
            >
              {/* Absolute Floating Eyebrow at Top of Card */}
              <div className="absolute top-3.5 sm:top-4 lg:top-4.5 left-6 sm:left-8 lg:left-10 z-10">
                <p className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted">
                  {item.eyebrow}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-7 sm:pt-8 lg:pt-6">
                {/* Left Content */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                  <div>
                    <h3 className="font-display text-[26px] sm:text-[30px] lg:text-[34px] font-bold leading-[1.14] tracking-[-0.03em] text-mp-ink whitespace-pre-line">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[13.5px] sm:text-[14.5px] leading-[1.65] text-mp-secondary max-w-md font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-mp-ink underline underline-offset-4 hover:opacity-75 transition-opacity"
                    >
                      <span>{item.linkText}</span>
                      <span className="text-sm font-semibold">›</span>
                    </Link>
                  </div>
                </div>

                {/* Right Media Image */}
                <div className="lg:col-span-7 overflow-hidden rounded-[20px] sm:rounded-[24px] relative h-[260px] sm:h-[340px] lg:h-[400px] w-full bg-mp-card">
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
      </div>
    </section>
  );
}
