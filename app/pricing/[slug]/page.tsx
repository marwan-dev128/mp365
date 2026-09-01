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
  const pages = await getAllMarketingPageSlugs("pricing");
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getMarketingPageBySlug("pricing", slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/pricing/${page.slug}/`,
    noindex: !page.published,
  });
}

export default async function PricingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getMarketingPageBySlug("pricing", slug);
  if (!page) notFound();

  const blocks = parseBlocks(page.sections);

  return (
    <>
      {/*
        WebPage only — deliberately NO Offer / PriceSpecification / priceRange.
        Every figure on these pages is self-disclaimed as an illustrative
        industry-typical range, not a price MP365 will honour. Google requires
        an Offer price to be the price the item is actually obtainable at, and
        two of the tiers aren't even numeric ("Custom scope", "$150K–$400K+").
        Do not add price markup here without real, honoured, fixed-scope prices.
      */}
      {page.published && (
        <JsonLd
          data={webPageSchema({
            path: `/pricing/${page.slug}/`,
            name: page.name,
            description: page.metaDescription,
            dateModified: page.updatedAt.toISOString(),
          })}
        />
      )}
      <PageHero
        eyebrow="Pricing"
        h1={page.name}
        answerQuestion={page.heroQuestion}
        answerText={page.heroAnswer}
        breadcrumbs={[
          { name: "Pricing", path: "/pricing/" },
          { name: page.name, path: `/pricing/${page.slug}/` },
        ]}
      />
      <Container className="max-w-3xl pt-14">
        {!page.published && (
          <div className="rounded-lg border border-line bg-azure-subtle p-5 mb-10 text-sm text-ink-2">
            Draft — ranges below need sign-off from leadership before this goes live. Internal preview
            only, not linked or published.
          </div>
        )}
        <MarketingPageBody blocks={blocks} />
        <div className="mt-10">
          <FaqSection faqs={page.faqs} path={`/pricing/${page.slug}/`} />
        </div>
      </Container>
      <CtaBand
        heading="Want a number specific to your project?"
        subheading="Ranges depend on user count, data volume, and scope — get a fixed quote after a short discovery call."
      />
    </>
  );
}
