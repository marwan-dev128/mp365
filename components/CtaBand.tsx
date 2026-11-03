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
  badge = "MP-365 - MICROSOFT SOLUTIONS PARTNER",
  heading = "Ready to talk about your Microsoft environment?",
  subheading = "Tell us what you are working on and MP-365 will respond with next steps, not a sales script.",
  ctaText = "Book a discovery call",
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

