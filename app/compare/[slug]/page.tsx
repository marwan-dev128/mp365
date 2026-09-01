import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { JsonLd } from "@/components/JsonLd";
import { getAllMarketingPageSlugs, getMarketingPageBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { webPageSchema } from "@/lib/schema";
import { parseBlocks } from "@/lib/marketing-blocks";

export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getAllMarketingPageSlugs("compare");
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getMarketingPageBySlug("compare", slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/compare/${page.slug}/`,
    noindex: !page.published,
  });
}

export default async function CompareDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getMarketingPageBySlug("compare", slug);
  if (!page) notFound();

  const blocks = parseBlocks(page.sections);

  return (
    <>
      {/* WebPage only — no Offer/price node. The comparison content is
          editorial, and the pricing hub's ranges are explicitly illustrative. */}
      {page.published && (
        <JsonLd
          data={webPageSchema({
            path: `/compare/${page.slug}/`,
            name: page.name,
            description: page.metaDescription,
            dateModified: page.updatedAt.toISOString(),
          })}
        />
      )}
      <PageHero
        eyebrow="Comparison"
        h1={page.name}
        answerQuestion={page.heroQuestion}
        answerText={page.heroAnswer}
        breadcrumbs={[
          { name: "Compare", path: "/compare/" },
          { name: page.name, path: `/compare/${page.slug}/` },
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
          <FaqSection faqs={page.faqs} path={`/compare/${page.slug}/`} />
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
