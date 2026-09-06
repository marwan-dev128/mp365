import { ImageResponse } from "next/og";
import { getSiteSettings } from "@/lib/data";
import { stripInlineMarkup } from "@/lib/richtext";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default branded OG card — used for any route that doesn't define its own
// opengraph-image. Fixes the "no social preview image" gap flagged in the
// SEO audit (LinkedIn shares previously rendered with no image at all).
export default async function OpengraphImage() {
  const settings = await getSiteSettings();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b3c49",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0f5061",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 30 30" fill="none">
              <path
                d="M7 20V10l4 6.5L15 10l4 6.5L23 10v10"
                stroke="#5fe3c8"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>
            MP<span style={{ color: "#5fe3c8" }}>365</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 800, lineHeight: 1.15, maxWidth: 900 }}>
          {stripInlineMarkup(settings.tagline)}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#bcd4d6", marginTop: 28, maxWidth: 820 }}>
          Microsoft 365 migration · Dynamics 365 · Power Platform · M&amp;A tenant migration
        </div>
      </div>
    ),
    { ...size }
  );
}
