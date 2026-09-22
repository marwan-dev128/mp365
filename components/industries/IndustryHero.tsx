import Image from "next/image";
import Link from "next/link";
import React, { type ReactNode } from "react";
import { MicrosoftLogo } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { breadcrumbSchema } from "@/lib/schema";

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

const RIGHT_COLUMN_WIDGETS = [
  {
    id: "dynamics-365",
    name: "Dynamics 365",
    src: "/hero-section-icons/image_-_2025-08-08T164136.643-removebg-preview.png",
    width: 80,
    height: 80,
    style: {
      "--desktop-left": "12%",
      "--desktop-top": "8%",
      "--desktop-width": "76px",
      "--desktop-duration": "8s",
      "--desktop-distance-x": "14px",
      "--desktop-distance-y": "-16px",
      "--delay": "0s",
    } as React.CSSProperties,
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    src: "/hero-section-icons/Microsoft_Copilot_Icon.svg",
    width: 90,
    height: 90,
    style: {
      "--desktop-left": "62%",
      "--desktop-top": "6%",
      "--desktop-width": "84px",
      "--desktop-duration": "10s",
      "--desktop-distance-x": "-12px",
      "--desktop-distance-y": "18px",
      "--delay": "0.2s",
    } as React.CSSProperties,
  },
  {
    id: "business-central",
    name: "Business Central",
    src: "/hero-section-icons/66433f09a327b088760628d9_business-central-logo.png",
    width: 78,
    height: 78,
    style: {
      "--desktop-left": "38%",
      "--desktop-top": "38%",
      "--desktop-width": "80px",
      "--desktop-duration": "7.5s",
      "--desktop-distance-x": "10px",
      "--desktop-distance-y": "-12px",
      "--delay": "0.4s",
    } as React.CSSProperties,
  },
  {
    id: "power-bi",
    name: "Power BI",
    src: "/hero-section-icons/power-bi.png",
    width: 74,
    height: 74,
    style: {
      "--desktop-left": "8%",
      "--desktop-top": "58%",
      "--desktop-width": "70px",
      "--desktop-duration": "9s",
      "--desktop-distance-x": "-14px",
      "--desktop-distance-y": "14px",
      "--delay": "0.15s",
    } as React.CSSProperties,
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    src: "/hero-section-icons/Microsoft_Azure.svg.webp",
    width: 76,
    height: 76,
    style: {
      "--desktop-left": "66%",
      "--desktop-top": "54%",
      "--desktop-width": "74px",
      "--desktop-duration": "8.5s",
      "--desktop-distance-x": "12px",
      "--desktop-distance-y": "-14px",
      "--delay": "0.3s",
    } as React.CSSProperties,
  },
  {
    id: "power-platform",
    name: "Power Platform",
    src: "/hero-section-icons/microsoft-power-platform-icons.png",
    width: 70,
    height: 70,
    style: {
      "--desktop-left": "36%",
      "--desktop-top": "76%",
      "--desktop-width": "68px",
      "--desktop-duration": "9.5s",
      "--desktop-distance-x": "-10px",
      "--desktop-distance-y": "10px",
      "--delay": "0.5s",
    } as React.CSSProperties,
  },
];

/**
 * Single Industry Page Hero section matching the exact aesthetic of the Blog Post Hero:
 * - Full-width parchment header with category eyebrow, H1, and metadata strip
 * - Floating Microsoft ecosystem widgets professionally nested in the right open area
 * - Full-width white breadcrumbs bar directly underneath
 * - Quick Overview card and proof metrics / CTA actions
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

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Editorial Rich Header Section (Matches Blog Post layout) */}
      <header
        id="industry-hero-header"
        className="w-full relative overflow-hidden bg-mp-parchment border-b border-mp-border pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 -mt-1"
        data-testid="industryHero"
      >
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, H1 & Practice Metadata */}
            <div className="lg:col-span-7 xl:col-span-7 max-w-3xl">
              {/* Category & Topic Eyebrow */}
              <div className="mb-4 sm:mb-5 flex flex-wrap items-center gap-2 sm:gap-2.5 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.14em]">
                <span className="inline-flex items-center gap-1.5 text-mp-petrol">
                  <MicrosoftLogo className="h-3.5 w-3.5" />
                  Microsoft Solutions Partner
                </span>
                <span className="text-mp-muted/50">•</span>
                <span className="text-mp-teal font-bold">
                  {industryName} Architecture Guide
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-mp-ink tracking-tight leading-[1.08] text-balance">
                {h1 || `Microsoft solutions for ${industryName}`}
              </h1>

              {/* Metadata Badges Strip */}
              <div className="text-[13px] sm:text-[14px] text-mp-secondary mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 font-medium">
                <span className="inline-flex items-center gap-1.5 text-mp-ink font-semibold">
                  <span className="size-2 rounded-full bg-mp-teal" />
                  100% Fixed-Price Scope
                </span>
                <span className="text-mp-muted">•</span>
                <span className="text-mp-petrol font-semibold">
                  Senior Microsoft Architects
                </span>
                <span className="text-mp-muted">•</span>
                <span className="text-mp-muted font-normal">
                  Vernon, CT
                </span>
              </div>
            </div>

            {/* Right Column: Floating Ecosystem Widgets in the Open Area */}
            <div
              className="hidden lg:flex lg:col-span-5 xl:col-span-5 relative h-[360px] lg:h-[400px] w-full items-center justify-center overflow-hidden"
              aria-hidden="true"
            >
              {/* Subtle ambient blur wash */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mp-petrol/[0.06] blur-3xl"
              />

              {/* Floating Widgets */}
              <div className="relative w-full h-full">
                {RIGHT_COLUMN_WIDGETS.map((widget, idx) => (
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
                      sizes="95px"
                      loading={idx < 3 ? "eager" : "lazy"}
                      fetchPriority="low"
                      className="w-full h-auto object-contain cursor-pointer"
                    />
                    <span className="integration-tooltip">{widget.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Breadcrumbs Navigation Bar (Matches Blog Post layout) */}
      <div className="w-full border-b border-mp-border-subtle bg-white">
        <Container className="py-3.5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-mp-muted font-medium">
              <li>
                <Link href="/" className="hover:text-mp-ink hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-mp-muted">/</span>
              </li>
              <li>
                <Link href="/industries/" className="hover:text-mp-ink hover:underline">
                  Industries
                </Link>
              </li>
              <li>
                <span className="text-mp-muted">/</span>
              </li>
              <li className="text-mp-ink font-semibold truncate max-w-[280px] sm:max-w-md">
                {industryName}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Quick Overview Answer Card & Hero Proof Metrics Actions */}
      {(answerQuestion || children) && (
        <Container className="pt-8 sm:pt-10">
          <div className="flex flex-col gap-6">
            {answerQuestion && answerText && (
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-mp-border bg-white p-6 sm:p-8 shadow-xs">
                <div className="relative z-[1]">
                  <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-mp-petrol/15 bg-mp-petrol-tint px-3 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.12em] text-mp-petrol">
                    <span className="h-1.5 w-1.5 rounded-full bg-mp-mint" />
                    Quick Overview
                  </div>
                  <h2 className="mb-2.5 font-display text-[17px] sm:text-[20px] font-bold tracking-tight text-mp-petrol">
                    {answerQuestion}
                  </h2>
                  <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] text-mp-secondary">
                    <RichText text={answerText} />
                  </p>
                </div>
              </div>
            )}
            {children}
          </div>
        </Container>
      )}
    </>
  );
}
