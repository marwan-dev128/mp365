"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";

const INPUT_CLASS =
  "w-full rounded-[14px] border border-mp-border bg-white px-4 py-3.5 text-[14.5px] text-mp-ink transition-all placeholder:text-mp-muted/60 focus:border-mp-petrol focus:ring-2 focus:ring-mp-petrol/10 outline-hidden";

const TOPICS = [
  "M&A Tenant Migration",
  "Dynamics 365 / Business Central",
  "Power Platform & Governance",
  "General Consultation",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-mp-lime px-8 py-3.5 text-sm font-bold text-mp-ink hover:bg-mp-lime-hover shadow-2xs transition-colors disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer w-full sm:w-auto self-start"
    >
      <span>{pending ? "Sending inquiry…" : "Send consultation request"}</span>
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

export function ContactForm({ email }: { email: string }) {
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [state, formAction] = useActionState<ContactState, FormData>(submitContact, {
    status: "idle",
  });

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-4 rounded-[28px] sm:rounded-[32px] border border-mp-mint/40 bg-mp-parchment p-8 sm:p-10 shadow-xs"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mp-petrol text-mp-mint text-xl font-black">
          ✓
        </div>
        <h3 className="font-display text-[22px] sm:text-[26px] font-bold text-mp-petrol">
          Inquiry received
        </h3>
        <p className="text-[14.5px] sm:text-[15px] leading-[1.65] text-mp-secondary">
          A practicing senior engineer from our Vernon, CT team will review your situation and respond within one business day.
        </p>
        <div className="mt-2 pt-4 border-t border-mp-border text-sm text-mp-secondary">
          Urgent M&amp;A deadline? Email{" "}
          <a href={`mailto:${email}`} className="font-bold text-mp-petrol underline hover:opacity-80">
            {email}
          </a>{" "}
          or call{" "}
          <a href="tel:+18602089537" className="font-bold text-mp-petrol underline hover:opacity-80">
            (+1) 860-208-9537
          </a>{" "}
          for immediate escalation.
        </div>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form
      aria-label="Contact MP365"
      action={formAction}
      className="flex flex-col gap-5 rounded-[28px] sm:rounded-[32px] border border-mp-border bg-white p-7 sm:p-9 shadow-xs"
    >
      <div>
        <h3 className="font-display text-[20px] sm:text-[23px] font-bold text-mp-ink">
          Request Scoping Consultation
        </h3>
        <p className="text-xs sm:text-sm text-mp-secondary mt-1">
          Direct review by a senior engineer. Zero sales pressure.
        </p>
      </div>

      {state.status === "error" && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs font-semibold text-red-700">
          {state.message}
        </div>
      )}

      {/* Project Topic Pills */}
      <div>
        <label className="text-[12px] font-bold uppercase tracking-[0.08em] text-mp-muted block mb-2">
          Project Area (Optional)
        </label>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topic) => {
            const isSelected = selectedTopic === topic;
            return (
              <button
                type="button"
                key={topic}
                onClick={() => setSelectedTopic(isSelected ? "" : topic)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-mp-petrol text-mp-mint font-semibold shadow-2xs"
                    : "bg-mp-parchment text-mp-secondary hover:text-mp-petrol hover:bg-mp-border/60 border border-mp-border/70"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[12px] font-bold uppercase tracking-[0.08em] text-mp-muted">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Alex Smith"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={INPUT_CLASS}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        {/* Work Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[12px] font-bold uppercase tracking-[0.08em] text-mp-muted">
            Work email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="alex@company.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={INPUT_CLASS}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-[12px] font-bold uppercase tracking-[0.08em] text-mp-muted">
          Company / Organization
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Organization name"
          autoComplete="organization"
          className={INPUT_CLASS}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[12px] font-bold uppercase tracking-[0.08em] text-mp-muted">
          What are you working on? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder={
            selectedTopic
              ? `Tell us about your ${selectedTopic.toLowerCase()} requirements, timeline, and seat counts...`
              : "Tell us about your timeline, tenant architecture, migration scope, or challenges..."
          }
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${INPUT_CLASS} resize-y min-h-[110px]`}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {/* Hidden honeypot for bot filtering */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <SubmitButton />
        <p className="text-xs text-mp-muted text-center sm:text-right">
          Protected by NDA · 1 business day SLA
        </p>
      </div>
    </form>
  );
}
