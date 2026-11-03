import type { ReactNode } from "react";
import type { PageContent } from "@/content/types";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { RelatedSidebar } from "@/components/RelatedSidebar";
import { RichText } from "@/components/RichText";
import { SidebarCta } from "@/components/SidebarCta";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { stripInlineMarkup } from "@/lib/richtext";
import { childrenOf, getSitePage } from "@/lib/site-data";
import { SiteHero } from "./SiteHero";
import { StickyConsultBar } from "./StickyConsultBar";

const GLANCE_LABELS = [
  ["bestFor", "Best for"],
  ["includes", "Includes"],
  ["notIncluded", "Not included"],
  ["typicalTimeline", "Typical timeline"],
  ["howItStarts", "How it starts"],
] as const;

function AtAGlance({ data }: { data: NonNullable<PageContent["atAGlance"]> }) {
  return (
    <section aria-label="At a glance" className="rounded-[var(--mp-radius-card)] border border-line bg-surface-light p-6 sm:p-7">
      <p className="mb-4 font-display text-[18px] font-bold text-mp-petrol">At a glance</p>
      <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-[150px_1fr]">
        {GLANCE_LABELS.map(([key, label]) =>
          data[key] ? (
            <div key={key} className="contents">
              <dt className="text-[13px] font-bold uppercase tracking-[0.06em] text-mp-muted">{label}</dt>
              <dd className="-mt-3 text-[15px] leading-[1.65] text-ink-2 sm:mt-0">
                <RichText text={data[key]!} />
              </dd>
            </div>
          ) : null
        )}
      </dl>
    </section>
  );
}

/**
 * The shared shell for every written page: hero, opening, body blocks, FAQ,
 * closing and call to action. Metadata and breadcrumbs come from
 * content/site-data.json; the copy comes from content/pages/.
 * `afterBlocks` holds page-specific interactive pieces, such as the estimator.
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
  const siblings = plan.parent_path ? childrenOf(plan.parent_path) : [];
  const children = childrenOf(content.path);
  const areaLinks = (plan.type === "Service" ? siblings : children).map((p) => ({ name: p.name, href: p.path }));
  const parent = plan.type === "Service" && plan.parent_path ? getSitePage(plan.parent_path) : null;

  return (
    <>
      <SiteHero h1={plan.h1} eyebrow={eyebrow} breadcrumbs={plan.breadcrumbs}>
        <RichText text={content.intro} />
      </SiteHero>
      <Container className="pb-4 pt-12 sm:pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_280px]">
          <div className="flex min-w-0 flex-col gap-12">
            {content.atAGlance && <AtAGlance data={content.atAGlance} />}
            {beforeBlocks}
            <MarketingPageBody blocks={content.blocks} />
            {afterBlocks}
            <FaqSection faqs={content.faqs} />
            <p className="text-[15.5px] leading-[1.75] text-ink-2">
              <RichText text={content.closing} />
            </p>
          </div>
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <SidebarCta
              tag="Next step"
              title={stripInlineMarkup(content.cta.heading)}
              body={stripInlineMarkup(content.cta.body)}
              ctaText={stripInlineMarkup(content.cta.text)}
              ctaHref="/contact/"
            />
            {areaLinks.length > 0 && (
              <RelatedSidebar title={parent ? parent.name : "In this area"} items={areaLinks.filter((l) => l.href !== content.path)} />
            )}
          </aside>
        </div>
      </Container>
      <CtaBand
        heading={stripInlineMarkup(content.cta.heading)}
        subheading={stripInlineMarkup(content.cta.body)}
        ctaText={stripInlineMarkup(content.cta.text)}
        ctaHref="/contact/"
      />
      <StickyConsultBar label={stripInlineMarkup(content.cta.text)} />
    </>
  );
}
