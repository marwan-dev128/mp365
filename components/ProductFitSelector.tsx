"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Answers = {
  entities: "one" | "few" | "many" | null;
  need: "erp" | "crm" | null;
  manufacturing: "yes" | "no" | null;
};

type Recommendation = {
  name: string;
  reasoning: string;
  href: string;
  linkLabel: string;
};

function recommend(a: Answers): Recommendation | null {
  if (!a.need) return null;

  if (a.need === "crm") {
    return {
      name: "Dynamics 365 Sales & Customer Service",
      reasoning:
        "You're solving a CRM problem — pipeline, case management, or customer engagement — not a financials problem. Dynamics 365's CRM apps integrate natively with Outlook and Teams if you're already on Microsoft 365.",
      href: "/services/dynamics-365/",
      linkLabel: "See Dynamics 365 CRM implementation",
    };
  }

  // ERP path
  if (a.entities === "many") {
    return {
      name: "Dynamics 365 Finance & Operations",
      reasoning:
        "Multiple entities across countries or currencies is exactly what Finance & Operations is built for — advanced consolidation, localization, and complex supply chain support that Business Central isn't designed to carry.",
      href: "/compare/business-central-vs-finance-operations/",
      linkLabel: "Compare Business Central vs. Finance & Operations",
    };
  }

  if (a.manufacturing === "yes") {
    return {
      name: "Dynamics 365 Business Central",
      reasoning:
        "Light-to-moderate manufacturing with one or a few entities fits Business Central's integrated inventory and production features well — with a faster implementation timeline than Finance & Operations.",
      href: "/solutions/financial-management/",
      linkLabel: "See what a Business Central implementation includes",
    };
  }

  return {
    name: "Dynamics 365 Business Central",
    reasoning:
      "A single entity (or a few related ones) needing integrated financials is Business Central's core use case — faster and lower-cost to implement than Finance & Operations, without giving up room to grow.",
    href: "/pricing/business-central-implementation-cost/",
    linkLabel: "See Business Central implementation cost",
  };
}

const OPTION_CLASS =
  "rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink-2 hover:border-azure hover:text-ink transition-colors data-[active=true]:border-azure data-[active=true]:bg-azure-subtle data-[active=true]:text-azure text-left";

export function ProductFitSelector() {
  const [answers, setAnswers] = useState<Answers>({ entities: null, need: null, manufacturing: null });

  const recommendation = useMemo(() => recommend(answers), [answers]);
  const needsManufacturingQuestion = answers.need === "erp" && answers.entities !== "many";
  const isComplete =
    answers.need === "crm" ||
    (answers.need === "erp" && answers.entities === "many") ||
    (answers.need === "erp" && answers.entities && needsManufacturingQuestion && answers.manufacturing);

  function reset() {
    setAnswers({ entities: null, need: null, manufacturing: null });
  }

  return (
    <div className="rounded-xl border border-line bg-surface-card p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-azure mb-2">
        Quick tool
      </p>
      <h3 className="text-xl font-bold text-ink mb-1">Which Dynamics 365 product fits?</h3>
      <p className="text-sm text-ink-2 mb-6 max-w-[52ch]">
        Three questions, no email required — a starting point, not a substitute for a scoping call.
      </p>

      <div className="flex flex-col gap-5">
        <fieldset>
          <legend className="text-sm font-bold text-ink mb-2">
            What are you primarily trying to solve?
          </legend>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              data-active={answers.need === "erp"}
              aria-pressed={answers.need === "erp"}
              className={OPTION_CLASS}
              onClick={() => setAnswers({ entities: null, manufacturing: null, need: "erp" })}
            >
              Financials / ERP
            </button>
            <button
              type="button"
              data-active={answers.need === "crm"}
              aria-pressed={answers.need === "crm"}
              className={OPTION_CLASS}
              onClick={() => setAnswers({ entities: null, manufacturing: null, need: "crm" })}
            >
              Sales / customer service CRM
            </button>
          </div>
        </fieldset>

        {answers.need === "erp" && (
          <fieldset>
            <legend className="text-sm font-bold text-ink mb-2">
              How many legal entities do you operate?
            </legend>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                data-active={answers.entities === "one"}
                aria-pressed={answers.entities === "one"}
                className={OPTION_CLASS}
                onClick={() => setAnswers((a) => ({ ...a, entities: "one" }))}
              >
                Just one
              </button>
              <button
                type="button"
                data-active={answers.entities === "few"}
                aria-pressed={answers.entities === "few"}
                className={OPTION_CLASS}
                onClick={() => setAnswers((a) => ({ ...a, entities: "few" }))}
              >
                A few (2–4)
              </button>
              <button
                type="button"
                data-active={answers.entities === "many"}
                aria-pressed={answers.entities === "many"}
                className={OPTION_CLASS}
                onClick={() => setAnswers((a) => ({ ...a, entities: "many", manufacturing: null }))}
              >
                Many, multi-country
              </button>
            </div>
          </fieldset>
        )}

        {needsManufacturingQuestion && answers.entities && (
          <fieldset>
            <legend className="text-sm font-bold text-ink mb-2">
              Do you need manufacturing or production features?
            </legend>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                data-active={answers.manufacturing === "yes"}
                aria-pressed={answers.manufacturing === "yes"}
                className={OPTION_CLASS}
                onClick={() => setAnswers((a) => ({ ...a, manufacturing: "yes" }))}
              >
                Yes
              </button>
              <button
                type="button"
                data-active={answers.manufacturing === "no"}
                aria-pressed={answers.manufacturing === "no"}
                className={OPTION_CLASS}
                onClick={() => setAnswers((a) => ({ ...a, manufacturing: "no" }))}
              >
                No
              </button>
            </div>
          </fieldset>
        )}

        {/* Always mounted so the live region exists before it fills —
            announcing into a region created in the same tick is unreliable. */}
        <div role="status" aria-live="polite" aria-atomic="true">
          {isComplete && recommendation && (
            <div className="mt-2 rounded-lg border-l-[3px] border-azure bg-surface-light px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-wide text-muted mb-1">
              Likely fit
            </p>
            <p className="text-lg font-extrabold text-ink mb-2">{recommendation.name}</p>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">{recommendation.reasoning}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={recommendation.href}
                className="inline-flex items-center rounded-md bg-azure px-4 py-2 text-sm font-bold text-white hover:bg-azure-hover transition-colors"
              >
                {recommendation.linkLabel}
              </Link>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink-2 hover:text-ink transition-colors"
                >
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
