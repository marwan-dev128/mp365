import { ClientLogos } from "@/components/ClientLogos";
import { IntegrationsHero as HeroSection, type IntegrationWidgetData } from "@/components/hero-section/IntegrationsHero";
import { Container } from "@/components/Container";
import { FaqSection } from "@/components/FaqSection";
import { RichText } from "@/components/RichText";
import { CustomerStoriesShowcase } from "@/components/home/CustomerStoriesShowcase";
import { DarkHighlightBanner } from "@/components/home/DarkHighlightBanner";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { getPageContent } from "@/content/pages";
import { planMetadata } from "@/lib/metadata";
import { stripInlineMarkup } from "@/lib/richtext";
import { getSitePage } from "@/lib/site-data";
import clientsData from "@/store/clients.json";
import integrationsData from "@/store/integrations.json";

export const metadata = planMetadata("/");

export default function HomePage() {
  const plan = getSitePage("/");
  const content = getPageContent("/");

  return (
    <>
      <HeroSection
        title={plan.h1}
        description={stripInlineMarkup(content.intro)}
        buttonText={stripInlineMarkup(content.cta.text)}
        buttonLink="/contact/"
        widgets={integrationsData.widgets as unknown as IntegrationWidgetData[]}
      />

      <ClientLogos label={clientsData.label} clients={clientsData.clients} />

      <Container className="py-14 sm:py-20">
        <CategoryGrid />
      </Container>

      <CustomerStoriesShowcase />

      <Container className="py-14 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          <MarketingPageBody blocks={content.blocks} />
          <FaqSection faqs={content.faqs} />
          <p className="text-[15.5px] leading-[1.75] text-ink-2">
            <RichText text={content.closing} />
          </p>
        </div>
      </Container>

      <DarkHighlightBanner
        headline={stripInlineMarkup(content.cta.heading)}
        subheading={stripInlineMarkup(content.cta.body)}
        ctaText={stripInlineMarkup(content.cta.text)}
        ctaHref="/contact/"
      />
    </>
  );
}
