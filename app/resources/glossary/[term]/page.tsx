import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { RelatedSidebar } from "@/components/RelatedSidebar";
import { getGlossaryTerms, getGlossaryTermBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { definedTermSchema, webPageSchema } from "@/lib/schema";
import { parseBlocks } from "@/lib/marketing-blocks";
import { SITE_URL } from "@/lib/config";

export const revalidate = 3600;

export async function generateStaticParams() {
  const terms = await getGlossaryTerms();
  return terms.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term: termSlug } = await params;
  const term = await getGlossaryTermBySlug(termSlug);
  if (!term) return {};
  return buildMetadata({
    title: `What is ${term.term}? | MP365 Glossary`,
    description: term.shortDefinition,
    path: `/resources/glossary/${term.slug}/`,
    isFullTitle: true,
  });
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term: termSlug } = await params;
  const term = await getGlossaryTermBySlug(termSlug);
  if (!term) notFound();

  const path = `/resources/glossary/${term.slug}/`;
  const blocks = parseBlocks(term.sections);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path,
          name: `What is ${term.term}?`,
          description: term.shortDefinition,
          mainEntityId: `${SITE_URL}${path}#term`,
          dateModified: term.updatedAt.toISOString(),
        })}
      />
      <JsonLd
        data={definedTermSchema({
          slug: term.slug,
          name: term.term,
          description: term.shortDefinition,
          aliases: term.aliases,
        })}
      />
      <PageHero
        eyebrow="Glossary"
        h1={term.term}
        breadcrumbs={[
          { name: "Resources", path: "/resources/" },
          { name: "Glossary", path: "/resources/glossary/" },
          { name: term.term, path },
        ]}
      />
      <Container className="pt-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_280px]">
          <article className="min-w-0">
            {/* The definition leads, standalone — this is the block answer
                engines quote, so it must make sense with no context. */}
            <div className="rounded-[var(--mp-radius-card)] border-l-[3px] border-azure bg-surface-light p-6 sm:p-7">
              <p className="text-[16.5px] font-medium leading-[1.7] text-ink-2">
                <RichText text={term.shortDefinition} />
              </p>
              {term.aliases.length > 0 && (
                <p className="mt-4 border-t border-line pt-4 text-[13px] text-muted">
                  <span className="font-semibold text-navy">Also called:</span>{" "}
                  {term.aliases.join(" · ")}
                </p>
              )}
            </div>

            <div className="mt-12">
              {blocks.length > 0 ? (
                <MarketingPageBody blocks={blocks} />
              ) : (
                <div className="flex flex-col gap-4">
                  {/* Older rows predate `sections`; fall back to the flat
                      paragraphs so nothing renders empty. */}
                  {term.expansion.map((p, i) => (
                    <p key={i} className="max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              )}
            </div>

            {term.faqs.length > 0 && (
              <div className="mt-14">
                <FaqSection faqs={term.faqs} path={path} title={`${term.term}: common questions`} />
              </div>
            )}
          </article>

          <aside className="flex flex-col gap-6">
            {term.relatedTerms.length > 0 && (
              <RelatedSidebar
                title="Related terms"
                items={term.relatedTerms.map((t) => ({
                  name: t.term,
                  href: `/resources/glossary/${t.slug}/`,
                }))}
              />
            )}
            {term.relatedServices.length > 0 && (
              <RelatedSidebar
                title="Related services"
                items={term.relatedServices.map((s) => ({
                  name: s.name,
                  href: `/services/${s.slug}/`,
                }))}
              />
            )}
            <div className="rounded-[var(--mp-radius-card)] border border-line bg-surface-card p-6">
              <p className="font-display text-[15px] font-bold text-navy">
                Dealing with this right now?
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-2">
                Tell us the situation and we&rsquo;ll tell you what it actually involves.
              </p>
              <Link
                href="/contact/"
                className="mp-press mt-4 inline-flex w-full items-center justify-center rounded-full bg-azure px-4 py-2.5 text-[13.5px] font-bold text-white hover:bg-azure-hover"
              >
                Talk to our team
              </Link>
            </div>
          </aside>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
