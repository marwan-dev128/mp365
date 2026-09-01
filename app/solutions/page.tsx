import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getSolutions } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { excerpt } from "@/lib/richtext";
import { collectionPageSchema } from "@/lib/schema";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const revalidate = 3600;

const DESCRIPTION =
  "MP365's applied Microsoft 365 solutions: SharePoint intranets, Power BI analytics, fast Dynamics 365 CRM deployment, and Business Central financial management.";

export const metadata = buildMetadata({
  title: "Microsoft 365 Solutions — SharePoint, Analytics, CRM & Financial Management",
  description: DESCRIPTION,
  path: "/solutions/",
});

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/solutions/",
          name: "Microsoft 365 Solutions",
          description: DESCRIPTION,
          items: solutions.map((s) => ({ name: s.name, path: `/solutions/${s.slug}/` })),
        })}
      />
      <PageHero
        eyebrow="Solutions"
        h1="Applied solutions for specific business problems"
        breadcrumbs={[{ name: "Solutions", path: "/solutions/" }]}
      />
      <Container className="pt-14">
        <p className="max-w-[68ch] text-[16.5px] leading-[1.75] text-ink-2">
          A service is a capability we bring; a solution is a problem we solve end to end. Each of
          these is a defined engagement with a scope, a sequence, and a point at which you own it
          outright &mdash; not a retainer. If you already know which Microsoft product you need,
          start from <Link href="/services/" className="font-semibold text-azure hover:underline">
            services
          </Link>{" "}
          instead.
        </p>

        <section aria-labelledby="solutions-list" className="mt-12">
          <h2
            id="solutions-list"
            className="font-display text-[22px] font-extrabold tracking-[-0.01em] text-navy"
          >
            Four engagements we run end to end
          </h2>
          <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <li key={s.slug} className="flex">
                <ServiceCard
                  name={s.name}
                  description={excerpt(s.heroAnswer, 130)}
                  href={`/solutions/${s.slug}/`}
                  eyebrow="Solution"
                  imageUrl={s.imageUrl}
                  featured={i === 1}
                />
              </li>
            ))}
          </ul>
        </section>
      </Container>
      <CtaBand />
    </>
  );
}
