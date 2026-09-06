import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MicrosoftLogo } from "@/components/ui/Icons";
import defaultData from "@/store/integrations.json";

// Ecosystem widgets loaded from store/integrations.json
export interface IntegrationWidgetData {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  style?: React.CSSProperties & Record<string, string>;
}

export interface IntegrationsHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  widgets?: IntegrationWidgetData[];
  settings?: unknown;
}

/** Brand eyebrow above the hero headline. Lives here rather than in
 *  store/integrations.json so it survives regeneration of that file. */
const DEFAULT_EYEBROW = "Microsoft Solutions Partner";

export function IntegrationsHero({
  eyebrow = (defaultData as { eyebrow?: string }).eyebrow ?? DEFAULT_EYEBROW,
  title = defaultData.title,
  description = defaultData.description,
  buttonText = defaultData.buttonText,
  buttonLink = defaultData.buttonLink,
  widgets = defaultData.widgets as IntegrationWidgetData[],
}: IntegrationsHeroProps = {}) {
  return (
    <section
      className="header-integrations relative w-full bg-mp-parchment overflow-hidden min-h-[480px] sm:min-h-[560px] md:min-h-[620px] flex items-center justify-center py-16 sm:py-20 md:py-28"
      data-testid="headerIntegrations"
    >
      {/* ------------------------------------------------ Center Content */}
      {/* Petrol wash: keeps the paper ground from reading as flat off-white. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mp-petrol/[0.05] blur-3xl"
      />

      <div className="text-balance relative text-center mx-auto max-w-[860px] z-[10] px-5 py-4 sm:py-8">
        {eyebrow && (
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-mp-petrol/15 bg-mp-mint/25 px-4 py-1.5 font-display text-[11.5px] font-bold uppercase tracking-[0.16em] text-mp-petrol">
            <MicrosoftLogo className="h-3.5 w-3.5" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[clamp(36px,5.8vw,76px)] font-extrabold leading-[1.04] tracking-[-0.035em] text-mp-petrol">
          {title}
        </h1>

        <div className="pt-6 sm:pt-8">
          <p className="text-mp-secondary text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] max-w-[640px] mx-auto font-normal">
            {description}
          </p>
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href={buttonLink}
            className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none self-start h-11 md:h-10 px-5 md:px-4 py-2 text-sm font-semibold rounded-full shadow-2xs hover:bg-mp-lime-hover"
            style={{ borderRadius: "26px" }}
          >
            <span
              className="overlay absolute inset-0 z-[8] bg-mp-petrol/[0.06] transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay rounded-[26px]"
              aria-hidden="true"
            />
            <span
              className="overlay absolute inset-0 z-[8] bg-mp-petrol/10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay rounded-[26px]"
              aria-hidden="true"
            />
            <span className="button-content relative z-[10] flex items-center justify-center gap-1.5">
              <span className="text-[13px] md:text-[13px] font-medium text-mp-ink">
                {buttonText}
              </span>
              <span className="relative inline-flex items-center justify-center w-4 h-4">
                <span className="buttonIcon inline-flex">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="buttonIconHover hidden">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* ------------------------------------------------ Floating Widgets Layer */}
      <div className="integration-widgets-container">
        {widgets.map((widget, idx) => (
          <div
            key={widget.id}
            className="integration-widget group"
            style={widget.style}
            title={widget.name}
          >
            {/* Perf: these render at 44-110px but the source files run to 325KB. They were
                `unoptimized` (served raw) and all `priority`, so ~960KB of full-size product
                logos competed with the real LCP text. Let next/image resize them, and only
                let the first few claim priority. */}
            <Image
              src={widget.src}
              alt={widget.name}
              width={widget.width}
              height={widget.height}
              sizes="(max-width: 768px) 50px, 110px"
              priority={idx < 3}
              loading={idx < 3 ? undefined : "lazy"}
              className="w-full h-auto object-contain cursor-pointer"
            />
            <span className="integration-tooltip">
              {widget.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
