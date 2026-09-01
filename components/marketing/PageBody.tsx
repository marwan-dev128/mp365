import { RichText } from "@/components/RichText";
import { Check } from "@/components/ui/Icons";
import { stripInlineMarkup } from "@/lib/richtext";
import type { MarketingBlock } from "@/lib/marketing-blocks";

export function MarketingPageBody({ blocks }: { blocks: MarketingBlock[] }) {
  return (
    <div className="flex flex-col gap-12">
      {blocks.map((block, i) => (
        <MarketingBlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 font-display text-[26px] font-extrabold text-navy">{children}</h2>;
}

function MarketingBlockView({ block }: { block: MarketingBlock }) {
  switch (block.type) {
    case "prose":
      return (
        <div>
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          <div className="flex flex-col gap-4">
            {block.paragraphs.map((p, i) => (
              <p key={i} className="max-w-[68ch] text-[15.5px] leading-[1.75] text-ink-2">
                <RichText text={p} />
              </p>
            ))}
          </div>
        </div>
      );

    case "list":
      return (
        <div>
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          <ul className="flex flex-col gap-3">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex max-w-[66ch] gap-3 text-[15px] leading-[1.7] text-ink-2"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-azure" />
                <span>
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "steps":
      return (
        <div>
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          <ol className="flex flex-col gap-4">
            {block.steps.map((step, i) => (
              <li
                key={step.name}
                className="flex gap-4 rounded-[var(--mp-radius-card)] border border-line bg-surface-light p-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--mp-radius-badge)] bg-azure font-display text-sm font-bold tabular-nums text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-[15px] font-bold text-navy">
                  <RichText text={step.name} />
                </p>
                  <p className="mt-1 max-w-[60ch] text-[14px] leading-[1.65] text-ink-2">
                    <RichText text={step.description} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case "table":
      // The first column is a row header when the header row's first cell is
      // blank — that's the comparison-table shape ("", "Product A", "Product B"),
      // where each row is labelled by its attribute name.
      const firstColIsRowHeader = block.headers[0] === "";
      return (
        <div>
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          {/* tabIndex makes a horizontally-scrollable region keyboard-scrollable;
              role="group" + a name stop it being an unlabelled tab stop. */}
          <div
            role="group"
            tabIndex={0}
            aria-label={block.heading ? stripInlineMarkup(block.heading) : "Comparison table"}
            className="overflow-x-auto rounded-[var(--mp-radius-card)] border border-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mp-azure-primary)]"
          >
            <table className="w-full min-w-[520px] text-[14px]">
              {block.heading && <caption className="sr-only">{stripInlineMarkup(block.heading)}</caption>}
              <thead>
                <tr className="bg-surface-light">
                  {block.headers.map((h, i) => (
                    <th
                      key={h || `col-${i}`}
                      scope="col"
                      className="whitespace-nowrap border-b border-line px-5 py-3.5 text-left font-display text-[11px] font-bold uppercase tracking-[0.09em] text-muted"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-b border-line last:border-0">
                    {row.map((cell, j) =>
                      j === 0 && firstColIsRowHeader ? (
                        <th
                          key={j}
                          scope="row"
                          className="px-5 py-3.5 text-left align-top font-semibold leading-[1.6] text-navy"
                        >
                          <RichText text={cell} />
                        </th>
                      ) : (
                        <td
                          key={j}
                          className={`px-5 py-3.5 align-top leading-[1.6] ${
                            j === 0 ? "font-semibold text-navy" : "text-ink-2"
                          }`}
                        >
                          <RichText text={cell} />
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "price-range":
      return (
        <div>
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          {/* A definition list: each tier is a scope (term) paired with its
              range (definition), which is exactly what dl/dt/dd describe. */}
          <dl className="grid gap-4 sm:grid-cols-2">
            {block.tiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-[var(--mp-radius-card)] border border-line bg-surface-card p-6 shadow-mp-sm"
              >
                <dt className="text-[13px] font-semibold text-ink-2">{tier.label}</dt>
                <dd className="mt-1.5 font-display text-[26px] font-extrabold tabular-nums text-azure">
                  {tier.range}
                </dd>
                {tier.note && (
                  <dd className="mt-2.5 text-[12.5px] leading-relaxed text-muted">
                    <RichText text={tier.note} />
                  </dd>
                )}
              </div>
            ))}
          </dl>
          {block.disclaimer && (
            <p className="mt-5 max-w-[68ch] rounded-[var(--mp-radius-card)] border border-line bg-surface-light p-5 text-[12.5px] leading-[1.7] text-muted">
              <RichText text={block.disclaimer} />
            </p>
          )}
        </div>
      );

    default:
      return null;
  }
}
