import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServices } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { excerpt } from "@/lib/richtext";
import { collectionPageSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Microsoft Consulting Services — Migration, Dynamics 365 & Governance",
  description:
    "MP365's Microsoft consulting services: M&A tenant migration, Microsoft 365 migration, Dynamics 365, Power Platform, data governance, and more.",
  path: "/services/",
});

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/services/",
          name: "Microsoft Consulting Services",
          description:
            "MP365's Microsoft consulting services: M&A tenant migration, Microsoft 365 migration, Dynamics 365, Power Platform, data governance, and more.",
          items: services.map((s) => ({ name: s.name, path: `/services/${s.slug}/` })),
        })}
      />
      <PageHero
        eyebrow="Services"
        h1="Services built for how you actually operate"
        breadcrumbs={[{ name: "Services", path: "/services/" }]}
      />
      <Container className="pt-14">
        <section aria-labelledby="services-list">
          <h2 id="services-list" className="sr-only">
            Services
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug} className="flex">
                <ServiceCard
                  name={s.name}
                  description={excerpt(s.heroAnswer, 130)}
                  href={`/services/${s.slug}/`}
                  eyebrow={s.categoryLabel}
                  imageUrl={s.imageUrl}
                  featured={s.slug === "ma-tenant-migration"}
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
