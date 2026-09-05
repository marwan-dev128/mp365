import { RelatedSidebar } from "@/components/RelatedSidebar";
import { SidebarCta } from "@/components/SidebarCta";

type Item = { name: string; href: string };

/**
 * The right-hand column shared by every hub page (/compare, /pricing,
 * /assessments, /migrations, /dynamics-365). Each section renders only when
 * it has resolved links, so a page with no cross-references degrades to just
 * the CTA rather than to empty headings.
 */
export function HubSidebar({
  relatedServices,
  relatedPages,
  cta,
}: {
  relatedServices: { slug: string; name: string }[];
  relatedPages: Item[];
  cta: { title: string; body: string; ctaText: string };
}) {
  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
      {relatedServices.length > 0 && (
        <RelatedSidebar
          title="Related services"
          items={relatedServices.map((s) => ({ name: s.name, href: `/services/${s.slug}/` }))}
        />
      )}
      {relatedPages.length > 0 && <RelatedSidebar title="Go deeper" items={relatedPages} />}
      <SidebarCta title={cta.title} body={cta.body} ctaText={cta.ctaText} />
    </aside>
  );
}
