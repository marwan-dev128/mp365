import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MicrosoftLogo } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/Container";
import { breadcrumbSchema } from "@/lib/schema";

const WIDGETS = [
  { id: "dynamics-365", name: "Dynamics 365", src: "/hero-section-icons/image_-_2025-08-08T164136.643-removebg-preview.png", width: 68, height: 68, left: "0%", top: "30%", rotation: "-6deg" },
  { id: "copilot", name: "Microsoft Copilot", src: "/hero-section-icons/Microsoft_Copilot_Icon.svg", width: 78, height: 78, left: "24%", top: "6%", rotation: "4deg" },
  { id: "azure", name: "Microsoft Azure", src: "/hero-section-icons/Microsoft_Azure.svg.webp", width: 70, height: 70, left: "48%", top: "40%", rotation: "-4deg" },
  { id: "power-platform", name: "Power Platform", src: "/hero-section-icons/microsoft-power-platform-icons.png", width: 66, height: 66, left: "70%", top: "8%", rotation: "6deg" },
  { id: "power-bi", name: "Power BI", src: "/hero-section-icons/power-bi.png", width: 68, height: 68, left: "90%", top: "40%", rotation: "-6deg" },
];

export type HeroCrumb = { name: string; path: string };

/**
 * Inner-page hero: parchment header with the H1 and the page's answer-first
 * intro, the Microsoft ecosystem icons on the right, and a breadcrumb bar under
 * it. The visible trail and the BreadcrumbList JSON-LD render from one list.
 */
export function SiteHero({
  h1,
  eyebrow,
  breadcrumbs,
  children,
}: {
  h1: string;
  eyebrow: string;
  breadcrumbs: HeroCrumb[];
  /** The opening paragraph. */
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <header className="relative -mt-1 w-full overflow-hidden border-b border-mp-border bg-mp-parchment pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pt-20">
        <Container className="relative z-10">
          <div className="relative flex min-h-[200px] items-center justify-between lg:min-h-[240px]">
            <div className="relative z-10 w-full lg:max-w-[56%] xl:max-w-[60%]">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.14em] sm:mb-5 sm:gap-2.5 sm:text-[12px]">
                <span className="inline-flex items-center gap-1.5 text-mp-petrol">
                  <MicrosoftLogo className="h-3.5 w-3.5" />
                  Microsoft Solutions Partner
                </span>
                <span className="text-mp-muted/50">•</span>
                <span className="text-mp-teal">{eyebrow}</span>
              </div>
              <h1 className="text-balance font-display text-[32px] font-bold leading-[1.08] tracking-tight text-mp-ink sm:text-[44px] lg:text-[50px]">
                {h1}
              </h1>
              <p className="mt-5 text-[16px] leading-[1.65] text-mp-secondary sm:text-[17.5px]">
                {children}
              </p>
            </div>

            <div
              className="pointer-events-none absolute right-0 top-1/2 z-10 hidden h-[170px] w-[400px] -translate-y-1/2 select-none lg:block xl:w-[460px]"
              aria-hidden="true"
            >
              <div className="relative h-full w-full">
                {WIDGETS.map((w) => (
                  <div
                    key={w.id}
                    className="absolute"
                    style={{ left: w.left, top: w.top, width: `${w.width}px`, transform: `rotate(${w.rotation})` }}
                  >
                    <Image
                      src={w.src}
                      alt=""
                      width={w.width}
                      height={w.height}
                      sizes="90px"
                      fetchPriority="low"
                      className="h-auto w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.07)]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </header>

      <div className="w-full border-b border-mp-border-subtle bg-white">
        <Container className="py-3.5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px] font-medium text-mp-muted">
              {breadcrumbs.map((c, i) =>
                i < breadcrumbs.length - 1 ? (
                  <li key={c.path} className="flex items-center gap-1.5">
                    <Link href={c.path} className="hover:text-mp-ink hover:underline">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </li>
                ) : (
                  <li key={c.path} aria-current="page" className="max-w-[280px] truncate font-semibold text-mp-ink sm:max-w-md">
                    {c.name}
                  </li>
                )
              )}
            </ol>
          </nav>
        </Container>
      </div>
    </>
  );
}
