import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { RichText } from "@/components/RichText";
import { HubGrid, HubHero, HubPatterns, SOLUTION_PATTERNS } from "@/components/industries";
import { RichBlocks } from "@/components/site/RichBlocks";
import { StickyConsultBar } from "@/components/site/StickyConsultBar";
import { getPageContent } from "@/content/pages";
import { imageForPath } from "@/lib/page-visuals";
import { planMetadata } from "@/lib/metadata";
import { stripInlineMarkup } from "@/lib/richtext";
import { childrenOf, getSitePage } from "@/lib/site-data";
import navigation from "@/store/navigation.json";

const PATH = "/solutions/";
const GRID_ID = "solutions-grid";

export const metadata = planMetadata(PATH);

export default function SolutionsPage() {
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

  return (
    <>
      <HubHero
        h1={plan.h1}
        answerQuestion={plan.question_keywords_starter[0]}
        answerText={content.intro}
        breadcrumbs={plan.breadcrumbs}
        browseLabel="Browse 7 solutions"
        browseHref={`#${GRID_ID}`}
        ctaText={ctaText}
        metrics={[
          { value: "7", label: "Solutions" },
          { value: "9", label: "Industry guides" },
          { value: "8", label: "Service areas" },
          { value: "28", label: "Services" },
        ]}
      />
      <Container>
        <HubGrid
          id={GRID_ID}
          eyebrow="Solutions"
          title="Seven business problems, each with a defined fix"
          subtitle="Start from the problem you have. Each solution explains what it costs the business, how MP-365 fixes it and what you get."
          linkText="See this solution"
          items={items}
        />
      </Container>
      <RichBlocks blocks={content.blocks} path={PATH} />
      <HubPatterns
        title="The same three stages, whatever the problem"
        subtitle="Each project gets something real in front of your team early, and ends with you owning the result."
        patterns={SOLUTION_PATTERNS}
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
