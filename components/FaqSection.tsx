import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import type { Faq } from "@/lib/data";
import { SectionTag } from "./ui/SectionTag";
import { RichText } from "./RichText";
import { ChevronDown } from "./ui/Icons";

export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  path,
}: {
  faqs: Faq[];
  title?: string;
  /** Page path — binds the FAQPage node to this page's WebPage via @id. */
  path?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section aria-labelledby="faq-heading" className="border-t border-line pt-12">
      <JsonLd data={faqSchema(faqs, path)} />
      <SectionTag>FAQ</SectionTag>
      <h2 id="faq-heading" className="mb-8 font-display text-[28px] font-extrabold text-navy">
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            name="faq-accordion"
            className="group rounded-[var(--mp-radius-card)] border border-line bg-surface-light transition-all hover:border-[var(--mp-border-azure)] hover:bg-white open:border-[var(--mp-border-azure)] open:bg-white"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 select-none [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[15.5px] font-bold text-navy transition-colors group-hover:text-azure">
                {f.q}
              </h3>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-azure-subtle text-azure transition-transform duration-300 group-open:rotate-180">
                <ChevronDown className="h-4 w-4" />
              </span>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <p className="max-w-[68ch] text-[14.5px] leading-[1.7] text-ink-2">
                <RichText text={f.a} />
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
