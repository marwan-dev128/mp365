import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getWorkedExamples, getWorkedExampleBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, webPageSchema } from "@/lib/schema";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

export const revalidate = 3600;

const HUB = "/resources/worked-examples/";

export async function generateStaticParams() {
  const rows = await getWorkedExamples();
  return rows.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ex = await getWorkedExampleBySlug(slug);
  if (!ex) return {};
  return buildMetadata({
    title: ex.metaTitle,
    description: ex.metaDescription,
    path: `${HUB}${ex.slug}/`,
    noindex: !ex.published,
  });
}

/**
 * A worked example is an illustrative scenario, not a client engagement. The
 * page says so in three places on purpose — the eyebrow, a notice above the
 * body, and the Article's own headline — so that no excerpt, screenshot or
 * AI summary can lift the content without the framing.
 */
export default async function WorkedExamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ex = await getWorkedExampleBySlug(slug);
  if (!ex) notFound();

  const path = `${HUB}${ex.slug}/`;
  const headline = `Worked example: ${ex.client}`;

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path,
          name: headline,
          description: ex.metaDescription,
          mainEntityId: `${SITE_URL}${path}#article`,
          dateModified: ex.updatedAt.toISOString(),
        })}
      />
      {/* Article, never Review/testimonial markup: nothing here is a claim
          about a named organization's experience. */}
      <JsonLd
        data={articleSchema({
          headline,
          description: ex.metaDescription,
          path,
          datePublished: ex.createdAt.toISOString(),
          dateModified: ex.updatedAt.toISOString(),
          authorName: BRAND_NAME,
          articleSection: "Worked Example",
        })}
      />
      <PageHero
        eyebrow={`Worked example · ${ex.industryLabel}`}
        h1={ex.client}
        breadcrumbs={[
          { name: "Resources", path: "/resources/" },
          { name: "Worked Examples", path: HUB },
          { name: ex.client, path },
        ]}
      >
        <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-2xl">
          <RichText text={ex.summary} />
        </p>
      </PageHero>

      <Container className="max-w-3xl pt-14">
        <aside
          aria-label="About this worked example"
          className="mb-10 rounded-[var(--mp-radius-card)] border border-line border-l-[3px] border-l-azure bg-surface-light p-5 text-[14px] leading-[1.65] text-ink-2"
        >
          <p className="mb-1 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-azure">
            This is an illustrative scenario
          </p>
          <p>
            It describes how a project of this shape unfolds, using platform facts and the
            ranges MP365 publishes elsewhere on this site. It is not a client engagement, names
            no organization, and claims no outcome figures. For real, client-approved
            engagements see{" "}
            <Link href="/case-studies/" className="font-semibold text-azure hover:underline">
              case studies
            </Link>
            .
          </p>
        </aside>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">The situation</h2>
            {ex.problem.map((p, i) => (
              <p key={i} className="mb-4 max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                <RichText text={p} />
              </p>
            ))}
          </div>
          <div>
            <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">How the work unfolds</h2>
            {ex.approach.map((p, i) => (
              <p key={i} className="mb-4 max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                <RichText text={p} />
              </p>
            ))}
          </div>
          <div>
            <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">Where it ends up</h2>
            {ex.result.map((p, i) => (
              <p key={i} className="mb-4 max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                <RichText text={p} />
              </p>
            ))}
          </div>

          {ex.service && (
            <div className="rounded-lg border border-line bg-surface-card p-6">
              <p className="mb-3 text-sm text-ink-2">
                A project of this shape draws primarily on our {ex.service.name.toLowerCase()} service.
              </p>
              <Link
                href={`/services/${ex.service.slug}/`}
                className="text-sm font-bold text-azure hover:underline"
              >
                Learn about {ex.service.name} →
              </Link>
            </div>
          )}
        </div>
      </Container>
      <CtaBand
        heading="Does this look like your situation?"
        subheading="Tell us what you're actually working with and we'll say plainly whether the pattern applies."
      />
    </>
  );
}
