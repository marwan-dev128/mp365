import type { NextConfig } from "next";
import { PAGE_REDIRECTS, PATTERN_REDIRECTS } from "./content/redirects";
import { getOldSlugRedirects } from "./lib/data";

// 301 redirects: the plan for the live WordPress site (content/redirects.ts),
// plus any rows added to the OldSlug table. The file comes first and needs no
// database, so a deploy without one still redirects correctly.
async function buildRedirects() {
  const planned = [...PAGE_REDIRECTS, ...PATTERN_REDIRECTS].map(({ source, destination }) => ({
    source,
    destination,
    permanent: true as const,
  }));
  try {
    const rows = await getOldSlugRedirects();
    return [...planned, ...rows.map((r) => ({ ...r, permanent: true as const }))];
  } catch (error) {
    console.warn(
      "[next.config] Could not load OldSlug redirects. Using the planned redirects only.",
      error instanceof Error ? error.message : error
    );
    return planned;
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
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
