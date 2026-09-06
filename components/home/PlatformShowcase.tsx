"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import defaultData from "@/store/home/platform-showcase.json";

export interface TabData {
  id: "travel" | "spend" | "events" | string;
  label: string;
  description: string;
  linkText: string;
  linkHref: string;
  video: string;
  videoPoster?: string;
  proof: {
    logoSrc: string;
    logoAlt: string;
    metrics: { value: string; label: string }[];
    quote: string;
    author: string;
    caseStudyHref: string;
  };
}

export interface PlatformShowcaseProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  tabs?: TabData[];
}

const DEFAULT_TABS: TabData[] = defaultData.tabs as TabData[];

export function PlatformShowcase({
  eyebrow,
  title = (defaultData as { title?: string }).title || "Migrate, build, and govern across Microsoft 365",
  description = (defaultData as { description?: string }).description || "From tenant merges and carve-outs to Dynamics 365 deployments and Purview compliance, we deliver predictable outcomes at fixed price.",
  buttonText,
  buttonHref,
  tabs = DEFAULT_TABS,
}: PlatformShowcaseProps = {}) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || "travel");
  const tab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="w-full relative bg-white pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-8" data-component="featureTabsShowcase">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 feature-tabs-showcase">
        {/* Section Header */}
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          buttonText={buttonText}
          buttonHref={buttonHref}
          className="mx-auto max-w-4xl flex flex-col items-center text-center mb-10 sm:mb-14"
          dataComponent="platformShowcaseHeader"
        />

        {/* ================================================= Top Main Showcase Card ================================================= */}
        <div className="bg-[#EAE4D8] relative overflow-hidden rounded-[24px] md:rounded-[28px] p-4 md:p-0">
          {/* Floating White Switch Tabs in Top-Left */}
          <div
            className="tabs-switch relative mx-auto md:absolute md:top-6 md:left-6 flex w-fit items-center gap-1 bg-white p-1.5 rounded-full shadow-sm z-20"
            role="tablist"
          >
            {tabs.map((t) => {
              const isActive = t.id === activeTab;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(t.id)}
                  className={`relative rounded-full px-5 py-2 text-[13px] sm:text-[13.5px] transition-all duration-200 cursor-pointer font-sono ${
                    isActive
                      ? "bg-mp-lime text-mp-ink font-bold shadow-2xs"
                      : "text-mp-ink font-medium hover:text-mp-petrol hover:bg-mp-petrol/[0.06]"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Showcase Panel Content */}
          <div className="showcase-panel flex flex-col-reverse md:flex-row md:gap-10 lg:gap-[100px] md:h-[360px] lg:h-[380px] overflow-hidden">
            {/* Left Description Column */}
            <div className="flex flex-col justify-end gap-6 w-full mt-4 md:mt-0 p-4 sm:p-6 md:p-8 md:pt-[100px] lg:pt-[110px] md:w-[440px] lg:w-[460px] shrink-0">
              <p className="text-mp-secondary text-[13.5px] sm:text-[14px] lg:text-[14.5px] font-sono leading-[1.6]">
                {tab.description}
              </p>

              <div>
                <Link
                  href={tab.linkHref}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium font-sono text-mp-ink hover:text-mp-petrol group self-start"
                >
                  <span className="underline decoration-1 underline-offset-4 font-semibold">{tab.linkText}</span>
                  <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </Link>
              </div>
            </div>

            {/* Right Video Mockup Column (Flush to right and bottom with rounded top-left) */}
            <div className="mt-4 md:mt-0 flex-1 flex items-center md:items-end md:justify-end overflow-hidden h-full">
              <video
                key={tab.video}
                src={tab.video}
                poster={tab.videoPoster}
                autoPlay
                muted
                loop
                playsInline
                /* Only the active tab is mounted, so metadata is enough to start;
                   "auto" was buffering the whole clip before first paint. */
                preload="metadata"
                aria-hidden="true"
                className="object-contain md:object-cover max-h-full w-auto md:w-full rounded-[18px] md:rounded-none md:rounded-tl-[24px] shadow-sm md:shadow-none"
              />
            </div>
          </div>
        </div>

        {/* ================================================= Bottom Proof Bar Card ================================================= */}
        <div className="proof-bar-panels bg-mp-parchment p-5 sm:p-6 md:p-8 mt-3 sm:mt-4 md:mt-5 rounded-[24px] md:rounded-[28px]">
          <div className="proof-bar-panel flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            {/* Left: Logo & Metrics */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 shrink-0">
              {/* Brand Logo */}
              {Boolean(tab.proof.logoSrc) && (
                <div className="flex items-center pb-3 sm:pb-0 border-b sm:border-b-0 border-mp-border w-32 sm:w-36 h-10">
                  <Image
                    src={tab.proof.logoSrc}
                    alt={tab.proof.logoAlt || "Brand logo"}
                    width={140}
                    height={40}
                    className="object-contain max-h-9 w-auto"
                  />
                </div>
              )}

              {/* Metrics */}
              <div className="flex items-center gap-6 sm:gap-8">
                {tab.proof.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-center ${
                      idx > 0 ? "border-l border-solid border-mp-border pl-6 sm:pl-8" : "border-l border-solid border-mp-border pl-6 sm:pl-8"
                    }`}
                  >
                    <span className="font-display text-[30px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-mp-petrol leading-none whitespace-nowrap">
                      {metric.value}
                    </span>
                    <span className="mt-1 text-[11.5px] sm:text-[12px] text-mp-muted font-sono whitespace-nowrap">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quote & View Case Study Link */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 flex-1 lg:border-l lg:border-mp-border lg:pl-8">
              <div className="flex flex-col max-w-xl">
                <p className="text-mp-ink text-[13px] sm:text-[13.5px] font-sono leading-[1.5]">
                  {tab.proof.quote}
                </p>
                <span className="text-mp-muted text-[12px] font-sono mt-1">
                  {tab.proof.author}
                </span>
              </div>

              <div className="shrink-0">
                <Link
                  href={tab.proof.caseStudyHref}
                  className="inline-flex items-center gap-1.5 text-[13px] sm:text-[13.5px] font-sono font-semibold text-mp-ink hover:text-mp-petrol group whitespace-nowrap self-start md:self-center"
                >
                  <span className="underline decoration-1 underline-offset-4">View case study</span>
                  <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
