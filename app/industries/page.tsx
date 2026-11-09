import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { RichText } from "@/components/RichText";
import { HubGrid, HubHero, HubPatterns, INDUSTRY_PATTERNS } from "@/components/industries";
import { RichBlocks } from "@/components/site/RichBlocks";
import { StickyConsultBar } from "@/components/site/StickyConsultBar";
import { getPageContent } from "@/content/pages";
import { imageForPath, pickIllustrations } from "@/lib/page-visuals";
import { planMetadata } from "@/lib/metadata";
import { stripInlineMarkup } from "@/lib/richtext";
import { childrenOf, getSitePage } from "@/lib/site-data";
import navigation from "@/store/navigation.json";

const PATH = "/industries/";
const GRID_ID = "industries-grid";

export const metadata = planMetadata(PATH);

export default function IndustriesPage() {
  const plan = getSitePage(PATH);
  const content = getPageContent(PATH);
  const ctaText = stripInlineMarkup(content.cta.text);
  // The filter pills use the same groups as the header menu.
  const menu = navigation.megaMenuGroups.find((g) => g.href === PATH);
  const groupOf = (href: string) => menu?.columns.find((c) => c.items.some((i) => i.href === href))?.title ?? "";
  const items = childrenOf(PATH).map((p) => ({
    href: p.path,
    name: p.name,
    summary: content.childSummaries?.[p.path] ?? "",
    image: imageForPath(p.path),
    group: groupOf(p.path),
  }));

  const patternImages = pickIllustrations(INDUSTRY_PATTERNS.map((p) => p.title));
  return (
    <>
      <HubHero
        h1={plan.h1}
        answerQuestion={plan.question_keywords_starter[0]}
        answerText={content.intro}
        breadcrumbs={plan.breadcrumbs}
        browseLabel="Browse 9 industry guides"
        browseHref={`#${GRID_ID}`}
        ctaText={ctaText}
        metrics={[
          { value: "9", label: "Industry guides" },
          { value: "8", label: "Service areas" },
          { value: "28", label: "Services" },
          { value: "7", label: "Solutions" },
        ]}
      />
      <Container>
        <HubGrid
          id={GRID_ID}
          eyebrow="Industries"
          title="Nine industries, each with its own challenges"
          subtitle="Pick your industry to see what to look for, where projects usually start and which Microsoft tools fit."
          linkText="See this industry"
          items={items}
        />
      </Container>
      <RichBlocks blocks={content.blocks} path={PATH} reserved={patternImages} />
      <HubPatterns
        images={patternImages}
        title="What stays the same in all nine"
        subtitle="The vocabulary changes between industries. These three foundations do not."
        patterns={INDUSTRY_PATTERNS}
      />
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
