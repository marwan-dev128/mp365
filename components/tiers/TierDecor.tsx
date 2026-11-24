import type { ReactNode } from "react";

// The art in the corner of a tier card: a large tonal burst that bleeds off the
// edge, a scalloped sticker with an icon, and small white icon tiles floating
// beside it. Each step up adds a tile, so the row reads as a climb. Decoration
// only, in the site palette.

const TAU = Math.PI * 2;

/** A star burst with uneven rays, centered at (cx, cy). */
function burst(cx: number, cy: number, outer: number, inner: number, points: number) {
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const wobble = i % 4 === 0 ? 1 : i % 4 === 2 ? 0.82 : 1;
    const r = i % 2 === 0 ? outer * wobble : inner;
    const a = (i / (points * 2)) * TAU - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}

/** A circle with a scalloped edge, like a sticker or a seal. */
function scallop(cx: number, cy: number, r: number, bumps: number, depth: number) {
  const steps = bumps * 8;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * TAU;
    const rr = r + depth * Math.cos(a * bumps);
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}

const ICONS: ReactNode[] = [
  // Check: the essentials covered.
  <path key="check" d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />,
  // Rising bars: forecasting, routing, reporting.
  <g key="bars" fill="currentColor">
    <rect x="6" y="12" width="3" height="6" rx="1.2" />
    <rect x="10.5" y="9" width="3" height="9" rx="1.2" />
    <rect x="15" y="6" width="3" height="12" rx="1.2" />
  </g>,
  // Spark: AI and agents.
  <path key="spark" d="M12 4c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6z" fill="currentColor" />,
];

const TILE_ICONS: ReactNode[] = [
  // Chat bubble.
  <path key="chat" d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6a2.5 2.5 0 0 1-2.5 2.5H11l-4 3v-3h0.5A2.5 2.5 0 0 1 5 13.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  // Lightning bolt.
  <path key="bolt" d="M13 3L6 13h5l-1 8 7-10h-5l1-8z" fill="currentColor" />,
];

function Tile({ children, className }: { children: ReactNode; className: string }) {
  return (
    <span className={`absolute flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-mp-petrol shadow-[0_14px_30px_-14px_rgba(11,60,73,0.55)] ${className}`}>
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        {children}
      </svg>
    </span>
  );
}

export function TierDecor({ level, mint }: { level: number; mint: boolean }) {
  const tone = mint ? "#47d4b8" : "#ded6c6";
  const sticker = level === 1 ? "#0b3c49" : level === 2 ? "#0b3c49" : "#f2a93b";
  const glyph = level === 0 ? "#0b3c49" : "#5fe3c8";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMaxYMin meet" className="absolute -right-6 -top-6 h-[380px] w-[380px]">
        <path d={burst(330, 70, 210, 120, 9)} fill={tone} transform="rotate(8 330 70)" />
      </svg>

      <div className="absolute right-5 top-5 sm:right-7 sm:top-6">
        <div className="relative h-[96px] w-[96px] rotate-[-10deg] transition-transform duration-500 group-hover:rotate-[4deg] group-hover:scale-105">
          <svg viewBox="0 0 84 84" className="mp-decor-float absolute inset-0 h-full w-full drop-shadow-[0_12px_18px_rgba(11,60,73,0.28)]">
            <path d={scallop(42, 42, 34, 12, 3)} fill={sticker} />
            <circle cx="42" cy="42" r="25" fill="none" stroke={level === 0 ? "rgba(11,60,73,0.25)" : "rgba(95,227,200,0.35)"} strokeWidth="1.5" strokeDasharray="3 4" />
            <svg x="24" y="24" width="36" height="36" viewBox="0 0 24 24" color={glyph}>
              {ICONS[Math.min(level, 2)]}
            </svg>
          </svg>
        </div>
      </div>

      {level >= 1 && (
        <Tile className="mp-decor-float right-[118px] top-[20px] rotate-[8deg] [animation-delay:-2s] sm:right-[134px]">{TILE_ICONS[0]}</Tile>
      )}
      {level >= 2 && (
        <Tile className="mp-decor-float right-[34px] top-[124px] rotate-[-6deg] [animation-delay:-4s] sm:right-[44px]">{TILE_ICONS[1]}</Tile>
      )}
    </div>
  );
}
