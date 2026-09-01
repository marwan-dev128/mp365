import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { RelatedSidebar } from "@/components/RelatedSidebar";
import { ArrowUpRight } from "@/components/ui/Icons";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { getSolutions, getSolutionBySlug, getSiteSettings } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema, howToSchema } from "@/lib/schema";
import { parseBlocks, stepsFromBlocks } from "@/lib/marketing-blocks";
import { SITE_URL } from "@/lib/config";

export const revalidate = 3600;

export async function generateStaticParams() {
  const solutions = await getSolutions();
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);
  if (!solution) return {};
  return buildMetadata({
    title: solution.metaTitle,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}/`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [solution, settings] = await Promise.all([getSolutionBySlug(slug), getSiteSettings()]);
  if (!solution) notFound();

  const path = `/solutions/${solution.slug}/`;
  const blocks = parseBlocks(solution.blocks);
  // Rows authored before `blocks` existed still carry ContentSection rows;
  // render those rather than an empty page.
  const legacySections = blocks.length === 0 ? solution.sections : [];
  const steps = stepsFromBlocks(blocks);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path,
          name: solution.name,
          description: solution.metaDescription,
          mainEntityId: `${SITE_URL}${path}#service`,
          dateModified: solution.updatedAt.toISOString(),
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: solution.name,
          description: solution.metaDescription,
          path,
          // The solution's own name, not the literal string "Solution" —
          // serviceType should say what the service is.
          serviceType: solution.name,
          areaServed: settings.areaServed,
        })}
      />
      {/* Only when the page actually documents a sequence — HowTo over a page
          with no steps is markup that doesn't describe the content. */}
      {steps.length > 0 && (
        <JsonLd
          data={howToSchema({
            name: `How MP365 delivers ${solution.name}`,
            description: solution.metaDescription,
            steps,
            path,
          })}
        />
      )}
      <PageHero
        eyebrow="Solution"
        h1={solution.name}
        answerQuestion={solution.heroQuestion}
        answerText={solution.heroAnswer}
        breadcrumbs={[
          { name: "Solutions", path: "/solutions/" },
          { name: solution.name, path },
        ]}
      />
      <Container className="pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-10 min-w-0">
            <div className="flex flex-col gap-4">
              {solution.intro.map((p, i) => (
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
            <FaqSection faqs={solution.faqs} path={path} />
          </div>
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            {solution.relatedServices.length > 0 && (
              <RelatedSidebar
                title="Related services"
                items={solution.relatedServices.map((s) => ({
                  name: s.name,
                  href: `/services/${s.slug}/`,
                }))}
              />
            )}
            {solution.relatedPages.length > 0 && (
              <RelatedSidebar title="Go deeper" items={solution.relatedPages} />
            )}
            {solution.relatedTerms.length > 0 && (
              <RelatedSidebar
                title="Related terms"
                items={solution.relatedTerms.map((t) => ({
                  name: t.term,
                  href: `/resources/glossary/${t.slug}/`,
                }))}
              />
            )}
            <div className="relative overflow-hidden rounded-[var(--mp-radius-card)] bg-navy p-6 text-white shadow-mp-card">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-azure/30 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-cyan/20 blur-2xl"
              />
              <div className="relative z-10">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan backdrop-blur-xs">
                  Direct Guidance
                </span>
                <p className="mb-2 font-display text-[16px] font-bold text-white">
                  Not sure where to start?
                </p>
                <p className="mb-5 text-[13.5px] leading-relaxed text-white/80">
                  Tell us what you&rsquo;re working with and we&rsquo;ll point you to the right service.
                </p>
                <Link
                  href="/contact/"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-azure px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(0,98,255,0.35)] transition-all duration-200 hover:bg-azure-hover hover:shadow-[0_6px_20px_rgba(0,98,255,0.45)]"
                >
                  <span>Talk to our team</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
