import { Fragment } from "react";
import { RichText } from "@/components/RichText";
import { Check } from "@/components/ui/Icons";
import { stripInlineMarkup } from "@/lib/richtext";
import type { BlogSection } from "@/lib/blog";
import { getCtaInsertionIndex, type InContentCta as InContentCtaType } from "@/lib/blog-cta";
import { InContentCta } from "./InContentCta";

/**
 * Renders the CMS body blocks as the article's prose with mp's editorial styling,
 * with smart, contextual in-content CTA insertion at the optimal editorial point.
 */
export function ArticleBody({
  sections,
  inContentCta,
}: {
  sections: BlogSection[];
  inContentCta?: InContentCtaType | null;
}) {
  const insertionIndex = inContentCta ? getCtaInsertionIndex(sections) : -1;

  return (
    <div className="flex flex-col gap-10">
      {sections.map((section, i) => {
        const isLead = i === 0 && !section.heading;
        const Heading = section.level === 3 ? "h3" : "h2";
        const Wrapper = section.headingId ? "section" : "div";

        return (
          <Fragment key={section.headingId ?? `block-${i}`}>
            <Wrapper
              {...(section.headingId ? { "aria-labelledby": section.headingId } : {})}
              className={i > 0 && section.heading ? "pt-6" : undefined}
            >
            {section.heading && section.headingId && (
              <Heading
                id={section.headingId}
                className={`group scroll-mt-32 font-bold tracking-tight text-mp-ink flex items-center gap-2 ${
                  section.level === 3
                    ? "text-[20px] sm:text-[22px] mb-3.5 mt-8 text-mp-petrol"
                    : "text-[26px] sm:text-[32px] mb-5 mt-10 text-mp-ink"
                }`}
              >
                <span>
                  <RichText text={section.heading} />
                </span>
                <a
                  href={`#${section.headingId}`}
                  aria-label={`Link to section: ${stripInlineMarkup(section.heading)}`}
                  className="text-[0.7em] font-mono font-bold text-mp-muted opacity-0 transition-opacity duration-150 group-hover:opacity-100 focus-visible:opacity-100 hover:text-mp-petrol"
                >
                  <span aria-hidden="true">#</span>
                </a>
              </Heading>
            )}

            <BlockContent section={section} isLead={isLead} />
          </Wrapper>

          {i === insertionIndex && inContentCta && (
            <InContentCta cta={inContentCta} />
          )}
        </Fragment>
      );
    })}
    </div>
  );
}

function BlockContent({ section, isLead }: { section: BlogSection; isLead: boolean }) {
  switch (section.type) {
    case "prose":
      return (
        <div className="flex flex-col gap-5">
          {section.paragraphs.map((p, j) => (
            <p
              key={j}
              className={
                isLead && j === 0
                  ? "text-[18.5px] sm:text-[20.5px] leading-[1.7] text-mp-ink font-normal text-pretty"
                  : "text-[16.5px] sm:text-[17.5px] leading-[1.8] text-mp-secondary text-pretty"
              }
            >
              <RichText text={p} />
            </p>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="flex flex-col gap-3 my-4">
          {section.items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3.5 rounded-[18px] border border-mp-border bg-mp-parchment/70 p-4 sm:p-4.5 transition-all hover:bg-mp-parchment hover:border-mp-petrol/30"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mp-petrol text-mp-mint text-xs">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-[16px] leading-[1.7] text-mp-ink">
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="flex flex-col gap-4 my-4">
          {section.steps.map((step, j) => (
            <li
              key={step.name}
              className="flex gap-4 rounded-[22px] border border-mp-border bg-mp-parchment/60 p-5 sm:p-6 transition-all hover:border-mp-petrol/30 hover:bg-mp-parchment"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-mp-petrol font-mono text-[14px] font-bold tabular-nums text-mp-mint shadow-2xs"
              >
                0{j + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-[17.5px] text-mp-ink">{step.name}</p>
                <p className="mt-1.5 text-[15.5px] leading-[1.7] text-mp-secondary">
                  <RichText text={step.description} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "table": {
      const firstColIsRowHeader = section.headers[0] === "";
      const label = section.heading ? stripInlineMarkup(section.heading) : "Comparison table";
      return (
        <div className="my-6 overflow-hidden rounded-[24px] border border-mp-border bg-white shadow-2xs">
          <div
            role="group"
            tabIndex={0}
            aria-label={label}
            className="overflow-x-auto focus-visible:outline-none"
          >
            <table className="w-full min-w-[560px] text-[14.5px]">
              {section.heading && <caption className="sr-only">{label}</caption>}
              <thead>
                <tr className="bg-mp-petrol text-white">
                  {section.headers.map((h, j) => (
                    <th
                      key={h || `col-${j}`}
                      scope="col"
                      className="whitespace-nowrap px-5 py-4 text-left font-mono text-[11.5px] font-bold uppercase tracking-[0.12em] text-mp-mint"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, j) => (
                  <tr key={j} className="border-b border-mp-border last:border-0 hover:bg-mp-parchment/50 transition-colors">
                    {row.map((cell, k) =>
                      k === 0 && firstColIsRowHeader ? (
                        <th
                          key={k}
                          scope="row"
                          className="px-5 py-4 text-left align-top font-bold leading-[1.6] text-mp-ink"
                        >
                          <RichText text={cell} />
                        </th>
                      ) : (
                        <td
                          key={k}
                          className={`px-5 py-4 align-top leading-[1.6] ${
                            k === 0 ? "font-bold text-mp-ink" : "text-mp-secondary"
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
    }

    default:
      return null;
  }
}
