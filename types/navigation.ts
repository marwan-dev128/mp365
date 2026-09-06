export interface NavLinkItem {
  label: string;
  href: string;
}

export interface AnnouncementData {
  text: string;
  linkText?: string;
  linkHref?: string;
  phone?: string;
  phoneHref?: string;
  enabled?: boolean;
}

export interface BrandLogoData {
  text: string;
  badge?: string;
  href: string;
}

export interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuFeatureCard {
  tag?: string;
  title: string;
  description: string;
  href: string;
  ctaText: string;
  bgImage?: string;
}

export interface MegaMenuGroup {
  id: string;
  label: string;
  href: string;
  width?: "compact" | "medium" | "full" | string;
  columns: MegaMenuColumn[];
  featureCard?: MegaMenuFeatureCard;
  bottomLinks?: NavLinkItem[];
}

export interface NavigationData {
  announcement?: AnnouncementData;
  logo: BrandLogoData;
  navLinks: NavLinkItem[];
  megaMenuGroups?: MegaMenuGroup[];
  rightActions?: {
    login?: { label: string; href: string };
    primaryCta?: { label: string; href: string };
  };
}

export interface SocialLinkItem {
  name: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: NavLinkItem[];
}

export interface FooterNavigationSection {
  groups: FooterGroup[];
}

export interface FooterData {
  helpSection?: {
    title: string;
    links: NavLinkItem[];
  };
  socials?: SocialLinkItem[];
  appButton?: {
    label: string;
    href: string;
  };
  marqueeText?: string;
  navigationSections?: FooterNavigationSection[];
  legal?: {
    brand: string;
    badge?: string;
    copyright: string;
    columns: NavLinkItem[][];
    disclaimer: string;
  };
}
