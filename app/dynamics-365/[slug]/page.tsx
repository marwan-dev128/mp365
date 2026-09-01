import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ArrowUpRight } from "@/components/ui/Icons";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { getAllMarketingPageSlugs, getMarketingPageBySlug, getSiteSettings } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/config";
import { parseBlocks } from "@/lib/marketing-blocks";

export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getAllMarketingPageSlugs("dynamics-365");
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getMarketingPageBySlug("dynamics-365", slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/dynamics-365/${page.slug}/`,
    noindex: !page.published,
  });
}

export default async function DynamicsProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [page, settings] = await Promise.all([
    getMarketingPageBySlug("dynamics-365", slug),
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
              path: `/dynamics-365/${page.slug}/`,
              name: page.name,
              description: page.metaDescription,
              mainEntityId: `${SITE_URL}/dynamics-365/${page.slug}/#service`,
              dateModified: page.updatedAt.toISOString(),
            })}
          />
          {/* The Service is MP365's implementation work, not Microsoft's
              product — hence "<product> implementation" rather than the
              bare product name, which would claim we publish the software. */}
          <JsonLd
            data={serviceSchema({
              name: `${page.name} implementation`,
              description: page.metaDescription,
              path: `/dynamics-365/${page.slug}/`,
              serviceType: `${page.name} implementation and consulting`,
              areaServed: settings.areaServed,
              category: "Business Applications",
            })}
          />
        </>
      )}
      <PageHero
        eyebrow="Dynamics 365 Product"
        h1={page.name}
        answerQuestion={page.heroQuestion}
        answerText={page.heroAnswer}
        breadcrumbs={[
          { name: "Dynamics 365", path: "/dynamics-365/" },
          { name: page.name, path: `/dynamics-365/${page.slug}/` },
        ]}
      />
      <Container className="pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0">
            {!page.published && (
              <div className="rounded-lg border border-line bg-azure-subtle p-5 mb-10 text-sm text-ink-2">
                Draft — internal preview only, not linked or published.
              </div>
            )}
            <MarketingPageBody blocks={blocks} />
            <div className="mt-10">
              <FaqSection faqs={page.faqs} path={`/dynamics-365/${page.slug}/`} />
            </div>
          </div>
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--mp-radius-card)] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,16,51,0.03)]">
              <p className="mb-3.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                Full Dynamics 365 service
              </p>
              <p className="mb-4 text-[13.5px] leading-relaxed text-ink-2">
                Looking for the complete picture — implementation process, all modules, and pricing?
              </p>
              <Link
                href="/services/dynamics-365/"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-azure transition-colors hover:text-azure-hover"
              >
                <span>Dynamics 365 Consulting & Implementation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </aside>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
