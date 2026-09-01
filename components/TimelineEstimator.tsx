"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

// Reuses the same phase breakdown already published in
// prisma/seed-data/blog.ts ("Microsoft 365 Tenant-to-Tenant Migration
// Timeline") and the M&A tenant migration service page — this tool doesn't
// introduce new claims, it interactively totals the same published phase
// durations based on a few inputs.

const PHASES = [
  { key: "diligence", name: "Due diligence", weeksMin: 1, weeksMax: 3 },
  { key: "coexistence", name: "Day-1 coexistence design", weeksMin: 2, weeksMax: 3 },
  { key: "pilot", name: "Wave planning & pilot", weeksMin: 1, weeksMax: 2 },
  { key: "execution", name: "Migration execution", weeksMin: 4, weeksMax: 10 },
  { key: "cutover", name: "Cutover & stabilization", weeksMin: 2, weeksMax: 2 },
];

export function TimelineEstimator() {
  const [users, setUsers] = useState(250);
  const [hasCustomApps, setHasCustomApps] = useState(false);
  const [needsCoexistence, setNeedsCoexistence] = useState(true);

  const { minWeeks, maxWeeks } = useMemo(() => {
    // Execution scales roughly with scale; everything else is close to fixed
    // per the published phase ranges.
    const scaleFactor = users <= 100 ? 0 : users <= 500 ? 0.4 : users <= 2000 ? 0.7 : 1;
    const executionMin = 4 + Math.round(scaleFactor * 3);
    const executionMax = 4 + Math.round(scaleFactor * 6);
    const appPenalty = hasCustomApps ? 2 : 0;

    let min = PHASES.reduce((sum, p) => sum + (p.key === "execution" ? executionMin : p.weeksMin), 0);
    let max = PHASES.reduce((sum, p) => sum + (p.key === "execution" ? executionMax : p.weeksMax), 0);

    if (!needsCoexistence) {
      min -= 2;
      max -= 3;
    }
    min += appPenalty;
    max += appPenalty;

    return { minWeeks: Math.max(min, 6), maxWeeks: max };
  }, [users, hasCustomApps, needsCoexistence]);

  return (
    <div className="rounded-xl border border-line bg-surface-card p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-azure mb-2">
        Quick tool
      </p>
      <h3 className="text-xl font-bold text-ink mb-1">Migration timeline estimator</h3>
      <p className="text-sm text-ink-2 mb-6 max-w-[56ch]">
        Based on the phase breakdown in our tenant migration methodology — a starting point for planning
        against a deal date, not a commitment.
      </p>

      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="tl-users" className="text-sm font-bold text-ink block mb-2">
            Mailboxes/users: <span className="tabular-nums text-azure">{users}</span>
          </label>
          <input
            id="tl-users"
            type="range"
            min={10}
            max={3000}
            step={10}
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full accent-[var(--mp-azure-primary)]"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-ink-2">
          <input
            type="checkbox"
            checked={needsCoexistence}
            onChange={(e) => setNeedsCoexistence(e.target.checked)}
            className="accent-[var(--mp-azure-primary)]"
          />
          Need Day-1 coexistence (both companies working together immediately after close)
        </label>

        <label className="flex items-center gap-2 text-sm text-ink-2">
          <input
            type="checkbox"
            checked={hasCustomApps}
            onChange={(e) => setHasCustomApps(e.target.checked)}
            className="accent-[var(--mp-azure-primary)]"
          />
          Custom Power Platform or Dynamics 365 apps need to migrate too
        </label>

        <div role="status" aria-live="polite" aria-atomic="true" className="rounded-lg border-l-[3px] border-azure bg-surface-light px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-wide text-muted mb-1">
            Estimated timeline
          </p>
          <p className="font-display text-2xl font-extrabold text-azure tabular-nums">
            {minWeeks}–{maxWeeks} weeks
          </p>
          <p className="text-xs text-muted mt-2">
            Kickoff to full cutover — see the{" "}
            <Link
              href="/blog/microsoft-365-tenant-to-tenant-migration-timeline/"
              className="font-semibold text-azure hover:underline"
            >
              phase-by-phase breakdown
            </Link>{" "}
            this estimate is built from.
          </p>
        </div>
      </div>
    </div>
  );
}
