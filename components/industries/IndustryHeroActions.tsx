import { ArrowUpRight } from "@/components/ui/Icons";
import { CONSULT_ANCHOR, TOOL_ANCHOR, type IndustryProofMetric } from "@/lib/industry-conversion";

/**
 * Above-the-fold conversion row, rendered inside PageHero under the answer
 * box: one primary action (talk to an engineer), one secondary (run the
 * on-page check), then the proof metrics. Competitor industry pages put the
 * first CTA below a full screen of copy; this puts it in the first viewport.
 */
export function IndustryHeroActions({
  metrics,
  toolLabel,
}: {
  metrics: IndustryProofMetric[];
  toolLabel?: string | null;
}) {
  return (
    <div className="mt-6 flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={`#${CONSULT_ANCHOR}`}
          className="mp-press group inline-flex items-center justify-center gap-2 rounded-full bg-mp-lime px-7 py-3.5 text-sm font-bold text-mp-ink transition-colors hover:bg-mp-lime-hover"
        >
          <span>Talk to a senior engineer</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        {toolLabel && (
          <a
            href={`#${TOOL_ANCHOR}`}
            className="mp-press inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-bold text-navy transition-colors hover:border-[var(--mp-border-azure)] hover:text-azure"
          >
            {toolLabel}
          </a>
        )}
        <p className="text-[12.5px] text-ink-2 sm:ml-2">No sales call. A reply within one business day.</p>
      </div>

      {metrics.length > 0 && (
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--mp-radius-card)] border border-line bg-line sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1 bg-white p-5">
              <dt className="order-2 text-[12.5px] leading-snug text-ink-2">{m.label}</dt>
              <dd className="order-1 font-display text-[26px] sm:text-[30px] font-extrabold leading-none tracking-[-0.03em] text-navy">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
