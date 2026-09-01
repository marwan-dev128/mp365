"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";

const INPUT =
  "w-full rounded-[12px] border border-line bg-surface-light px-4 py-3 text-[14px] text-navy transition-colors placeholder:text-muted focus:border-azure focus:bg-white";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mp-press mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-azure px-6 py-3.5 text-sm font-bold text-white hover:bg-azure-hover disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send"}
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs font-semibold text-[var(--danger,#b3261e)]">
      {message}
    </p>
  );
}

export function ContactForm({ email }: { email: string }) {
  const [state, formAction] = useActionState<ContactState, FormData>(submitContact, {
    status: "idle",
  });

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-3 rounded-[var(--mp-radius-card)] border border-line bg-surface-card p-7 shadow-mp-card sm:p-8"
      >
        <p className="font-display text-lg font-bold text-ink">Thanks — we&rsquo;ve got it.</p>
        <p className="text-sm text-ink-2 leading-relaxed">
          Someone from the team will reply within one business day. If it&rsquo;s urgent, email{" "}
          <a href={`mailto:${email}`} className="font-semibold text-azure hover:underline">
            {email}
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form aria-label="Contact MP365" action={formAction} className="flex flex-col gap-4 rounded-[var(--mp-radius-card)] border border-line bg-surface-card p-7 shadow-mp-card sm:p-8">
      {state.status === "error" && (
        <p role="alert" className="text-sm font-semibold text-[var(--danger,#b3261e)]">
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-[13.5px] font-bold text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={INPUT}
        />
        <FieldError id="name-error" message={errors.name} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[13.5px] font-bold text-navy">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={INPUT}
        />
        <FieldError id="email-error" message={errors.email} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-[13.5px] font-bold text-navy">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={INPUT}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[13.5px] font-bold text-navy">
          What are you working on?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={INPUT}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {/* Honeypot — hidden from people, filled by bots. Not `display:none`,
          which some bots skip; off-screen + aria-hidden keeps it out of the
          accessibility tree and the tab order. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />
    </form>
  );
}
