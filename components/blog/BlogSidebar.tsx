import { SidebarCta } from "@/components/SidebarCta";
import type { ClusterCta } from "@/lib/data";
import type { TocItem } from "@/lib/blog";
import { TableOfContents } from "./TableOfContents";

/**
 * The desktop reading rail: contents, then one CTA. Nothing else — a rail
 * that grows past the viewport stops being useful and starts being a second
 * page.
 *
 * Sticky mechanics live here rather than in the parent so the constraint is
 * stated once:
 *  - `self-start` keeps the aside its natural height instead of stretching to
 *    the grid row, which is what makes `sticky` do anything at all.
 *  - `top-24` (96px) clears the 95px sticky header.
 *  - `max-h-[calc(100vh-8rem)]` + `overflow-y-auto` means a 25-heading article
 *    scrolls the rail internally on a short laptop screen instead of pushing
 *    the CTA permanently off-screen.
 *  - Because the aside is a grid child, the sticky travel ends with the grid
 *    row — it releases at the end of the article and can never ride over the
 *    related-articles section or the footer.
 *  - Hidden below `lg`, where there is no horizontal room; the contents move
 *    into the in-article disclosure and the CTA is covered by the page's
 *    closing CTA band, so nothing is lost and nothing is duplicated.
 */
export function BlogSidebar({ toc, cta }: { toc: TocItem[]; cta: ClusterCta }) {
  return (
    <aside
      aria-label="Article tools"
      className="hidden lg:sticky lg:top-24 lg:flex lg:max-h-[calc(100vh-8rem)] lg:flex-col lg:gap-5 lg:self-start lg:overflow-y-auto lg:overscroll-contain lg:pb-1"
    >
      <TableOfContents items={toc} />
      <SidebarCta tag={cta.tag} title={cta.title} body={cta.body} ctaText={cta.ctaText} />
    </aside>
  );
}
