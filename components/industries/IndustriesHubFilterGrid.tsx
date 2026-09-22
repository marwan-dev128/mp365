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

const TOOL_BADGES: Record<string, string> = {
  manufacturing: "Readiness Check",
  "logistics-supply-chain": "Readiness Check",
  "energy-utilities": "Readiness Check",
  "construction-engineering": "Cost Estimator",
  retail: "Readiness Check",
  "federal-contractors": "CMMC Check",
  "financial-services": "NCUA Check",
  "medical-devices": "QMSR Check",
  healthcare: "Purview Check",
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
          const cluster = INDUSTRY_CLUSTERS[ind.slug] || "Industry Practice";
          const toolBadge = TOOL_BADGES[ind.slug];

          return (
            <article
              key={ind.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[28px] border border-mp-border bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-mp-teal/40"
            >
              {/* Card Image at Top */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full overflow-hidden bg-mp-parchment">
                <Image
                  src={imageSrc}
                  alt={ind.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mp-petrol/60 via-transparent to-black/15 z-[1]" />

                {/* Floating Sector Cluster Badge */}
                <div className="absolute top-3.5 left-3.5 z-[2]">
                  <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 text-[11px] font-bold text-mp-petrol shadow-2xs border border-white/60">
                    {cluster}
                  </span>
                </div>

                {/* Floating Interactive Tool Badge */}
                {toolBadge && (
                  <div className="absolute top-3.5 right-3.5 z-[2]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-mp-lime/95 backdrop-blur-xs px-2.5 py-1 text-[10.5px] font-bold text-mp-ink shadow-2xs">
                      <span>⚡</span>
                      <span>{toolBadge}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <Link href={`/industries/${ind.slug}/`} className="group/link block">
                    <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-mp-ink group-hover/link:text-mp-teal transition-colors leading-tight">
                      {ind.name}
                    </h3>
                  </Link>

                  <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-[1.6] text-mp-secondary line-clamp-3">
                    <RichText text={ind.heroQuestion || ind.metaDescription} />
                  </p>

                  {/* Sub-sectors Served Chips */}
                  {ind.subSectors && ind.subSectors.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-mp-border/60">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-mp-muted block mb-2">
                        Sub-Sectors Covered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.subSectors.slice(0, 3).map((sub, idx) => (
                          <span
                            key={idx}
                            className="inline-block rounded-md bg-mp-parchment px-2.5 py-1 text-[11.5px] font-medium text-mp-ink"
                          >
                            {sub}
                          </span>
                        ))}
                        {ind.subSectors.length > 3 && (
                          <span className="inline-block rounded-md bg-mp-parchment/60 px-2 py-1 text-[11px] font-medium text-mp-muted">
                            +{ind.subSectors.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-4 border-t border-mp-border flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}/`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-mp-petrol group-hover:text-mp-teal transition-colors"
                  >
                    <span>View industry guide & decision matrix</span>
                    <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">›</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
