import Link from "next/link";
import type { ReactNode } from "react";
import type { PageContent } from "@/content/types";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { RichText } from "@/components/RichText";
import { MegaMenuIcon } from "@/components/ui/MegaMenuIcons";
import { imageForPath } from "@/lib/page-visuals";
import { stripInlineMarkup } from "@/lib/richtext";
import { CATEGORY_PAGES, childrenOf, getSitePage } from "@/lib/site-data";
import navigation from "@/store/navigation.json";
import { RichBlocks } from "./RichBlocks";
import { ServiceSlider } from "./ServiceSlider";
import { SiteHero } from "./SiteHero";
import { StickyConsultBar } from "./StickyConsultBar";

// Icons and one-line descriptions shared with the mega menu.
const NAV_COLUMNS = navigation.megaMenuGroups.flatMap((g) => g.columns);
const NAV_ITEMS: { href: string; description?: string; icon?: string }[] = NAV_COLUMNS.flatMap((c) => c.items);
const navItem = (href: string) => NAV_ITEMS.find((i) => i.href === href);
const SERVICE_COLUMNS: { href?: string; icon?: string; description?: string }[] = navigation.megaMenuGroups[0].columns;
const navColumn = (href: string) => SERVICE_COLUMNS.find((c) => c.href === href);

const GLANCE = [
  ["bestFor", "Best for", "users"],
  ["includes", "Includes", "clipboard-check"],
  ["notIncluded", "Not included", "shield"],
  ["typicalTimeline", "Typical timeline", "calendar"],
  ["howItStarts", "How it starts", "compass"],
] as const;

/** Service pages: the same labels on every page, as a band of cards. */
function AtAGlance({ data }: { data: NonNullable<PageContent["atAGlance"]> }) {
  const rows = GLANCE.filter(([key]) => data[key]);
  return (
    <section aria-label="At a glance" className="w-full bg-white pb-4 pt-10 sm:pt-14">
      <Container>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map(([key, label, icon]) => (
            <div
              key={key}
              className={`rounded-[22px] p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-7 md:rounded-[28px] ${
                key === "bestFor" ? "bg-mp-band" : "bg-mp-parchment"
              }`}
            >
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-mp-petrol-2">
                <MegaMenuIcon name={icon} className="mb-5 h-6 w-6 text-mp-petrol" />
                {label}
              </dt>
              <dd className="mt-2.5 text-[14px] leading-[1.6] text-mp-ink/80">
                <RichText text={data[key] as string} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/** Photo cards for a set of child pages, using the menu's one-line descriptions. */
function sliderCards(pages: { path: string; name: string }[]) {
  return pages.map((p) => ({
    href: p.path,
    name: p.name,
    description: navItem(p.path)?.description,
    image: imageForPath(p.path),
  }));
}

/** Category pages open with their services, so they route first. */
function ChildServices({ path }: { path: string }) {
  const parent = getSitePage(path);
  return (
    <ServiceSlider
      heading={`Services in ${parent.name}`}
      label={`${parent.name} services`}
      cards={sliderCards(childrenOf(path))}
    />
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

/** Service and solution pages end by offering the rest of their area. */
function MoreInArea({ path, parentPath }: { path: string; parentPath: string }) {
  const parent = getSitePage(parentPath);
  const others = childrenOf(parentPath).filter((p) => p.path !== path);
  if (!others.length) return null;
  return (
    <ServiceSlider
      heading={`More in ${parent.name}`}
      label={`More in ${parent.name}`}
      action={{ href: parent.path, text: `See the ${parent.name} overview` }}
      cards={sliderCards(others)}
    />
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
      <RichBlocks blocks={content.blocks} path={content.path} />
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
