"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/blog";

const MIN_ITEMS = 2;

export function TableOfContents({
  items,
  variant = "sidebar",
  topOffset = 130,
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

    const pick = () => {
      let current: string | null = null;
      for (const el of headings) {
        if (el.getBoundingClientRect().top <= topOffset) current = el.id;
        else break;
      }
      setActiveId(current);
    };

    const observer = new IntersectionObserver(pick, {
      rootMargin: `-${topOffset}px 0px 0px 0px`,
      threshold: [0, 1],
    });
    headings.forEach((el) => observer.observe(el));

    pick();

    return () => observer.disconnect();
  }, [items, topOffset]);

  if (items.length < MIN_ITEMS) return null;

  const list = (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-active={isActive ? "true" : undefined}
              aria-current={isActive ? "location" : undefined}
              className={`block rounded-lg py-2.5 pr-3 transition-colors duration-200 text-[13.5px] leading-snug break-words ${
                item.level === 3 ? "pl-6" : "pl-3.5"
              } ${
                isActive
                  ? "bg-mp-parchment text-mp-ink font-bold border-l-2 border-mp-ink"
                  : "text-mp-secondary hover:bg-mp-ink/[0.04] hover:text-mp-ink font-normal"
              }`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  if (variant === "mobile") {
    return (
      <details className="group rounded-[20px] border border-mp-border bg-mp-parchment/80 lg:hidden mb-8">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 select-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-mp-ink">
            <ListIcon className="h-4 w-4 text-mp-ink" />
            Table of contents
            <span className="text-[11px] font-mono font-normal text-mp-muted">
              ({items.length} sections)
            </span>
          </span>
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-mp-ink transition-transform duration-300 group-open:rotate-180 border border-mp-border"
          >
            <ChevronIcon className="h-4 w-4" />
          </span>
        </summary>
        <nav aria-label="Article sections" className="px-3 pb-4">
          {list}
        </nav>
      </details>
    );
  }

  return (
    <nav aria-label="Table of contents" className="w-full">
      <div className="mb-3">
        <p className="text-mp-ink text-[11px] font-mono uppercase tracking-[0.14em] font-bold">
          Table of contents
        </p>
      </div>
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
