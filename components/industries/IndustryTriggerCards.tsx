"use client";

import { HomeCard, lookForIndex } from "@/components/site/HomeCard";
import { pickIllustrations } from "@/lib/page-visuals";
import { announceTopic, CONSULT_ANCHOR } from "./topic-event";

/**
 * The moments that make a team in this industry call. Each card jumps to the
 * form with its topic already chosen, so the message arrives qualified.
 */
export function IndustryTriggerCards({
  industryName,
  triggers,
  images = pickIllustrations(triggers.map((t) => t.title)),
}: {
  industryName: string;
  triggers: { title: string; body: string }[];
  /** Chosen by the page, so the rest of the page can avoid them. */
  images?: string[];
}) {
  if (!triggers.length) return null;
  return (
    <section aria-labelledby="triggers-heading">
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <h2
          id="triggers-heading"
          className="font-display text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-mp-petrol"
        >
          Why {industryName} teams call MP-365
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-mp-secondary sm:text-[16px]">
          Most projects start with one of these moments. Pick the closest and MP-365 will start from it.
        </p>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {triggers.map((t, i) => (
          <HomeCard
            key={t.title}
            look={lookForIndex(i)}
            image={images[i]}
            title={t.title}
            footer={
              <a
                href={`#${CONSULT_ANCHOR}`}
                onClick={() => announceTopic(t.title)}
                data-track="trigger_click"
                data-track-topic={t.title}
                className="inline-flex items-center gap-1.5 rounded-full border border-mp-ink/25 px-5 py-2 text-[13px] font-medium text-mp-ink transition-colors hover:bg-mp-petrol/[0.06]"
              >
                <span>Start from this</span>
                <span aria-hidden="true" className="text-xs">›</span>
              </a>
            }
          >
            {t.body}
          </HomeCard>
        ))}
      </div>
    </section>
  );
}
