import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getCaseStudies } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { excerpt } from "@/lib/richtext";
import { collectionPageSchema } from "@/lib/schema";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const revalidate = 3600;

export async function generateMetadata() {
  const caseStudies = await getCaseStudies();
  return buildMetadata({
    title: "Case Studies — Microsoft Migration & Dynamics 365 Projects",
    description:
      "How MP365 has supported manufacturing and industrial clients on Microsoft 365 and Dynamics 365 projects.",
    path: "/case-studies/",
    // Every study is still a draft, so this page renders an empty listing.
    // Indexing a thin, contentless page helps nobody; it re-indexes itself
    // the moment one is published.
    noindex: caseStudies.length === 0,
  });
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return (
    <>
      {/* Returns null while every case study is still a draft — an ItemList
          with no items would assert an empty catalogue. */}
      <JsonLd
        data={collectionPageSchema({
          path: "/case-studies/",
          name: "Case Studies",
          description:
            "How MP365 has supported manufacturing and industrial clients on Microsoft 365 and Dynamics 365 projects.",
          items: caseStudies.map((c) => ({
            name: c.client,
            path: `/case-studies/${c.slug}/`,
          })),
        })}
      />
      <PageHero
        eyebrow="Case Studies"
        h1="Real engagements, not hypotheticals"
        breadcrumbs={[{ name: "Case Studies", path: "/case-studies/" }]}
      />
      <Container className="pt-14">
        {caseStudies.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-3">
            {caseStudies.map((c, i) => (
              <li key={c.slug} className="flex">
                <ServiceCard
                  name={c.client}
                  description={excerpt(c.summary, 150)}
                  href={`/case-studies/${c.slug}/`}
                  eyebrow={c.industryLabel}
                  featured={i === 1}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-[60ch] text-[15.5px] leading-[1.7] text-ink-2">
            Case studies are being finalized — check back soon.
          </p>
        )}
      </Container>
      <CtaBand />
    </>
  );
}
