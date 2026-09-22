"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { CONSULT_ANCHOR } from "@/lib/industry-conversion";
import { TOPIC_EVENT, announceTopic } from "./topic-event";

const INPUT_CLASS =
  "w-full rounded-[14px] border border-mp-border bg-white px-4 py-3.5 text-[14.5px] text-mp-ink transition-all placeholder:text-mp-muted/60 focus:border-mp-petrol focus:ring-2 focus:ring-mp-petrol/10 outline-hidden";
const OTHER_TOPIC = "Something else";
const LABEL_CLASS =
  "text-[12px] font-bold uppercase tracking-[0.08em] text-mp-muted";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-mp-lime px-8 py-3.5 text-sm font-bold text-mp-ink transition-colors hover:bg-mp-lime-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      <span>{pending ? "Sending…" : "Get a senior engineer’s view"}</span>
      <span className="text-base font-bold leading-none">›</span>
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs font-semibold text-[#b3261e]">
      {message}
    </p>
  );
}

/**
 * The industry page's primary conversion point. Four visible fields (topic,
 * name, work email, organisation) with the free-text box optional: B2B form
 * completion drops sharply past five fields, and the topic select already
 * qualifies the enquiry. Posts to the same store-then-forward server action
 * as /contact/, tagged with the industry, topic and source page.
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
      if (topics.includes(t)) setTopic(t);
    };
    window.addEventListener(TOPIC_EVENT, onTopic);
    // Inbound links can preselect with ?topic=… (e.g. from a blog CTA). Routed
    // through the same event so there is one code path that sets the topic.
    const fromUrl = new URLSearchParams(window.location.search).get("topic");
    if (fromUrl) announceTopic(fromUrl);
    return () => window.removeEventListener(TOPIC_EVENT, onTopic);
  }, [topics]);

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <section
      id={CONSULT_ANCHOR}
      aria-labelledby="consult-heading"
      className="scroll-mt-28 overflow-hidden rounded-[var(--mp-radius-card)] border border-line"
    >
      <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col gap-4 bg-navy p-7 text-white sm:p-9">
          <span className="self-start rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan">
            {industryName}
          </span>
          <h2
            id="consult-heading"
            className="font-display text-[24px] font-extrabold leading-tight sm:text-[28px]"
          >
            Tell us where you are. We will tell you what we would do first.
          </h2>
          <ul className="flex flex-col gap-2.5 text-[14px] leading-relaxed text-white/80">
            <li>Read by a practising senior engineer, not a sales rep.</li>
            <li>A written reply within one business day.</li>
            <li>If we are the wrong fit, we say so and point you elsewhere.</li>
          </ul>
          <p className="mt-auto pt-4 text-[13px] text-white/70">
            Prefer to talk?{" "}
            <a
              href={telHref}
              className="font-bold text-white underline underline-offset-2"
            >
              {phone}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${email}`}
              className="font-bold text-white underline underline-offset-2"
            >
              {email}
            </a>
          </p>
        </div>

        {state.status === "success" ? (
          <div
            role="status"
            className="flex flex-col justify-center gap-3 bg-white p-7 sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mp-petrol text-xl font-black text-mp-mint">
              ✓
            </div>
            <h3 className="font-display text-[22px] font-bold text-mp-petrol">
              Received
            </h3>
            <p className="text-[14.5px] leading-[1.65] text-ink-2">
              A senior engineer will read it and reply within one business day.
              If there is a hard date, such as a deal close or an audit, mention
              it when you reply.
            </p>
          </div>
        ) : (
          <form
            action={formAction}
            aria-label={`Contact MP365 about ${industryName}`}
            className="relative flex flex-col gap-4 bg-white p-7 sm:p-9"
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
              <select
                id="ind-topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={`${INPUT_CLASS} cursor-pointer`}
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
                  aria-describedby={
                    errors.email ? "ind-email-error" : undefined
                  }
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
                <span className="font-medium normal-case tracking-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="ind-message"
                name="message"
                rows={3}
                placeholder="Dates, headcount, current systems, what has already been tried…"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "ind-message-error" : undefined
                }
                className={`${INPUT_CLASS} min-h-[90px] resize-y`}
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

            <div className="mt-1 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <SubmitButton />
              <p className="text-xs text-mp-muted">
                We never share your details.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
