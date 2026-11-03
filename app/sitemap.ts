import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { getBlogPosts } from "@/lib/data";
import { LIVE_PAGES } from "@/lib/site-data";

// The date the page copy in content/pages/ was last revised. Update it when the
// copy changes, so lastmod stays truthful rather than always saying "today".
const CONTENT_UPDATED = new Date("2026-11-03");

// Every live page from content/site-data.json, plus published blog posts.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  return [
    ...LIVE_PAGES.map((p) => ({ url: `${SITE_URL}${p.path}`, lastModified: CONTENT_UPDATED })),
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}/`, lastModified: p.dateModified })),
  ];
}
