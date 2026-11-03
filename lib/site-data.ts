// Read access to content/site-data.json, the source of truth for URLs,
// metadata, breadcrumbs and keywords. The plan holds 62 pages; LIVE_PATHS is
// the subset being published now. Solutions, Industries and How We Work stay in
// the data for later but have no route, so nothing may link to them.
import data from "../content/site-data.json";

export type SitePage = (typeof data.pages)[number];

const NON_SERVICE_LIVE = new Set(["/", "/about/", "/contact/", "/blog/", "/pricing/", "/clients/"]);

export function isLivePath(path: string) {
  return NON_SERVICE_LIVE.has(path) || path.startsWith("/services/");
}

export const ALL_PAGES: SitePage[] = data.pages;
export const LIVE_PAGES: SitePage[] = data.pages.filter((p) => isLivePath(p.path));
export const LIVE_PATHS = new Set(LIVE_PAGES.map((p) => p.path));

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
