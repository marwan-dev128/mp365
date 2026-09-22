// Client-side analytics helper. Every call is a no-op unless the matching
// script was loaded by components/Analytics.tsx (which only happens when its
// env ID is set), so development and preview builds send nothing.
//
// Event names follow GA4's recommended set where one exists: `generate_lead`
// is the event GA4 treats as a lead conversion, so every form that creates a
// ContactSubmission reports it with the same parameter shape.

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const clean = Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined && v !== ""));
  try {
    window.gtag?.("event", event, clean);
    // Clarity custom events and tags make sessions filterable by what the
    // visitor did, e.g. "show me recordings where readiness_complete fired".
    window.clarity?.("event", event);
    for (const [k, v] of Object.entries(clean)) window.clarity?.("set", k, String(v));
  } catch {
    // Analytics must never break the page it is measuring.
  }
}

/** One shape for every lead, whichever form produced it. */
export function trackLead(params: {
  form: "industry" | "readiness" | "contact";
  industry?: string;
  topic?: string;
  score?: number;
}) {
  track("generate_lead", params);
}
