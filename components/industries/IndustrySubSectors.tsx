import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

export function IndustrySubSectors({
  subSectors,
  related,
}: {
  subSectors: string[];
  related?: { name: string; href: string } | null;
}) {
  if (!subSectors.length) return null;
  return (
    <section aria-labelledby="subsectors-heading" className="rounded-[var(--mp-radius-card)] border border-line bg-surface-light p-6 sm:p-7">
      <h2 id="subsectors-heading" className="mb-4 font-display text-[18px] font-extrabold text-navy">
        Who this page is for
      </h2>
      <ul className="flex flex-wrap gap-2">
        {subSectors.map((s) => (
          <li key={s} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink-2">
            {s}
          </li>
        ))}
      </ul>
      {related && (
        <Link
          href={related.href}
          className="group mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-azure hover:underline"
        >
          Also see: {related.name}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </section>
  );
}
