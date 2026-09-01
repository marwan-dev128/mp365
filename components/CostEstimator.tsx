"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

// Reuses the exact same illustrative tiers already published (with the same
// disclaimer) on /pricing/tenant-migration-cost/ and
// /pricing/business-central-implementation-cost/ — this tool doesn't
// introduce new figures, it just makes the existing disclosed ranges
// interactive. See prisma/seed-data/marketing-pages.ts for the source data.

type Project = "tenant-migration" | "business-central";

const TENANT_TIERS = [
  { max: 100, range: "$15K–$40K", label: "Under 100 users" },
  { max: 500, range: "$40K–$120K", label: "100–500 users" },
  { max: 2000, range: "$120K–$350K", label: "500–2,000 users" },
  { max: Infinity, range: "Custom scope", label: "2,000+ users" },
];

const BC_TIERS = [
  { key: "standard", range: "$20K–$60K", label: "Standard financials, single entity" },
  { key: "multi", range: "$60K–$150K", label: "Multi-entity consolidation (2–5 entities)" },
  { key: "mfg", range: "$150K–$400K+", label: "Manufacturing / complex inventory" },
];

export function CostEstimator() {
  const [project, setProject] = useState<Project>("tenant-migration");
  const [users, setUsers] = useState(250);
  const [bcTier, setBcTier] = useState<string>("standard");

  const tenantResult = useMemo(() => TENANT_TIERS.find((t) => users <= t.max)!, [users]);
  const bcResult = useMemo(() => BC_TIERS.find((t) => t.key === bcTier)!, [bcTier]);

  return (
    <div className="rounded-xl border border-line bg-surface-card p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-azure mb-2">
        Quick tool
      </p>
      <h3 className="text-xl font-bold text-ink mb-1">Cost range estimator</h3>
      <p className="text-sm text-ink-2 mb-6 max-w-[56ch]">
        Illustrative, industry-typical ranges — not a quote. See the disclaimer below.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setProject("tenant-migration")}
          data-active={project === "tenant-migration"}
          aria-pressed={project === "tenant-migration"}
          className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink-2 hover:border-azure transition-colors data-[active=true]:border-azure data-[active=true]:bg-azure-subtle data-[active=true]:text-azure"
        >
          M365 tenant migration
        </button>
        <button
          type="button"
          onClick={() => setProject("business-central")}
          data-active={project === "business-central"}
          aria-pressed={project === "business-central"}
          className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink-2 hover:border-azure transition-colors data-[active=true]:border-azure data-[active=true]:bg-azure-subtle data-[active=true]:text-azure"
        >
          Business Central
        </button>
      </div>

      {project === "tenant-migration" ? (
        <div className="flex flex-col gap-4">
          <label htmlFor="users" className="text-sm font-bold text-ink">
            Number of mailboxes/users: <span className="tabular-nums text-azure">{users}</span>
          </label>
          <input
            id="users"
            type="range"
            min={10}
            max={3000}
            step={10}
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full accent-[var(--mp-azure-primary)]"
          />
          <div role="status" aria-live="polite" aria-atomic="true" className="rounded-lg border-l-[3px] border-azure bg-surface-light px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-wide text-muted mb-1">
              {tenantResult.label}
            </p>
            <p className="font-display text-2xl font-extrabold text-azure tabular-nums">
              {tenantResult.range}
            </p>
          </div>
          <Link href="/pricing/tenant-migration-cost/" className="text-sm font-bold text-azure hover:underline">
            See the full cost breakdown →
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold text-ink">What&rsquo;s the scope?</p>
          <div className="flex flex-col gap-2">
            {BC_TIERS.map((tier) => (
              <button
                key={tier.key}
                type="button"
                onClick={() => setBcTier(tier.key)}
                data-active={bcTier === tier.key}
                aria-pressed={bcTier === tier.key}
                className="rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink-2 text-left hover:border-azure transition-colors data-[active=true]:border-azure data-[active=true]:bg-azure-subtle data-[active=true]:text-azure"
              >
                {tier.label}
              </button>
            ))}
          </div>
          <div role="status" aria-live="polite" aria-atomic="true" className="rounded-lg border-l-[3px] border-azure bg-surface-light px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-wide text-muted mb-1">
              {bcResult.label}
            </p>
            <p className="font-display text-2xl font-extrabold text-azure tabular-nums">
              {bcResult.range}
            </p>
          </div>
          <Link
            href="/pricing/business-central-implementation-cost/"
            className="text-sm font-bold text-azure hover:underline"
          >
            See the full cost breakdown →
          </Link>
        </div>
      )}

      <p className="text-xs text-muted mt-6 max-w-[62ch]">
        These are illustrative, industry-typical ranges for planning purposes only — not a quote. MP365
        provides a fixed-price quote after a discovery call, not a rate card.
      </p>
    </div>
  );
}
