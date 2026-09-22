import Link from "next/link";
import type { IndustryLink } from "@/lib/industry-links";

/** Inline "where this applies" row for pages without a sidebar. */
export function IndustryLinkStrip({
  items,
  title = "Industries where this applies",
}: {
  items: IndustryLink[];
  title?: string;
}) {
  if (!items.length) return null;
  return (
    <nav aria-label={title} className="rounded-[var(--mp-radius-card)] border border-line bg-surface-light p-5 sm:p-6">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{title}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="inline-flex rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-semibold text-navy transition-colors hover:border-[var(--mp-border-azure)] hover:text-azure"
            >
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
