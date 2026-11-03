"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  ESTIMATOR_QUESTIONS,
  ESTIMATOR_SUMMARY_KEY,
  estimate,
  estimatorSummary,
  type EstimatorAnswers,
} from "@/content/estimator";
import { track } from "@/lib/analytics";

/**
 * Guides rather than quotes: recommends an engagement model and a complexity
 * tier, and lists the cost drivers that apply. The result shows without an
 * email address. All key facts also exist as plain tables on the page, so this
 * is an enhancement, not the only copy of them. Native radios keep it working
 * with a keyboard and a screen reader.
 */
export function ProjectEstimator() {
  const [answers, setAnswers] = useState<EstimatorAnswers>({});
  const started = useRef(false);
  const completed = useRef(false);

  const total = ESTIMATOR_QUESTIONS.length;
  const answered = ESTIMATOR_QUESTIONS.filter((q) => answers[q.id]).length;
  const done = answered === total;
  const result = useMemo(() => estimate(answers), [answers]);

  function choose(id: string, value: string) {
    if (!started.current) {
      started.current = true;
      track("estimator_started");
    }
    const next = { ...answers, [id]: value };
    setAnswers(next);
    if (!completed.current && ESTIMATOR_QUESTIONS.every((q) => next[q.id])) {
      completed.current = true;
      const r = estimate(next);
      track("estimator_completed", { tier: r.tier.id, model: r.model.label });
    }
  }

  function openContact() {
    try {
      window.sessionStorage.setItem(ESTIMATOR_SUMMARY_KEY, estimatorSummary(answers));
    } catch {
      // Private mode can block storage. The visitor can still type the details.
    }
    track("estimator_contact_opened");
  }

  return (
    <section aria-label="Project estimator" className="rounded-[var(--mp-radius-card)] border border-line bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-6">
        {ESTIMATOR_QUESTIONS.map((q, i) => (
          <fieldset key={q.id}>
            <legend className="mb-2.5 text-[14.5px] font-bold text-navy">
              {i + 1}. {q.label}
            </legend>
            <div className="flex flex-wrap gap-2">
              {q.options.map((o) => {
                const selected = answers[q.id] === o.value;
                return (
                  <label
                    key={o.value}
                    className={`cursor-pointer rounded-full border px-3.5 py-2 text-[13.5px] font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-mp-petrol ${
                      selected
                        ? "border-mp-petrol bg-mp-petrol text-white"
                        : "border-line bg-surface-light text-ink-2 hover:border-mp-petrol/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`estimator-${q.id}`}
                      value={o.value}
                      checked={selected}
                      onChange={() => choose(q.id, o.value)}
                      className="sr-only"
                    />
                    {o.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div aria-live="polite" className="mt-8 border-t border-line pt-6">
        {!done ? (
          <p className="text-sm text-ink-2">
            {answered} of {total} answered. Your result appears here once all are answered.
          </p>
        ) : (
          <div className="flex flex-col gap-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-mp-muted">Guidance, not a quote</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-surface-light p-5">
                <p className="text-[12.5px] text-mp-muted">Complexity</p>
                <p className="mt-1 font-display text-[22px] font-extrabold text-mp-petrol">{result.tier.label}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{result.tier.text}</p>
              </div>
              <div className="rounded-2xl border border-line bg-surface-light p-5">
                <p className="text-[12.5px] text-mp-muted">Recommended engagement model</p>
                <p className="mt-1 font-display text-[22px] font-extrabold text-mp-petrol">{result.model.label}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{result.model.text}</p>
              </div>
            </div>
            {result.drivers.length > 0 && (
              <div>
                <p className="mb-2 text-[14px] font-bold text-navy">Cost drivers that apply to you</p>
                <ul className="flex flex-wrap gap-2">
                  {result.drivers.map((d) => (
                    <li key={d} className="rounded-full border border-line bg-white px-3 py-1.5 text-[13px] text-ink-2">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Link
              href="/contact/"
              onClick={openContact}
              className="inline-flex w-full items-center justify-center rounded-full bg-mp-lime px-7 py-3.5 text-sm font-bold text-mp-ink transition-colors hover:bg-mp-lime-hover sm:w-auto sm:self-start"
            >
              Send this to MP-365
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
