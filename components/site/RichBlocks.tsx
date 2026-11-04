import type { ReactNode } from "react";
import type { ContentBlock } from "@/content/types";
import type { ProseBlock } from "@/lib/marketing-blocks";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { Check } from "@/components/ui/Icons";

/**
 * Turns a page's content blocks into designed, full-width sections, so copy
 * stays plain data while the layout comes from what each block is:
 * lists become card grids, steps a numbered track, proof a dark feature band,
 * "not the right fit" a callout, and runs of H3s a row of cards.
 */

const PROOF = /^proof\b|work MP-365 has delivered/i;
const NOT_FIT = /not the right fit|not a fit|not right/i;
const RELATED = /^related\b|services that sit around/i;

type Tone = "white" | "parchment";
const TONES: Record<Tone, string> = { white: "bg-white", parchment: "bg-mp-parchment/55" };

function Section({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <section className={`w-full py-12 sm:py-16 ${TONES[tone]}`}>
      <Container>{children}</Container>
    </section>
  );
}

function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-mp-petrol sm:text-[36px] ${className}`}
    >
      {children}
    </h2>
  );
}

function Paragraphs({ block, tint = false }: { block: ProseBlock; tint?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {block.paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-[15.5px] leading-[1.75] ${tint ? "text-white/85 [&_a]:!text-mp-mint [&_strong]:text-white" : "text-ink-2"}`}
        >
          <RichText text={p} />
        </p>
      ))}
    </div>
  );
}

/** "**Label.** the rest" becomes a card title and body; plain items get a tick. */
function parseLabel(item: string) {
  const m = item.match(/^\*\*(.+?)[.:]?\*\*[.:]?\s*([\s\S]*)$/);
  return m ? { label: m[1], body: m[2] } : { label: null, body: item };
}

function CardGrid({ items }: { items: string[] }) {
  const cols = items.length % 3 === 0 || items.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <ul className={`grid gap-4 sm:grid-cols-2 ${cols}`}>
      {items.map((item) => {
        const { label, body } = parseLabel(item);
        return (
          <li
            key={item}
            className="flex gap-3.5 rounded-[22px] border border-mp-border bg-white p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:p-6"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-mp-mint/25 text-mp-petrol">
              <Check className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              {label && <p className="mb-1 font-display text-[16px] font-bold leading-snug text-mp-ink">{label}</p>}
              <p className="text-[14px] leading-[1.6] text-mp-secondary">
                <RichText text={body} />
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function StepTrack({ steps }: { steps: { name: string; description: string }[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.name} className="relative overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.07] p-6">
          <span
            aria-hidden="true"
            className="font-display text-[44px] font-extrabold leading-none tracking-[-0.04em] text-mp-mint/70"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-display text-[17px] font-bold leading-snug text-white">{s.name}</h3>
          <p className="mt-2 text-[14px] leading-[1.6] text-white/75 [&_a]:!text-mp-mint">
            <RichText text={s.description} />
          </p>
        </li>
      ))}
    </ol>
  );
}

function DataTable({ headers, rows, caption }: { headers: string[]; rows: string[][]; caption?: string }) {
  return (
    <div
      role="group"
      tabIndex={0}
      aria-label={caption ?? "Comparison table"}
      className="overflow-x-auto rounded-[22px] border border-mp-border bg-white"
    >
      <table className="w-full min-w-[560px] text-[14px]">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-mp-petrol">
            {headers.map((h, i) => (
              <th
                key={h || i}
                scope="col"
                className="whitespace-nowrap px-5 py-3.5 text-left font-display text-[11.5px] font-bold uppercase tracking-[0.09em] text-white"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-mp-border/70 last:border-0 even:bg-mp-parchment/30">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-5 py-3.5 align-top leading-[1.6] ${j === 0 ? "font-semibold text-mp-ink" : "text-mp-secondary"}`}
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CardRow({ blocks }: { blocks: ContentBlock[] }) {
  const cols = blocks.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-4 ${cols}`}>
      {blocks.map((b) => (
        <div key={b.heading} className="rounded-[22px] border border-mp-border bg-white p-6">
          <h3 className="mb-3 font-display text-[18px] font-bold leading-snug text-mp-petrol">{b.heading}</h3>
          <BlockInner block={b} />
        </div>
      ))}
    </div>
  );
}

function BlockInner({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "prose":
      return <Paragraphs block={block} />;
    case "list":
      return <CardGrid items={block.items} />;
    case "table":
      return <DataTable headers={block.headers} rows={block.rows} caption={block.heading} />;
    default:
      return null;
  }
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

/** Plain sections alternate backgrounds; the steps, proof and fit bands stand alone. */
function assignTones(groups: { main: ContentBlock }[], start: Tone) {
  let tone = start;
  return groups.map(({ main }) => {
    const heading = main.heading ?? "";
    const standalone =
      main.type === "steps" || (main.type === "prose" && (PROOF.test(heading) || NOT_FIT.test(heading)));
    if (standalone) return tone;
    const current = tone;
    tone = tone === "white" ? "parchment" : "white";
    return current;
  });
}

export function RichBlocks({ blocks, startTone = "white" }: { blocks: ContentBlock[]; startTone?: Tone }) {
  const groups = groupBlocks(blocks);
  const tones = assignTones(groups, startTone);

  return (
    <>
      {groups.map(({ main, subs }, index) => {
        const heading = main.heading ?? "";
        const current = tones[index];

        if (main.type === "steps") {
          return (
            <section key={heading} className="w-full bg-mp-petrol py-14 sm:py-20">
              <Container>
                <h2 className="mb-8 max-w-3xl font-display text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-white sm:mb-10 sm:text-[36px]">
                  {heading}
                </h2>
                <StepTrack steps={main.steps} />
              </Container>
            </section>
          );
        }

        if (main.type === "prose" && PROOF.test(heading)) {
          return (
            <section key={heading} className="w-full bg-white py-12 sm:py-16">
              <Container>
                <div className="grid gap-6 rounded-[28px] bg-mp-petrol p-7 sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:p-12">
                  <div>
                    <span className="mb-4 inline-flex rounded-full border border-mp-mint/40 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-mp-mint">
                      Client proof
                    </span>
                    <h2 className="font-display text-[26px] font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-[32px]">
                      {heading.replace(/^proof[:\s]*/i, "").replace(/^./, (c) => c.toUpperCase())}
                    </h2>
                  </div>
                  <Paragraphs block={main} tint />
                </div>
              </Container>
            </section>
          );
        }

        if (main.type === "prose" && NOT_FIT.test(heading)) {
          return (
            <section key={heading} className="w-full bg-white py-10 sm:py-12">
              <Container>
                <div className="rounded-[28px] border-2 border-dashed border-mp-saffron/70 bg-mp-saffron/[0.07] p-7 sm:p-9">
                  <Title className="mb-4 !text-[24px] sm:!text-[28px]">{heading}</Title>
                  <Paragraphs block={main} />
                </div>
              </Container>
            </section>
          );
        }

        if (main.type === "prose" && RELATED.test(heading)) {
          return (
            <Section key={heading} tone={current}>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
                <Title className="!text-[24px] sm:!text-[28px]">{heading}</Title>
                <Paragraphs block={main} />
              </div>
            </Section>
          );
        }

        if (main.type === "list" || main.type === "table") {
          return (
            <Section key={heading} tone={current}>
              <Title className="mb-8 max-w-3xl">{heading}</Title>
              <BlockInner block={main} />
              {subs.length > 0 && (
                <div className="mt-6">
                  <CardRow blocks={subs} />
                </div>
              )}
            </Section>
          );
        }

        return (
          <Section key={heading} tone={current}>
            <div className="grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
              <Title>{heading}</Title>
              <BlockInner block={main} />
            </div>
            {subs.length > 0 && (
              <div className="mt-8">
                <CardRow blocks={subs} />
              </div>
            )}
          </Section>
        );
      })}
    </>
  );
}
