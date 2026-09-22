import { ImageResponse } from "next/og";
import { getIndustryBySlug } from "@/lib/data";
import { stripInlineMarkup } from "@/lib/richtext";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MP365 industry guide";

/**
 * Per-industry social card. The site default says what MP365 is; this one says
 * which question the page answers, which is what earns the click on LinkedIn
 * when a page is shared into an industry group.
 */
export default async function IndustryOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);
  const title = industry?.h1 || (industry ? `Microsoft solutions for ${industry.name}` : "Industries");
  const question = industry ? stripInlineMarkup(industry.heroQuestion) : "";
  const sectors = (industry?.subSectors ?? []).slice(0, 3).join("  ·  ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0b3c49",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>
            MP<span style={{ color: "#5fe3c8" }}>365</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#0b3c49",
              background: "#5fe3c8",
              padding: "8px 18px",
              borderRadius: 999,
            }}
          >
            {industry?.name ?? "Industry guide"}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 800, lineHeight: 1.12, maxWidth: 1040 }}>
            {title}
          </div>
          {question && (
            <div style={{ display: "flex", fontSize: 27, lineHeight: 1.35, color: "#bcd4d6", maxWidth: 1000 }}>
              {question.length > 150 ? `${question.slice(0, 147)}…` : question}
            </div>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9fc1c4" }}>
          <div style={{ display: "flex" }}>{sectors}</div>
          <div style={{ display: "flex", color: "#f2a93b", fontWeight: 700 }}>mp-365.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
