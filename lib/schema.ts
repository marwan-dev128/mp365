import { SITE_URL } from "./config";
import { stripInlineMarkup } from "./richtext";

// Every authored string that enters a JSON-LD value goes through this.
// Stripping inside the builders rather than at each call site means a new
// page cannot leak `[label](/path/)` into structured data by forgetting to
// strip — the failure mode this file previously had on all but three fields.
const plain = stripInlineMarkup;
import type { SiteSettings, Person as PersonRow } from "@prisma/client";

// JSON-LD builders. Each returns a plain object — rendered via <JsonLd/>,
// which serializes through lib/jsonld-serialize.ts (escapes `<`).
//
// `settings`/`people` params below are DB rows (see lib/data.ts) — these
// builders stay DB-agnostic themselves so they're easy to unit test.
//
// @id CONVENTION — this is what lets separate <script> blocks resolve into
// one graph. Every path argument already carries a trailing slash
// (next.config.ts `trailingSlash: true`), so `${SITE_URL}${path}` yields
// e.g. "https://mp-365.com/services/dynamics-365/" and the fragment is
// appended directly:
//   <site>/#organization          the company (ProfessionalService)
//   <site>/#website               the site
//   <path>#webpage                the page itself
//   <path>#service | #article | #faq | #breadcrumb | #howto | #term
//   <site>/about/#person-<slug>   a named person
// An @id must match byte-for-byte across blocks or the nodes will not unify.

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Canonical @id for a person, stable across every page that cites them. */
export function personId(slug: string) {
  return `${SITE_URL}/about/#person-${slug}`;
}

export function organizationSchema(settings: SiteSettings, people: PersonRow[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: settings.brandName,
    alternateName: settings.legalName,
    url: `${SITE_URL}/`,
    // The official brand lockup — the same asset the visible header renders,
    // so the logo Google associates with the entity matches what users see.
    logo: `${SITE_URL}/logo-brand.png`,
    // A square variant for surfaces that want one; the wide lockup crops badly.
    image: `${SITE_URL}/android-chrome-512x512.png`,
    description: plain(settings.description),
    telephone: settings.phone,
    email: settings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.street,
      addressLocality: settings.city,
      addressRegion: settings.region,
      postalCode: settings.postalCode,
      addressCountry: settings.country,
    },
    areaServed: settings.areaServed,
    // Only emitted when non-empty — an empty sameAs array is noise, and the
    // Partner Center / Clutch / G2 URLs are still outstanding from the client.
    ...(settings.sameAs.length ? { sameAs: settings.sameAs } : {}),
    // Reference individual team members only when defined
    ...(people.some((p) => p.slug !== "mp365-team")
      ? {
          employee: people
            .filter((p) => p.slug !== "mp365-team")
            .map((p) => ({ "@id": personId(p.slug) })),
        }
      : {}),
  };
}

export function websiteSchema(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: settings.brandName,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

// NOTE: there is deliberately no separate LocalBusiness node.
// `ProfessionalService` (organizationSchema above) is already a subclass of
// LocalBusiness, so a second node duplicated every address/geo/contact
// property while omitting url/logo/description/sameAs — and declared
// `parentOrganization` pointing at itself, asserting the business was its
// own subsidiary and splitting one company across two @ids. Both
// LocalBusiness and Organization consumers resolve correctly from the
// single #organization node.

type WebPageType = "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";

/**
 * The page node — the spine every other block on the page hangs off.
 * `mainEntityId` is optional on purpose: industry, compare and pricing
 * pages have no primary entity node, and a dangling reference is worse
 * than none.
 */
export function webPageSchema(params: {
  type?: WebPageType;
  path: string;
  name: string;
  description: string;
  mainEntityId?: string;
  dateModified?: string;
  datePublished?: string;
  /** ISO date a person last fact-checked the page. */
  lastReviewed?: string;
  /** Person @id of the reviewer (see personId). */
  reviewedById?: string;
}) {
  const url = `${SITE_URL}${params.path}`;
  return {
    "@context": "https://schema.org",
    "@type": params.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: plain(params.name),
    description: plain(params.description),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
    ...(params.mainEntityId ? { mainEntity: { "@id": params.mainEntityId } } : {}),
    ...(params.datePublished ? { datePublished: params.datePublished } : {}),
    ...(params.dateModified ? { dateModified: params.dateModified } : {}),
    ...(params.lastReviewed ? { lastReviewed: params.lastReviewed } : {}),
    ...(params.reviewedById ? { reviewedBy: { "@id": params.reviewedById } } : {}),
    // The homepage renders no breadcrumb, so referencing one would dangle.
    ...(params.path === "/" ? {} : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
  };
}

/**
 * A hub/index page and the list of things it collects.
 * Returns null on an empty list — an ItemList with no itemListElement is
 * meaningless, and /case-studies/ renders empty while all studies are drafts.
 */
export function collectionPageSchema(params: {
  path: string;
  name: string;
  description: string;
  items: { name: string; path: string }[];
}) {
  if (!params.items.length) return null;
  const url = `${SITE_URL}${params.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: plain(params.name),
    description: plain(params.description),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
    breadcrumb: { "@id": `${url}#breadcrumb` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: params.items.length,
      itemListElement: params.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: plain(item.name),
        url: `${SITE_URL}${item.path}`,
      })),
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  // The last crumb is the current page: per Google's guidance it carries no
  // `item`, since a breadcrumb should not link to itself.
  const last = items.length - 1;
  const pagePath = items[last]?.path ?? "/";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${pagePath}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: plain(item.name),
      ...(i === last ? {} : { item: `${SITE_URL}${item.path}` }),
    })),
  };
}




export function articleSchema(params: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  /** When set, author is referenced by canonical @id instead of inlined. */
  authorSlug?: string;
  articleSection?: string;
  /** Article type — BlogPosting for blog content, Article elsewhere. */
  type?: "Article" | "BlogPosting";
  /** Body word count, from lib/blog.ts — must match the rendered article. */
  wordCount?: number;
  /** ISO-8601 duration matching the reading time in the byline, e.g. "PT4M". */
  timeRequired?: string;
  /** Path of the collection this article belongs to, e.g. "/blog/". */
  isPartOfPath?: string;
  /**
   * Site-relative path of the article's own hero image. When set, the schema
   * cites the image the reader can actually see; without one it falls back to
   * the branded OG card, which is the only image the page has.
   */
  imagePath?: string;
}) {
  const url = `${SITE_URL}${params.path}`;
  return {
    "@context": "https://schema.org",
    "@type": params.type ?? "Article",
    "@id": `${url}#article`,
    headline: plain(params.headline),
    description: plain(params.description),
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    inLanguage: "en",
    // The site-level branded OG card — there is no per-article artwork in the
    // content model, so this is the honest image for every post.
    // Trailing slash matters: next.config.ts sets trailingSlash:true, so the
    // slashless form 308-redirects and Google treats it as unfetchable.
    // A full ImageObject rather than a bare URL: Google's article guidance
    // asks for dimensions, and stating them saves every consumer a fetch just
    // to discover it is a valid 1.91:1 card.
    // A bare URL when the article has its own hero (the CMS holds arbitrary
    // artwork, so its dimensions are not knowable here and stating a guess
    // would be worse than stating nothing); the branded fallback card is a
    // full ImageObject because its size is fixed by app/opengraph-image.tsx.
    image: params.imagePath
      ? `${SITE_URL}${params.imagePath}`
      : {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image/`,
          width: 1200,
          height: 630,
        },
    author: params.authorSlug
      ? { "@id": personId(params.authorSlug) }
      : { "@type": "Person", name: params.authorName },
    publisher: { "@id": ORG_ID },
    ...(params.articleSection ? { articleSection: plain(params.articleSection) } : {}),
    // wordCount/timeRequired describe the article actually on the page — both
    // are computed from the same body blocks the reader sees (lib/blog.ts),
    // never estimated and never padded.
    ...(params.wordCount ? { wordCount: params.wordCount } : {}),
    ...(params.timeRequired ? { timeRequired: params.timeRequired } : {}),
    ...(params.isPartOfPath
      ? { isPartOf: { "@id": `${SITE_URL}${params.isPartOfPath}#webpage` } }
      : {}),
  };
}



