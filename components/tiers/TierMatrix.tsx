import Link from "next/link";
import { Fragment } from "react";
import { Check } from "@/components/ui/Icons";
import type { TierCell, TierPage } from "@/content/tiers/types";

function Cell({ value }: { value: TierCell }) {
  if (value === true)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mp-petrol text-mp-mint">
        <Check className="h-4 w-4" />
        <span className="sr-only">Included</span>
      </span>
    );
  if (value === false)
    return (
      <span className="text-[18px] font-bold text-mp-ink/25">
        <span aria-hidden="true">–</span>
        <span className="sr-only">Not included</span>
      </span>
    );
  return <span className="text-[12px] font-semibold leading-[1.35] text-mp-ink sm:text-[13px]">{value}</span>;
}

/**
 * The full comparison as one real table: grouped rows, tier names that stay in
 * view while the visitor scrolls, and the highlighted tier tinted in mint. It
 * fits a phone without sideways scrolling, so nothing hides off screen.
 */
export function TierMatrix({ page }: { page: TierPage }) {
  const { tiers, highlight, matrix } = page;
  const tint = (i: number) => (i === highlight ? "bg-mp-mint/[0.14]" : "");

  return (
    <table className="w-full table-fixed border-separate border-spacing-0 text-left">
      <caption className="sr-only">{matrix.heading}</caption>
      <colgroup>
        <col className="w-[38%] sm:w-[46%]" />
        {tiers.map((t) => (
          <col key={t.id} />
        ))}
      </colgroup>
      <thead>
        <tr>
          <th scope="col" className="sticky top-[56px] z-10 border-b-2 border-mp-ink bg-white py-4 pr-3 align-bottom sm:top-[64px] lg:top-[72px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-mp-muted">Feature</span>
          </th>
          {tiers.map((t, i) => (
            <th
              key={t.id}
              scope="col"
              className={`sticky top-[56px] z-10 border-b-2 border-mp-ink px-1.5 py-4 text-center align-bottom sm:top-[64px] sm:px-3 lg:top-[72px] ${
                i === highlight ? "rounded-t-[18px] bg-[#e2f8f3]" : "bg-white"
              }`}
            >
              {i === highlight && t.badge && (
                <span className="mb-2 hidden rounded-full bg-mp-petrol px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-mp-mint sm:inline-block">
                  {t.badge}
                </span>
              )}
              <span className="block font-display text-[13px] font-bold tracking-[-0.02em] text-mp-ink sm:text-[19px]">
                {t.shortName ? (
                  <>
                    <span aria-hidden="true" className="sm:hidden">{t.shortName}</span>
                    <span className="sr-only sm:not-sr-only">{t.name}</span>
                  </>
                ) : (
                  t.name
                )}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {matrix.groups.map((g) => (
          <Fragment key={g.title}>
            <tr>
              <th
                scope="colgroup"
                colSpan={tiers.length + 1}
                className="pb-3 pt-10 text-[11px] font-bold uppercase tracking-[0.14em] text-mp-petrol-2"
              >
                {g.title}
              </th>
            </tr>
            {g.rows.map((r) => (
              <tr key={r.feature} className="group">
                <th scope="row" className="border-b border-mp-border py-3.5 pr-3 align-middle font-normal group-hover:bg-mp-parchment/40">
                  <span className="block text-[13.5px] font-semibold leading-[1.4] text-mp-ink sm:text-[15px]">{r.feature}</span>
                  {r.note && <span className="mt-0.5 block text-[12px] leading-[1.45] text-mp-muted sm:text-[12.5px]">{r.note}</span>}
                </th>
                {r.cells.map((c, i) => (
                  <td
                    key={tiers[i].id}
                    className={`border-b border-mp-border px-1.5 py-3.5 text-center align-middle group-hover:bg-mp-parchment/40 sm:px-3 ${tint(i)}`}
                  >
                    <Cell value={c} />
                  </td>
                ))}
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="pr-3 pt-6" />
          {tiers.map((t, i) => (
            <td key={t.id} className={`px-1 pb-2 pt-6 text-center align-top sm:px-3 ${tint(i)} ${i === highlight ? "rounded-b-[18px]" : ""}`}>
              <Link
                href="/contact/"
                data-track="tier_table_cta_click"
                className={`inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors sm:px-4 sm:text-[12px] ${
                  i === highlight
                    ? "bg-mp-saffron text-mp-ink hover:bg-mp-saffron-hover"
                    : "border border-mp-petrol text-mp-petrol hover:bg-mp-petrol hover:text-white"
                }`}
              >
                <span className="sm:hidden">Ask</span>
                <span className="hidden whitespace-nowrap sm:inline">Ask about {t.shortName ?? t.name}</span>
              </Link>
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
