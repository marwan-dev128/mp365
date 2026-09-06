import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

/**
 * End-of-article author block with mp's styling.
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
      className="flex flex-col gap-5 rounded-[24px] border border-mp-border bg-mp-parchment p-6 sm:p-8 sm:flex-row sm:items-center my-10"
    >
      <span
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mp-ink font-mono text-lg font-bold text-white shadow-xs"
      >
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-mp-muted">
          Written by
        </p>
        <p className="mt-1 font-bold text-[17px] text-mp-ink">
          {author.name}
          {author.role && <span className="font-normal text-mp-secondary"> — {author.role}</span>}
        </p>
        {author.credentials && (
          <p className="mt-1 text-[13.5px] leading-relaxed text-mp-secondary">{author.credentials}</p>
        )}
      </div>
      <Link
        href="/about/"
        className="group inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-mp-ink bg-white px-5 py-2 text-[13px] font-mono font-bold uppercase tracking-wider text-mp-ink hover:bg-mp-ink hover:text-white transition-all sm:self-center"
      >
        Meet author
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </aside>
  );
}
