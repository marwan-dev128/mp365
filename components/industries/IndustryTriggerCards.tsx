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
    <section aria-labelledby="triggers-heading">
      <h2 id="triggers-heading" className="mb-2 font-display text-[26px] font-extrabold text-navy">
        Why {industryName.toLowerCase()} teams call us
      </h2>
      <p className="mb-6 max-w-[62ch] text-[15px] leading-relaxed text-ink-2">
        Most engagements start with one of these. Pick the closest and we will start from it.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {triggers.map((t) => (
          <li key={t.title} className="flex">
            <a
              href={`#${CONSULT_ANCHOR}`}
              onClick={() => announceTopic(t.topic)}
              className="group flex w-full flex-col gap-3 rounded-[var(--mp-radius-card)] border border-line bg-white p-6 transition-colors hover:border-[var(--mp-border-azure)] hover:bg-surface-light"
            >
              <span className="font-display text-[16.5px] font-bold leading-snug text-navy group-hover:text-azure">
                {t.title}
              </span>
              <span className="text-[14px] leading-relaxed text-ink-2">{t.body}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-[13px] font-bold text-azure">
                Start from this
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
