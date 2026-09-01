import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, webPageSchema } from "@/lib/schema";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

export const revalidate = 3600;

export async function generateStaticParams() {
  const studies = await getAllCaseStudySlugs();
  return studies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}/`,
    noindex: !study.published,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      {/*
        Only published case studies get Article markup. Drafts still contain
        [CONTENT NEEDED] placeholders naming real third-party companies —
        asserting authored Article structured data over editorial TODOs
        would misrepresent the page's main content.
      */}
      {study.published && (
        <>
          <JsonLd
            data={webPageSchema({
              path: `/case-studies/${study.slug}/`,
              name: `${study.client} — ${study.industryLabel}`,
              description: study.metaDescription,
              mainEntityId: `${SITE_URL}/case-studies/${study.slug}/#article`,
              dateModified: study.updatedAt.toISOString(),
            })}
          />
          <JsonLd
            data={articleSchema({
              headline: `${study.client} — ${study.industryLabel}`,
              description: study.metaDescription,
              path: `/case-studies/${study.slug}/`,
              datePublished: study.createdAt.toISOString(),
              dateModified: study.updatedAt.toISOString(),
              authorName: BRAND_NAME,
              articleSection: "Case Study",
            })}
          />
        </>
      )}
      <PageHero
        eyebrow={study.industryLabel}
        h1={study.client}
        breadcrumbs={[
          { name: "Case Studies", path: "/case-studies/" },
          { name: study.client, path: `/case-studies/${study.slug}/` },
        ]}
      >
        <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-2xl">
          <RichText text={study.summary} />
        </p>
      </PageHero>

      <Container className="max-w-3xl pt-14">
        {!study.published && (
          <div className="rounded-lg border border-line bg-azure-subtle p-5 mb-10 text-sm text-ink-2">
            Draft — not published to the public case studies listing yet. This page is reachable by direct
            URL for internal review only; confirm scope, quotes, and metrics with the client before setting
            <code className="mx-1">published: true</code> in the database.
          </div>
        )}

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">The challenge</h2>
            {study.problem.map((p, i) => (
              <p key={i} className="max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                <RichText text={p} />
              </p>
            ))}
          </div>
          <div>
            <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">Our approach</h2>
            {study.approach.map((p, i) => (
              <p key={i} className="max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                <RichText text={p} />
              </p>
            ))}
          </div>
          <div>
            <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">The result</h2>
            {study.result.map((p, i) => (
              <p key={i} className="max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                <RichText text={p} />
              </p>
            ))}
          </div>

          {study.service && (
            <div className="rounded-lg border border-line bg-surface-card p-6">
              <p className="text-sm text-ink-2 mb-3">
                This engagement drew primarily on our {study.service.name.toLowerCase()} service.
              </p>
              <Link href={`/services/${study.service.slug}/`} className="text-sm font-bold text-azure hover:underline">
                Learn about {study.service.name} →
              </Link>
            </div>
          )}
        </div>
      </Container>
      <CtaBand
        heading="Facing something similar?"
        subheading="Tell us about your project and we'll tell you honestly whether we're the right fit."
      />
    </>
  );
}
