"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { CONSULT_ANCHOR } from "@/lib/industry-conversion";
import { TOPIC_EVENT, announceTopic } from "./topic-event";
import { trackLead } from "@/lib/analytics";
import { BookingLink } from "@/components/BookingLink";

const INPUT_CLASS =
  "w-full rounded-[12px] border border-mp-border bg-[#faf8f5] px-4 py-3 text-[16px] sm:text-[14px] text-mp-ink transition-colors placeholder:text-mp-muted/50 focus:bg-white focus:border-mp-petrol focus:outline-none";
const OTHER_TOPIC = "Something else";
const LABEL_CLASS =
  "text-[11px] font-bold uppercase tracking-[0.12em] text-mp-secondary";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-mp-saffron px-7 py-3 text-[14px] font-bold text-mp-ink transition-colors hover:bg-mp-saffron-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      <span>{pending ? "Sending…" : "Get a senior engineer’s view"}</span>
      <span className="text-base font-bold leading-none">›</span>
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs font-semibold text-[#b3261e] mt-1">
      {message}
    </p>
  );
}

/**
 * Industry lead form: Simple, clean, high-contrast, perfectly balanced.
 * White typography on solid petrol, warm paper inputs on white,
 * zero drop shadows, zero blurs, zero bloated cards.
 */
export function IndustryLeadForm({
  industrySlug,
  industryName,
  topics,
  sourcePath,
  email,
  phone,
}: {
  industrySlug: string;
  industryName: string;
  topics: string[];
  sourcePath: string;
  email: string;
  phone: string;
}) {
  const [topic, setTopic] = useState("");
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContact,
    {
      status: "idle",
    },
  );

  useEffect(() => {
    const onTopic = (e: Event) => {
      const t = (e as CustomEvent<string>).detail;
      if (topics.includes(t) || t === OTHER_TOPIC) setTopic(t);
    };
    window.addEventListener(TOPIC_EVENT, onTopic);
    const fromUrl = new URLSearchParams(window.location.search).get("topic");
    if (fromUrl) announceTopic(fromUrl);
    return () => window.removeEventListener(TOPIC_EVENT, onTopic);
  }, [topics]);

  useEffect(() => {
    if (state.status === "success") trackLead({ form: "industry", industry: industrySlug, topic });
    // Report once per successful submission, not on every topic change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status]);

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <section
      id={CONSULT_ANCHOR}
      aria-labelledby="consult-heading"
      className="scroll-mt-28 overflow-hidden rounded-[20px] sm:rounded-[28px] border border-mp-border bg-white my-6"
    >
      <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Left Column: Briefing (Solid Deep Petrol with Guaranteed High-Contrast White Text) */}
        <div className="flex flex-col justify-between bg-mp-petrol p-6 sm:p-10 text-white">
          <div>
            <span className="self-start inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-mp-mint">
              {industryName}
            </span>

            <h2
              id="consult-heading"
              style={{ color: "#ffffff" }}
              className="mt-4 sm:mt-5 font-display text-[23px] sm:text-[28px] lg:text-[31px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white"
            >
              Tell us where you are. We will tell you what we would do first.
            </h2>

            <ul className="mt-5 sm:mt-6 flex flex-col gap-3 sm:gap-3.5 text-[13.5px] sm:text-[14px] leading-relaxed text-white/90">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mp-mint" />
                <span>Read by a practising senior engineer, not a sales rep.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mp-mint" />
                <span>A written reply within one business day.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mp-mint" />
                <span>If we are the wrong fit, we say so and point you elsewhere.</span>
              </li>
            </ul>
          </div>

          <div className="mt-7 sm:mt-8 border-t border-white/15 pt-4 sm:pt-5 text-[13px] text-white/80">
            <span className="text-white/60 block sm:inline mb-1 sm:mb-0 sm:mr-1.5">Prefer to talk?</span>
            <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <a
                href={telHref}
                className="font-bold text-white underline decoration-mp-mint/60 underline-offset-4 hover:text-mp-mint transition-colors"
              >
                {phone}
              </a>
              <span className="text-white/40">•</span>
              <a
                href={`mailto:${email}`}
                className="font-bold text-white underline decoration-mp-mint/60 underline-offset-4 hover:text-mp-mint transition-colors"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean, Simple Form */}
        <div className="bg-white p-6 sm:p-10 flex flex-col justify-center">
          {state.status === "success" ? (
            <div
              role="status"
              className="flex flex-col justify-center gap-4 py-8"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-mp-petrol text-2xl font-black text-mp-mint">
                ✓
              </div>
              <h3 className="font-display text-[24px] font-extrabold text-mp-petrol">
                Enquiry received
              </h3>
              <p className="text-[14.5px] leading-[1.65] text-mp-secondary">
                A senior engineer will review your situation and send a direct written
                response within one business day. If you have an imminent hard date
                (TSA exit, audit deadline, acquisition close), mention it when you reply.
              </p>
            </div>
          ) : (
            <form
              action={formAction}
              aria-label={`Contact MP365 about ${industryName}`}
              className="flex flex-col gap-4"
            >
              {state.status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs font-semibold text-red-700"
                >
                  {state.message}
                </div>
              )}

              <input type="hidden" name="industry" value={industrySlug} />
              <input type="hidden" name="sourcePath" value={sourcePath} />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="ind-topic" className={LABEL_CLASS}>
                  What prompted this?
                </label>
                <div className="relative">
                  <select
                    id="ind-topic"
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={`${INPUT_CLASS} appearance-none cursor-pointer pr-10`}
                  >
                    <option value="">Choose the closest</option>
                    {topics
                      .filter((t) => t.toLowerCase() !== OTHER_TOPIC.toLowerCase())
                      .map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    <option value={OTHER_TOPIC}>{OTHER_TOPIC}</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mp-secondary">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ind-name" className={LABEL_CLASS}>
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ind-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Alex Smith"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "ind-name-error" : undefined}
                    className={INPUT_CLASS}
                  />
                  <FieldError id="ind-name-error" message={errors.name} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ind-email" className={LABEL_CLASS}>
                    Work email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ind-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="alex@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "ind-email-error" : undefined}
                    className={INPUT_CLASS}
                  />
                  <FieldError id="ind-email-error" message={errors.email} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="ind-company" className={LABEL_CLASS}>
                  Organisation
                </label>
                <input
                  id="ind-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Organisation name"
                  className={INPUT_CLASS}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="ind-message" className={LABEL_CLASS}>
                  Anything we should know?{" "}
                  <span className="font-normal lowercase tracking-normal text-mp-muted">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="ind-message"
                  name="message"
                  rows={3}
                  placeholder="Dates, headcount, current systems, what has already been tried…"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "ind-message-error" : undefined}
                  className={`${INPUT_CLASS} min-h-[82px] resize-y`}
                />
                <FieldError
                  id="ind-message-error"
                  message={
                    errors.message
                      ? "Pick a topic above or add a line here."
                      : undefined
                  }
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="ind-website">Leave this field empty</label>
                <input
                  id="ind-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <SubmitButton />
                <p className="text-[12px] text-mp-muted">
                  We never share your details.
                </p>
              </div>
              <div className="border-t border-mp-border/70 pt-4">
                <BookingLink source="industry_form" industry={industrySlug} variant="text" label="Rather pick a time? Book a 20-minute call" />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
