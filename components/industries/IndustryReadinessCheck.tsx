"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";
import type { IndustryReadinessQuestion } from "@/lib/industry-conversion";
import { track, trackLead } from "@/lib/analytics";
import { BookingLink } from "@/components/BookingLink";

type Answer = "yes" | "no" | null;

const INPUT_CLASS =
  "w-full rounded-[14px] border border-mp-border bg-white px-4 py-3 text-[16px] sm:text-[14.5px] text-mp-ink placeholder:text-mp-muted/60 focus:border-mp-petrol focus:ring-2 focus:ring-mp-petrol/10 outline-hidden";

function verdictFor(yes: number, total: number) {
  if (yes === 0)
    return {
      label: "Low exposure",
      tone: "text-[#1d6b4f] bg-[#e6f5ee] border-[#b9e2cf]",
      text: "Nothing here is an obvious gap. Worth confirming the evidence exists, because an assessor or examiner asks for proof, not intent.",
    };
  if (yes <= Math.floor(total / 2))
    return {
      label: "Some exposure",
      tone: "text-[#8a5a00] bg-[#fdf3dc] border-[#f2d99a]",
      text: "A few specific gaps, each fixable on its own. Sequencing matters more than speed: fix the one that blocks the others first.",
    };
  return {
    label: "Significant exposure",
    tone: "text-[#9b2c1f] bg-[#fdecea] border-[#f3c3bc]",
    text: "Several gaps that interact. This is usually a scoped project rather than a list of tickets, and the order they are fixed in decides the cost.",
  };
}

function SendButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-full bg-mp-lime px-6 py-3 text-sm font-bold text-mp-ink transition-colors hover:bg-mp-lime-hover disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send me this with next steps"}
    </button>
  );
}

/**
 * Five yes/no questions, phrased so "yes" is the risky answer, scored on the
 * page with no gate. The gate comes after the value: the visitor sees their
 * verdict first, then chooses whether to have an engineer's read of it sent
 * to them. The answers travel with the enquiry, so the reply is specific.
 */
export function IndustryReadinessCheck({
  id,
  title,
  questions,
  industrySlug,
  sourcePath,
}: {
  id: string;
  title: string;
  questions: IndustryReadinessQuestion[];
  industrySlug: string;
  sourcePath: string;
}) {
  const [answers, setAnswers] = useState<Answer[]>(() => questions.map(() => null));
  const [state, formAction] = useActionState<ContactState, FormData>(submitContact, {
    status: "idle",
  });

  const answered = answers.filter((a) => a !== null).length;
  const complete = answered === questions.length;
  const risks = questions.filter((_, i) => answers[i] === "yes");
  const verdict = verdictFor(risks.length, questions.length);

  const summary = useMemo(
    () =>
      [
        `${title}: ${risks.length}/${questions.length} risk answers (${verdict.label}).`,
        ...questions.map((q, i) => `- ${q.q} ${answers[i] === "yes" ? "YES" : "no"}`),
      ].join("\n"),
    [answers, questions, risks.length, title, verdict.label]
  );

  // Completion is the micro-conversion worth watching: a visitor who scores
  // themselves and does not send the result is the form's biggest leak.
  useEffect(() => {
    if (complete) track("readiness_complete", { industry: industrySlug, score: risks.length });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete]);
  useEffect(() => {
    if (state.status === "success")
      trackLead({ form: "readiness", industry: industrySlug, score: risks.length });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status]);

  const set = (i: number, a: Answer) =>
    setAnswers((prev) => prev.map((p, j) => (j === i ? a : p)));

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 rounded-[var(--mp-radius-card)] border border-line bg-white p-6 sm:p-8"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-azure">
        Two-minute check
      </p>
      <h2 id={`${id}-heading`} className="mb-1 font-display text-[24px] font-extrabold text-navy">
        {title}
      </h2>
      <p className="mb-6 text-sm text-ink-2">
        Five questions. Your result shows on this page straight away, and nothing is sent unless
        you ask for it.
      </p>

      <ol className="flex flex-col gap-3">
        {questions.map((q, i) => (
          <li
            key={q.q}
            className="flex flex-col gap-3 rounded-2xl border border-line bg-surface-light p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-[14.5px] leading-snug text-navy">
              <span className="mr-2 font-bold text-azure">{i + 1}.</span>
              {q.q}
            </span>
            <span role="group" aria-label={`Answer to question ${i + 1}`} className="flex shrink-0 gap-2">
              {(["yes", "no"] as const).map((a) => (
                <button
                  key={a}
                  type="button"
                  aria-pressed={answers[i] === a}
                  onClick={() => set(i, a)}
                  className={`min-w-16 cursor-pointer rounded-full border px-4 py-1.5 text-[13px] font-bold capitalize transition-colors ${
                    answers[i] === a
                      ? "border-mp-petrol bg-mp-petrol text-white"
                      : "border-line bg-white text-navy hover:border-mp-petrol"
                  }`}
                >
                  {a}
                </button>
              ))}
            </span>
          </li>
        ))}
      </ol>

      <div aria-live="polite" className="mt-6">
        {!complete ? (
          <p className="text-sm text-ink-2">
            {answered} of {questions.length} answered.
          </p>
        ) : (
          <div className="flex flex-col gap-5">
            <div className={`rounded-2xl border p-5 ${verdict.tone}`}>
              <p className="font-display text-[18px] font-extrabold">
                {verdict.label}: {risks.length} of {questions.length}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed">{verdict.text}</p>
              {risks.length > 0 && (
                <ul className="mt-3 flex flex-col gap-1.5 text-[14px] leading-relaxed">
                  {risks.map((r) => (
                    <li key={r.q}>— {r.riskIfYes}</li>
                  ))}
                </ul>
              )}
            </div>

            {state.status === "success" ? (
              <div className="flex flex-col gap-3">
                <p role="status" className="text-sm font-semibold text-mp-petrol">
                  Sent. A senior engineer will reply with what they would fix first, within one
                  business day.
                </p>
                <BookingLink source="readiness_sent" industry={industrySlug} variant="text" label="Want to go through it live? Book 20 minutes" />
              </div>
            ) : (
              <form action={formAction} className="relative flex flex-col gap-3">
                <p className="text-sm font-semibold text-navy">
                  Want an engineer’s read of your answers and the order we would fix them in?
                </p>
                {state.status === "error" && (
                  <p role="alert" className="text-xs font-semibold text-[#b3261e]">
                    {state.message}
                  </p>
                )}
                <input type="hidden" name="industry" value={industrySlug} />
                <input type="hidden" name="sourcePath" value={sourcePath} />
                <input type="hidden" name="topic" value={`${title} result`} />
                <input type="hidden" name="message" value={summary} />
                <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                  <label className="sr-only" htmlFor={`${id}-name`}>
                    Your name
                  </label>
                  <input
                    id={`${id}-name`}
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={INPUT_CLASS}
                  />
                  <label className="sr-only" htmlFor={`${id}-email`}>
                    Work email
                  </label>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Work email"
                    className={INPUT_CLASS}
                  />
                  <SendButton />
                </div>
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
