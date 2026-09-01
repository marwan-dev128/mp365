import { RichText } from "@/components/RichText";
import { stripInlineMarkup } from "@/lib/richtext";
import { Check } from "@/components/ui/Icons";
import type { BlogSection } from "@/lib/blog";

/**
 * Renders the CMS body blocks as the article's prose.
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
 */
export function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    // One measure for the whole article rather than a max-width per
    // paragraph. 640px at 18px measures ~75 characters per line — the top of
    // the band that reads comfortably. A `ch` value was the obvious choice
    // and the wrong one: Jakarta's "0" is wide, so the 68ch this codebase
    // uses elsewhere resolved to 729px and ~83 characters here.
    <div className="mp-prose flex max-w-[640px] flex-col gap-11">
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

            {section.paragraphs && section.paragraphs.length > 0 && (
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
            )}

            {section.list && section.list.length > 0 && (
              <ul className={`flex flex-col gap-3 ${section.paragraphs?.length ? "mt-6" : ""}`}>
                {section.list.map((item, j) => (
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
            )}
          </Wrapper>
        );
      })}
    </div>
  );
}
