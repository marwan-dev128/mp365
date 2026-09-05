import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ProductFitSelector } from "@/components/ProductFitSelector";
import { TimelineEstimator } from "@/components/TimelineEstimator";
import { RelatedSidebar } from "@/components/RelatedSidebar";
import { SidebarCta } from "@/components/SidebarCta";
import { ArrowUpRight } from "@/components/ui/Icons";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { getServices, getServiceBySlug, getSiteSettings } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, howToSchema, webPageSchema } from "@/lib/schema";
import { parseBlocks } from "@/lib/marketing-blocks";
import { SITE_URL } from "@/lib/config";

export const revalidate = 3600;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [service, allServices, settings] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
    getSiteSettings(),
  ]);
  if (!service) notFound();

  const related = allServices.filter((s) => service.relatedServiceSlugs.includes(s.slug));
  const blocks = parseBlocks(service.blocks);
  // Rows authored before `blocks` existed still carry ContentSection rows.
  const legacySections = blocks.length === 0 ? service.sections : [];

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: `/services/${service.slug}/`,
          name: service.name,
          description: service.metaDescription,
          mainEntityId: `${SITE_URL}/services/${service.slug}/#service`,
          dateModified: service.updatedAt.toISOString(),
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path: `/services/${service.slug}/`,
          serviceType: service.name,
          areaServed: settings.areaServed,
          category: service.categoryLabel,
        })}
      />
      {service.process.length > 0 && (
        <JsonLd
          data={howToSchema({
            name: `How ${service.name} works`,
            description: service.heroAnswer,
            steps: service.process,
            path: `/services/${service.slug}/`,
          })}
        />
      )}

      <PageHero
        eyebrow={service.categoryLabel}
        h1={service.name}
        answerQuestion={service.heroQuestion}
        answerText={service.heroAnswer}
        breadcrumbs={[
          { name: "Services", path: "/services/" },
          { name: service.shortName, path: `/services/${service.slug}/` },
        ]}
      />

      <Container className="pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-10 min-w-0">
            <div className="flex flex-col gap-4">
              {service.intro.map((p, i) => (
                <p key={i} className="max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                  <RichText text={p} />
                </p>
              ))}
            </div>

            {blocks.length > 0 && <MarketingPageBody blocks={blocks} />}
            {legacySections.map((section) => (
              <div key={section.id}>
                <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">{section.heading}</h2>
                <div className="flex flex-col gap-4">
                  {section.body.map((p, i) => (
                    <p key={i} className="max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {service.slug === "dynamics-365" && <ProductFitSelector />}
            {service.slug === "ma-tenant-migration" && <TimelineEstimator />}

            {service.process.length > 0 && (
              <div>
                <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">How it works</h2>
                <ol className="flex flex-col gap-4">
                  {service.process.map((step, i) => (
                    <li key={step.id} className="flex gap-4">
                      <span className="flex-none w-8 h-8 rounded-full bg-azure-subtle text-azure font-display font-bold text-sm flex items-center justify-center tabular-nums">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-bold text-ink">
                          <RichText text={step.name} />
                        </p>
                        <p className="text-sm text-ink-2 mt-0.5 max-w-[60ch]">
                          <RichText text={step.description} />
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <FaqSection faqs={service.faqs} path={`/services/${service.slug}/`} />
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            {related.length > 0 && (
              <RelatedSidebar
                title="Related services"
                items={related.map((r) => ({ name: r.name, href: `/services/${r.slug}/` }))}
              />
            )}
            {service.relatedPages.length > 0 && (
              <RelatedSidebar title="Go deeper" items={service.relatedPages} />
            )}
            {service.relatedTerms.length > 0 && (
              <RelatedSidebar
                title="Related terms"
                items={service.relatedTerms.map((t) => ({
                  name: t.term,
                  href: `/resources/glossary/${t.slug}/`,
                }))}
              />
            )}
            {service.slug === "dynamics-365" && (
              <div className="rounded-[var(--mp-radius-card)] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,16,51,0.03)]">
                <p className="mb-3.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  By product
                </p>
                <p className="mb-4 text-[13.5px] leading-relaxed text-ink-2">
                  Want detail on a specific application — Sales, Business Central, Finance?
                </p>
                <Link
                  href="/dynamics-365/"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-azure transition-colors hover:text-azure-hover"
                >
                  <span>Browse Dynamics 365 by product</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            )}
            <SidebarCta
              title="Not sure where to start?"
              body="Tell us what you&rsquo;re working with and we&rsquo;ll point you to the right service."
              ctaText="Talk to our team"
            />
          </aside>
        </div>
      </Container>

      <CtaBand />
    </>
  );
}
