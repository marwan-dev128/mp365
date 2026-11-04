import Link from "next/link";
import type { ReactNode } from "react";
import type { PageContent } from "@/content/types";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { RichText } from "@/components/RichText";
import { ArrowUpRight } from "@/components/ui/Icons";
import { MegaMenuIcon } from "@/components/ui/MegaMenuIcons";
import { stripInlineMarkup } from "@/lib/richtext";
import { CATEGORY_PAGES, childrenOf, getSitePage } from "@/lib/site-data";
import navigation from "@/store/navigation.json";
import { RichBlocks } from "./RichBlocks";
import { SiteHero } from "./SiteHero";
import { StickyConsultBar } from "./StickyConsultBar";

// Icons and one-line descriptions shared with the mega menu.
const NAV_COLUMNS = navigation.megaMenuGroups.flatMap((g) => g.columns);
const NAV_ITEMS: { href: string; description?: string; icon?: string }[] = NAV_COLUMNS.flatMap((c) => c.items);
const navItem = (href: string) => NAV_ITEMS.find((i) => i.href === href);
const SERVICE_COLUMNS: { href?: string; icon?: string; description?: string }[] = navigation.megaMenuGroups[0].columns;
const navColumn = (href: string) => SERVICE_COLUMNS.find((c) => c.href === href);

const GLANCE = [
  ["bestFor", "Best for"],
  ["includes", "Includes"],
  ["notIncluded", "Not included"],
  ["typicalTimeline", "Typical timeline"],
  ["howItStarts", "How it starts"],
] as const;

/** Service pages: the same labels on every page, as a band of cards. */
function AtAGlance({ data }: { data: NonNullable<PageContent["atAGlance"]> }) {
  const rows = GLANCE.filter(([key]) => data[key]);
  return (
    <section aria-label="At a glance" className="w-full bg-white pb-4 pt-10 sm:pt-12">
      <Container>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map(([key, label]) => (
            <div
              key={key}
              className={`rounded-[22px] p-6 ${
                key === "notIncluded" ? "border-2 border-dashed border-mp-border bg-white" : "bg-mp-parchment"
              }`}
            >
              <dt className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-mp-petrol-2">{label}</dt>
              <dd className="text-[14.5px] leading-[1.6] text-mp-ink">
                <RichText text={data[key] as string} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function ServiceTile({ href, name, description, icon }: { href: string; name: string; description?: string; icon?: string }) {
  return (
    <Link
      href={href}
      className="group flex h-full items-start gap-4 rounded-[22px] border border-mp-border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mp-petrol/30 sm:p-6"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-mp-parchment text-mp-petrol transition-colors group-hover:bg-mp-petrol group-hover:text-mp-mint">
        <MegaMenuIcon name={icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[16.5px] font-bold leading-snug text-mp-ink group-hover:text-mp-petrol">{name}</span>
        {description && <span className="mt-1.5 block text-[13.5px] leading-[1.55] text-mp-secondary">{description}</span>}
      </span>
      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-mp-petrol/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

/** Category pages open with their services as tiles, so they route first. */
function ChildServices({ path }: { path: string }) {
  const kids = childrenOf(path);
  return (
    <section className="w-full bg-mp-parchment/55 py-12 sm:py-16">
      <Container>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kids.map((k) => {
            const nav = navItem(k.path);
            return (
              <li key={k.path}>
                <ServiceTile href={k.path} name={k.name} description={nav?.description} icon={nav?.icon} />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/** The Services overview: every area as a panel with its services listed. */
function AreaPanels() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          {CATEGORY_PAGES.map((c) => {
            const col = navColumn(c.path);
            return (
              <div key={c.path} className="flex flex-col rounded-[28px] bg-mp-parchment p-7 sm:p-8">
                <Link href={c.path} className="group flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-mp-petrol text-mp-mint">
                    <MegaMenuIcon name={col?.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-mp-petrol group-hover:underline">
                      {c.name}
                    </span>
                    {col?.description && <span className="mt-1.5 block text-[14px] leading-[1.55] text-mp-secondary">{col.description}</span>}
                  </span>
                </Link>
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-mp-border pt-5">
                  {childrenOf(c.path).map((k) => (
                    <li key={k.path}>
                      <Link
                        href={k.path}
                        className="inline-flex rounded-full border border-mp-border bg-white px-3.5 py-1.5 text-[13px] font-semibold text-mp-ink transition-colors hover:border-mp-petrol hover:bg-mp-petrol hover:text-white"
                      >
                        {k.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/** Service pages end by offering the rest of their area. */
function MoreInArea({ path, parentPath }: { path: string; parentPath: string }) {
  const parent = getSitePage(parentPath);
  const others = childrenOf(parentPath).filter((p) => p.path !== path);
  if (!others.length) return null;
  return (
    <section className="w-full bg-mp-parchment/55 py-12 sm:py-16">
      <Container>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <p className="font-display text-[26px] font-bold tracking-[-0.025em] text-mp-petrol sm:text-[32px]">More in {parent.name}</p>
          <Link href={parent.path} className="text-[13.5px] font-bold text-mp-petrol underline underline-offset-4">
            See the {parent.name} overview
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((k) => {
            const nav = navItem(k.path);
            return (
              <li key={k.path}>
                <ServiceTile href={k.path} name={k.name} description={nav?.description} icon={nav?.icon} />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/**
 * The shell for written pages. Metadata and breadcrumbs come from
 * content/site-data.json, the copy from content/pages/, and the layout from the
 * page type: categories route, services explain delivery, the overview maps
 * every area. `beforeBlocks` and `afterBlocks` hold page-specific pieces, such
 * as the logos on Clients and the estimator on Pricing.
 */
export function ContentPage({
  content,
  eyebrow,
  beforeBlocks,
  afterBlocks,
}: {
  content: PageContent;
  eyebrow: string;
  beforeBlocks?: ReactNode;
  afterBlocks?: ReactNode;
}) {
  const plan = getSitePage(content.path);
  const isService = plan.type === "Service";
  const isCategory = plan.type === "Category";
  const isOverview = content.path === "/services/";
  const isSolution = plan.type === "Solution";
  const ctaText = stripInlineMarkup(content.cta.text);

  return (
    <>
      <SiteHero h1={plan.h1} eyebrow={eyebrow} breadcrumbs={plan.breadcrumbs} ctaText={ctaText}>
        <RichText text={content.intro} />
      </SiteHero>
      {content.atAGlance && <AtAGlance data={content.atAGlance} />}
      {isCategory && <ChildServices path={content.path} />}
      {isOverview && <AreaPanels />}
      {beforeBlocks}
      <RichBlocks blocks={content.blocks} />
      {afterBlocks && (
        <section className="w-full bg-white py-10 sm:py-14">
          <Container>{afterBlocks}</Container>
        </section>
      )}
      {(isService || isSolution) && plan.parent_path && <MoreInArea path={content.path} parentPath={plan.parent_path} />}
      <section className="w-full bg-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-10">
            <FaqSection faqs={content.faqs} />
            <p className="text-[15.5px] leading-[1.75] text-ink-2">
              <RichText text={content.closing} />
            </p>
          </div>
        </Container>
      </section>
      <CtaBand
        heading={stripInlineMarkup(content.cta.heading)}
        subheading={stripInlineMarkup(content.cta.body)}
        ctaText={ctaText}
        ctaHref="/contact/"
      />
      <StickyConsultBar label={ctaText} />
    </>
  );
}
