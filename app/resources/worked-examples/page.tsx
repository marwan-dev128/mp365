import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getWorkedExamples } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { excerpt } from "@/lib/richtext";
import { collectionPageSchema } from "@/lib/schema";

export const revalidate = 3600;

const HUB = "/resources/worked-examples/";

export const metadata = buildMetadata({
  title: "Worked Examples — How Microsoft Projects Actually Unfold",
  description:
    "Illustrative, decision-by-decision walkthroughs of a tenant merger, a GP to Business Central move, and a HIPAA configuration. Not client engagements; no invented outcomes.",
  path: HUB,
});

export default async function WorkedExamplesPage() {
  const examples = await getWorkedExamples();
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: HUB,
          name: "Worked Examples",
          description:
            "Illustrative walkthroughs of how Microsoft 365 and Dynamics 365 projects unfold, attributed to no client.",
          items: examples.map((e) => ({ name: e.client, path: `${HUB}${e.slug}/` })),
        })}
      />
      <PageHero
        eyebrow="Worked examples"
        h1="How a project like yours actually unfolds"
        answerQuestion="What is a worked example, and how is it different from a case study?"
        answerText="A worked example is an illustrative scenario: a project of a specific shape, walked through decision by decision using platform facts and the ranges MP365 publishes on its service pages. It is attributed to no client and claims no outcome figures. A case study is a real, named engagement published only with the client's approval. Both are useful; they are not the same thing, and this site never blurs them."
        breadcrumbs={[
          { name: "Resources", path: "/resources/" },
          { name: "Worked Examples", path: HUB },
        ]}
      />
      <Container className="pt-14">
        <section aria-labelledby="worked-examples-list">
          <h2 id="worked-examples-list" className="sr-only">
            Worked examples
          </h2>
          {examples.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-3">
              {examples.map((e, i) => (
                <li key={e.slug} className="flex">
                  <ServiceCard
                    name={e.client}
                    description={excerpt(e.summary, 150)}
                    href={`${HUB}${e.slug}/`}
                    eyebrow={`Worked example · ${e.industryLabel}`}
                    imageUrl={e.imageUrl}
                    featured={i === 1}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-[60ch] text-[15.5px] leading-[1.7] text-ink-2">
              Worked examples are being published.
            </p>
          )}
        </section>
        <p className="mt-12 max-w-[68ch] text-[14.5px] leading-[1.7] text-muted">
          Looking for real engagements instead? Client-approved work is published under{" "}
          <Link href="/case-studies/" className="font-semibold text-azure hover:underline">
            case studies
          </Link>
          .
        </p>
      </Container>
      <CtaBand />
    </>
  );
}
