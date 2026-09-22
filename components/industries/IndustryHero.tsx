import Image from "next/image";
import React, { type ReactNode } from "react";
import { MicrosoftLogo } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RichText } from "@/components/RichText";
import { breadcrumbSchema } from "@/lib/schema";
import integrationsData from "@/store/integrations.json";
import type { IntegrationWidgetData } from "@/components/hero-section/IntegrationsHero";

export interface IndustryHeroProps {
  industryName: string;
  /** Intent-matched H1; falls back to "Microsoft solutions for <name>". */
  h1?: string | null;
  industrySlug: string;
  answerQuestion?: string;
  answerText?: string;
  imageUrl?: string | null;
  imageAlt?: string | null;
  children?: ReactNode;
}

/**
 * Industry hero section matching the classic PageHero curved inset architecture,
 * but using the Home Page hero's parchment theme background (bg-mp-parchment)
 * without dark background colors, and with the floating Microsoft ecosystem widgets.
 */
export function IndustryHero({
  industryName,
  h1,
  industrySlug,
  answerQuestion,
  answerText,
  children,
}: IndustryHeroProps) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries/" },
    { name: industryName, path: `/industries/${industrySlug}/` },
  ];

  const widgets = (integrationsData.widgets || []) as unknown as IntegrationWidgetData[];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Curved hero banner matching the exact max-width and padding of the page content */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 pt-3 sm:pt-4">
        <div
          id="industry-hero-banner"
          className="header-integrations relative flex min-h-[260px] sm:min-h-[380px] md:min-h-[440px] items-center justify-center overflow-hidden rounded-[20px] sm:rounded-[var(--mp-radius-hero)] border border-mp-border bg-mp-parchment"
          data-testid="industryHero"
        >
          {/* Subtle petrol wash: matches Home Page IntegrationsHero tone */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[480px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mp-petrol/[0.04] blur-3xl"
          />

          {/* Floating Microsoft Ecosystem Widgets Layer - Hidden on mobile (< sm) so it never covers the text! */}
          <div className="integration-widgets-container hidden sm:block" aria-hidden="true">
            {widgets.map((widget, idx) => (
              <div
                key={widget.id}
                className="integration-widget group"
                style={widget.style}
                title={widget.name}
              >
                <Image
                  src={widget.src}
                  alt={widget.name}
                  width={widget.width}
                  height={widget.height}
                  sizes="(max-width: 768px) 45px, 95px"
                  // Decorative, and hidden below sm: never let them compete
                  // with the H1 and hero copy for the LCP slot.
                  loading={idx < 3 ? "eager" : "lazy"}
                  fetchPriority="low"
                  className="w-full h-auto object-contain cursor-pointer"
                />
                <span className="integration-tooltip">{widget.name}</span>
              </div>
            ))}
          </div>

          {/* Centered Content */}
          <div className="relative z-10 px-4 sm:px-6 text-center max-w-[860px] mx-auto py-8 sm:py-10 md:py-12">
            <p className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-mp-petrol/15 bg-mp-mint/25 px-3 sm:px-4 py-1 sm:py-1.5 font-display text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-mp-petrol">
              <MicrosoftLogo className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Microsoft Solutions Partner
            </p>
            <h1 className="font-display text-[clamp(26px,6.5vw,56px)] font-extrabold leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] text-mp-petrol">
              {h1 || `Microsoft solutions for ${industryName}`}
            </h1>
          </div>

          {/* Notched Breadcrumbs Plate in bottom-right corner */}
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Mobile Breadcrumbs Bar (rendered below banner on small viewports) */}
      <Breadcrumbs items={breadcrumbs} variant="bar" />

      {/* Quick Overview Answer Card & Hero Proof Metrics Actions */}
      {(answerQuestion || children) && (
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-3 sm:py-4 pt-6 sm:pt-10">
          {answerQuestion && answerText && (
            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[var(--mp-radius-card)] border border-mp-border bg-white p-5 sm:p-8">
              <div className="relative z-[1]">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-mp-petrol/15 bg-mp-petrol-tint px-3 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.12em] text-mp-petrol">
                  <span className="h-1.5 w-1.5 rounded-full bg-mp-mint" />
                  Quick Overview
                </div>
                <h2 className="mb-2.5 font-display text-[16px] sm:text-[19px] font-bold tracking-tight text-mp-petrol">
                  {answerQuestion}
                </h2>
                <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] sm:leading-[1.75] text-mp-secondary">
                  <RichText text={answerText} />
                </p>
              </div>
            </div>
          )}
          {children}
        </div>
      )}
    </>
  );
}
