// Read access to content/site-data.json, the source of truth for URLs,
// metadata, breadcrumbs and keywords. The plan holds 62 pages; LIVE_PATHS is
// the subset being published now. How We Work stays in the data for later but
// has no route, so nothing may link to it.
import data from "../content/site-data.json";
import { TIER_PATHS } from "../content/tiers";

export type SitePage = (typeof data.pages)[number];

const NON_SERVICE_LIVE = new Set(["/", "/about/", "/contact/", "/blog/", "/pricing/", "/clients/"]);

export function isLivePath(path: string) {
  return (
    NON_SERVICE_LIVE.has(path) ||
    TIER_PATHS.includes(path) ||
    path.startsWith("/services/") ||
    path.startsWith("/solutions/") ||
    path.startsWith("/industries/")
  );
}

export const ALL_PAGES: SitePage[] = data.pages;
export const LIVE_PAGES: SitePage[] = data.pages.filter((p) => isLivePath(p.path));
// The tier comparison pages are live and linkable, but they are not plan pages:
// they have no entry in site-data.json and no place in the menu.
export const LIVE_PATHS = new Set([...LIVE_PAGES.map((p) => p.path), ...TIER_PATHS]);

export function getSitePage(path: string): SitePage {
  const page = data.pages.find((p) => p.path === path);
  if (!page) throw new Error(`site-data.json has no page at ${path}`);
  return page;
}

/** Category pages, in plan order. */
export const CATEGORY_PAGES = LIVE_PAGES.filter((p) => p.type === "Category");

export function childrenOf(path: string) {
  return LIVE_PAGES.filter((p) => p.parent_path === path);
}

export const SITE = data.site;
