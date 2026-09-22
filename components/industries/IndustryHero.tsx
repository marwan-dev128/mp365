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
    width: 68,
    height: 68,
    left: "0%",
    top: "30%",
    rotation: "-6deg",
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    src: "/hero-section-icons/Microsoft_Copilot_Icon.svg",
    width: 78,
    height: 78,
    left: "19%",
    top: "6%",
    rotation: "4deg",
  },
  {
    id: "business-central",
    name: "Business Central",
    src: "/hero-section-icons/66433f09a327b088760628d9_business-central-logo.png",
    width: 74,
    height: 74,
    left: "38%",
    top: "40%",
    rotation: "-4deg",
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    src: "/hero-section-icons/Microsoft_Azure.svg.webp",
    width: 70,
    height: 70,
    left: "57%",
    top: "8%",
    rotation: "6deg",
  },
  {
    id: "power-platform",
    name: "Power Platform",
    src: "/hero-section-icons/microsoft-power-platform-icons.png",
    width: 66,
    height: 66,
    left: "75%",
    top: "42%",
    rotation: "-6deg",
  },
  {
    id: "power-bi",
    name: "Power BI",
    src: "/hero-section-icons/power-bi.png",
    width: 68,
    height: 68,
    left: "91%",
    top: "16%",
    rotation: "4deg",
  },
];

/**
 * Single Industry Page Hero section matching the exact aesthetic of the Blog Post Hero:
 * - Full-width parchment header with category eyebrow, H1, and metadata strip
 * - Static Microsoft ecosystem widgets absolutely positioned in a horizontal composition on the right
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
          <div className="relative flex items-center justify-between min-h-[200px] lg:min-h-[240px]">
            {/* Left Column: Eyebrow, H1 & Practice Metadata */}
            <div className="w-full lg:max-w-[56%] xl:max-w-[60%] relative z-10">
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
              <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[50px] font-bold text-mp-ink tracking-tight leading-[1.08] text-balance">
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

            {/* Right: Absolute Static Horizontal Ecosystem Icons Cluster */}
            <div
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[460px] xl:w-[520px] h-[170px] pointer-events-none select-none z-10"
              aria-hidden="true"
            >
              {/* Subtle ambient blur wash behind horizontal cluster */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[140px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mp-petrol/[0.04] blur-2xl"
              />

              {/* Static Icons positioned horizontally with subtle natural stagger */}
              <div className="relative w-full h-full">
                {RIGHT_COLUMN_WIDGETS.map((widget, idx) => (
                  <div
                    key={widget.id}
                    className="group absolute pointer-events-auto transition-transform duration-200 hover:scale-110 hover:z-20 cursor-pointer"
                    style={{
                      left: widget.left,
                      top: widget.top,
                      width: `${widget.width}px`,
                      transform: `rotate(${widget.rotation})`,
                    }}
                    title={widget.name}
                  >
                    <Image
                      src={widget.src}
                      alt={widget.name}
                      width={widget.width}
                      height={widget.height}
                      sizes="90px"
                      loading={idx < 3 ? "eager" : "lazy"}
                      fetchPriority="low"
                      className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.07)]"
                    />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block whitespace-nowrap rounded-md bg-mp-ink/90 px-2 py-0.5 text-[11px] font-medium text-white shadow-md z-30 pointer-events-none">
                      {widget.name}
                    </span>
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
