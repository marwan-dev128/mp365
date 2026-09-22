import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { getIndustries, getStaticPageFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import {
  IndustriesHubHero,
  IndustriesHubFilterGrid,
  IndustryArchitecturePatterns,
} from "@/components/industries";

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

      {/* 1. Curved Inset Parchment Hero with Floating Widgets & Proof Metrics */}
      <IndustriesHubHero
        h1="Solutions shaped by industry constraints, not generic templates"
        answerQuestion="How does Microsoft consulting differ by industry?"
        answerText="The Microsoft products barely change between industries — what changes is which decisions carry the most risk. Manufacturers choose an ERP on production data complexity; defense contractors choose a cloud on where CUI lands; financial institutions and healthcare providers choose based on audit retention and evidence lookbacks. The build is the same; the constraints are not."
      />

      {/* 2. Interactive Filter Grid with all 9 Industries */}
      <Container>
        <IndustriesHubFilterGrid industries={industries} />
      </Container>

      {/* 3. Cross-Industry Architectural Methodology */}
      <IndustryArchitecturePatterns />

      {/* 4. FAQs Section */}
      <Container className="py-14 sm:py-20">
        <FaqSection faqs={faqs} path="/industries/" />
      </Container>

      {/* 5. Conversion CTA Band */}
      <CtaBand
        heading="Not sure which cloud or ERP fits your regulatory scope?"
        subheading="Discuss your tenant boundary, compliance lookback, or ERP migration with a senior architect who has delivered in your sector."
        ctaText="Talk with an engineer"
        ctaHref="/contact/"
      />
    </>
  );
}
