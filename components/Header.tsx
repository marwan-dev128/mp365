"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import type { SiteSettings } from "@prisma/client";
import { ArrowUpRight, ChevronDown, Close, Mail, Menu, Phone, Shield } from "./ui/Icons";

type NavItem = {
  name: string;
  href: string;
  desc?: string;
};

type MegaGroup = {
  label: string;
  href: string;
  alignClass: string;
  items: NavItem[];
  highlight: {
    tag: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  footerLink: {
    text: string;
    href: string;
  };
};

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  "ma-tenant-migration": "Tenant consolidations, divestitures & cutovers",
  "microsoft-365-migration": "Zero-downtime Google & Exchange migrations",
  "dynamics-365": "ERP, CRM & Business Central implementations",
  "power-platform": "Custom apps, automated workflows & BI",
  "data-governance": "Purview compliance, DLP & retention policies",
  "application-modernization": "Legacy app re-platforming on Azure",
  "collaboration-enablement": "SharePoint intranets, Teams & Viva adoption",
  "contract-management": "Automated contract lifecycle & approvals",
};

const SOLUTION_DESCRIPTIONS: Record<string, string> = {
  "sharepoint-intranet": "Modern digital workplaces & document hubs",
  "data-analytics": "Power BI dashboards & executive insights",
  "crm-deployment": "Sales pipeline & customer lifecycle automation",
  "financial-management": "Automated ledgers, billing & ERP workflows",
};

const INDUSTRY_DESCRIPTIONS: Record<string, string> = {
  manufacturing: "Supply chain, shop floor & ERP integration",
  healthcare: "HIPAA-compliant M365 cloud & data security",
  retail: "Inventory tracking, POS sync & omnichannel CRM",
};

const RESOURCE_DESCRIPTIONS: Record<string, string> = {
  "/dynamics-365/": "Sales, Business Central, Finance & Operations",
  "/pricing/": "Transparent scoping & project cost ranges",
  "/compare/": "MP365 vs DIY vs Generic Managed Services",
  "/migrations/": "Step-by-step enterprise cloud migration guides",
  "/assessments/": "Architecture, licensing & compliance audits",
  "/resources/glossary/": "Comprehensive Microsoft 365 & cloud glossary",
};

export function Header({
  services,
  solutions,
  industries,
  settings,
}: {
  services: { slug: string; shortName: string }[];
  solutions: { slug: string; name: string }[];
  industries: { slug: string; name: string }[];
  settings: Pick<SiteSettings, "phone" | "phoneDisplay" | "email">;
}) {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  const navGroups: MegaGroup[] = [
    {
      label: "Services",
      href: "/services/",
      alignClass: "left-0 w-[740px]",
      items: services.map((s) => ({
        name: s.shortName,
        href: `/services/${s.slug}/`,
        desc: SERVICE_DESCRIPTIONS[s.slug] || "Enterprise cloud migration & consulting",
      })),
      highlight: {
        tag: "Free Assessment",
        title: "Ready for your cloud migration?",
        description: "Get a fixed-scope architecture assessment with zero downtime risk.",
        ctaText: "Schedule Discovery",
        ctaHref: "/contact/",
      },
      footerLink: {
        text: "Explore all migration & implementation services",
        href: "/services/",
      },
    },
    {
      label: "Solutions",
      href: "/solutions/",
      alignClass: "left-[-80px] w-[680px]",
      items: solutions.map((s) => ({
        name: s.name,
        href: `/solutions/${s.slug}/`,
        desc: SOLUTION_DESCRIPTIONS[s.slug] || "Tailored Microsoft business solutions",
      })),
      highlight: {
        tag: "Enterprise Apps",
        title: "Custom Business Architecture",
        description: "Built on Microsoft Dataverse, Azure, and Copilot Studio.",
        ctaText: "Explore Solutions",
        ctaHref: "/solutions/",
      },
      footerLink: {
        text: "Browse all custom business solutions",
        href: "/solutions/",
      },
    },
    {
      label: "Industries",
      href: "/industries/",
      alignClass: "left-[-140px] w-[640px]",
      items: industries.map((i) => ({
        name: i.name,
        href: `/industries/${i.slug}/`,
        desc: INDUSTRY_DESCRIPTIONS[i.slug] || "Industry-specific compliance & cloud systems",
      })),
      highlight: {
        tag: "Compliance Ready",
        title: "Industry Standards & Baselines",
        description: "Pre-configured security baselines for HIPAA, SOC 2, and ISO.",
        ctaText: "View Industry Expertise",
        ctaHref: "/industries/",
      },
      footerLink: {
        text: "View all specialized industry practices",
        href: "/industries/",
      },
    },
    {
      label: "Resources",
      href: "/resources/",
      alignClass: "right-[-80px] w-[720px]",
      items: [
        {
          name: "Dynamics 365 by Product",
          href: "/dynamics-365/",
          desc: RESOURCE_DESCRIPTIONS["/dynamics-365/"],
        },
        {
          name: "Pricing Guidelines",
          href: "/pricing/",
          desc: RESOURCE_DESCRIPTIONS["/pricing/"],
        },
        {
          name: "Compare Platforms",
          href: "/compare/",
          desc: RESOURCE_DESCRIPTIONS["/compare/"],
        },
        {
          name: "Migration Guides",
          href: "/migrations/",
          desc: RESOURCE_DESCRIPTIONS["/migrations/"],
        },
        {
          name: "Cloud Assessments",
          href: "/assessments/",
          desc: RESOURCE_DESCRIPTIONS["/assessments/"],
        },
        {
          name: "Knowledge Glossary",
          href: "/resources/glossary/",
          desc: RESOURCE_DESCRIPTIONS["/resources/glossary/"],
        },
      ],
      highlight: {
        tag: "Calculators & Tools",
        title: "Cost & Timeline Estimators",
        description: "Calculate scopes and timelines specific to your tenant size.",
        ctaText: "Explore Pricing",
        ctaHref: "/pricing/",
      },
      footerLink: {
        text: "Browse all resources, guides & tools",
        href: "/resources/",
      },
    },
  ];

  // Blog and About live in the footer only, by request — the header carries
  // commercial-intent navigation.
  const simpleLinks = [{ name: "Case Studies", href: "/case-studies/" }];

  return (
    <>
      {/* Announcement strip — cyan, above the nav. */}
      <div className="bg-cyan text-navy">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-8 gap-y-1 px-6 py-2.5 text-[13px] font-semibold">
          <span className="inline-flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Microsoft consulting partner — 20+ years in enterprise cloud
          </span>
          <a
            href={`mailto:${settings.email}`}
            className="ml-auto inline-flex items-center gap-2 hover:underline"
          >
            <Mail className="h-4 w-4" />
            {settings.email}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#f0f2f5] bg-white">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
            {navGroups.map((group) => (
              <div key={group.label} className="group relative">
                <Link
                  href={group.href}
                  className="flex items-center gap-1 whitespace-nowrap py-2 text-sm font-medium text-ink-2 transition-colors hover:text-azure group-hover:text-azure"
                >
                  {group.label}
                  <ChevronDown className="mt-0.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* Mega Menu Dropdown */}
                <div
                  className={`invisible absolute top-full pt-3 opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 z-50 ${group.alignClass}`}
                >
                  <div className="overflow-hidden rounded-[var(--mp-radius-card)] border border-line bg-white shadow-[0_20px_60px_rgba(0,16,51,0.12)]">
                    <div className="grid grid-cols-[1fr_240px] gap-5 p-5">
                      {/* Left items grid */}
                      <div
                        className={`grid ${
                          group.items.length > 4 ? "grid-cols-2" : "grid-cols-1"
                        } gap-x-2 gap-y-1`}
                      >
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group/item flex flex-col rounded-xl p-2.5 transition-all hover:bg-surface-light hover:shadow-xs"
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[13.5px] font-bold text-navy transition-colors group-hover/item:text-azure">
                                {item.name}
                              </span>
                              <ArrowUpRight className="h-3.5 w-3.5 text-muted/60 opacity-0 transition-all duration-150 group-hover/item:translate-x-0.5 group-hover/item:opacity-100 group-hover/item:text-azure" />
                            </div>
                            {item.desc && (
                              <span className="mt-0.5 text-[12px] leading-snug text-muted line-clamp-1">
                                {item.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                      {/* Right Highlight Card */}
                      <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-navy p-4 text-white">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-azure/30 blur-xl"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -left-8 -bottom-8 h-28 w-28 rounded-full bg-cyan/20 blur-xl"
                        />
                        <div className="relative z-10">
                          <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-cyan">
                            {group.highlight.tag}
                          </span>
                          <p className="font-display text-[14px] font-bold leading-snug text-white">
                            {group.highlight.title}
                          </p>
                          <p className="mt-1 text-[11.5px] leading-relaxed text-white/75">
                            {group.highlight.description}
                          </p>
                        </div>
                        <Link
                          href={group.highlight.ctaHref}
                          className="relative z-10 mt-3.5 inline-flex items-center justify-center gap-1.5 rounded-lg bg-azure px-3 py-2 text-[12px] font-bold text-white shadow-xs transition-all hover:bg-azure-hover"
                        >
                          <span>{group.highlight.ctaText}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex items-center justify-between border-t border-line/70 bg-white px-5 py-3 text-[12.5px]">
                      <span className="text-[12px] font-medium text-ink-2">
                        Microsoft Cloud Solutions Partner
                      </span>
                      <Link
                        href={group.footerLink.href}
                        className="flex items-center gap-1 text-[12.5px] font-bold text-azure hover:underline"
                      >
                        <span>{group.footerLink.text}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap py-2 text-sm font-medium text-ink-2 transition-colors hover:text-azure"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact and Phone Badges */}
          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={`tel:${settings.phone}`}
              aria-label={`Call ${settings.phoneDisplay}`}
              className="mp-press hidden items-center gap-2.5 rounded-full bg-surface-light py-1 pl-1 pr-3.5 hover:bg-azure-subtle 2xl:flex"
            >
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-navy text-white">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <span className="whitespace-nowrap text-[13px] font-bold text-navy">
                {settings.phoneDisplay}
              </span>
            </a>
            <Link
              href="/contact/"
              className="mp-press inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-line px-4 py-2 text-[13.5px] font-semibold text-navy hover:border-azure hover:bg-azure-subtle hover:text-azure"
            >
              Contact Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="mp-press rounded-xl border border-line p-2 text-navy xl:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <nav aria-label="Primary mobile" className="border-t border-line bg-white xl:hidden">
            <div className="mx-auto flex max-w-[1240px] flex-col gap-1 px-6 py-4">
              {navGroups.map((group) => (
                <div key={group.label} className="border-b border-line/40 pb-2">
                  <button
                    type="button"
                    onClick={() => setMobileGroup((g) => (g === group.label ? null : group.label))}
                    aria-expanded={mobileGroup === group.label}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-navy hover:bg-surface-light"
                  >
                    {group.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileGroup === group.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileGroup === group.label && (
                    <div className="flex flex-col gap-1 pl-3 pr-1 pt-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex flex-col rounded-xl px-3 py-2 hover:bg-surface-light"
                        >
                          <span className="text-[13.5px] font-semibold text-navy">{item.name}</span>
                          {item.desc && (
                            <span className="text-[12px] text-muted">{item.desc}</span>
                          )}
                        </Link>
                      ))}
                      <Link
                        href={group.footerLink.href}
                        onClick={() => setOpen(false)}
                        className="mt-1 flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-azure"
                      >
                        <span>{group.footerLink.text} →</span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              {simpleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-navy hover:bg-surface-light"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-azure px-5 py-3 text-sm font-bold text-white shadow-xs"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
