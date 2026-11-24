import Link from "next/link";
import type { ReactNode } from "react";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import { CardTrack } from "@/components/site/CardTrack";
import { HomeCard, lookForIndex } from "@/components/site/HomeCard";
import { SiteHero } from "@/components/site/SiteHero";
import { StickyConsultBar } from "@/components/site/StickyConsultBar";
import { Check, Shield } from "@/components/ui/Icons";
import type { TierPage } from "@/content/tiers/types";
import { pickIllustrations } from "@/lib/page-visuals";
import { tierPageSchema } from "./schema";
import { TierFinder } from "./TierFinder";
import { TierMockup } from "./TierMockup";
import { TierMatrix } from "./TierMatrix";

const WRAP = "mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12";

function Section({ id, children, className = "py-14 sm:py-20" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`w-full scroll-mt-24 bg-white ${className}`}>
      <div className={WRAP}>{children}</div>
    </section>
  );
}

/** A centered section heading and its one-line lead, both authored copy. */
function Heading({ block }: { block: { heading: string; intro?: string } }) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
      <h2 className="font-display text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-mp-petrol">
        <RichText text={block.heading} />
      </h2>
      {block.intro && (
        <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-[1.65] text-mp-secondary sm:text-[17px]">
          <RichText text={block.intro} />
        </p>
      )}
    </div>
  );
}

/** The three tiers as tall Home-style cards: a picture card, the mint highlight and a large-title card. */
function TierCards({ page }: { page: TierPage }) {
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-3">
      {page.tiers.map((t, i) => {
        const mint = i === page.highlight;
        return (
          <article
            key={t.id}
            className={`group flex flex-col overflow-hidden rounded-[28px] p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-8 ${
              mint ? "bg-mp-band" : "bg-mp-parchment"
            }`}
          >
            <TierMockup kind={t.mockup} mint={mint} />
            <div className="flex items-center justify-between gap-3">
              <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${mint ? "text-mp-ink/70" : "text-mp-muted"}`}>
                Tier {i + 1} of {page.tiers.length}
              </p>
              {t.badge && (
                <span className="rounded-full bg-mp-petrol px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-mp-mint">{t.badge}</span>
              )}
            </div>
            <h3
              className="mt-5 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-mp-ink sm:text-[48px]"
            >
              {t.name}
            </h3>
            <p className="mt-3 text-[15px] font-semibold leading-[1.5] text-mp-ink">{t.role}</p>
            <blockquote className={`mt-5 border-l-2 pl-4 text-[13.5px] italic leading-[1.6] ${mint ? "border-mp-ink/30 text-mp-ink/75" : "border-mp-petrol/30 text-mp-secondary"}`}>
              &ldquo;{t.quote}&rdquo;
              <span className="mt-1 block text-[11.5px] not-italic font-semibold">Microsoft</span>
            </blockquote>
            <p className={`mt-7 text-[11px] font-bold uppercase tracking-[0.14em] ${mint ? "text-mp-ink/70" : "text-mp-muted"}`}>Pick it when</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {t.pickWhen.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] leading-[1.5] text-mp-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mp-petrol text-mp-mint">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className={`mt-auto pt-7`}>
              <p className={`rounded-[18px] p-4 text-[13px] leading-[1.55] ${mint ? "bg-white/45 text-mp-ink/85" : "bg-white/70 text-mp-secondary"}`}>
                <span className="font-bold text-mp-ink">Think twice if: </span>
                {t.thinkTwice}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** What each step up adds, drawn as a rising staircase. */
function Ladder({ page }: { page: TierPage }) {
  const offsets = ["lg:mt-28", "lg:mt-14", "lg:mt-0"];
  return (
    <ol className="grid items-start gap-5 lg:grid-cols-3">
      {page.ladder.steps.map((s, i) => {
        const top = i === page.ladder.steps.length - 1;
        return (
          <li
            key={s.title}
            className={`relative flex flex-col rounded-[28px] p-6 sm:p-8 ${offsets[i] ?? ""} ${
              top ? "bg-mp-petrol text-white" : i === page.highlight ? "bg-mp-band" : "bg-mp-parchment"
            }`}
          >
            <span
              aria-hidden="true"
              className={`font-display text-[64px] font-bold leading-none tracking-[-0.05em] ${top ? "text-mp-mint" : "text-mp-petrol/20"}`}
            >
              0{i + 1}
            </span>
            <h3 className={`mt-4 font-display text-[24px] font-bold tracking-[-0.025em] ${top ? "text-white" : "text-mp-ink"}`}>{s.title}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {s.items.map((item) => (
                <li key={item} className={`flex gap-3 text-[14px] leading-[1.5] ${top ? "text-white/85" : "text-mp-ink/85"}`}>
                  <span aria-hidden="true" className={`mt-[3px] font-bold ${top ? "text-mp-mint" : "text-mp-petrol"}`}>
                    {i === 0 ? "•" : "+"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ol>
  );
}

const JUMPS = [
  { href: "#tier-finder", label: "Tier finder" },
  { href: "#compare", label: "Full comparison" },
  { href: "#mixing", label: "Mixing and upgrades" },
  { href: "#faq-heading", label: "Questions" },
];

const SLIDE = "w-[84%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc((100%-60px)/4)]";

/**
 * A tier comparison page. One layout serves both products, so a new comparison
 * is a content file, not new code. The finder sits high on the page because it
 * is the part that turns a reader into a conversation.
 */
export function TierComparePage({ page }: { page: TierPage }) {
  const outgrowImages = pickIllustrations(page.outgrow.cards.map((c) => c.title));
  const setupImages = pickIllustrations(page.setup.cards.map((c) => c.title), new Set(outgrowImages));

  return (
    <>
      <JsonLd data={tierPageSchema(page)} />
      <SiteHero h1={page.h1} eyebrow="Compare tiers" breadcrumbs={page.breadcrumbs} ctaText={page.cta.text}>
        <RichText text={page.intro} />
      </SiteHero>

      <div className="w-full bg-white pt-6 sm:pt-8">
        <div className={WRAP}>
          <div className="flex flex-col gap-2 rounded-[24px] bg-mp-parchment p-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3.5 rounded-[18px] bg-white px-4 py-3 sm:px-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mp-mint text-mp-petrol">
                <Shield className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-[13.5px] font-bold leading-tight text-mp-ink">
                  Verified against Microsoft&apos;s Dynamics 365 Licensing Guide
                </span>
                <span className="mt-1 text-[12px] leading-tight text-mp-muted">
                  Updated {page.reviewed} <span aria-hidden="true">·</span>{" "}
                  <a href="#sources" className="font-semibold text-mp-petrol hover:underline">
                    See sources
                  </a>
                </span>
              </span>
            </div>
            <nav aria-label="On this page" className="flex gap-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {JUMPS.map((j, i) => (
                <a
                  key={j.href}
                  href={j.href}
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-mp-ink transition-colors hover:bg-white"
                >
                  <span className="text-[11px] font-bold tabular-nums text-mp-petrol-2/60 group-hover:text-mp-petrol">0{i + 1}</span>
                  {j.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <section aria-labelledby="short-answer" className="w-full bg-white pt-10 sm:pt-14">
        <div className={WRAP}>
          <div className="rounded-[28px] bg-mp-petrol p-6 text-white sm:p-9">
            <h2 id="short-answer" className="font-display text-[22px] font-bold tracking-[-0.025em] text-white sm:text-[26px]">
              <RichText text={page.shortAnswer.heading} />
            </h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/15">
              {page.shortAnswer.items.map((item, i) => (
                <li key={page.tiers[i]?.id ?? i} className="text-[14.5px] leading-[1.65] text-white/80 md:px-7 md:first:pl-0 md:last:pr-0 [&_strong]:mb-1.5 [&_strong]:block [&_strong]:font-display [&_strong]:text-[20px] [&_strong]:text-mp-mint">
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section>
        <Heading block={page.overview} />
        <TierCards page={page} />
      </Section>

      <Section className="py-12 sm:py-16">
        <Heading block={page.ladder} />
        <Ladder page={page} />
      </Section>

      <Section id="tier-finder">
        <Heading block={page.finder} />
        <TierFinder product={page.product} questions={page.finder.questions} tiers={page.tiers} />
      </Section>

      <Section id="compare">
        <Heading block={page.matrix} />
        <div className="mx-auto max-w-5xl">
          <TierMatrix page={page} />
          <p id="sources" className="mt-6 scroll-mt-28 text-[12.5px] leading-[1.6] text-mp-muted">
            Prices are left out on purpose: Microsoft sets them, and they vary by region and agreement. See{" "}
            <a href={page.priceHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-mp-petrol underline">
              Microsoft&apos;s {page.product} plans
            </a>{" "}
            for current figures. Sources:{" "}
            {page.sources.map((s, i) => (
              <span key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-mp-petrol">
                  {s.label}
                </a>
                {i < page.sources.length - 1 ? "; " : "."}
              </span>
            ))}
          </p>
        </div>
      </Section>

      <Section>
        <Heading block={page.outgrow} />
        <CardTrack label={page.outgrow.heading}>
          {page.outgrow.cards.map((c, i) => (
            <HomeCard key={c.title} look={lookForIndex(i)} image={outgrowImages[i]} title={c.title} className={SLIDE}>
              {c.body}
            </HomeCard>
          ))}
        </CardTrack>
      </Section>

      <Section id="mixing">
        <Heading block={page.rules} />
        <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            {page.rules.items.map((r, i) => (
              <div key={r.title} className={`rounded-[24px] p-6 sm:p-7 ${i === 0 ? "bg-mp-band" : "bg-mp-parchment"}`}>
                <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-mp-ink sm:text-[22px]">{r.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-mp-ink/80">{r.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[28px] bg-mp-petrol p-6 text-white sm:p-9">
            <h3 className="font-display text-[24px] font-bold tracking-[-0.025em] text-white sm:text-[28px]">{page.rules.stepsHeading}</h3>
            <ol className="mt-7 flex flex-col">
              {page.rules.steps.map((s, i) => (
                <li key={s.name} className="relative flex gap-5 pb-7 last:pb-0">
                  {i < page.rules.steps.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[19px] top-11 bottom-1 w-px bg-white/20" />
                  )}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mp-mint font-display text-[14px] font-bold text-mp-ink">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <p className="font-display text-[17px] font-bold text-white">{s.name}</p>
                    <p className="mt-1.5 text-[14px] leading-[1.6] text-white/75">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <Heading block={page.ai} />
        <div className="grid gap-5 md:grid-cols-3">
          {page.ai.columns.map((c, i) => (
            <div
              key={page.tiers[i].id}
              className={`flex flex-col rounded-[28px] p-6 sm:p-8 ${i === page.tiers.length - 1 ? "bg-mp-petrol text-white [&_strong]:text-mp-mint" : i === page.highlight ? "bg-mp-band" : "bg-mp-parchment"}`}
            >
              <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${i === page.tiers.length - 1 ? "text-white/60" : "text-mp-muted"}`}>
                {page.tiers[i].name}
              </p>
              <p className={`mt-4 text-[15px] leading-[1.65] ${i === page.tiers.length - 1 ? "text-white/85" : "text-mp-ink/85"} [&_strong]:block [&_strong]:mb-2 [&_strong]:font-display [&_strong]:text-[22px] [&_strong]:tracking-[-0.02em]`}>
                <RichText text={c} />
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading block={page.setup} />
        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {page.setup.cards.map((c, i) => (
            <HomeCard
              key={c.title}
              look={i === 1 ? "mint" : "picture"}
              image={i === 1 ? undefined : setupImages[i]}
              title={c.title}
              footer={
                <Link href={c.href} className="inline-flex items-center gap-1.5 text-[14px] font-bold text-mp-petrol hover:underline">
                  {c.linkText} <span aria-hidden="true">›</span>
                </Link>
              }
            >
              {c.body}
            </HomeCard>
          ))}
        </div>
      </Section>

      <Section className="py-10 sm:py-14">
        <h2 className="mb-6 font-display text-[24px] font-bold tracking-[-0.025em] text-mp-ink sm:text-[28px]">{page.related.heading}</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.related.links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full flex-col rounded-[22px] border border-mp-border p-5 transition-colors hover:border-mp-petrol hover:bg-mp-parchment/50"
              >
                <span className="font-display text-[17px] font-bold leading-snug text-mp-ink group-hover:text-mp-petrol">{l.title}</span>
                <span className="mt-2 text-[13.5px] leading-[1.55] text-mp-secondary">{l.body}</span>
                <span className="mt-auto pt-4 text-[13px] font-bold text-mp-petrol">
                  Read the guide <span aria-hidden="true">›</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-10">
          <FaqSection faqs={page.faqs} />
          <p className="text-[15.5px] leading-[1.75] text-ink-2">
            <RichText text={page.closing} />
          </p>
        </div>
      </Section>

      <CtaBand heading={page.cta.heading} subheading={page.cta.body} ctaText={page.cta.text} ctaHref="/contact/" />
      <StickyConsultBar label={page.cta.text} />
    </>
  );
}
