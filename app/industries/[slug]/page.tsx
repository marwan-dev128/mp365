import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { RelatedSidebar } from "@/components/RelatedSidebar";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { JsonLd } from "@/components/JsonLd";
import { getIndustries, getIndustryBySlug, getSiteSettings } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema, howToSchema } from "@/lib/schema";
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
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [industry, settings] = await Promise.all([
    getIndustryBySlug(slug),
    getSiteSettings(),
  ]);
  if (!industry) notFound();

  const path = `/industries/${industry.slug}/`;
  const blocks = parseBlocks(industry.blocks);
  const steps = stepsFromBlocks(blocks);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path,
          name: `Microsoft solutions for ${industry.name}`,
          description: industry.metaDescription,
          mainEntityId: `${SITE_URL}${path}#service`,
          dateModified: industry.updatedAt.toISOString(),
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
      <PageHero
        eyebrow="Industry"
        h1={`Microsoft solutions for ${industry.name}`}
        answerQuestion={industry.heroQuestion}
        answerText={industry.heroAnswer}
        breadcrumbs={[
          { name: "Industries", path: "/industries/" },
          { name: industry.name, path: `/industries/${industry.slug}/` },
        ]}
      />
      <Container className="pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-10 min-w-0">
            <div className="flex flex-col gap-4">
              {industry.intro.map((p, i) => (
                <p key={i} className="max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div>
              <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">
                Common challenges in {industry.name.toLowerCase()}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-ink-2 leading-relaxed max-w-[62ch]">
                    <span className="text-azure font-bold flex-none">—</span>
                    <RichText text={c} />
                  </li>
                ))}
              </ul>
            </div>
            {blocks.length > 0 && <MarketingPageBody blocks={blocks} />}
            <FaqSection faqs={industry.faqs} path={path} />
          </div>
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            {industry.relatedServices.length > 0 && (
              <RelatedSidebar
                title="Related services"
                items={industry.relatedServices.map((s) => ({
                  name: s.name,
                  href: `/services/${s.slug}/`,
                }))}
              />
            )}
            {industry.relatedPages.length > 0 && (
              <RelatedSidebar title="Go deeper" items={industry.relatedPages} />
            )}
            {industry.relatedTerms.length > 0 && (
              <RelatedSidebar
                title="Related terms"
                items={industry.relatedTerms.map((t) => ({
                  name: t.term,
                  href: `/resources/glossary/${t.slug}/`,
                }))}
              />
            )}
          </aside>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
