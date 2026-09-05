import { JsonLd } from "@/components/JsonLd";
import { ClientLogos } from "@/components/ClientLogos";
import { HeroSection } from "@/components/hero-section";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { FeatureGrid4Col } from "@/components/home/FeatureGrid4Col";
import { SolutionCarousel } from "@/components/home/SolutionCarousel";
import { StackedPersonaCards } from "@/components/home/StackedPersonaCards";
import { CustomerStoriesShowcase } from "@/components/home/CustomerStoriesShowcase";
import { WhyUsePerkCarousel } from "@/components/home/WhyUsePerkCarousel";
import { HaveBetterVisibilityGrid } from "@/components/home/HaveBetterVisibilityGrid";
import { GetExtraSupportGrid } from "@/components/home/GetExtraSupportGrid";
import { BoostEfficiencyGrid } from "@/components/home/BoostEfficiencyGrid";
import { FlexiTravelStats } from "@/components/home/FlexiTravelStats";
import { EditorialInsightCards } from "@/components/home/EditorialInsightCards";
import { DarkHighlightBanner } from "@/components/home/DarkHighlightBanner";
import { LocationPresenceMarquee } from "@/components/home/LocationPresenceMarquee";
import { getSiteSettings } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { webPageSchema, ORG_ID } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "The intelligent platform for travel and spend | Perk",
  description:
    "Automate travel, expenses, and policies in one platform. Perk combines corporate cards, travel booking, expense management, and AI policy enforcement.",
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
          name: "Perk — Travel and Spend Management",
          description: "Automate travel, expenses, and policies in one platform.",
          mainEntityId: ORG_ID,
        })}
      />

      {/* 1. Exact Perk Hero with Rating Badge & Desktop Mockup */}
      <HeroSection settings={settings} />

      {/* 2. Exact Perk Client Logos Marquee */}
      <ClientLogos />

      {/* 3. Exact Perk Tabbed Showcase (Travel, Spend, Events + Dynamic Proof Band) */}
      <PlatformShowcase />

      {/* 4. Exact Perk 4-Column Feature Grid ($3.72M stat + Control/Visibility/Experience/Impact) */}
      <FeatureGrid4Col />

      {/* 5. Exact Perk Interactive Solution Carousel (111,800* tasks handled everyday) */}
      <SolutionCarousel />

      {/* 6. Exact Perk Stacked Persona Cards (Powerful for companies, effortless for employees) */}
      <StackedPersonaCards />

      {/* 7. Exact Perk Customer Stories Accordion (12,000+ real businesses, getting real work done) */}
      <CustomerStoriesShowcase />

      {/* 8. Exact Perk Why Use Perk Carousel (Have better visibility, Get extra support, Boost efficiency) */}
      <WhyUsePerkCarousel />

      {/* 9. Exact Perk Have Better Visibility Grid (Flexible trips, Travel tracker, In-depth reports) */}
      <HaveBetterVisibilityGrid />

      {/* 10. Exact Perk Get Extra Support Grid (24/7 customer support, Dedicated account support, Emergency cover, Group travel) */}
      <GetExtraSupportGrid />

      {/* 11. Exact Perk Boost Efficiency Grid (HR integrations, Policies and approvals, Centralized invoicing, Events) */}
      <BoostEfficiencyGrid />

      {/* 10. Exact Perk 3-Card Stats Section (Minimum 80% refund*, 90% compliance, 1-minute response time) */}
      <FlexiTravelStats />

      {/* 11. Exact Perk Editorial Insight Cards (Cart, Lightbulb, Graphic) */}
      <EditorialInsightCards />

      {/* 8. Exact Perk Audi Revolut F1 Team Dark Banner */}
      <DarkHighlightBanner />

      {/* 9. Exact Perk Global Cities Marquee & Disclaimers */}
      <LocationPresenceMarquee />
    </>
  );
}
