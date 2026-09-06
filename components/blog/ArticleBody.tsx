import { RichText } from "@/components/RichText";
import { Check } from "@/components/ui/Icons";
import { stripInlineMarkup } from "@/lib/richtext";
import type { BlogSection } from "@/lib/blog";

/**
 * Renders the CMS body blocks as the article's prose with mp's editorial styling.
 */
export function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section, i) => {
        const isLead = i === 0 && !section.heading;
        const Heading = section.level === 3 ? "h3" : "h2";
        const Wrapper = section.headingId ? "section" : "div";

        return (
          <Wrapper
            key={section.headingId ?? `block-${i}`}
            {...(section.headingId ? { "aria-labelledby": section.headingId } : {})}
            className={i > 0 && section.heading ? "pt-6" : undefined}
          >
            {section.heading && section.headingId && (
              <Heading
                id={section.headingId}
                className={`group scroll-mt-32 font-bold tracking-tight text-mp-ink flex items-center gap-2 ${
                  section.level === 3
                    ? "text-[20px] sm:text-[22px] mb-3.5 mt-8"
                    : "text-[26px] sm:text-[30px] mb-5 mt-10"
                }`}
              >
                <span>
                  <RichText text={section.heading} />
                </span>
                <a
                  href={`#${section.headingId}`}
                  aria-label={`Link to section: ${stripInlineMarkup(section.heading)}`}
                  className="text-[0.7em] font-mono font-bold text-mp-muted opacity-0 transition-opacity duration-150 group-hover:opacity-100 focus-visible:opacity-100 hover:text-mp-ink"
                >
                  <span aria-hidden="true">#</span>
                </a>
              </Heading>
            )}

            <BlockContent section={section} isLead={isLead} />
          </Wrapper>
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
                  ? "text-[18px] sm:text-[20px] leading-[1.7] text-mp-ink font-normal"
                  : "text-[16.5px] sm:text-[17.5px] leading-[1.8] text-mp-secondary"
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
              className="flex items-start gap-3.5 rounded-[16px] border border-mp-border bg-mp-parchment/60 p-4 transition-colors hover:bg-mp-parchment"
            >
              <Check className="mt-1 h-4 w-4 shrink-0 text-mp-ink" />
              <span className="text-[16px] leading-[1.7] text-mp-secondary">
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
              className="flex gap-4 rounded-[20px] border border-mp-border bg-mp-parchment/60 p-5 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mp-ink font-mono text-[13px] font-bold tabular-nums text-white"
              >
                {j + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-[17px] text-mp-ink">{step.name}</p>
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
        <div className="my-6 overflow-hidden rounded-[20px] border border-mp-border bg-white">
          <div
            role="group"
            tabIndex={0}
            aria-label={label}
            className="overflow-x-auto focus-visible:outline-none"
          >
            <table className="w-full min-w-[560px] text-[14.5px]">
              {section.heading && <caption className="sr-only">{label}</caption>}
              <thead>
                <tr className="bg-mp-parchment border-b border-mp-border">
                  {section.headers.map((h, j) => (
                    <th
                      key={h || `col-${j}`}
                      scope="col"
                      className="whitespace-nowrap px-5 py-3.5 text-left font-mono text-[11.5px] font-bold uppercase tracking-[0.1em] text-mp-muted"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, j) => (
                  <tr key={j} className="border-b border-mp-border last:border-0 hover:bg-mp-parchment/40 transition-colors">
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
                            k === 0 ? "font-semibold text-mp-ink" : "text-mp-secondary"
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
