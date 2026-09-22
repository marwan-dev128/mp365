// Reverse links into the industry pages. Industries declare which services,
// glossary terms and hub pages they rely on; these helpers turn that into
// links in the other direction, so every page an industry cites links back.
// Without them the industry pages were reachable only from the menu, footer
// and hub: effectively orphans for link equity.

type IndustryRef = {
  slug: string;
  name: string;
  relatedServiceSlugs: string[];
  relatedTermSlugs: string[];
  relatedPageRefs: string[];
};

export type IndustryLink = { name: string; href: string };

const toLink = (i: IndustryRef): IndustryLink => ({ name: i.name, href: `/industries/${i.slug}/` });

export function industriesForService(all: IndustryRef[], serviceSlug: string): IndustryLink[] {
  return all.filter((i) => i.relatedServiceSlugs.includes(serviceSlug)).map(toLink);
}

export function industriesForTerm(all: IndustryRef[], termSlug: string): IndustryLink[] {
  return all.filter((i) => i.relatedTermSlugs.includes(termSlug)).map(toLink);
}

/** `path` is a full canonical path, e.g. "/pricing/dynamics-365-licensing/". */
export function industriesForPage(all: IndustryRef[], path: string): IndustryLink[] {
  return all.filter((i) => i.relatedPageRefs.includes(path)).map(toLink);
}

/** Blog posts whose body links to the given industry page, newest first. */
export function guidesForIndustry<P extends { slug: string; title: string; body: unknown }>(
  posts: P[],
  industrySlug: string
): P[] {
  const needle = `(/industries/${industrySlug}/)`;
  return posts.filter((p) => JSON.stringify(p.body).includes(needle));
}
