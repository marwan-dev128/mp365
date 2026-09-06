import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import type { Faq } from "@/lib/data";
import { excerpt } from "@/lib/richtext";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { collectionPageSchema } from "@/lib/schema";

export function MarketingHubIndex({
  eyebrow,
  h1,
  breadcrumbName,
  breadcrumbPath,
  description,
  emptyText,
  pages,
  hub,
  tool,
  faqs = [],
}: {
  eyebrow: string;
  h1: string;
  breadcrumbName: string;
  breadcrumbPath: string;
  /** Used as the CollectionPage description; falls back to the h1. */
  description?: string;
  emptyText: string;
  pages: { slug: string; name: string; heroAnswer: string; imageUrl?: string | null }[];
  hub: string;
  /** Optional interactive tool rendered between the hero and the page grid. */
  tool?: ReactNode;
  /** Hub-level FAQs from StaticPageFaq, keyed on `breadcrumbPath`. */
  faqs?: Faq[];
}) {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: breadcrumbPath,
          name: h1,
          description: description ?? h1,
          items: pages.map((p) => ({ name: p.name, path: `/${hub}/${p.slug}/` })),
        })}
      />
      <PageHero
        eyebrow={eyebrow}
        h1={h1}
        breadcrumbs={[{ name: breadcrumbName, path: breadcrumbPath }]}
      />
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4 pt-14">
        {tool && <div className="mb-14">{tool}</div>}
        {pages.length > 0 ? (
          <section aria-labelledby="hub-list-heading">
            <h2 id="hub-list-heading" className="sr-only">
              {breadcrumbName}
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((p, i) => (
                <li key={p.slug} className="flex">
                  <ServiceCard
                    name={p.name}
                    description={excerpt(p.heroAnswer, 130)}
                    href={`/${hub}/${p.slug}/`}
                    eyebrow={eyebrow}
                    imageUrl={p.imageUrl}
                    featured={i === 1}
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="max-w-[60ch] text-[15.5px] leading-[1.7] text-ink-2">{emptyText}</p>
        )}
        {faqs.length > 0 && (
          <div className="mt-20">
            <FaqSection faqs={faqs} path={breadcrumbPath} />
          </div>
        )}
      </div>
      <CtaBand />
    </>
  );
}
