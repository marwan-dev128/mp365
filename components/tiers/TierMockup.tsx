import type { ReactNode } from "react";
import type { TierInfo } from "@/content/tiers/types";

// Small product mockups drawn in HTML, one per tier, so each card shows the job
// it does: a pipeline, a forecast, an agent at work. They are decoration only
// (aria-hidden), carry no figures, and use the site palette so they sit on both
// the parchment and the mint cards.

const bar = (w: string, tone = "bg-mp-ink/10") => <span className={`block h-1.5 rounded-full ${tone}`} style={{ width: w }} />;

function Window({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-[360px] rounded-[16px] bg-white p-3 shadow-[0_24px_48px_-20px_rgba(11,60,73,0.35)] ring-1 ring-mp-ink/5">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#f48a7a]" />
        <span className="h-2 w-2 rounded-full bg-mp-saffron" />
        <span className="h-2 w-2 rounded-full bg-mp-mint" />
        <span className="ml-2 rounded-full bg-mp-parchment px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-mp-petrol">{title}</span>
      </div>
      {children}
    </div>
  );
}

function Pipeline() {
  const cols = [
    { name: "Qualify", cards: 3 },
    { name: "Develop", cards: 2 },
    { name: "Propose", cards: 2 },
  ];
  return (
    <Window title="Pipeline">
      <div className="grid grid-cols-3 gap-2">
        {cols.map((c, i) => (
          <div key={c.name} className="rounded-[10px] bg-mp-parchment/60 p-1.5">
            <p className="mb-1.5 px-1 text-[9px] font-bold text-mp-petrol">{c.name}</p>
            <div className="flex flex-col gap-1.5">
              {Array.from({ length: c.cards }).map((_, j) => (
                <div key={j} className={`flex flex-col gap-1 rounded-[7px] p-1.5 ${i === 1 && j === 0 ? "bg-mp-petrol" : "bg-white"}`}>
                  {bar("80%", i === 1 && j === 0 ? "bg-mp-mint" : "bg-mp-ink/15")}
                  {bar("50%", i === 1 && j === 0 ? "bg-white/30" : "bg-mp-ink/8")}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}

function Forecast() {
  const bars = [42, 58, 50, 70, 64, 86];
  return (
    <Window title="Forecast">
      <div className="flex items-start justify-between px-1">
        <div className="flex flex-col gap-1">
          {bar("70px", "bg-mp-ink/20")}
          {bar("44px")}
        </div>
        <span className="rounded-full bg-mp-mint/30 px-2 py-0.5 text-[9px] font-bold text-mp-petrol">On track</span>
      </div>
      <div className="relative mt-3 flex h-[92px] items-end gap-2.5 px-1">
        <span className="absolute inset-x-0 top-[22%] border-t-2 border-dashed border-mp-saffron" />
        <span className="absolute right-1 top-[6%] text-[8px] font-bold uppercase tracking-[0.08em] text-mp-saffron">Quota</span>
        {bars.map((h, i) => (
          <span key={i} className={`flex-1 rounded-t-[5px] ${i === bars.length - 1 ? "bg-mp-mint" : "bg-mp-petrol"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    </Window>
  );
}

function Agents() {
  return (
    <Window title="Sales agent">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-[10px] bg-mp-petrol p-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mp-mint text-[11px] text-mp-petrol">✦</span>
          <div className="flex flex-1 flex-col gap-1">
            {bar("85%", "bg-white/40")}
            {bar("60%", "bg-white/20")}
          </div>
        </div>
        {["Lead qualified", "Research ready", "Follow-up drafted"].map((t) => (
          <div key={t} className="flex items-center gap-2 rounded-[8px] bg-mp-parchment/60 px-2 py-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-mp-mint text-[8px] font-bold text-mp-petrol">✓</span>
            <span className="text-[9.5px] font-semibold text-mp-ink">{t}</span>
            <span className="ml-auto">{bar("36px")}</span>
          </div>
        ))}
      </div>
    </Window>
  );
}

function Queue() {
  const rows = [
    { tag: "New", tone: "bg-mp-saffron" },
    { tag: "Open", tone: "bg-mp-mint" },
    { tag: "Open", tone: "bg-mp-mint" },
    { tag: "Waiting", tone: "bg-mp-ink/25" },
  ];
  return (
    <Window title="Case queue">
      <div className="flex flex-col gap-1.5">
        {rows.map((r, i) => (
          <div key={i} className={`flex items-center gap-2 rounded-[8px] px-2 py-1.5 ${i === 0 ? "bg-mp-parchment" : "bg-mp-parchment/50"}`}>
            <span className="h-5 w-5 shrink-0 rounded-full bg-mp-petrol/15" />
            <div className="flex flex-1 flex-col gap-1">
              {bar(`${70 - i * 8}%`, "bg-mp-ink/20")}
              {bar("40%")}
            </div>
            <span className="flex items-center gap-1 text-[8.5px] font-bold text-mp-ink/70">
              <span className={`h-1.5 w-1.5 rounded-full ${r.tone}`} />
              {r.tag}
            </span>
          </div>
        ))}
      </div>
    </Window>
  );
}

function Routing() {
  return (
    <Window title="Unified routing">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center gap-1 rounded-[10px] bg-mp-petrol px-2.5 py-3">
          <span className="text-[13px] text-mp-mint">✉</span>
          <span className="text-[8.5px] font-bold text-white">New case</span>
        </div>
        <div className="relative flex flex-1 flex-col gap-2">
          <span className="absolute -left-3 top-3 bottom-3 border-l-2 border-mp-petrol/25" />
          {["Billing", "Technical", "Priority"].map((s, i) => (
            <div key={s} className="relative flex items-center gap-2">
              <span className="absolute -left-3 w-3 border-t-2 border-mp-petrol/25" />
              <span className={`rounded-full px-2 py-0.5 text-[8.5px] font-bold ${i === 2 ? "bg-mp-saffron text-mp-ink" : "bg-mp-mint/40 text-mp-petrol"}`}>{s}</span>
              <span className="h-5 w-5 rounded-full bg-mp-petrol/15" />
              <span className="flex-1">{bar("70%")}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

function Channels() {
  return (
    <Window title="Conversations">
      <div className="flex gap-2">
        <div className="flex flex-col gap-1.5">
          {["☏", "✉", "✦"].map((g, i) => (
            <span
              key={g}
              className={`flex h-7 w-7 items-center justify-center rounded-[8px] text-[12px] ${i === 0 ? "bg-mp-petrol text-mp-mint" : "bg-mp-parchment text-mp-petrol"}`}
            >
              {g}
            </span>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2 rounded-[10px] bg-mp-parchment/50 p-2">
          <div className="flex h-6 items-end gap-[3px]">
            {[30, 70, 45, 90, 60, 80, 35, 65, 50, 85, 40, 70].map((h, i) => (
              <span key={i} className="w-1 rounded-full bg-mp-petrol/70" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="self-start rounded-[8px] rounded-bl-none bg-white px-2 py-1.5">{bar("90px", "bg-mp-ink/15")}</div>
          <div className="self-end rounded-[8px] rounded-br-none bg-mp-petrol px-2 py-1.5">{bar("70px", "bg-mp-mint/70")}</div>
        </div>
      </div>
    </Window>
  );
}

const MOCKUPS: Record<TierInfo["mockup"], () => React.JSX.Element> = {
  pipeline: Pipeline,
  forecast: Forecast,
  agents: Agents,
  queue: Queue,
  routing: Routing,
  channels: Channels,
};

/** The mockup band at the top of a tier card: tilted, bleeding off the card edge, fading into it. */
export function TierMockup({ kind, mint }: { kind: TierInfo["mockup"]; mint: boolean }) {
  const Mock = MOCKUPS[kind];
  return (
    <div aria-hidden="true" className="relative -mx-6 -mt-6 mb-2 h-[190px] overflow-hidden rounded-t-[28px] sm:-mx-8 sm:-mt-8">
      <div className="absolute left-8 top-14 origin-top-left -rotate-[4deg] transition-transform duration-500 group-hover:-rotate-[2deg] group-hover:-translate-y-1 sm:left-10">
        <Mock />
      </div>
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${mint ? "from-mp-band" : "from-mp-parchment"} to-transparent`}
      />
    </div>
  );
}
