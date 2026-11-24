import { ImageResponse } from "next/og";
import type { TierPage } from "@/content/tiers/types";

export const OG_SIZE = { width: 1200, height: 630 };

/** The social card for a tier page: the product, the three tiers, the highlight in mint. */
export function tierOgImage(page: TierPage) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b3c49",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 800 }}>
            MP<span style={{ color: "#5fe3c8" }}>365</span>
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#bcd4d6", letterSpacing: 2 }}>
            TIERS COMPARED · {page.reviewed.toUpperCase()}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 30, color: "#5fe3c8", fontWeight: 700 }}>{page.product}</div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.08, marginTop: 12, maxWidth: 1000 }}>
            Which tier fits your team?
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {page.tiers.map((t, i) => (
            <div
              key={t.id}
              style={{
                display: "flex",
                flex: 1,
                padding: "26px 30px",
                borderRadius: 24,
                fontSize: 34,
                fontWeight: 800,
                background: i === page.highlight ? "#5fe3c8" : "rgba(255,255,255,0.08)",
                color: i === page.highlight ? "#0b3c49" : "#ffffff",
              }}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
