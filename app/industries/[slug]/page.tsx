import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { JsonLd } from "@/components/JsonLd";
import { SidebarCta } from "@/components/SidebarCta";
import {
  IndustryHero,
  IndustryHeroActions,
  IndustryLeadForm,
  IndustryRelatedResources,
  IndustryServicesCarousel,
  IndustrySubSectors,
  IndustryTermsCarousel,
  IndustryToolSlot,
  IndustryTriggerCards,
  StickyConsultBar,
  toolCtaLabel,
} from "@/components/industries";
import {
  CONSULT_ANCHOR,
  parseProofMetrics,
  parseReadinessQuestions,
  parseSidebarCta,
  parseTool,
  parseTriggers,
} from "@/lib/industry-conversion";
import { getBlogPosts, getIndustries, getIndustryBySlug, getPeople, getSiteSettings } from "@/lib/data";
import { guidesForIndustry } from "@/lib/industry-links";
import { IndustryGuides } from "@/components/industries/IndustryGuides";
import { buildMetadata } from "@/lib/metadata";
import { stripInlineMarkup } from "@/lib/richtext";
import { serviceSchema, webPageSchema, howToSchema, personId } from "@/lib/schema";
import { parseBlocks, stepsFromBlocks } from "@/lib/marketing-blocks";
import { SITE_URL } from "@/lib/config";

export const revalidate = 3600;

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}/`,
    // Per-industry social card (./opengraph-image.tsx) instead of the site
    // default, so a LinkedIn share says which industry it is about.
    imagePath: `/industries/${industry.slug}/opengraph-image`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [industry, settings, allIndustries, people, posts] = await Promise.all([
    getIndustryBySlug(slug),
    getSiteSettings(),
    getIndustries(),
    getPeople(),
    getBlogPosts(),
  ]);
  if (!industry) notFound();

  const guides = guidesForIndustry(posts, industry.slug).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: stripInlineMarkup(p.excerpt),
  }));
  const pageTitle = industry.h1 || `Microsoft solutions for ${industry.name}`;
  const reviewer = industry.reviewerSlug
    ? people.find((p) => p.slug === industry.reviewerSlug)
    : undefined;
  const reviewedIso = industry.reviewedAt?.toISOString().slice(0, 10);

  const path = `/industries/${industry.slug}/`;
  const blocks = parseBlocks(industry.blocks);
  const steps = stepsFromBlocks(blocks);

  const tool = parseTool(industry.tool);
  const metrics = parseProofMetrics(industry.proofMetrics);
  const triggers = parseTriggers(industry.triggers);
  const readinessQuestions = parseReadinessQuestions(industry.readinessQuestions);
  const sidebarCta = parseSidebarCta(industry.sidebarCta);
  const relatedIndustry = allIndustries.find(
    (i) => i.slug === industry.relatedIndustrySlug && i.slug !== industry.slug
  );
  // Topics offered by the lead form; trigger topics are always included so a
  // trigger card can never preselect an option that is missing.
  const formTopics = [
    ...new Set([...industry.formTopics, ...triggers.map((t) => t.topic)]),
  ];

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path,
          name: pageTitle,
          description: industry.metaDescription,
          mainEntityId: `${SITE_URL}${path}#service`,
          // The review date, not updatedAt: every re-seed touches updatedAt,
          // so it would claim a freshness the content does not have.
          dateModified: reviewedIso ?? industry.updatedAt.toISOString(),
          lastReviewed: reviewedIso,
          reviewedById: reviewer ? personId(reviewer.slug) : undefined,
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: `Microsoft solutions for ${industry.name}`,
          description: industry.metaDescription,
          path,
          serviceType: `Microsoft consulting for ${industry.name.toLowerCase()}`,
          areaServed: settings.areaServed,
          category: industry.name,
          audience: `${industry.name} organizations`,
        })}
      />
      {steps.length > 0 && (
        <JsonLd
          data={howToSchema({
            name: `Microsoft implementation for ${industry.name.toLowerCase()}`,
            description: industry.metaDescription,
            steps,
            path,
          })}
        />
      )}
      <IndustryHero
        industryName={industry.name}
        h1={industry.h1}
        industrySlug={industry.slug}
        answerQuestion={industry.heroQuestion}
        answerText={industry.heroAnswer}
        imageUrl={industry.imageUrl}
      >
        <IndustryHeroActions metrics={metrics} toolLabel={toolCtaLabel(tool, industry.name)} />
      </IndustryHero>
      <Container className="pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-10 min-w-0">
            {reviewedIso && (
              <p className="text-[12.5px] text-mp-muted">
                Last reviewed{" "}
                <time dateTime={reviewedIso}>
                  {new Date(`${reviewedIso}T12:00:00Z`).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
                {reviewer ? ` by ${reviewer.name}, ${reviewer.role}` : " against Microsoft and regulator documentation"}
              </p>
            )}
            <div className="flex flex-col gap-4">
              {industry.intro.map((p, i) => (
                <p key={i} className="text-[15.5px] leading-[1.75] text-ink-2">
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <IndustryTriggerCards industryName={industry.name} triggers={triggers} />
            <div>
              <h2 className="mb-5 font-display text-[26px] font-extrabold text-mp-petrol">
                Common challenges in {industry.name.toLowerCase()}
              </h2>
              <ul className="flex flex-col gap-3">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-mp-secondary leading-relaxed">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-mp-mint/25 text-mp-petrol mt-0.5 text-xs font-bold">✓</span>
                    <RichText text={c} />
                  </li>
                ))}
              </ul>
            </div>
            <IndustryLeadForm
              industrySlug={industry.slug}
              industryName={industry.name}
              topics={formTopics}
              sourcePath={path}
              email={settings.email}
              phone={settings.phoneDisplay}
            />
            {blocks.length > 0 && <MarketingPageBody blocks={blocks} />}
            <IndustryToolSlot
              tool={tool}
              industryName={industry.name}
              industrySlug={industry.slug}
              sourcePath={path}
              questions={readinessQuestions}
            />
            <IndustrySubSectors
              subSectors={industry.subSectors}
              related={
                relatedIndustry
                  ? { name: relatedIndustry.name, href: `/industries/${relatedIndustry.slug}/` }
                  : null
              }
            />
            <IndustryGuides industryName={industry.name} guides={guides} />
            <IndustryRelatedResources
              industryName={industry.name}
              pages={industry.relatedPages}
            />
            <FaqSection faqs={industry.faqs} path={path} />
          </div>
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            {sidebarCta && (
              <SidebarCta
                tag={sidebarCta.tag}
                title={sidebarCta.title}
                body={sidebarCta.body}
                ctaText={sidebarCta.ctaText}
                ctaHref={`#${CONSULT_ANCHOR}`}
              />
            )}
          </aside>
        </div>
      </Container>
      <IndustryServicesCarousel
        services={industry.relatedServices}
        industryName={industry.name}
      />
      <IndustryTermsCarousel
        terms={industry.relatedTerms}
        industryName={industry.name}
      />
      <CtaBand
        heading={industry.ctaHeading ?? undefined}
        subheading={industry.ctaSubheading ?? undefined}
        ctaText="Talk to a senior engineer"
        ctaHref={`#${CONSULT_ANCHOR}`}
      />
      <StickyConsultBar />
    </>
  );
}
