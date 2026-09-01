import type { Metadata } from "next";
import { SITE_URL, BRAND_NAME } from "./config";
import { stripInlineMarkup } from "./richtext";

// `title` is always resolved to an absolute string here (never left to the
// root layout's title.template) so every page controls its exact <title>
// deterministically, with no risk of the brand suffix being appended twice.
export function buildMetadata(params: {
  title: string;
  description: string;
  path: string; // e.g. "/services/ma-tenant-migration/"
  /** Pass true when `title` is already the full, final title (e.g. the homepage). */
  isFullTitle?: boolean;
  /**
   * Pass true for unpublished/draft content. Draft detail pages stay
   * reachable by direct URL for internal review (see lib/data.ts), but must
   * not be indexed — the root layout sets index:true site-wide, so without
   * this a draft carrying placeholder text would be crawlable.
   */
  noindex?: boolean;
  /**
   * Article-specific Open Graph fields. Supplying this switches og:type from
   * "website" to "article" and emits article:published_time /
   * article:modified_time / article:author / article:section — the properties
   * LinkedIn, Slack and Facebook use to render an editorial card rather than a
   * generic site card. Only pass values that exist in the CMS.
   */
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
    section?: string;
    tags?: string[];
  };
  /**
   * Site-relative path to a page-specific social image, e.g. an article's
   * hero. Omit it and the page uses the site's branded OG card.
   */
  imagePath?: string;
}): Metadata {
  const url = `${SITE_URL}${params.path}`;
  // Trailing slash required — trailingSlash:true makes the slashless form 308.
  const ogImage = params.imagePath
    ? `${SITE_URL}${params.imagePath}`
    : `${SITE_URL}/opengraph-image/`;
  // <title> and meta descriptions are plain-text surfaces: a `[label](/path/)`
  // or `**` reaching them is published verbatim into the SERP. Callers pass
  // authored copy straight from the database (metaTitle/metaDescription, and
  // in a few places heroAnswer or shortDefinition), so flatten here rather
  // than trusting ~25 call sites to remember.
  const title = stripInlineMarkup(params.title);
  const description = stripInlineMarkup(params.description);
  const fullTitle = params.isFullTitle ? title : `${title} | ${BRAND_NAME}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    ...(params.noindex ? { robots: { index: false, follow: false } } : {}),
    ...(params.article ? { authors: params.article.authors.map((name) => ({ name })) } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BRAND_NAME,
      images: [ogImage],
      ...(params.article
        ? {
            type: "article" as const,
            publishedTime: params.article.publishedTime,
            modifiedTime: params.article.modifiedTime,
            authors: params.article.authors,
            // Same rule as title/description: og:section and og:tag are
            // plain-text surfaces, so authored values are flattened here.
            ...(params.article.section
              ? { section: stripInlineMarkup(params.article.section) }
              : {}),
            ...(params.article.tags?.length
              ? { tags: params.article.tags.map(stripInlineMarkup) }
              : {}),
          }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
