import type {
  PersonasSectionData,
  SolutionsSectionData,
  WhympSectionData,
  CustomerStoriesSectionData,
  PlatformShowcaseData,
  FeatureGridData,
  BoostEfficiencyData,
  ExtraSupportData,
  BetterVisibilityData,
  EditorialInsightsData,
  FlexiTravelStatsData,
  DarkBannerData,
  LocationPresenceData,
  ProofMetricsData,
} from "./home";
import type { NavigationData, FooterData } from "./navigation";

export interface HeroSectionData {
  badge: {
    rating: string;
    reviewsCount: string;
    reviewsText: string;
    stars: number;
  };
  headline: {
    line1: string;
    line2: string;
  };
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  mockupImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ClientLogoItem {
  name: string;
  logo: string;
}

export interface ClientsData {
  label: string;
  clients: ClientLogoItem[];
}

export interface IntegrationWidget {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  style?: Record<string, string>;
}

export interface IntegrationsData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  widgets: IntegrationWidget[];
}

export interface SiteStore {
  navigation: NavigationData;
  footer: FooterData;
  hero: HeroSectionData;
  clients: ClientsData;
  integrations: IntegrationsData;
  home: {
    personas: PersonasSectionData;
    solutions: SolutionsSectionData;
    whymp: WhympSectionData;
    customerStories: CustomerStoriesSectionData;
    platformShowcase: PlatformShowcaseData;
    features: FeatureGridData;
    efficiency: BoostEfficiencyData;
    support: ExtraSupportData;
    visibility: BetterVisibilityData;
    editorial: EditorialInsightsData;
    stats: FlexiTravelStatsData;
    darkBanner: DarkBannerData;
    locations: LocationPresenceData;
    proofMetrics: ProofMetricsData;
  };
}
