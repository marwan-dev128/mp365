import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { getAllMarketingPageSlugs, getMarketingPageBySlug, getSiteSettings } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/config";
import { parseBlocks } from "@/lib/marketing-blocks";

export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getAllMarketingPageSlugs("assessments");
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getMarketingPageBySlug("assessments", slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/assessments/${page.slug}/`,
    noindex: !page.published,
  });
}

export default async function AssessmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [page, settings] = await Promise.all([
    getMarketingPageBySlug("assessments", slug),
    getSiteSettings(),
  ]);
  if (!page) notFound();

  const blocks = parseBlocks(page.sections);

  return (
    <>
      {page.published && (
        <>
          <JsonLd
            data={webPageSchema({
              path: `/assessments/${page.slug}/`,
              name: page.name,
              description: page.metaDescription,
              mainEntityId: `${SITE_URL}/assessments/${page.slug}/#service`,
              dateModified: page.updatedAt.toISOString(),
            })}
          />
          <JsonLd
            data={serviceSchema({
              name: page.name,
              description: page.metaDescription,
              path: `/assessments/${page.slug}/`,
              serviceType: page.name,
              areaServed: settings.areaServed,
              category: "Assessment",
              serviceOutput: "A written assessment report with findings and a scoped plan",
            })}
          />
        </>
      )}
      <PageHero
        eyebrow="Assessment"
        h1={page.name}
        answerQuestion={page.heroQuestion}
        answerText={page.heroAnswer}
        breadcrumbs={[
          { name: "Assessments", path: "/assessments/" },
          { name: page.name, path: `/assessments/${page.slug}/` },
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
          <FaqSection faqs={page.faqs} path={`/assessments/${page.slug}/`} />
        </div>
      </Container>
      <CtaBand
        heading={`Book a ${page.name}`}
        subheading="Fixed scope, clear deliverables — tell us a bit about your environment to get started."
      />
    </>
  );
}
