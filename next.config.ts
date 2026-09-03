import type { NextConfig } from "next";
import { getOldSlugRedirects } from "./lib/data";

// 301 redirect map: every URL that existed on the old WordPress site
// (mp-365.com, per sitemap.xml + nav audit) must resolve to its new
// location. Sourced from the OldSlug table in Postgres — see prisma/seed.ts
// and lib/data.ts's getOldSlugRedirects() — so the map can never drift out
// of sync with the routes it targets, and new redirects can be added by
// inserting a row instead of a deploy.
async function buildRedirects() {
  try {
    const rows = await getOldSlugRedirects();
    return rows.map((r) => ({ ...r, permanent: true as const }));
  } catch (error) {
    console.warn(
      "[next.config] Warning: Could not connect to database to load OldSlug redirects. Skipping dynamic redirects.",
      error instanceof Error ? error.message : error
    );
    return [];
  }
}

const nextConfig: NextConfig = {
  // The whole app (links, canonical URLs, sitemap) is authored with trailing
  // slashes, matching the old WordPress site's URL convention — required so
  // the redirect map's `source` patterns (also trailing-slash) match cleanly.
  trailingSlash: true,
  async redirects() {
    return buildRedirects();
  },
};

export default nextConfig;
