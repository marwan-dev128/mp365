import type { TierPage } from "@/content/tiers/types";
import { SITE_URL } from "@/lib/config";
import { stripInlineMarkup } from "@/lib/richtext";
import { webPageSchema } from "@/lib/schema";

/**
 * The page node for a tier comparison, with what answer engines need to cite
 * it: the product it is about (linked to Microsoft's own page), the sources
 * its facts come from, and the tiers as an ordered list. No FAQPage, ratings
 * or prices, per the plan's schema rules.
 */
export function tierPageSchema(page: TierPage) {
  const url = `${SITE_URL}${page.path}`;
  return {
    ...webPageSchema({
      path: page.path,
      name: page.h1,
      description: page.description,
      dateModified: page.reviewedIso,
      lastReviewed: page.reviewedIso,
    }),
    about: {
      "@type": "Thing",
      name: `Microsoft ${page.product}`,
      sameAs: page.productHref,
    },
    citation: page.sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.href })),
    mainEntity: {
      "@type": "ItemList",
      "@id": `${url}#tiers`,
      name: `${page.product} tiers`,
      numberOfItems: page.tiers.length,
      itemListElement: page.tiers.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${page.product} ${t.name}`,
        description: stripInlineMarkup(page.shortAnswer.items[i] ?? t.role),
      })),
    },
  };
}
