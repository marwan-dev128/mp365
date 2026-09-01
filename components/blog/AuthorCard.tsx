import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

/**
 * End-of-article author block. Renders only the fields the Person row
 * actually carries — nothing here is invented to fill the card out, and the
 * whole component is skipped if there is no role or credentials to show
 * beyond the name already in the byline.
 */
export function AuthorCard({
  author,
}: {
  author: { name: string; role?: string | null; credentials?: string | null };
}) {
  if (!author.role && !author.credentials) return null;

  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <aside
      aria-label="About the author"
      className="flex flex-col gap-4 rounded-[var(--mp-radius-card)] border border-line bg-surface-light/60 p-6 sm:flex-row sm:items-center"
    >
      <span
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-navy to-azure font-display text-lg font-bold text-white"
      >
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
          Written by
        </p>
        <p className="mt-1 font-display text-[16px] font-bold text-navy">
          {author.name}
          {author.role && <span className="font-medium text-ink-2"> — {author.role}</span>}
        </p>
        {author.credentials && (
          <p className="mt-1 text-[13.5px] leading-[1.6] text-ink-2">{author.credentials}</p>
        )}
      </div>
      <Link
        href="/about/"
        className="group mp-press inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-line bg-white px-4 py-2 text-[13px] font-bold text-navy hover:border-[var(--mp-border-azure)] hover:text-azure sm:self-center"
      >
        Meet the team
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </aside>
  );
}
