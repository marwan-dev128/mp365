import { RichText } from "@/components/RichText";
import { Check } from "@/components/ui/Icons";
import { stripInlineMarkup } from "@/lib/richtext";
import type { BlogSection } from "@/lib/blog";

/**
 * Renders the CMS body blocks as the article's prose.
 *
 * Blocks are the same typed union the rest of the site uses (prose | list |
 * steps | table), so an article can carry a comparison table without a second
 * content vocabulary. The visual treatment differs from
 * components/marketing/PageBody.tsx on purpose: this is long-form reading at a
 * 640px measure, not a landing page.
 *
 * Structure notes:
 *  - A block with a heading becomes a <section aria-labelledby={id}>; a block
 *    without one stays a plain <div>. An unnamed <section> is worse than no
 *    landmark at all — it adds a region a screen-reader user can jump into
 *    that announces nothing.
 *  - Heading IDs come from buildSections(), the same pass that feeds the table
 *    of contents, so every TOC entry is guaranteed to resolve.
 *  - `scroll-mt-28` clears the 95px sticky header, so a #anchor arrival (from
 *    the TOC, a permalink, or a search result) lands with the heading visible
 *    rather than tucked underneath the nav.
 *  - `.mp-prose` (app/globals.css) underlines body links, so a link is not
 *    signalled by colour alone — azure-on-slate measures 1.5:1, well under
 *    the 3:1 WCAG 1.4.1 needs for a colour-only distinction.
 *  - Tables break the 640px measure deliberately: a three-column comparison
 *    at reading width is unreadable. They scroll inside their own container so
 *    the page body never scrolls sideways.
 */
export function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="mp-prose flex flex-col gap-11">
      {sections.map((section, i) => {
        const isLead = i === 0 && !section.heading;
        const Heading = section.level === 3 ? "h3" : "h2";
        const Wrapper = section.headingId ? "section" : "div";

        return (
          <Wrapper
            key={section.headingId ?? `block-${i}`}
            {...(section.headingId ? { "aria-labelledby": section.headingId } : {})}
            className={i > 0 && section.heading ? "border-t border-line/70 pt-9" : undefined}
          >
            {section.heading && section.headingId && (
              <Heading
                id={section.headingId}
                className={`group mb-4 scroll-mt-28 font-display font-extrabold tracking-tight text-navy ${
                  section.level === 3
                    ? "text-[18.5px] sm:text-[20px]"
                    : "text-[23px] sm:text-[26px]"
                }`}
              >
                <RichText text={section.heading} />
                {/* Section permalink. Hidden until hover/focus so it never
                    competes with the heading, but always reachable. */}
                <a
                  href={`#${section.headingId}`}
                  aria-label={`Link to section: ${stripInlineMarkup(section.heading)}`}
                  className="ml-2 align-middle text-[0.7em] font-bold text-azure opacity-0 transition-opacity duration-150 group-hover:opacity-60 hover:opacity-100 focus-visible:opacity-100"
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
                  ? "text-[18px] font-normal leading-[1.7] text-ink sm:text-[20px]"
                  : "text-[17px] leading-[1.8] text-ink-2 sm:text-[18px]"
              }
            >
              <RichText text={p} />
            </p>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {section.items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3.5 rounded-xl border border-line/80 bg-surface-light/50 p-4 transition-colors hover:border-azure/30 hover:bg-white"
            >
              <Check className="mt-1 h-4 w-4 shrink-0 text-azure" />
              <span className="text-[16px] leading-[1.7] text-ink-2">
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="flex flex-col gap-4">
          {section.steps.map((step, j) => (
            <li
              key={step.name}
              className="flex gap-4 rounded-[var(--mp-radius-card)] border border-line bg-surface-light/60 p-5"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-azure font-display text-[13px] font-bold tabular-nums text-white"
              >
                {j + 1}
              </span>
              <div className="min-w-0">
                <p className="font-display text-[16px] font-bold text-navy">{step.name}</p>
                <p className="mt-1.5 text-[16px] leading-[1.7] text-ink-2">
                  <RichText text={step.description} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "table": {
      // A blank first header cell is the comparison shape ("", "A", "B"),
      // where each row is labelled by its attribute rather than by data.
      const firstColIsRowHeader = section.headers[0] === "";
      const label = section.heading ? stripInlineMarkup(section.heading) : "Comparison table";
      return (
        // Wider than the 640px prose measure: a three-column comparison set at
        // reading width wraps every cell to one word.
        <div className="lg:-mr-[120px] xl:-mr-[180px]">
          {/* tabIndex makes a horizontally-scrollable region keyboard-scrollable;
              role="group" + a name stop it being an unlabelled tab stop. */}
          <div
            role="group"
            tabIndex={0}
            aria-label={label}
            className="overflow-x-auto rounded-[var(--mp-radius-card)] border border-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mp-azure-primary)]"
          >
            <table className="w-full min-w-[560px] text-[14.5px]">
              {section.heading && <caption className="sr-only">{label}</caption>}
              <thead>
                <tr className="bg-surface-light">
                  {section.headers.map((h, j) => (
                    <th
                      key={h || `col-${j}`}
                      scope="col"
                      className="whitespace-nowrap border-b border-line px-5 py-3 text-left font-display text-[11px] font-bold uppercase tracking-[0.09em] text-muted"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, j) => (
                  <tr key={j} className="border-b border-line last:border-0">
                    {row.map((cell, k) =>
                      k === 0 && firstColIsRowHeader ? (
                        <th
                          key={k}
                          scope="row"
                          className="px-5 py-3.5 text-left align-top font-semibold leading-[1.6] text-navy"
                        >
                          <RichText text={cell} />
                        </th>
                      ) : (
                        <td
                          key={k}
                          className={`px-5 py-3.5 align-top leading-[1.6] ${
                            k === 0 ? "font-semibold text-navy" : "text-ink-2"
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
      // price-range belongs on /pricing/, not in an article — the blog content
      // test rejects it, so reaching here means the data is wrong, not the UI.
      return null;
  }
}
