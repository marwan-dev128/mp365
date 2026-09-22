import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MicrosoftLogo, ArrowUpRight, Clock, Shield, Check } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RichText } from "@/components/RichText";
import { breadcrumbSchema } from "@/lib/schema";
import integrationsData from "@/store/integrations.json";
import type { IntegrationWidgetData } from "@/components/hero-section/IntegrationsHero";

export interface IndustriesHubHeroProps {
  h1: string;
  answerQuestion: string;
  answerText: string;
}

const PROOF_METRICS = [
  { value: "9", label: "Specialized Industry Practices", icon: "practices" },
  { value: "20+", label: "Years Microsoft Delivery", icon: "years" },
  { value: "100%", label: "Fixed-Price Scopes", icon: "fixed" },
  { value: "1-Day", label: "Named Senior Response", icon: "response" },
];

export function IndustriesHubHero({
  h1,
  answerQuestion,
  answerText,
}: IndustriesHubHeroProps) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries/" },
  ];

  const widgets = (integrationsData.widgets || []) as unknown as IntegrationWidgetData[];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Curved hero banner matching the exact max-width and padding of the page content */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 pt-3 sm:pt-4">
        <div
          id="industries-hub-hero-banner"
          className="header-integrations relative flex min-h-[280px] sm:min-h-[400px] md:min-h-[460px] items-center justify-center overflow-hidden rounded-[20px] sm:rounded-[var(--mp-radius-hero)] border border-mp-border bg-mp-parchment"
          data-testid="industriesHubHero"
        >
          {/* Subtle petrol wash: matches Home Page IntegrationsHero tone */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mp-petrol/[0.04] blur-3xl"
          />

          {/* Floating Microsoft Ecosystem Widgets Layer - Hidden on mobile (< sm) */}
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
                  loading={idx < 3 ? "eager" : "lazy"}
                  fetchPriority="low"
                  className="w-full h-auto object-contain cursor-pointer"
                />
                <span className="integration-tooltip">{widget.name}</span>
              </div>
            ))}
          </div>

          {/* Centered Content */}
          <div className="relative z-10 px-4 sm:px-6 text-center max-w-[900px] mx-auto py-10 sm:py-14 md:py-16">
            <p className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-mp-petrol/15 bg-mp-mint/25 px-3.5 sm:px-4 py-1 sm:py-1.5 font-display text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-mp-petrol">
              <MicrosoftLogo className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Microsoft Solutions Partner
            </p>
            <h1 className="font-display text-[clamp(28px,6vw,56px)] font-extrabold leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] text-mp-petrol">
              {h1}
            </h1>
          </div>

          {/* Notched Breadcrumbs Plate in bottom-right corner */}
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Mobile Breadcrumbs Bar */}
      <Breadcrumbs items={breadcrumbs} variant="bar" />

      {/* Quick Overview Answer Card & Proof Metrics Band */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-3 sm:py-4 pt-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[var(--mp-radius-card)] border border-mp-border bg-white p-6 sm:p-9 shadow-xs">
          <div className="relative z-[1]">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-mp-petrol/15 bg-mp-petrol-tint px-3 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.12em] text-mp-petrol">
              <span className="h-1.5 w-1.5 rounded-full bg-mp-mint" />
              Quick Overview
            </div>
            <h2 className="mb-3 font-display text-[17px] sm:text-[21px] font-bold tracking-tight text-mp-petrol">
              {answerQuestion}
            </h2>
            <p className="text-[14.5px] sm:text-[16px] leading-[1.7] sm:leading-[1.75] text-mp-secondary max-w-4xl">
              <RichText text={answerText} />
            </p>

            {/* CTAs and Metrics Row */}
            <div className="mt-8 pt-7 border-t border-mp-border flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#industries-grid"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mp-lime px-6 sm:px-7 py-3 text-sm font-bold text-mp-ink transition-all hover:bg-mp-lime-hover shadow-2xs"
                >
                  <span>Browse 9 industry guides</span>
                  <span className="text-xs">↓</span>
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-mp-border bg-mp-parchment px-6 sm:px-7 py-3 text-sm font-semibold text-mp-ink transition-all hover:bg-mp-petrol hover:text-white hover:border-mp-petrol"
                >
                  <span>Talk with an engineer</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Proof metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-x-0 sm:divide-x sm:divide-mp-border">
                {PROOF_METRICS.map((metric, idx) => (
                  <div
                    key={metric.label}
                    className={`flex flex-col ${idx > 0 ? "sm:pl-6" : ""}`}
                  >
                    <div className="flex items-center gap-1.5 text-mp-petrol">
                      {metric.icon === "years" && <Clock className="h-4 w-4" />}
                      {metric.icon === "fixed" && <Shield className="h-4 w-4" />}
                      {metric.icon === "practices" && <Check className="h-4 w-4" />}
                      {metric.icon === "response" && (
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-mp-saffron" aria-hidden="true">
                          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" fill="currentColor" />
                        </svg>
                      )}
                      <span className="font-display text-[22px] sm:text-[26px] font-extrabold tracking-tight">
                        {metric.value}
                      </span>
                    </div>
                    <span className="mt-0.5 text-[11.5px] sm:text-[12px] font-medium text-mp-muted">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
