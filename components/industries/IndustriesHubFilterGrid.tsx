"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/RichText";

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroQuestion: string;
  heroAnswer: string;
  imageUrl?: string | null;
  subSectors?: string[];
  tool?: string | null;
  h1?: string | null;
}

const INDUSTRY_IMAGES: Record<string, string> = {
  manufacturing: "/images/mp365/industries/manufacturing-business-central.webp",
  healthcare: "/images/mp365/industries/healthcare-microsoft-purview.webp",
  retail: "/images/mp365/industries/retail-power-bi-reporting.webp",
  "financial-services": "/images/mp365/industries/financial-services-compliance.webp",
  "federal-contractors": "/images/mp365/industries/federal-contractors-cmmc.webp",
  "medical-devices": "/images/mp365/industries/medical-devices-validation.webp",
  "energy-utilities": "/images/mp365/industries/energy-utilities-cip.webp",
  "logistics-supply-chain": "/images/mp365/industries/logistics-supply-chain-wms.webp",
  "construction-engineering": "/images/mp365/industries/construction-engineering-erp.webp",
};

const INDUSTRY_CLUSTERS: Record<string, "Operations & Industrial" | "Regulated & Compliance"> = {
  manufacturing: "Operations & Industrial",
  "logistics-supply-chain": "Operations & Industrial",
  "energy-utilities": "Operations & Industrial",
  "construction-engineering": "Operations & Industrial",
  retail: "Operations & Industrial",
  "federal-contractors": "Regulated & Compliance",
  "financial-services": "Regulated & Compliance",
  "medical-devices": "Regulated & Compliance",
  healthcare: "Regulated & Compliance",
};

type FilterCategory = "all" | "operations" | "regulated";

export function IndustriesHubFilterGrid({ industries }: { industries: IndustryItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredIndustries = useMemo(() => {
    if (activeFilter === "all") return industries;
    if (activeFilter === "operations") {
      return industries.filter(
        (i) => INDUSTRY_CLUSTERS[i.slug] === "Operations & Industrial"
      );
    }
    if (activeFilter === "regulated") {
      return industries.filter(
        (i) => INDUSTRY_CLUSTERS[i.slug] === "Regulated & Compliance"
      );
    }
    return industries;
  }, [industries, activeFilter]);

  const operationsCount = industries.filter(
    (i) => INDUSTRY_CLUSTERS[i.slug] === "Operations & Industrial"
  ).length;
  const regulatedCount = industries.filter(
    (i) => INDUSTRY_CLUSTERS[i.slug] === "Regulated & Compliance"
  ).length;

  return (
    <section id="industries-grid" className="w-full scroll-mt-28 py-10 sm:py-16">
      {/* Filter Tabs Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-mp-teal block mb-2">
            Industry Practices
          </span>
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-[-0.03em] text-mp-petrol leading-tight">
            Nine industries, each with its own decisions
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-mp-secondary max-w-2xl leading-relaxed">
            Every industry turns on a make-or-break Microsoft product, cloud, or compliance decision. Select an industry to review the architecture, decision matrix, and readiness benchmarks.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div
          className="flex w-fit items-center gap-1 bg-mp-parchment p-1.5 rounded-full border border-mp-border shrink-0 self-start sm:self-auto"
          role="tablist"
          aria-label="Filter industries by sector"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
            className={`rounded-full px-4 sm:px-5 py-2 text-[12.5px] sm:text-[13px] transition-all duration-200 cursor-pointer ${
              activeFilter === "all"
                ? "bg-mp-lime text-mp-ink font-bold shadow-2xs"
                : "text-mp-ink font-medium hover:text-mp-petrol hover:bg-white/60"
            }`}
          >
            All Sectors ({industries.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "operations"}
            onClick={() => setActiveFilter("operations")}
            className={`rounded-full px-4 sm:px-5 py-2 text-[12.5px] sm:text-[13px] transition-all duration-200 cursor-pointer ${
              activeFilter === "operations"
                ? "bg-mp-lime text-mp-ink font-bold shadow-2xs"
                : "text-mp-ink font-medium hover:text-mp-petrol hover:bg-white/60"
            }`}
          >
            Operations & Industrial ({operationsCount})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "regulated"}
            onClick={() => setActiveFilter("regulated")}
            className={`rounded-full px-4 sm:px-5 py-2 text-[12.5px] sm:text-[13px] transition-all duration-200 cursor-pointer ${
              activeFilter === "regulated"
                ? "bg-mp-lime text-mp-ink font-bold shadow-2xs"
                : "text-mp-ink font-medium hover:text-mp-petrol hover:bg-white/60"
            }`}
          >
            Regulated & Compliance ({regulatedCount})
          </button>
        </div>
      </div>

      {/* 9 Industry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {filteredIndustries.map((ind) => {
          const imageSrc =
            INDUSTRY_IMAGES[ind.slug] || ind.imageUrl || `/images/industries/${ind.slug}.jpg`;

          return (
            <article
              key={ind.slug}
              className="group relative flex flex-col justify-end overflow-hidden rounded-[28px] p-7 sm:p-8 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1"
            >
              <Image
                src={imageSrc}
                alt={ind.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1280px) 440px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mp-petrol/95 via-mp-petrol/55 to-transparent z-[1]" />

              <div className="relative z-[2] flex flex-col justify-end">
                <Link href={`/industries/${ind.slug}/`} className="block">
                  <h3 className="font-display text-[22px] sm:text-[24px] font-bold text-white leading-tight">
                    {ind.name}
                  </h3>
                </Link>
                <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.55] text-white/90">
                  <RichText text={ind.heroQuestion || ind.metaDescription} />
                </p>
                <Link
                  href={`/industries/${ind.slug}/`}
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-mp-petrol/45 backdrop-blur-sm px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/20 self-start"
                >
                  <span>Explore industry guide</span>
                  <span className="text-xs">›</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
