import Link from "next/link";
import navigation from "@/store/navigation.json";

export const COMPARE_TIERS = navigation.compareTiers;

const Spark = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 3.5c.7 4.6 2 5.8 6.5 6.5-4.5.7-5.8 1.9-6.5 6.5-.7-4.6-2-5.8-6.5-6.5 4.5-.7 5.8-1.9 6.5-6.5z" fill="currentColor" />
  </svg>
);

/**
 * The tier comparison pages, promoted where people look for Dynamics 365: under
 * the CRM services in the mega menu, in the mobile menu and in the footer. One
 * component and one data entry (navigation.json `compareTiers`) for all three.
 */
export function CompareTiersPromo({
  variant,
  onNavigate,
}: {
  variant: "menu" | "mobile" | "footer";
  onNavigate?: () => void;
}) {
  const c = COMPARE_TIERS;

  if (variant === "footer") {
    return (
      <div className="relative mt-8 overflow-hidden rounded-[22px] border border-mp-mint/35 bg-white/[0.06] p-5 sm:p-6">
        <Spark className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 text-mp-mint/15" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mp-mint px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-mp-petrol">
              <Spark className="h-3 w-3" />
              {c.tag}
            </span>
            <p className="mt-2.5 font-display text-[18px] font-bold leading-tight text-white">{c.title}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {c.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-mp-mint px-4 py-2 text-[13px] font-bold text-mp-petrol transition-colors hover:bg-white"
              >
                {l.label} <span aria-hidden="true">›</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className="mt-1 rounded-[16px] bg-mp-band p-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-mp-petrol px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-mp-mint">
          <Spark className="h-3 w-3" />
          {c.tag}
        </span>
        <p className="mt-2 text-[14px] font-bold text-mp-ink">{c.title}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {c.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onNavigate}
              className="inline-flex items-center gap-1 rounded-full bg-mp-petrol px-3.5 py-2 text-[12.5px] font-bold text-white"
            >
              {l.label} <span aria-hidden="true">›</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-4 flex items-center gap-4 overflow-hidden rounded-[18px] bg-mp-band p-4 pr-5">
      <Spark className="pointer-events-none absolute -bottom-6 right-24 h-20 w-20 text-mp-petrol/10" />
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-mp-petrol text-mp-mint">
        <Spark className="h-5 w-5" />
      </span>
      <div className="relative min-w-0 flex-1">
        <p className="flex items-center gap-2 text-[13.5px] font-bold leading-snug text-mp-ink">
          {c.title}
          <span className="rounded-full bg-mp-petrol px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-mp-mint">{c.tag}</span>
        </p>
        <p className="mt-0.5 text-[12px] leading-snug text-mp-ink/70">{c.description}</p>
      </div>
      <div className="relative flex shrink-0 gap-2">
        {c.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={onNavigate}
            className="mega-menu-item inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-mp-petrol px-3.5 py-2 text-[12.5px] font-bold text-white transition-colors hover:bg-mp-petrol-2"
          >
            {l.label} <span aria-hidden="true">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
