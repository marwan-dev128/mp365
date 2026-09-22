import { ArrowUpRight, Clock, Shield, Calendar, MapPin, Check } from "@/components/ui/Icons";
import { CONSULT_ANCHOR, TOOL_ANCHOR, type IndustryProofMetric } from "@/lib/industry-conversion";
import { BookingLink } from "@/components/BookingLink";

function MetricIcon({ value, label }: { value: string; label: string }) {
  const text = `${value} ${label}`.toLowerCase();
  const iconClass = "h-4 w-4 text-mp-petrol";

  if (text.includes("20+") || text.includes("yrs") || text.includes("year")) {
    return <Clock className={iconClass} />;
  }
  if (text.includes("1 day") || text.includes("day") || text.includes("reply") || text.includes("response")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`h-4 w-4 text-mp-saffron`} aria-hidden="true">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" fill="currentColor" />
      </svg>
    );
  }
  if (text.includes("audit") || text.includes("retention") || text.includes("hipaa") || text.includes("nist") || text.includes("cmmc") || text.includes("cip") || text.includes("part 11")) {
    return <Shield className={iconClass} />;
  }
  if (text.includes("2028") || text.includes("support") || text.includes("date") || text.includes("deadline")) {
    return <Calendar className={iconClass} />;
  }
  if (text.includes("vernon") || text.includes("ct") || text.includes("new england")) {
    return <MapPin className={iconClass} />;
  }
  return <Check className={iconClass} />;
}

/**
 * Above-the-fold conversion row, rendered inside PageHero under the answer
 * box: one primary action (talk to an engineer), one secondary (run the
 * on-page check), then the proof metrics styled to match the Home Page proof bar.
 */
export function IndustryHeroActions({
  metrics,
  toolLabel,
}: {
  metrics: IndustryProofMetric[];
  toolLabel?: string | null;
}) {
  const gridColsClass =
    metrics.length === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : metrics.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className="mt-8 flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={`#${CONSULT_ANCHOR}`}
          data-track="hero_cta_click"
          data-track-target="consult"
          className="styled-button-with-overlay group relative inline-flex items-center justify-center gap-2 rounded-full bg-mp-lime px-7 py-3.5 text-sm font-bold text-mp-ink transition-all duration-200 hover:bg-mp-lime-hover shadow-2xs cursor-pointer"
        >
          <span>Talk to a senior engineer</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        {toolLabel && (
          <a
            href={`#${TOOL_ANCHOR}`}
            data-track="hero_cta_click"
            data-track-target="tool"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-mp-border bg-white px-7 py-3.5 text-sm font-bold text-mp-petrol transition-all duration-200 hover:border-mp-petrol/40 hover:bg-mp-petrol-tint/30 shadow-2xs"
          >
            <span>{toolLabel}</span>
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">›</span>
          </a>
        )}
        {!toolLabel && <BookingLink source="industry_hero" />}
        <p className="text-[12.5px] text-mp-muted sm:ml-2">
          No sales call. A reply within one business day.
        </p>
      </div>

      {metrics.length > 0 && (
        <dl className={`grid ${gridColsClass} gap-3 sm:gap-4 w-full`}>
          {metrics.map((m) => (
            <div
              key={m.label}
              className="group flex flex-col justify-between rounded-[22px] md:rounded-[24px] border border-mp-border bg-white p-5 sm:p-6 shadow-2xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-mp-petrol/30"
            >
              <div className="flex items-start justify-between gap-3 pb-3">
                <dd className="font-display text-[28px] sm:text-[32px] font-extrabold leading-none tracking-[-0.03em] text-mp-petrol">
                  {m.value}
                </dd>
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mp-mint/20 transition-transform duration-200 group-hover:scale-110">
                  <MetricIcon value={m.value} label={m.label} />
                </div>
              </div>
              <dt className="text-[12px] sm:text-[12.5px] leading-snug text-mp-secondary">
                {m.label}
              </dt>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
