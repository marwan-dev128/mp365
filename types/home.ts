export interface PersonaCard {
  id: string;
  tag: string;
  title: string;
  summary: string;
  highlightText: string;
  image: string;
  imageAlt: string;
  videoSrc: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface PersonasSectionData {
  header: {
    tag: string;
    title: string;
    subtitle: string;
  };
  cards: PersonaCard[];
}

export interface SolutionSlideItem {
  id: string;
  pill: string;
  title: string;
  description: string;
  href: string;
  videoSrc: string;
}

export interface SolutionsSectionData {
  autoplayDuration: number;
  slides: SolutionSlideItem[];
}

export interface WhympCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageType: "contain" | "cover" | string;
  linkText: string;
  href: string;
}

export interface WhympSectionData {
  autoplayDuration: number;
  cards: WhympCard[];
}

export interface CustomerStoryItem {
  id: string;
  company: string;
  stat: string;
  headline: string;
  quote: string;
  author: string;
  role: string;
  image: string;
  logo: string;
  caseStudyUrl: string;
}

export interface CustomerStoriesSectionData {
  title: string;
  subtitle: string;
  stories: CustomerStoryItem[];
}

export interface PlatformShowcaseTab {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  image: string;
  imageAlt: string;
}

export interface PlatformShowcaseData {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  tabs: PlatformShowcaseTab[];
}

export interface FeatureCardItem {
  category: string;
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export interface FeatureGridData {
  heroCard: {
    stat: string;
    statDescription: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  cards: FeatureCardItem[];
}

export interface EfficiencyCardItem {
  id: string;
  hasImage: boolean;
  image: string;
  imageAlt: string;
  imageType: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface BoostEfficiencyData {
  title: string;
  subtitle: string;
  cards: EfficiencyCardItem[];
}

export interface SupportCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
}

export interface ExtraSupportData {
  title: string;
  subtitle: string;
  cards: SupportCardItem[];
}

export interface VisibilityCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
}

export interface BetterVisibilityData {
  title: string;
  subtitle: string;
  cards: VisibilityCardItem[];
}

export interface EditorialCardItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkText: string;
  linkHref: string;
}

export interface EditorialInsightsData {
  title: string;
  subtitle: string;
  cards: EditorialCardItem[];
}

export interface StatItem {
  stat: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface FlexiTravelStatsData {
  stats: StatItem[];
}

export interface DarkBannerData {
  logo: string;
  logoAlt: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface LocationPresenceData {
  title: string;
  subtitle: string;
  cities: string[];
  disclaimers: string[];
}

export interface ProofMetricItem {
  value: string;
  label: string;
}

export interface ProofMetricsData {
  metrics: ProofMetricItem[];
}
