import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { getAllMarketingPageSlugs, getMarketingPageBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { howToSchema, webPageSchema } from "@/lib/schema";
import { parseBlocks, stepsFromBlocks } from "@/lib/marketing-blocks";

export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getAllMarketingPageSlugs("migrations");
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getMarketingPageBySlug("migrations", slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/migrations/${page.slug}/`,
    noindex: !page.published,
  });
}

export default async function MigrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getMarketingPageBySlug("migrations", slug);
  if (!page) notFound();

  const blocks = parseBlocks(page.sections);
  const steps = stepsFromBlocks(blocks);

  return (
    <>
      {page.published && (
        <JsonLd
          data={webPageSchema({
            path: `/migrations/${page.slug}/`,
            name: page.name,
            description: page.metaDescription,
            dateModified: page.updatedAt.toISOString(),
          })}
        />
      )}
      {page.published && steps.length > 0 && (
        <JsonLd
          data={howToSchema({
            name: page.name,
            description: page.heroAnswer,
            steps,
            path: `/migrations/${page.slug}/`,
          })}
        />
      )}
      <PageHero
        eyebrow="Migration Guide"
        h1={page.name}
        answerQuestion={page.heroQuestion}
        answerText={page.heroAnswer}
        breadcrumbs={[
          { name: "Migrations", path: "/migrations/" },
          { name: page.name, path: `/migrations/${page.slug}/` },
        ]}
      />
      <Container className="max-w-3xl pt-14">
        {!page.published && (
          <div className="rounded-lg border border-line bg-azure-subtle p-5 mb-10 text-sm text-ink-2">
            Draft — internal preview only, not linked or published.
          </div>
        )}
        <MarketingPageBody blocks={blocks} />
        <div className="mt-10">
          <FaqSection faqs={page.faqs} path={`/migrations/${page.slug}/`} />
        </div>
      </Container>
      <CtaBand
        heading={`Ready to plan your ${page.name.toLowerCase()}?`}
        subheading="Tell us about your current system and timeline — we'll tell you honestly what's involved."
      />
    </>
  );
}
