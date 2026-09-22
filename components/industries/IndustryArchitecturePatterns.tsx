import React from "react";
import Link from "next/link";
import { Shield, ArrowUpRight } from "@/components/ui/Icons";

const PATTERNS = [
  {
    step: "01",
    title: "Tenant Boundary & Identity Isolation",
    subtitle: "Commercial, GCC High & M&A Enclaves",
    body: "Determining where regulated data lives versus everyday corporate email. We establish whether defence CUI demands a GCC High enclave, how utility OT networks remain separated from corporate M365, and how merging institutions consolidate tenants without leaking data across corporate entities.",
    linkText: "Explore M&A Migrations",
    linkHref: "/services/ma-tenant-migration/",
  },
  {
    step: "02",
    title: "Configuration as Evidence State",
    subtitle: "Audit Retention, DLP & Purview",
    body: "No Microsoft licence makes an organization HIPAA, NCUA, CMMC, or FDA compliant by default. Regulatory frameworks require active tenant configuration: extending 180-day default audit logs to multi-year lookbacks, enforcing NPI and PHI DLP policies, and structuring evidence for examiners.",
    linkText: "Explore Data Governance",
    linkHref: "/services/data-governance/",
  },
  {
    step: "03",
    title: "Core System of Record Discipline",
    subtitle: "ERP, CRM & Power Platform Scope",
    body: "We do not replace banking cores, hospital EHRs, or industrial SCADA networks. The core remains untouched. We build and govern the operational layer around it: Dynamics 365 for member relationships, Business Central for discrete manufacturing or 3PLs, and Power Platform for field crews.",
    linkText: "Explore Dynamics 365",
    linkHref: "/services/dynamics-365/",
  },
];

export function IndustryArchitecturePatterns() {
  return (
    <section className="w-full bg-mp-parchment/60 py-16 sm:py-20 border-y border-mp-border">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-mp-teal block mb-2">
            Architectural Methodology
          </span>
          <h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold tracking-[-0.03em] text-mp-petrol leading-tight">
            Three principles that govern all nine industries
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-mp-secondary leading-relaxed">
            The software catalogue is standard; the operating risk is unique. These three architectural guardrails guide every discovery, implementation, and cutover we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PATTERNS.map((pattern) => (
            <div
              key={pattern.step}
              className="group flex flex-col justify-between rounded-[24px] sm:rounded-[28px] bg-white p-7 sm:p-8 border border-mp-border shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display text-[26px] sm:text-[30px] font-extrabold text-mp-mint leading-none">
                    {pattern.step}
                  </span>
                  <div className="flex size-9 items-center justify-center rounded-full bg-mp-petrol/5 text-mp-petrol">
                    <Shield className="h-4 w-4" />
                  </div>
                </div>

                <span className="text-[11.5px] font-bold uppercase tracking-wider text-mp-teal block mb-1">
                  {pattern.subtitle}
                </span>
                <h3 className="font-display text-[20px] sm:text-[22px] font-bold text-mp-ink leading-snug">
                  {pattern.title}
                </h3>

                <p className="mt-3.5 text-[13.5px] sm:text-[14px] leading-[1.65] text-mp-secondary">
                  {pattern.body}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-mp-border">
                <Link
                  href={pattern.linkHref}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-mp-petrol hover:text-mp-teal transition-colors"
                >
                  <span>{pattern.linkText}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
