import Image from "next/image";
import type { ReactNode } from "react";
import type { ContentBlock } from "@/content/types";
import type { ProseBlock } from "@/lib/marketing-blocks";
import { RichText } from "@/components/RichText";
import { stripInlineMarkup } from "@/lib/richtext";
import { imagesForPage, pickIllustrations } from "@/lib/page-visuals";
import { CardTrack } from "./CardTrack";
import { HomeCard, lookForIndex } from "./HomeCard";

/**
 * Turns a page's content blocks into sections built the way the Home page is:
 * a white page, large centered headings, tall mixed cards with illustrations,
 * sliders for long rows, and one dark card for proof. Copy stays plain data; the
 * layout comes from what each block is.
 */

const PROOF = /^proof\b|work MP-365 has delivered/i;
const NOT_FIT = /not the right fit|not a fit|not right/i;
const RELATED = /^related\b|services that sit around/i;

const WRAP = "mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12";
const LINKS_ON_DARK = "[&_a]:!text-mp-mint [&_strong]:text-white";

function CenteredHeading({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2
      className={`mx-auto mb-10 max-w-4xl text-center font-display text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] sm:mb-14 ${
        dark ? "text-white" : "text-mp-petrol"
      }`}
    >
      {children}
    </h2>
  );
}

function CardHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-[26px] font-bold leading-[1.12] tracking-[-0.03em] text-mp-ink sm:text-[32px] lg:text-[36px]">
      {children}
    </h2>
  );
}

function Paragraphs({ block }: { block: ProseBlock }) {
  return (
    <div className="flex flex-col gap-4">
      {block.paragraphs.map((p, i) => (
        <p key={i} className="text-[14.5px] leading-[1.7] text-mp-secondary sm:text-[15px]">
          <RichText text={p} />
        </p>
      ))}
    </div>
  );
}

/** "**Label.** the rest" becomes a card title and body. */
function parseLabel(item: string) {
  const m = item.match(/^\*\*(.+?)[.:]?\*\*[.:]?\s*([\s\S]*)$/);
  return m ? { label: m[1], body: m[2] } : { label: null, body: item };
}

const SLIDE = "w-[84%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc((100%-60px)/4)]";

/** Up to four items sit in one row; more slide sideways, so no row ends half empty. */
function ListCards({ items, label }: { items: string[]; label: string }) {
  const parsed = items.map(parseLabel);
  const images = pickIllustrations(parsed.map((p) => p.label ?? p.body));
  const cards = (className: string) =>
    parsed.map((item, i) => (
      <HomeCard key={items[i]} look={lookForIndex(i)} image={images[i]} title={item.label ?? "What this means"} className={className}>
        <RichText text={item.body} />
      </HomeCard>
    ));
  if (items.length > 4) return <CardTrack label={label}>{cards(SLIDE)}</CardTrack>;
  const cols = items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return <div className={`grid grid-cols-1 items-stretch gap-5 ${cols}`}>{cards("")}</div>;
}

/** The numbered project steps, in the same cards. */
function StepCards({ steps, label }: { steps: { name: string; description: string }[]; label: string }) {
  const images = pickIllustrations(steps.map((step) => step.name));
  return (
    <CardTrack label={label}>
      {steps.map((step, i) => (
        <HomeCard
          key={step.name}
          look={lookForIndex(i)}
          image={images[i]}
          eyebrow={`Step ${String(i + 1).padStart(2, "0")}`}
          title={step.name}
          className={SLIDE}
        >
          <RichText text={step.description} />
        </HomeCard>
      ))}
    </CardTrack>
  );
}

function DataTable({ headers, rows, caption }: { headers: string[]; rows: string[][]; caption?: string }) {
  return (
    <div className="rounded-[28px] bg-mp-parchment p-2 sm:rounded-[36px] sm:p-3">
      <div role="group" tabIndex={0} aria-label={caption ?? "Comparison table"} className="overflow-x-auto rounded-[22px] bg-white sm:rounded-[28px]">
        <table className="w-full min-w-[640px] text-[14px]">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={h || i}
                  scope="col"
                  className="whitespace-nowrap border-b border-mp-border px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-mp-muted sm:px-8"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-mp-border/60 transition-colors last:border-0 hover:bg-mp-parchment/30">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-6 py-5 align-middle leading-[1.55] sm:px-8 ${
                      j === 0
                        ? "font-display text-[16px] font-bold tracking-[-0.015em] text-mp-ink"
                        : "text-mp-secondary [&_a]:inline-block [&_a]:whitespace-nowrap [&_a]:rounded-full [&_a]:border [&_a]:border-mp-ink/25 [&_a]:px-3.5 [&_a]:py-1 [&_a]:text-[12.5px] [&_a]:font-semibold [&_a]:!text-mp-ink [&_a]:no-underline [&_a]:transition-colors hover:[&_a]:bg-mp-petrol/[0.06]"
                    }`}
                  >
                    <RichText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SubBlockBody({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "prose":
      return <Paragraphs block={block} />;
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="text-[14px] leading-[1.6] text-mp-secondary">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return <DataTable headers={block.headers} rows={block.rows} caption={block.heading} />;
    default:
      return null;
  }
}

/** "**Problem:** ..." paragraphs get a small label over the text. */
function LabelledParagraphs({ block }: { block: ProseBlock }) {
  return (
    <div className="flex flex-col gap-4">
      {block.paragraphs.map((p) => {
        const { label, body } = parseLabel(p);
        return (
          <div key={p}>
            {label && <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mp-ink/60">{label}</p>}
            <p>
              <RichText text={body} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

const STORY_SLIDE = "w-[84%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]";

function SubCards({ blocks, label }: { blocks: ContentBlock[]; label: string }) {
  const stories = blocks.filter((b): b is ProseBlock & ContentBlock => b.type === "prose");

  // Written sub-sections become Home's cards, sliding when there are more than three.
  if (stories.length === blocks.length) {
    const images = pickIllustrations(stories.map((b) => b.heading ?? ""));
    const cards = (className: string) =>
      stories.map((b, i) => (
        <HomeCard key={b.heading} look={lookForIndex(i)} image={images[i]} title={stripInlineMarkup(b.heading ?? "")} className={className}>
          <LabelledParagraphs block={b} />
        </HomeCard>
      ));
    if (stories.length > 3) {
      return (
        <div className="mt-8 sm:mt-10">
          <CardTrack label={label}>{cards(STORY_SLIDE)}</CardTrack>
        </div>
      );
    }
    const cols = stories.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
    return <div className={`mt-8 grid grid-cols-1 items-stretch gap-5 sm:mt-10 ${cols}`}>{cards("")}</div>;
  }

  const cols = blocks.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-5 grid gap-5 ${cols}`}>
      {blocks.map((b) => (
        <div key={b.heading} className="rounded-[28px] bg-mp-parchment p-7 sm:p-8">
          <h3 className="mb-3 font-display text-[21px] font-bold leading-[1.18] tracking-[-0.025em] text-mp-ink">{b.heading}</h3>
          <SubBlockBody block={b} />
        </div>
      ))}
    </div>
  );
}

/** Text beside a photo, in a parchment card or on the page, swapping sides. */
function SplitFeature({ block, image, index }: { block: ProseBlock; image: string; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
        flip ? "" : "rounded-[28px] bg-mp-parchment p-6 sm:rounded-[36px] sm:p-8 lg:p-10"
      }`}
    >
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <div className="mb-4">
          <CardHeading>{block.heading}</CardHeading>
        </div>
        <Paragraphs block={block} />
      </div>
      <div className={`relative h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[340px] sm:rounded-[24px] lg:col-span-6 lg:h-[400px] ${flip ? "lg:order-1" : ""}`}>
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 660px, 100vw" className="object-cover object-center" />
      </div>
    </div>
  );
}

/** Pairs each H2 with the H3s that follow it. */
function groupBlocks(blocks: ContentBlock[]) {
  const groups: { main: ContentBlock; subs: ContentBlock[] }[] = [];
  for (const b of blocks) {
    if (b.level === 3 && groups.length) groups[groups.length - 1].subs.push(b);
    else groups.push({ main: b, subs: [] });
  }
  return groups;
}

export function RichBlocks({ blocks, path }: { blocks: ContentBlock[]; path: string }) {
  const images = imagesForPage(path);
  let nextImage = 0;
  let splitIndex = 0;
  const takeImage = () => images[nextImage++ % images.length];

  return (
    <>
      {groupBlocks(blocks).map(({ main, subs }) => {
        const heading = main.heading ?? "";

        if (main.type === "steps") {
          return (
            <section key={heading} className="w-full bg-white py-14 sm:py-20">
              <div className={WRAP}>
                <CenteredHeading>{heading}</CenteredHeading>
                <StepCards steps={main.steps} label={heading} />
              </div>
            </section>
          );
        }

        if (main.type === "prose" && PROOF.test(heading)) {
          const many = main.paragraphs.length > 1;
          return (
            <section key={heading} className="w-full bg-white py-8 sm:py-12">
              <div className={WRAP}>
                <div className="rounded-[28px] bg-mp-petrol px-6 py-12 sm:rounded-[36px] sm:px-10 sm:py-16 lg:py-20">
                <div className="mb-5 text-center">
                  <span className="inline-flex rounded-full border border-mp-mint/40 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-mp-mint">
                    Client proof
                  </span>
                </div>
                <CenteredHeading dark>{heading.replace(/^proof[:\s]*/i, "").replace(/^./, (c) => c.toUpperCase())}</CenteredHeading>
                <div className={`mx-auto grid gap-5 lg:gap-6 ${many ? "max-w-5xl md:grid-cols-2" : "max-w-3xl"}`}>
                  {main.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={`rounded-[28px] border border-white/12 bg-white/[0.07] p-7 text-[15px] leading-[1.65] text-white/85 sm:p-8 ${LINKS_ON_DARK}`}
                    >
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
                </div>
              </div>
            </section>
          );
        }

        if (main.type === "prose" && (NOT_FIT.test(heading) || RELATED.test(heading))) {
          return (
            <section key={heading} className="w-full bg-white py-6 sm:py-8">
              <div className={WRAP}>
                <div
                  className={`grid gap-6 rounded-[28px] p-7 sm:rounded-[36px] sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12 ${
                    NOT_FIT.test(heading) ? "bg-mp-band" : "bg-mp-parchment"
                  }`}
                >
                  <div className="lg:col-span-5">
                    <CardHeading>{heading}</CardHeading>
                  </div>
                  <div className="lg:col-span-7 [&_p]:text-mp-ink/85">
                    <Paragraphs block={main} />
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (main.type === "list") {
          return (
            <section key={heading} className="w-full bg-white py-12 sm:py-16">
              <div className={WRAP}>
                <CenteredHeading>{heading}</CenteredHeading>
                <ListCards items={main.items} label={heading} />
                {subs.length > 0 && <SubCards blocks={subs} label={heading} />}
              </div>
            </section>
          );
        }

        if (main.type === "table") {
          return (
            <section key={heading} className="w-full bg-white py-12 sm:py-16">
              <div className={WRAP}>
                <CenteredHeading>{heading}</CenteredHeading>
                <DataTable headers={main.headers} rows={main.rows} caption={heading} />
                {subs.length > 0 && <SubCards blocks={subs} label={heading} />}
              </div>
            </section>
          );
        }

        if (main.type === "prose") {
          return (
            <section key={heading} className="w-full bg-white py-8 sm:py-12">
              <div className={WRAP}>
                <SplitFeature block={main} image={takeImage()} index={splitIndex++} />
                {subs.length > 0 && <SubCards blocks={subs} label={heading} />}
              </div>
            </section>
          );
        }

        return null;
      })}
    </>
  );
}
