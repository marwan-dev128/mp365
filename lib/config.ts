// Infrastructure-level constants — the site's own domain and brand name.
// These live outside the database deliberately: changing them is a deploy
// event (DNS, canonical URLs, the metadata title template), not a content
// edit. Everything else that used to live in lib/site.ts (address, phone,
// description, tagline, leadership bios, sameAs links) is now DB-backed —
// see lib/data.ts's getSiteSettings()/getPeople().

// Trailing slash is stripped so `${SITE_URL}${path}` can't produce a
// double slash — every caller passes a path that already starts with "/".
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mp-365.com").replace(
  /\/+$/,
  ""
);

export const BRAND_NAME = "MP365";
