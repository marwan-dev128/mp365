"use client";

import { ArrowUpRight } from "@/components/ui/Icons";
import { CONSULT_ANCHOR, type IndustryTrigger } from "@/lib/industry-conversion";
import { announceTopic } from "./topic-event";

/**
 * "You are here if…" cards. Each one is a trigger event, the moment a buyer
 * actually starts looking, and clicking it jumps to the form with that
 * trigger preselected, so the enquiry arrives already qualified.
 */
export function IndustryTriggerCards({
  industryName,
  triggers,
}: {
  industryName: string;
  triggers: IndustryTrigger[];
}) {
  if (!triggers.length) return null;
  return (
    <section aria-labelledby="triggers-heading" className="my-2">
      <div className="mb-6">
        <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-mp-petrol-2">
          Engagements & Triggers
        </span>
        <h2 id="triggers-heading" className="mt-1 font-display text-[26px] sm:text-[28px] font-extrabold text-mp-petrol">
          Why {industryName.toLowerCase()} teams call us
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-mp-secondary">
          Most engagements start with one of these. Pick the closest and we will start from it.
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {triggers.map((t) => (
          <li key={t.title} className="flex">
            <a
              href={`#${CONSULT_ANCHOR}`}
              onClick={() => announceTopic(t.topic)}
              data-track="trigger_click"
              data-track-topic={t.topic}
              className="group flex w-full flex-col gap-3 rounded-[24px] border border-mp-border bg-mp-parchment/60 p-6 sm:p-7 transition-all duration-200 hover:bg-white hover:border-mp-petrol/30 hover:-translate-y-0.5 shadow-2xs cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-[17px] font-bold leading-snug text-mp-petrol group-hover:text-mp-petrol-2">
                  {t.title}
                </span>
              </div>
              <span className="text-[13.5px] sm:text-[14px] leading-relaxed text-mp-secondary font-normal">
                {t.body}
              </span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[12px] font-bold text-mp-petrol uppercase tracking-[0.1em] group-hover:text-mp-saffron transition-colors">
                <span>Start from this</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
