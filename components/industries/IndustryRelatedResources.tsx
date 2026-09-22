import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

export interface RelatedItem {
  name: string;
  href: string;
}

export interface IndustryRelatedResourcesProps {
  industryName: string;
  services?: RelatedItem[];
  pages: RelatedItem[];
  terms?: RelatedItem[];
}

export function IndustryRelatedResources({
  industryName,
  pages,
}: IndustryRelatedResourcesProps) {
  if (pages.length === 0) return null;

  return (
    <section
      aria-labelledby="related-resources-heading"
      className="my-10 rounded-[28px] border border-mp-border bg-mp-parchment/70 p-6 sm:p-8 md:p-10 shadow-2xs"
    >
      <div className="mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-mp-petrol-2">
          Architecture & Cost Guides
        </span>
        <h2
          id="related-resources-heading"
          className="mt-1 font-display text-[22px] sm:text-[26px] font-extrabold tracking-[-0.025em] text-mp-petrol"
        >
          Explore related guides & assessments for {industryName}
        </h2>
        <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-mp-secondary">
          In-depth architectural frameworks, migration cost drivers, and operational assessments designed for this sector.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
        {pages.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group flex items-center justify-between rounded-[20px] border border-mp-border/80 bg-white p-4 sm:p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-mp-petrol/40 hover:shadow-xs"
          >
            <div className="flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-mp-saffron shrink-0" />
              <span className="font-display text-[14.5px] font-bold text-mp-ink group-hover:text-mp-petrol transition-colors">
                {p.name}
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-mp-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mp-petrol" />
          </Link>
        ))}
      </div>
    </section>
  );
}
