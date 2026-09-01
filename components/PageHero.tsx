import type { ReactNode } from "react";
import Image from "next/image";
import { JsonLd } from "./JsonLd";
import { Breadcrumbs } from "./Breadcrumbs";
import { RichText } from "@/components/RichText";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * The reference's curved hero banner: a 32px-radius dark container inset
 * from the viewport edges, with the page title centered and a white
 * breadcrumb plate notched into the bottom-right corner.
 *
 * `answerQuestion`/`answerText` render the answer-first block that the SEO
 * work depends on — it sits below the banner on the light canvas so it stays
 * readable and keeps its snippet-friendly plain-text structure.
 */
export function PageHero({
  eyebrow,
  h1,
  answerQuestion,
  answerText,
  breadcrumbs,
  imageUrl,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  h1: string;
  answerQuestion?: string;
  answerText?: string;
  breadcrumbs?: { name: string; path: string }[];
  /**
   * Optional photography behind the banner. It fills the banner's existing
   * fixed height, so it adds a hero image without adding a pixel of layout —
   * no CLS, and no second large image competing for LCP.
   */
  imageUrl?: string | null;
  /**
   * Alt text for `imageUrl`. Null/undefined renders alt="" — correct when the
   * image is decorative, which it is whenever the H1 sitting on top of it
   * already says what the picture is there to suggest.
   */
  imageAlt?: string | null;
  children?: ReactNode;
}) {
  const full = breadcrumbs ? [{ name: "Home", path: "/" }, ...breadcrumbs] : null;

  return (
    <>
      {full && <JsonLd data={breadcrumbSchema(full)} />}

      <div className="px-5 pt-4 sm:px-6">
        <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-[var(--mp-radius-hero)] bg-navy shadow-[0_10px_30px_rgba(0,16,51,0.08)] sm:h-[340px]">
          {imageUrl && (
            <>
              <Image
                src={imageUrl}
                alt={imageAlt ?? ""}
                fill
                // The banner is the first thing in the viewport, so this is
                // the LCP element: eagerly loaded and fetched at high
                // priority. Lazy-loading it would be the single most
                // expensive mistake available on this page.
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1240px"
                className="object-cover"
              />
              {/* Scrim. The banner's own gradients are tuned for flat navy and
                  do not carry white text over photography — this holds the H1
                  well past 4.5:1 on any frame. */}
              <div aria-hidden="true" className="absolute inset-0 bg-navy/72" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/25"
              />
            </>
          )}

          {/* Ambient azure glow + subtle grid, so the panel has depth without
              depending on a photograph being present. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(0,98,255,0.45)_0%,rgba(0,16,51,0)_60%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:56px_56px]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl"
          />

          <div className="relative z-[2] px-6 text-center">
            {eyebrow && (
              <p className="mb-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-cyan">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-[clamp(30px,5.5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
              {h1}
            </h1>
          </div>

          {full && <Breadcrumbs items={full} />}
        </div>
      </div>

      {/* Below `sm` the notched plate has no room to exist, so the trail
          renders as a compact strip here instead of vanishing — the JSON-LD
          BreadcrumbList must describe navigation the reader can actually see,
          on the mobile viewport Google crawls as well as on desktop. */}
      {full && <Breadcrumbs items={full} variant="bar" />}

      {(answerQuestion || children) && (
        <div className="mx-auto max-w-[1240px] px-6 pt-10">
          {answerQuestion && answerText && (
            <div className="relative overflow-hidden rounded-[var(--mp-radius-card)] border border-line bg-gradient-to-br from-white via-surface-card to-azure-subtle/30 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,16,51,0.03)] transition-all hover:border-[var(--mp-border-azure)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-azure/5 blur-2xl"
              />
              <div className="relative z-[1]">
                <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-azure/20 bg-azure-subtle px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-azure">
                  <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                  Quick Overview
                </div>
                <h2 className="mb-2.5 font-display text-[17px] sm:text-[19px] font-bold tracking-tight text-navy">
                  {answerQuestion}
                </h2>
                <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-ink-2">
                  <RichText text={answerText} />
                </p>
              </div>
            </div>
          )}
          {children}
        </div>
      )}
    </>
  );
}
