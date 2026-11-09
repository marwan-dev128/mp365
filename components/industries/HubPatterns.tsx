import Link from "next/link";
import { HomeCard, lookForIndex } from "@/components/site/HomeCard";
import { pickIllustrations } from "@/lib/page-visuals";

export type Pattern = {
  title: string;
  subtitle: string;
  body: string;
  linkText: string;
  linkHref: string;
};

/** Three foundations or stages on the overview pages, in Home's mixed cards. */
export function HubPatterns({
  title,
  subtitle,
  patterns,
  images = pickIllustrations(patterns.map((p) => p.title)),
}: {
  title: string;
  subtitle: string;
  patterns: Pattern[];
  /** Chosen by the page, so the rest of the page can avoid them. */
  images?: string[];
}) {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-mp-petrol">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-mp-secondary sm:text-[16px]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {patterns.map((pattern, i) => (
            <HomeCard
              key={pattern.title}
              look={lookForIndex(i)}
              image={images[i]}
              eyebrow={pattern.subtitle}
              title={pattern.title}
              footer={
                <Link
                  href={pattern.linkHref}
                  className="inline-flex items-center gap-1.5 rounded-full border border-mp-ink/25 px-5 py-2 text-[13px] font-medium text-mp-ink transition-colors hover:bg-mp-petrol/[0.06]"
                >
                  <span>{pattern.linkText}</span>
                  <span aria-hidden="true" className="text-xs">›</span>
                </Link>
              }
            >
              {pattern.body}
            </HomeCard>
          ))}
        </div>
      </div>
    </section>
  );
}
