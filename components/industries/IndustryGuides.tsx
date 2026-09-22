import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

/**
 * The spoke articles that link to this industry page, linked back. Hub and
 * spokes linking both ways is what lets the long-tail articles pass their
 * rankings up to the page that converts.
 */
export function IndustryGuides({
  industryName,
  guides,
}: {
  industryName: string;
  guides: { slug: string; title: string; excerpt: string }[];
}) {
  if (!guides.length) return null;
  return (
    <section aria-labelledby="guides-heading">
      <h2 id="guides-heading" className="mb-2 font-display text-[26px] font-extrabold text-mp-petrol">
        {industryName} guides
      </h2>
      <p className="mb-6 text-[15px] leading-relaxed text-mp-secondary">
        The questions that come up before a project starts, answered in full.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug} className="flex">
            <Link
              href={`/blog/${g.slug}/`}
              data-track="guide_click"
              data-track-guide={g.slug}
              className="group flex w-full flex-col gap-2 rounded-[22px] border border-mp-border bg-white p-6 transition-colors hover:border-mp-petrol/40"
            >
              <span className="font-display text-[16.5px] font-bold leading-snug text-mp-petrol">{g.title}</span>
              <span className="text-[14px] leading-relaxed text-mp-secondary">{g.excerpt}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[13px] font-bold text-mp-petrol">
                Read the guide
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
