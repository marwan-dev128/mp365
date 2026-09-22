import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { getIndustries, getStaticPageFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { excerpt } from "@/lib/richtext";
import { collectionPageSchema } from "@/lib/schema";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const revalidate = 3600;

const DESCRIPTION =
  "MP365 builds Microsoft 365, Dynamics 365 and Power Platform solutions for manufacturing, logistics, energy, construction, financial services, defence contractors, medical devices, healthcare and retail.";

export const metadata = buildMetadata({
  title: "Microsoft Consulting by Industry | MP365",
  isFullTitle: true,
  description:
    "Microsoft 365, Dynamics 365 and Power Platform for manufacturing, logistics, energy, construction, credit unions, defence contractors, medical devices, healthcare and retail.",
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
          description: DESCRIPTION,
          items: industries.map((i) => ({ name: i.name, path: `/industries/${i.slug}/` })),
        })}
      />
      <PageHero
        eyebrow="Industries"
        h1="Solutions shaped by industry, not a generic template"
        answerQuestion="How does Microsoft consulting differ by industry?"
        answerText="The Microsoft products barely change between industries — what changes is which decisions carry the most risk. Manufacturers are choosing a product on production complexity. Defence contractors are choosing a cloud on where CUI may live. Credit unions and healthcare organizations are deciding what has to be retained and evidenced. The build is the same; the constraints are not."
        breadcrumbs={[{ name: "Industries", path: "/industries/" }]}
      >
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#industries-list"
            className="mp-press inline-flex items-center justify-center rounded-full bg-mp-lime px-7 py-3.5 text-sm font-bold text-mp-ink transition-colors hover:bg-mp-lime-hover"
          >
            Find your industry
          </a>
          <Link
            href="/contact/"
            className="mp-press inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-3.5 text-sm font-bold text-navy transition-colors hover:text-azure"
          >
            Not listed? Talk to us
          </Link>
        </div>
      </PageHero>
      <Container className="pt-14">
        <section aria-labelledby="industries-list">
          <h2
            id="industries-list"
            className="mb-6 scroll-mt-28 font-display text-[clamp(24px,3vw,32px)] font-extrabold tracking-[-0.02em] text-navy"
          >
            Nine industries, each with its own decisions
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i, idx) => (
              <li key={i.slug} className="flex">
                <ServiceCard
                  name={i.name}
                  description={excerpt(i.heroAnswer, 140)}
                  href={`/industries/${i.slug}/`}
                  eyebrow="Industry"
                  featured={idx === 0}
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
