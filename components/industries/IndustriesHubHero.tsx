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

  const widgetConfigs: Record<string, { style: React.CSSProperties; className?: string }> = {
    // Exact homepage hero orbital distribution with fine-tuned clearances
    "dynamics-365": {
      style: {
        "--desktop-left": "2%",
        "--desktop-top": "6%",
        "--desktop-width": "82px",
        "--desktop-duration": "8s",
        "--desktop-distance-x": "16px",
        "--desktop-distance-y": "-18px",
        "--mobile-left": "4%",
        "--mobile-top": "2%",
        "--mobile-width": "44px",
      } as React.CSSProperties,
    },
    "azure": {
      style: {
        "--desktop-left": "23%",
        "--desktop-top": "7%",
        "--desktop-width": "78px",
        "--desktop-duration": "12s",
        "--desktop-distance-x": "14px",
        "--desktop-distance-y": "-16px",
        "--mobile-left": "20%",
        "--mobile-top": "6%",
        "--mobile-width": "44px",
      } as React.CSSProperties,
    },
    "power-bi": {
      style: {
        "--desktop-left": "7%",
        "--desktop-top": "34%",
        "--desktop-width": "80px",
        "--desktop-duration": "7s",
        "--desktop-distance-x": "18px",
        "--desktop-distance-y": "14px",
        "--mobile-left": "4%",
        "--mobile-top": "34%",
        "--mobile-width": "44px",
      } as React.CSSProperties,
    },
    "copilot": {
      style: {
        "--desktop-left": "4%",
        "--desktop-top": "70%",
        "--desktop-width": "96px",
        "--desktop-duration": "11s",
        "--desktop-distance-x": "-12px",
        "--desktop-distance-y": "16px",
        "--mobile-left": "6%",
        "--mobile-top": "70%",
        "--mobile-width": "48px",
      } as React.CSSProperties,
    },
    "power-platform": {
      style: {
        "--desktop-left": "16.5%",
        "--desktop-top": "64%",
        "--desktop-width": "86px",
        "--desktop-duration": "9s",
        "--desktop-distance-x": "-16px",
        "--desktop-distance-y": "-12px",
        "--mobile-left": "16%",
        "--mobile-top": "64%",
        "--mobile-width": "44px",
      } as React.CSSProperties,
    },
    "business-central": {
      style: {
        "--desktop-left": "24%",
        "--desktop-top": "78%",
        "--desktop-width": "82px",
        "--desktop-duration": "6s",
        "--desktop-distance-x": "-14px",
        "--desktop-distance-y": "10px",
        "--mobile-left": "24%",
        "--mobile-top": "78%",
        "--mobile-width": "44px",
      } as React.CSSProperties,
    },
    "power-automate": {
      style: {
        "--desktop-left": "76%",
        "--desktop-top": "8%",
        "--desktop-width": "80px",
        "--desktop-duration": "8s",
        "--desktop-distance-x": "-14px",
        "--desktop-distance-y": "18px",
        "--mobile-left": "76%",
        "--mobile-top": "8%",
        "--mobile-width": "44px",
      } as React.CSSProperties,
    },
    "fabric": {
      style: {
        "--desktop-left": "88%",
        "--desktop-top": "6%",
        "--desktop-width": "84px",
        "--desktop-duration": "11s",
        "--desktop-distance-x": "-15px",
        "--desktop-distance-y": "-18px",
        "--mobile-left": "88%",
        "--mobile-top": "6%",
        "--mobile-width": "44px",
      } as React.CSSProperties,
    },
    "entra": {
      style: {
        "--desktop-left": "93%",
        "--desktop-top": "40%",
        "--desktop-width": "90px",
        "--desktop-duration": "9s",
        "--desktop-distance-x": "18px",
        "--desktop-distance-y": "-12px",
        "--mobile-left": "90%",
        "--mobile-top": "40%",
        "--mobile-width": "46px",
      } as React.CSSProperties,
    },
    "teams": {
      style: {
        "--desktop-left": "77.5%",
        "--desktop-top": "60%",
        "--desktop-width": "94px",
        "--desktop-duration": "10s",
        "--desktop-distance-x": "14px",
        "--desktop-distance-y": "-12px",
        "--mobile-left": "76%",
        "--mobile-top": "60%",
        "--mobile-width": "48px",
      } as React.CSSProperties,
    },
    "sharepoint": {
      style: {
        "--desktop-left": "85%",
        "--desktop-top": "76%",
        "--desktop-width": "90px",
        "--desktop-duration": "7s",
        "--desktop-distance-x": "14px",
        "--desktop-distance-y": "14px",
        "--mobile-left": "84%",
        "--mobile-top": "76%",
        "--mobile-width": "46px",
      } as React.CSSProperties,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Full-width hero banner matching homepage IntegrationsHero height & presence */}
      <section
        id="industries-hub-hero-banner"
        className="header-integrations relative w-full flex min-h-[480px] sm:min-h-[560px] md:min-h-[620px] items-center justify-center overflow-hidden border-b border-mp-border bg-mp-parchment py-16 sm:py-20 md:py-24 -mt-1"
        data-testid="industriesHubHero"
      >
        {/* Subtle petrol wash: matches Home Page IntegrationsHero tone */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mp-petrol/[0.05] blur-3xl"
        />

        {/* Floating Microsoft Ecosystem Widgets Layer - Matching Homepage Hero Distribution */}
        <div className="integration-widgets-container hidden sm:block" aria-hidden="true">
          {widgets.map((widget, idx) => {
            const config = widgetConfigs[widget.id];
            const mergedStyle = config ? { ...widget.style, ...config.style } : widget.style;

            return (
              <div
                key={widget.id}
                className="integration-widget group"
                style={mergedStyle}
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
            );
          })}
        </div>

        {/* Centered Content with clear text visibility */}
        <div className="relative z-10 px-5 sm:px-8 text-center max-w-[720px] mx-auto py-10 sm:py-14">
          <p className="mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-mp-petrol/15 bg-mp-mint/25 px-3.5 sm:px-4 py-1.5 font-display text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-mp-petrol">
            <MicrosoftLogo className="h-3.5 w-3.5" />
            Microsoft Solutions Partner
          </p>
          <h1 className="font-display text-[clamp(30px,4.5vw,50px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-mp-petrol text-balance">
            {h1}
          </h1>
        </div>

        {/* Symmetrical Centered Notched Breadcrumbs Plate in bottom center */}
        <Breadcrumbs items={breadcrumbs} variant="center-notch" />
      </section>

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
