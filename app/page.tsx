import { ClientLogos } from "@/components/ClientLogos";
import { IntegrationsHero as HeroSection, type IntegrationWidgetData } from "@/components/hero-section/IntegrationsHero";
import { Container } from "@/components/Container";
import { FaqSection } from "@/components/FaqSection";
import { RichText } from "@/components/RichText";
import { BoostEfficiencyGrid } from "@/components/home/BoostEfficiencyGrid";
import { CustomerStoriesShowcase } from "@/components/home/CustomerStoriesShowcase";
import { EditorialInsightCards } from "@/components/home/EditorialInsightCards";
import { FeatureGrid4Col } from "@/components/home/FeatureGrid4Col";
import { FlexiTravelStats } from "@/components/home/FlexiTravelStats";
import { GetExtraSupportGrid } from "@/components/home/GetExtraSupportGrid";
import { HaveBetterVisibilityGrid } from "@/components/home/HaveBetterVisibilityGrid";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { SolutionCarousel } from "@/components/home/SolutionCarousel";
import { StackedPersonaCards } from "@/components/home/StackedPersonaCards";
import { WhyUsempCarousel } from "@/components/home/WhyUsempCarousel";
import { DarkHighlightBanner } from "@/components/home/DarkHighlightBanner";
import { getPageContent } from "@/content/pages";
import { planMetadata } from "@/lib/metadata";
import { stripInlineMarkup } from "@/lib/richtext";
import { getSitePage } from "@/lib/site-data";
import clientsData from "@/store/clients.json";
import integrationsData from "@/store/integrations.json";

export const metadata = planMetadata("/");

// The home page tells content/pages/home.ts's story through designed sections,
// whose copy lives in store/home/. That file's blocks feed llms-full.txt; its
// intro, FAQ, closing and call to action render here.
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

      <PlatformShowcase />
      <FeatureGrid4Col />
      <SolutionCarousel />
      <StackedPersonaCards />
      <CustomerStoriesShowcase />
      <WhyUsempCarousel />
      <HaveBetterVisibilityGrid />
      <GetExtraSupportGrid />
      <BoostEfficiencyGrid />
      <FlexiTravelStats />
      <EditorialInsightCards />

      <Container className="py-14 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
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
