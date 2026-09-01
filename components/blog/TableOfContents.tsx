"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/blog";

/**
 * Contents nav generated from the article's headings (see lib/blog.ts —
 * the IDs here and the IDs on the <h2>/<h3> elements come from one pass, so
 * they cannot drift).
 *
 * Progressive enhancement: the markup is plain <a href="#id"> links inside a
 * labelled <nav><ol>. With JS off, or before hydration, every entry still
 * navigates — CSS `scroll-behavior: smooth` and `scroll-mt-*` on the headings
 * do the smooth-scroll-with-header-offset natively, so there is no click
 * handler and no scroll hijacking. The only thing JS adds is the current-
 * section highlight.
 *
 * Two variants share this one component so the desktop rail and the mobile
 * disclosure can never list different sections.
 */
/** Fewest headings worth rendering a contents list for. */
const MIN_ITEMS = 2;

export function TableOfContents({
  items,
  variant = "sidebar",
  /** Matches the sticky header height, so a heading is "current" from the
   *  moment it clears the header rather than the viewport top. */
  topOffset = 120,
}: {
  items: TocItem[];
  variant?: "sidebar" | "mobile";
  topOffset?: number;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length < MIN_ITEMS) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!headings.length) return;

    // The active heading is the last one whose top has passed under the
    // header. Recomputing that on every scroll event would thrash layout, so
    // an IntersectionObserver acts purely as the trigger: it fires only when a
    // heading crosses the band, and the (cheap, bounded) scan runs then.
    const pick = () => {
      let current: string | null = null;
      for (const el of headings) {
        if (el.getBoundingClientRect().top <= topOffset) current = el.id;
        else break;
      }
      // Above the first heading, highlight nothing rather than mis-reporting
      // the reader as being in section 1 while they are still in the intro.
      setActiveId(current);
    };

    const observer = new IntersectionObserver(pick, {
      rootMargin: `-${topOffset}px 0px 0px 0px`,
      threshold: [0, 1],
    });
    headings.forEach((el) => observer.observe(el));

    // IntersectionObserver never fires for a heading that is already far above
    // the viewport (e.g. a deep-linked #anchor load), so seed the state once.
    pick();

    return () => observer.disconnect();
  }, [items, topOffset]);

  // A one-entry contents list is furniture, not navigation: it costs a card
  // and a disclosure to tell the reader the article has exactly one section.
  // Below the threshold the component renders nothing and the sidebar simply
  // leads with its CTA.
  if (items.length < MIN_ITEMS) return null;

  const list = (
    <ol className="flex flex-col gap-0.5">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              // aria-current tells a screen reader which section is in view;
              // the colour change alone would be a colour-only signal, so the
              // left indicator bar and the font weight change with it.
              aria-current={isActive ? "location" : undefined}
              // py-2 keeps each row a ~36px touch target on the mobile
              // disclosure, comfortably clear of the 24px WCAG 2.5.8 floor.
              className={`group flex gap-2.5 rounded-lg py-2 pr-2 text-[13.5px] leading-[1.5] transition-colors ${
                item.level === 3 ? "pl-6" : "pl-3"
              } ${
                isActive
                  ? "font-bold text-azure"
                  : "font-medium text-ink-2 hover:bg-azure-subtle hover:text-azure"
              }`}
            >
              <span
                aria-hidden="true"
                className={`mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full transition-all ${
                  isActive ? "h-4 w-[3px] bg-azure" : "bg-muted/50 group-hover:bg-azure"
                }`}
              />
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === "mobile") {
    return (
      <details className="group rounded-[var(--mp-radius-card)] border border-line bg-surface-light/60 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 select-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-navy">
            <ListIcon className="h-4 w-4 text-azure" />
            Contents
            <span className="font-sans text-[12px] font-medium normal-case tracking-normal text-muted">
              ({items.length} sections)
            </span>
          </span>
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-azure transition-transform duration-300 group-open:rotate-180"
          >
            <ChevronIcon className="h-4 w-4" />
          </span>
        </summary>
        <nav aria-label="Article sections" className="px-2 pb-3">
          {list}
        </nav>
      </details>
    );
  }

  return (
    <nav
      aria-labelledby="toc-heading"
      className="rounded-[var(--mp-radius-card)] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,16,51,0.03)]"
    >
      <p
        id="toc-heading"
        className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-azure" />
        On this page
      </p>
      {list}
    </nav>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
