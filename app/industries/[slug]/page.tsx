import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { RichText } from "@/components/RichText";
import {
  CONSULT_ANCHOR,
  IndustryHero,
  IndustryLeadForm,
  IndustryServicesCarousel,
  IndustryTriggerCards,
} from "@/components/industries";
import { RichBlocks } from "@/components/site/RichBlocks";
import { StickyConsultBar } from "@/components/site/StickyConsultBar";
import { ArrowUpRight } from "@/components/ui/Icons";
import { getPageContent } from "@/content/pages";
import { getSiteSettings } from "@/lib/data";
import { planMetadata } from "@/lib/metadata";
import { pickIllustrations, imageForPath } from "@/lib/page-visuals";
import { stripInlineMarkup } from "@/lib/richtext";
import { childrenOf, getSitePage } from "@/lib/site-data";
import navigation from "@/store/navigation.json";

// Only the paths in content/site-data.json exist; anything else is a 404.
export const dynamicParams = false;

const INDUSTRIES = childrenOf("/industries/");
const NAV_ITEMS: { href: string; description?: string }[] = navigation.megaMenuGroups.flatMap((g) =>
  g.columns.flatMap((c) => c.items),
);

export function generateStaticParams() {
  return INDUSTRIES.map((p) => ({ slug: p.path.split("/")[2] }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return planMetadata(`/industries/${slug}/`);
}

/** The plan's three or four services and solutions for this industry. */
function relatedCards(path: string) {
  return getSitePage(path).internal_links.contextual.map((link) => ({
    href: link.path,
    title: link.target,
    description: NAV_ITEMS.find((i) => i.href === link.path)?.description ?? "",
    image: imageForPath(link.path),
    tag: link.path.startsWith("/solutions/") ? "Solution" : "Service",
  }));
}

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const path = `/industries/${slug}/`;
  if (!INDUSTRIES.some((p) => p.path === path)) notFound();

  const plan = getSitePage(path);
  const content = getPageContent(path);
  const settings = await getSiteSettings();
  const triggers = content.triggers ?? [];
  const triggerImages = pickIllustrations(triggers.map((t) => t.title));
  const ctaText = stripInlineMarkup(content.cta.text);

  return (
    <>
      <IndustryHero
        industryName={plan.name}
        h1={plan.h1}
        industrySlug={slug}
        answerQuestion={plan.question_keywords_starter[0]}
        answerText={content.intro}
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`#${CONSULT_ANCHOR}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-mp-saffron px-6 py-3 text-sm font-bold text-mp-ink transition-colors hover:bg-mp-saffron-hover"
          >
            {ctaText} <span aria-hidden="true">›</span>
          </a>
          <Link
            href="/clients/"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-mp-border bg-white px-6 py-3 text-sm font-semibold text-mp-ink transition-colors hover:border-mp-petrol hover:bg-mp-petrol hover:text-white"
          >
            See client results <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </IndustryHero>
      <Container className="py-12 sm:py-16">
        <IndustryTriggerCards industryName={plan.name} triggers={triggers} images={triggerImages} />
      </Container>
      <RichBlocks blocks={content.blocks} path={path} reserved={triggerImages} />
      <Container className="py-10 sm:py-14">
        <IndustryLeadForm
          industrySlug={slug}
          industryName={plan.name}
          topics={triggers.map((t) => t.title)}
          sourcePath={path}
          email={settings.email}
          phone={settings.phoneDisplay}
        />
      </Container>
      <IndustryServicesCarousel cards={relatedCards(path)} industryName={plan.name} />
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
        ctaHref={`#${CONSULT_ANCHOR}`}
      />
      <StickyConsultBar label={ctaText} />
    </>
  );
}
