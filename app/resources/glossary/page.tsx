import Link from "next/link";
import { Container } from "@/components/Container";
import { stripInlineMarkup } from "@/lib/richtext";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getGlossaryTerms } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema, definedTermSetSchema } from "@/lib/schema";
import type { ServiceCategory } from "@prisma/client";

export const revalidate = 3600;

const DESCRIPTION =
  "Plain-English definitions for the Microsoft 365, Dynamics 365, and Power Platform terms that come up in tenant migrations, data governance, and business-application projects.";

export const metadata = buildMetadata({
  title: "Microsoft 365 & Dynamics 365 Glossary",
  description: DESCRIPTION,
  path: "/resources/glossary/",
});

// Terms are grouped by the category of the service they belong to, so the
// index reads as three coherent topics rather than one alphabetical wall.
// Order here is the display order of the groups.
const GROUPS: { category: ServiceCategory; title: string; blurb: string }[] = [
  {
    category: "Migration",
    title: "Tenant migration & M&A",
    blurb:
      "Terms that come up when two Microsoft 365 tenants have to become one — or when one has to be split in two.",
  },
  {
    category: "Governance",
    title: "Data governance & compliance",
    blurb:
      "How Microsoft 365 classifies, retains, protects, and produces data once it is in the tenant.",
  },
  {
    category: "BusinessApplications",
    title: "Power Platform & Dynamics 365",
    blurb:
      "The platform underneath Dynamics 365 and Power Apps, and the guardrails that keep it from sprawling.",
  },
];

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default async function GlossaryPage() {
  const glossaryTerms = await getGlossaryTerms();

  // Group on the stored primary, not relatedServices[0] — that relation is an
  // implicit many-to-many with no defined row order.
  const categoryOf = new Map(glossaryTerms.flatMap((t) => t.relatedServices.map((s) => [s.slug, s.category])));

  const grouped = GROUPS.map((g) => ({
    ...g,
    terms: glossaryTerms.filter(
      (t) => t.primaryServiceSlug && categoryOf.get(t.primaryServiceSlug) === g.category
    ),
  })).filter((g) => g.terms.length > 0);

  // A term whose service has no group (or none at all) still has to appear —
  // silently dropping it from the index would orphan a live page.
  const groupedSlugs = new Set(grouped.flatMap((g) => g.terms.map((t) => t.slug)));
  const ungrouped = glossaryTerms.filter((t) => !groupedSlugs.has(t.slug));
  const sections = [
    ...grouped,
    ...(ungrouped.length ? [{ title: "More terms", blurb: "", terms: ungrouped }] : []),
  ];

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: "/resources/glossary/",
          name: "Microsoft 365 & Dynamics 365 Glossary",
          description: DESCRIPTION,
          items: glossaryTerms.map((t) => ({
            name: t.term,
            path: `/resources/glossary/${t.slug}/`,
          })),
        })}
      />
      {/* The set every DefinedTerm's inDefinedTermSet points at — without
          this node that reference resolves to a page with no term-set entity. */}
      <JsonLd
        data={definedTermSetSchema({
          terms: glossaryTerms.map((t) => ({ name: t.term, slug: t.slug })),
        })}
      />
      <PageHero
        eyebrow="Glossary"
        h1="Microsoft 365 & Dynamics 365 terms, defined plainly"
        breadcrumbs={[
          { name: "Resources", path: "/resources/" },
          { name: "Glossary", path: "/resources/glossary/" },
        ]}
      />
      <Container className="pt-14">
        <p className="max-w-[68ch] text-[16.5px] leading-[1.75] text-ink-2">
          Microsoft&rsquo;s own documentation assumes you already know its vocabulary. These
          definitions don&rsquo;t. Each entry explains what the term means, why it matters on a
          real project, and what it costs you to get wrong &mdash; written for the people who have
          to make the decision, not just administer it.
        </p>

        <div className="mt-14 flex flex-col gap-16">
          {sections.map((group) => (
            <section key={group.title} aria-labelledby={`group-${slugify(group.title)}`}>
              <h2
                id={`group-${slugify(group.title)}`}
                className="font-display text-[22px] font-extrabold tracking-[-0.01em] text-navy"
              >
                {group.title}
              </h2>
              {group.blurb && (
                <p className="mt-2 max-w-[62ch] text-[14.5px] leading-[1.7] text-muted">
                  {group.blurb}
                </p>
              )}
              <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.terms.map((t) => (
                  <li key={t.slug} className="flex">
                    <Link
                      href={`/resources/glossary/${t.slug}/`}
                      className="group mp-press flex w-full flex-col rounded-[var(--mp-radius-card)] border border-line bg-surface-card p-6 shadow-mp-sm hover:-translate-y-1 hover:border-[var(--mp-border-azure)] hover:shadow-mp-hover"
                    >
                      <h3 className="font-display text-[16.5px] font-extrabold text-navy transition-colors group-hover:text-azure">
                        {t.term}
                      </h3>
                      {t.aliases.length > 0 && (
                        <p className="mt-1.5 text-[12px] font-medium uppercase tracking-[0.06em] text-muted">
                          {t.aliases.slice(0, 2).join(" · ")}
                        </p>
                      )}
                      {/* Clamped so a 60-word definition doesn't make one card
                          twice the height of its row-mates. */}
                      <p className="mt-2.5 line-clamp-5 text-[13.5px] leading-[1.65] text-ink-2">
                        {stripInlineMarkup(t.shortDefinition)}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-azure">
                        Read the definition
                        <span aria-hidden="true" className="mp-card-arrow">
                          &rarr;
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
