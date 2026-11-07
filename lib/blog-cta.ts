import type { BlogSection } from "./blog";

export interface InContentCta {
  badge: string;
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  iconType: "calculator" | "assessment" | "blueprint" | "checklist" | "matrix" | "shield";
}

/** The in-article call to action. Posts link only to live pages. */
export function getPostInContentCta(): InContentCta {
  return {
    badge: "TALK TO MP-365",
    title: "Working through this on a real project?",
    description:
      "Tell us what you are dealing with and a Microsoft specialist will tell you what they would do first.",
    primaryText: "Book a free consultation",
    primaryHref: "/contact/",
    secondaryText: "See how pricing works",
    secondaryHref: "/pricing/",
    iconType: "blueprint",
  };
}

/**
 * Determines the optimal insertion index in the sections array.
 *
 * Requirements for editorial perfection:
 * - Articles with < 3 sections should not be interrupted (returns -1).
 * - Finds a natural breathing point at ~40%-50% through the post.
 * - Prefers landing right before a major H2 section, avoiding disruption of
 *   sub-steps or tightly coupled lists.
 */
export function getCtaInsertionIndex(sections: BlogSection[]): number {
  if (sections.length < 3) {
    return -1;
  }

  // Target roughly 40-50% through the article
  const targetIndex = Math.max(1, Math.floor(sections.length * 0.45));

  // Look for an upcoming section with an H2 heading around the target index
  for (let i = targetIndex; i < sections.length - 1; i++) {
    if (sections[i + 1]?.level === 2 && sections[i + 1]?.heading) {
      return i;
    }
  }

  // If no H2 found forward, look backward
  for (let i = targetIndex - 1; i >= 1; i--) {
    if (sections[i + 1]?.level === 2 && sections[i + 1]?.heading) {
      return i;
    }
  }

  // Fallback: place after targetIndex, ensuring at least one section follows
  return Math.min(targetIndex, sections.length - 2);
}
