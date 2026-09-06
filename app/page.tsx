import { JsonLd } from "@/components/JsonLd";
import { ClientLogos } from "@/components/ClientLogos";
// Import the active hero directly rather than through the barrel: the barrel also
// re-exports HeroV3, which pulls in matter-js (~1MB) even though it is unused here.
import { IntegrationsHero as HeroSection, type IntegrationWidgetData } from "@/components/hero-section/IntegrationsHero";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { FeatureGrid4Col } from "@/components/home/FeatureGrid4Col";
import { SolutionCarousel } from "@/components/home/SolutionCarousel";
import { StackedPersonaCards } from "@/components/home/StackedPersonaCards";
import { CustomerStoriesShowcase } from "@/components/home/CustomerStoriesShowcase";
import { WhyUsempCarousel } from "@/components/home/WhyUsempCarousel";
import { HaveBetterVisibilityGrid } from "@/components/home/HaveBetterVisibilityGrid";
import { GetExtraSupportGrid } from "@/components/home/GetExtraSupportGrid";
import { BoostEfficiencyGrid } from "@/components/home/BoostEfficiencyGrid";
import { FlexiTravelStats } from "@/components/home/FlexiTravelStats";
import { EditorialInsightCards } from "@/components/home/EditorialInsightCards";
import { DarkHighlightBanner } from "@/components/home/DarkHighlightBanner";
import { LocationPresenceMarquee } from "@/components/home/LocationPresenceMarquee";
import integrationsData from "@/store/integrations.json";
import clientsData from "@/store/clients.json";
import { getSiteSettings } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { webPageSchema, ORG_ID } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Microsoft M&A Tenant Migrations & Dynamics 365 | MP365",
  description:
    "M&A-grade Microsoft 365 tenant migrations plus Dynamics 365 and Power Platform modernization from one senior team. 20+ years, based in Vernon, CT.",
  path: "/",
  isFullTitle: true,
});

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: "MP365 — Microsoft Consulting and Migrations",
          description: "M&A tenant migrations, Dynamics 365, and Power Platform delivery.",
          mainEntityId: ORG_ID,
        })}
      />

      {/* 1. Hero with Microsoft ecosystem floating widgets */}
      <HeroSection
        title={integrationsData.title}
        description={integrationsData.description}
        buttonText={integrationsData.buttonText}
        buttonLink={integrationsData.buttonLink}
        widgets={integrationsData.widgets as unknown as IntegrationWidgetData[]}
        settings={settings}
      />

      {/* 2. Client logos marquee */}
      <ClientLogos
        label={clientsData.label}
        clients={clientsData.clients}
      />

      {/* 3. Tabbed showcase (service tabs + proof band) */}
      <PlatformShowcase />

      {/* 4. Four-column feature grid (20+ years figure + capability cards) */}
      <FeatureGrid4Col />

      {/* 5. Interactive solution carousel (migration work handled for you) */}
      <SolutionCarousel />

      {/* 6. Stacked persona cards (IT leaders and the teams they support) */}
      <StackedPersonaCards />

      {/* 7. Customer stories accordion (OTIS Elevator, Carlisle, Hunter Panels) */}
      <CustomerStoriesShowcase />

      {/* 8. Why MP365 carousel (visibility, support, efficiency cards) */}
      <WhyUsempCarousel />

      {/* 9. Visibility grid (wave planning, migration tracker, reporting) */}
      <HaveBetterVisibilityGrid />

      {/* 10. Support grid (senior engineers, named lead, cutover cover, coexistence) */}
      <GetExtraSupportGrid />

      {/* 11. Efficiency grid (identity, governance policies, automation, enablement) */}
      <BoostEfficiencyGrid />

      {/* 12. Three-card facts section (structural facts only — no performance claims) */}
      <FlexiTravelStats />

      {/* 13. Editorial insight cards */}
      <EditorialInsightCards />

      {/* 14. Dark highlight banner */}
      <DarkHighlightBanner />

      {/* 15. Service-area marquee and disclaimers */}
      <LocationPresenceMarquee />
    </>
  );
}
