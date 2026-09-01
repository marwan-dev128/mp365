import Link from "next/link";
import { Calendar, Clock, Refresh } from "@/components/ui/Icons";
import type { ReadingTime } from "@/lib/blog";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/** Two dates are "the same day" for display purposes if they land on one date. */
function sameDay(a: Date, b: Date) {
  return a.toISOString().slice(0, 10) === b.toISOString().slice(0, 10);
}

/**
 * The article byline: category, author, publish date, last-updated date and
 * reading time.
 *
 * Every field is CMS-derived. The updated date renders only when it actually
 * differs from the publish date — showing "Updated 1 September 2026" on a post
 * published that same day is the kind of invented freshness signal that
 * devalues the real ones.
 */
export function ArticleMeta({
  category,
  author,
  datePublished,
  dateModified,
  reading,
}: {
  category: string;
  author: { name: string; role?: string | null; credentials?: string | null };
  datePublished: Date;
  dateModified: Date;
  reading: ReadingTime;
}) {
  const showUpdated = !sameDay(dateModified, datePublished);
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex flex-col gap-4">
      <p className="inline-flex w-fit items-center gap-2 rounded-full border border-azure/20 bg-azure-subtle px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-azure">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-azure" />
        <span className="sr-only">Category: </span>
        {category}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-navy to-azure font-display text-sm font-bold text-white shadow-xs"
          >
            {initials}
          </span>
          <div className="flex flex-col">
            <span className="font-display text-[14.5px] font-bold text-navy">
              {/* /about/ is where every author's bio and Person @id live, so
                  the visible byline and the JSON-LD point at the same page. */}
              <Link href="/about/" rel="author" className="hover:text-azure hover:underline">
                {author.name}
              </Link>
            </span>
            {(author.role || author.credentials) && (
              <span className="text-[12.5px] leading-tight text-muted">
                {[author.role, author.credentials].filter(Boolean).join(" · ")}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] font-medium text-muted sm:ml-auto">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span className="sr-only">Published </span>
            <time dateTime={datePublished.toISOString()}>{formatDate(datePublished)}</time>
          </span>
          {showUpdated && (
            <span className="inline-flex items-center gap-1.5">
              <Refresh className="h-3.5 w-3.5" />
              <span className="sr-only">Last updated </span>
              Updated <time dateTime={dateModified.toISOString()}>{formatDate(dateModified)}</time>
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {/* Machine-readable so the visible label and schema timeRequired
                state the same duration. */}
            <time dateTime={reading.iso}>{reading.text}</time>
          </span>
        </div>
      </div>
    </div>
  );
}
