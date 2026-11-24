"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ESTIMATOR_SUMMARY_KEY } from "@/content/estimator";
import type { FinderQuestion, TierInfo } from "@/content/tiers/types";
import { track } from "@/lib/analytics";

type Answers = Record<string, number>;

/** The lowest tier that covers every answer, and the reasons behind it, strongest first. */
function recommend(questions: FinderQuestion[], answers: Answers) {
  let tier = 0;
  for (const q of questions) {
    const a = answers[q.id];
    if (a !== undefined) tier = Math.max(tier, q.options[a].needs);
  }
  const reasons = questions
    .flatMap((q) => (answers[q.id] === undefined ? [] : [q.options[answers[q.id]]]))
    .filter((o) => o.why && (o.needs > 0 || tier === 0))
    .sort((a, b) => b.needs - a.needs)
    .map((o) => o.why as string);
  if (tier === 0) reasons.unshift("Everything you described so far is included in the entry tier.");
  return { tier, reasons: [...new Set(reasons)] };
}

const KEYS = ["A", "B", "C", "D"];

/**
 * A short quiz: one question at a time, big answer cards, and a meter beside it
 * where the three tiers light up as the answers come in. Each answer names the
 * lowest tier that includes what it asks for, so the result always carries its
 * reason. The answers can travel to the contact form, which reads them the same
 * way it reads the Pricing estimator. Native radios keep it keyboard friendly.
 */
export function TierFinder({
  product,
  questions,
  tiers,
}: {
  product: string;
  questions: FinderQuestion[];
  tiers: TierInfo[];
}) {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const started = useRef(false);
  const completed = useRef(false);
  const advance = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(advance.current), []);

  const total = questions.length;
  const answered = questions.filter((q) => answers[q.id] !== undefined).length;
  const finished = step >= total;
  const { tier, reasons } = recommend(questions, answers);
  const result = tiers[tier];
  const q = questions[Math.min(step, total - 1)];

  function choose(index: number) {
    if (!started.current) {
      started.current = true;
      track("tier_finder_started", { product });
    }
    const next = { ...answers, [q.id]: index };
    setAnswers(next);
    if (!completed.current && questions.every((x) => next[x.id] !== undefined)) {
      completed.current = true;
      track("tier_finder_completed", { product, tier: tiers[recommend(questions, next).tier].id });
    }
    // Move on by itself, to the next unanswered question or the result.
    window.clearTimeout(advance.current);
    advance.current = window.setTimeout(() => {
      const after = questions.findIndex((x, i) => i > step && next[x.id] === undefined);
      const before = questions.findIndex((x) => next[x.id] === undefined);
      setStep(after !== -1 ? after : before !== -1 ? before : total);
    }, 320);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  function send() {
    const lines = questions
      .filter((x) => answers[x.id] !== undefined)
      .map((x) => `- ${x.label} ${x.options[answers[x.id]].label}`);
    const summary = [`${product} tier finder: ${result.name} looks like the fit.`, ...lines].join("\n");
    try {
      window.sessionStorage.setItem(ESTIMATOR_SUMMARY_KEY, summary);
    } catch {
      // Private mode can block storage. The visitor can still type the details.
    }
    track("tier_finder_contact_opened", { product, tier: result.id });
  }

  return (
    <div className="overflow-hidden rounded-[32px] bg-mp-parchment p-2 sm:p-3">
      <div className="grid gap-2 sm:gap-3 lg:grid-cols-[1.5fr_1fr]">
        {/* The quiz */}
        <div className="flex flex-col rounded-[26px] bg-white p-6 sm:min-h-[460px] sm:p-10">
          <div className="flex items-center justify-between gap-4">
            <ol className="flex items-center gap-1.5" aria-label="Questions">
              {questions.map((x, i) => {
                const done = answers[x.id] !== undefined;
                const current = i === step;
                return (
                  <li key={x.id}>
                    <button
                      type="button"
                      onClick={() => setStep(i)}
                      aria-label={`Question ${i + 1}${done ? ", answered" : ""}`}
                      aria-current={current ? "step" : undefined}
                      className={`block h-2 cursor-pointer rounded-full transition-all duration-300 ${
                        current ? "w-8 bg-mp-petrol" : done ? "w-4 bg-mp-mint" : "w-4 bg-mp-ink/12 hover:bg-mp-ink/25"
                      }`}
                    />
                  </li>
                );
              })}
            </ol>
            <p className="text-[12px] font-bold tabular-nums tracking-[0.08em] text-mp-muted">
              {finished ? "DONE" : `${String(step + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`}
            </p>
          </div>

          <p className="sr-only" aria-live="polite">{answered > 0 ? `Fit so far: ${result.name}. ${reasons[0]}` : ""}</p>

          {/* Phones: a compact meter, since the full one sits below the quiz there. */}
          <div aria-hidden="true" className="mt-6 grid grid-cols-3 gap-1.5 lg:hidden">
            {tiers.map((t, i) => {
              const lit = answered > 0 && i === tier;
              return (
                <span
                  key={t.id}
                  className={`rounded-full px-2 py-2 text-center text-[12px] font-bold transition-colors duration-300 ${
                    lit ? "bg-mp-mint text-mp-ink" : "bg-mp-parchment text-mp-ink/45"
                  }`}
                >
                  {t.shortName ?? t.name}
                </span>
              );
            })}
          </div>

          {!finished ? (
            <fieldset key={q.id} className="mp-finder-in mt-8 flex flex-1 flex-col sm:mt-10">
              <legend className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.03em] text-mp-ink sm:text-[36px]">
                {q.label}
              </legend>
              <div className="mt-8 grid gap-3">
                {q.options.map((o, j) => {
                  const selected = answers[q.id] === j;
                  return (
                    <label
                      key={o.label}
                      className={`group flex cursor-pointer items-center gap-4 rounded-[20px] border-2 p-4 transition-all duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-mp-petrol sm:p-5 ${
                        selected
                          ? "border-mp-petrol bg-mp-band"
                          : "border-mp-border bg-white hover:-translate-y-0.5 hover:border-mp-petrol/50 hover:bg-mp-parchment/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`tier-${q.id}`}
                        checked={selected}
                        onChange={() => choose(j)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] font-display text-[15px] font-bold transition-colors ${
                          selected ? "bg-mp-petrol text-mp-mint" : "bg-mp-parchment text-mp-petrol group-hover:bg-mp-petrol group-hover:text-mp-mint"
                        }`}
                      >
                        {KEYS[j]}
                      </span>
                      <span className="text-[15.5px] font-semibold leading-snug text-mp-ink sm:text-[17px]">{o.label}</span>
                    </label>
                  );
                })}
              </div>
              <div className="mt-auto flex items-center justify-between pt-8">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="cursor-pointer text-[13.5px] font-bold text-mp-petrol hover:underline disabled:cursor-default disabled:opacity-0"
                >
                  <span aria-hidden="true">‹</span> Back
                </button>
                {answered === total && (
                  <button type="button" onClick={() => setStep(total)} className="cursor-pointer text-[13.5px] font-bold text-mp-petrol hover:underline">
                    See my result <span aria-hidden="true">›</span>
                  </button>
                )}
              </div>
            </fieldset>
          ) : (
            <div className="mp-finder-in mt-10 flex flex-1 flex-col">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-mp-petrol-2">Your fit for {product}</p>
              <p className="mt-3 font-display text-[56px] font-bold leading-[0.95] tracking-[-0.045em] text-mp-ink sm:text-[80px]">{result.name}</p>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-mp-secondary sm:text-[17px]">{result.role}</p>
              <ul className="mt-7 flex flex-col gap-3">
                {reasons.map((r) => (
                  <li key={r} className="flex gap-3 text-[14.5px] leading-[1.55] text-mp-ink">
                    <span aria-hidden="true" className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mp-mint text-[11px] font-bold text-mp-ink">
                      ✓
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-4 pt-9 sm:flex-row sm:items-center">
                <Link
                  href="/contact/"
                  onClick={send}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mp-saffron px-7 py-4 text-[15px] font-bold text-mp-ink transition-colors hover:bg-mp-saffron-hover"
                >
                  Send my answers to MP-365 <span aria-hidden="true">›</span>
                </Link>
                <button type="button" onClick={restart} className="cursor-pointer text-[13.5px] font-bold text-mp-petrol hover:underline">
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>

        {/* The meter */}
        <aside className="hidden flex-col rounded-[26px] bg-mp-petrol p-6 text-white sm:p-8 lg:flex">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-mp-mint">
            {answered === 0 ? "Your tier lights up here" : finished ? "Your fit" : "Fit so far"}
          </p>
          <ol className="mt-6 flex flex-col-reverse gap-2.5">
            {tiers.map((t, i) => {
              const lit = answered > 0 && i === tier;
              const covered = answered > 0 && i < tier;
              return (
                <li
                  key={t.id}
                  className={`relative flex items-center justify-between gap-3 rounded-[18px] px-5 py-4 transition-all duration-500 ${
                    lit ? "scale-[1.02] bg-mp-mint text-mp-ink shadow-[0_12px_32px_-12px_rgba(95,227,200,0.6)]" : "bg-white/[0.06] text-white"
                  }`}
                >
                  <span className="flex flex-col">
                    <span className={`font-display text-[20px] font-bold tracking-[-0.02em] ${lit ? "" : covered ? "text-white/45" : "text-white/80"}`}>
                      {t.name}
                    </span>
                    <span className={`text-[12px] ${lit ? "text-mp-ink/70" : "text-white/40"}`}>
                      {lit ? "Covers every answer" : covered ? "Not enough for your answers" : `Tier ${i + 1}`}
                    </span>
                  </span>
                  {lit && (
                    <span className="rounded-full bg-mp-petrol px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-mp-mint">Fit</span>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-6 border-t border-white/15 pt-5">
            {answered === 0 ? (
              <p className="text-[14px] leading-[1.6] text-white/70">
                Each answer points to the lowest tier that includes it. The meter shows the tier that covers all of them.
              </p>
            ) : (
              <>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">Why</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/85">{reasons[0]}</p>
              </>
            )}
          </div>

          <p className="mt-auto pt-6 text-[12px] leading-[1.55] text-white/50">
            Guidance from Microsoft&apos;s licensing rules, not a quote. If a lower tier covers you, MP-365 will say so.
          </p>
        </aside>
      </div>
    </div>
  );
}
