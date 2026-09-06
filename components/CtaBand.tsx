import { DarkHighlightBanner } from "./home/DarkHighlightBanner";

export interface CtaBandProps {
  badge?: string;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  bgImage?: string;
  bgAlt?: string;
}

export function CtaBand({
  badge = "MP365 - MICROSOFT SOLUTIONS PARTNER - VERNON, CT",
  heading = "Ready to talk about your Microsoft environment?",
  subheading = "Tell us what you're working with — migration, Dynamics 365, or Power Platform — and we'll respond with next steps, not a sales script.",
  ctaText = "Get a free consultation",
  ctaHref = "/contact/",
  bgImage,
  bgAlt,
}: CtaBandProps = {}) {
  return (
    <DarkHighlightBanner
      badge={badge}
      headline={heading}
      subheading={subheading}
      ctaText={ctaText}
      ctaHref={ctaHref}
      bgImage={bgImage}
      bgAlt={bgAlt}
    />
  );
}

