import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { getIndustries, getStaticPageFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { excerpt } from "@/lib/richtext";
import { collectionPageSchema } from "@/lib/schema";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Industries We Serve — Manufacturing, Healthcare & Retail",
  description:
    "MP365 builds Microsoft 365, Dynamics 365, and Power Platform solutions for manufacturing, healthcare, and retail organizations.",
  path: "/industries/",
});

export default async function IndustriesPage() {
  const [industries, faqs] = await Promise.all([
    getIndustries(),
    getStaticPageFaqs("/industries/"),
  ]);
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/industries/",
          name: "Industries We Serve",
          description:
            "MP365 builds Microsoft 365, Dynamics 365, and Power Platform solutions for manufacturing, healthcare, and retail organizations.",
          items: industries.map((i) => ({ name: i.name, path: `/industries/${i.slug}/` })),
        })}
      />
      <PageHero
        eyebrow="Industries"
        h1="Solutions shaped by industry, not a generic template"
        answerQuestion="How does Microsoft consulting differ by industry?"
        answerText="The Microsoft products barely change between industries — what changes is which decisions carry the most risk. Manufacturers are choosing between Business Central and Finance and Operations on production complexity. Healthcare organizations are deciding where PHI may live and what has to be logged. Retailers are deciding what stays on the point-of-sale system. The build is the same; the constraints are not."
        breadcrumbs={[{ name: "Industries", path: "/industries/" }]}
      />
      <Container className="pt-14">
        <section aria-labelledby="industries-list">
          <h2 id="industries-list" className="sr-only">
            Industries
          </h2>
          <ul className="grid gap-5 sm:grid-cols-3">
            {industries.map((i, idx) => (
              <li key={i.slug} className="flex">
                <ServiceCard
                  name={i.name}
                  description={excerpt(i.heroAnswer, 140)}
                  href={`/industries/${i.slug}/`}
                  eyebrow="Industry"
                  featured={idx === 1}
                />
              </li>
            ))}
          </ul>
        </section>
        <div className="mt-20">
          <FaqSection faqs={faqs} path="/industries/" />
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
