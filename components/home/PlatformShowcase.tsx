"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface TabData {
  id: "travel" | "spend" | "events";
  label: string;
  description: string;
  linkText: string;
  linkHref: string;
  video: string;
  proof: {
    logoSrc: string;
    logoAlt: string;
    metrics: { value: string; label: string }[];
    quote: string;
    author: string;
    caseStudyHref: string;
  };
}

const TABS: TabData[] = [
  {
    id: "travel",
    label: "Travel",
    description:
      "Book and manage travel in more than 178 countries with the widest inventory of flights, hotels, trains, and cars. Our AI handles everything from enforcing policy and tracking budgets to assigning per diems and creating expenses.",
    linkText: "Explore travel",
    linkHref: "/platform/?tab=Travel",
    video: "/videos/perk/travel_01.mp4",
    proof: {
      logoSrc: "/images/perk/showcase/fabletics.webp",
      logoAlt: "Fabletics",
      metrics: [
        { value: "60hrs", label: "manual work saved" },
        { value: "$37.5K", label: "savings per year" },
      ],
      quote:
        "“It’s not just about visibility—it’s about being able to act on it. If one entity is spending double on flights compared to another, I can see that immediately and investigate.”",
      author: "Sören Heise, VP of Financial Planning Europe at Fabletics",
      caseStudyHref: "/case-studies/fabletics/",
    },
  },
  {
    id: "spend",
    label: "Spend",
    description:
      "Cards and expenses with all the back-and-forth handled for you. Our AI captures receipts, matches transactions, enforces policy, and routes approvals. Finance teams get control, visibility, and with cashback on every Perk card purchase, money back in the bank, too.",
    linkText: "Explore spend",
    linkHref: "/expense-management-nam/",
    video: "/videos/perk/spend_02.mp4",
    proof: {
      logoSrc: "/images/perk/showcase/on.webp",
      logoAlt: "On Running",
      metrics: [
        { value: "90%", label: "expense automation" },
        { value: "79%", label: "cost reduction" },
      ],
      quote:
        "“Perk is so invaluable for us that it’s hard to put a number on it. It saves us so much time and energy.”",
      author: "Martin Hoffmann, CFO and CO-CEO at On Running",
      caseStudyHref: "/case-studies/on-running/",
    },
  },
  {
    id: "events",
    label: "Events",
    description:
      "Our AI searches thousands of venues, negotiates the rates, and brings you the best options—you just pick one. RSVPs, travel, accommodation, and comms are all handled for you in one easy-to-use interface.",
    linkText: "Explore events",
    linkHref: "/platform/events/",
    video: "/videos/perk/events_03.mp4",
    proof: {
      logoSrc: "/images/perk/showcase/storyblok.webp",
      logoAlt: "Storyblok",
      metrics: [
        { value: "60+", label: "monthly trips" },
        { value: "43", label: "global offices" },
      ],
      quote:
        "“It saves time, while making sure you can control the budget and give people freedom. It’s a 21st century tool.”",
      author: "Michal Zadrobilek, Expenses Manager at Storyblok",
      caseStudyHref: "/case-studies/storyblok/",
    },
  },
];

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState<"travel" | "spend" | "events">("travel");
  const tab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <div className="w-full relative py-8 sm:py-12" data-component="featureTabsShowcase">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 feature-tabs-showcase">
        {/* ================================================= Top Main Showcase Card ================================================= */}
        <div className="bg-[#f6f6ee] relative overflow-hidden rounded-[24px] md:rounded-[28px] p-4 md:p-0">
          {/* Floating White Switch Tabs in Top-Left */}
          <div
            className="tabs-switch relative mx-auto md:absolute md:top-6 md:left-6 flex w-fit items-center gap-1 bg-white p-1.5 rounded-full shadow-sm z-20"
            role="tablist"
          >
            {TABS.map((t) => {
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
                      ? "bg-[#beff50] text-[#14140f] font-bold shadow-2xs"
                      : "text-[#14140f] font-medium hover:text-black hover:bg-black/5"
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
              <p className="text-[#5a5a52] text-[13.5px] sm:text-[14px] lg:text-[14.5px] font-sono leading-[1.6]">
                {tab.description}
              </p>

              <div>
                <Link
                  href={tab.linkHref}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium font-sono text-[#14140f] hover:text-black group self-start"
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
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="object-contain md:object-cover max-h-full w-auto md:w-full rounded-[18px] md:rounded-none md:rounded-tl-[24px] shadow-sm md:shadow-none"
              />
            </div>
          </div>
        </div>

        {/* ================================================= Bottom Proof Bar Card ================================================= */}
        <div className="proof-bar-panels bg-[#f6f6ee] p-5 sm:p-6 md:p-8 mt-3 sm:mt-4 md:mt-5 rounded-[24px] md:rounded-[28px]">
          <div className="proof-bar-panel flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            {/* Left: Logo & Metrics */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 shrink-0">
              {/* Brand Logo */}
              <div className="flex items-center pb-3 sm:pb-0 border-b sm:border-b-0 border-[#d8d8ca] w-32 sm:w-36 h-10">
                <Image
                  src={tab.proof.logoSrc}
                  alt={tab.proof.logoAlt}
                  width={140}
                  height={40}
                  unoptimized
                  className="object-contain max-h-9 w-auto"
                />
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-6 sm:gap-8">
                {tab.proof.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-center ${
                      idx > 0 ? "border-l border-solid border-[#d8d8ca] pl-6 sm:pl-8" : "border-l border-solid border-[#d8d8ca] pl-6 sm:pl-8"
                    }`}
                  >
                    <span className="font-display text-[30px] sm:text-[34px] font-extrabold tracking-[-0.03em] text-[#14140f] leading-none whitespace-nowrap">
                      {metric.value}
                    </span>
                    <span className="mt-1 text-[11.5px] sm:text-[12px] text-[#66665e] font-sono whitespace-nowrap">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quote & View Case Study Link */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 flex-1 lg:border-l lg:border-[#d8d8ca] lg:pl-8">
              <div className="flex flex-col max-w-xl">
                <p className="text-[#14140f] text-[13px] sm:text-[13.5px] font-sono leading-[1.5]">
                  {tab.proof.quote}
                </p>
                <span className="text-[#66665e] text-[12px] font-sono mt-1">
                  {tab.proof.author}
                </span>
              </div>

              <div className="shrink-0">
                <Link
                  href={tab.proof.caseStudyHref}
                  className="inline-flex items-center gap-1.5 text-[13px] sm:text-[13.5px] font-sono font-semibold text-[#14140f] hover:text-black group whitespace-nowrap self-start md:self-center"
                >
                  <span className="underline decoration-1 underline-offset-4">View case study</span>
                  <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
