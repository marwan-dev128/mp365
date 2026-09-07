import Link from "next/link";
import { RichText } from "./RichText";
import defaultFooter from "@/store/footer.json";

export interface FooterProps {
  helpSection?: {
    title: string;
    links: { label: string; href: string }[];
  };
  socials?: {
    name: string;
    href: string;
  }[];
  appButton?: {
    label: string;
    href: string;
  };
  marqueeText?: string;
  navigationSections?: {
    groups: {
      title: string;
      links: { label: string; href: string }[];
    }[];
  }[];
  legal?: {
    brand: string;
    badge?: string;
    copyright: string;
    columns: { label: string; href: string }[][];
    disclaimer: string;
  };
  services?: unknown;
  settings?: unknown;
}

export function Footer({
  helpSection = defaultFooter.helpSection,
  socials = defaultFooter.socials,
  appButton = defaultFooter.appButton,
  marqueeText = defaultFooter.marqueeText,
  navigationSections = defaultFooter.navigationSections,
  legal = defaultFooter.legal,
  services: _services,
  settings: _settings,
}: FooterProps = {}) {
  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return (
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "x":
        return (
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "facebook":
        return (
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case "tiktok":
        return (
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="w-full">
      {/* 1. Branded band (Petrol) */}
      <div className="w-full bg-mp-petrol text-white pt-14 sm:pt-16 pb-0 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
          {/* Top Assistance & Social Row */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-white/15">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {helpSection?.title && (
                <span className="font-display text-[24px] sm:text-[28px] font-extrabold tracking-[-0.03em] text-mp-mint">
                  {helpSection.title}
                </span>
              )}
              {helpSection?.links && (
                <div className="flex items-center gap-6 text-[14.5px] font-semibold text-white">
                  {helpSection.links.map((link) => (
                    <Link
                      key={link.label + link.href}
                      href={link.href}
                      className="text-white hover:text-white/80 hover:underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Social Icons */}
              {socials && socials.length > 0 && (
                <div className="flex items-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-white hover:text-mp-petrol transition-colors"
                      aria-label={s.name}
                    >
                      {renderSocialIcon(s.name)}
                    </a>
                  ))}
                </div>
              )}

              {/* Phone call pill button */}
              {appButton && (
                <a
                  href={appButton.href}
                  className="group/call inline-flex items-center gap-2 rounded-full bg-mp-lime px-3.5 py-1.5 text-xs font-bold text-mp-ink shadow-2xs hover:bg-mp-lime-hover transition-all duration-200"
                  aria-label={`Call Modern Partners 365 at ${appButton.label}`}
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-mp-ink/10 text-mp-ink group-hover/call:bg-mp-ink group-hover/call:text-mp-lime transition-colors">
                    <svg
                      className="h-2.5 w-2.5 fill-current transition-transform duration-200 group-hover/call:rotate-12"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4.02c-.55 0-1 .45-1 1 0 9.39 7.63 17.02 17.02 17.02.55 0 1-.45 1-1v-3.54c0-.55-.45-1-.99-1z" />
                    </svg>
                  </span>
                  <span>{appButton.label}</span>
                </a>
              )}

             
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-[13.5px]">
            {navigationSections?.map((sec, secIdx) => (
              <div key={secIdx}>
                {sec.groups.map((group, grpIdx) => (
                  <div key={group.title} className={grpIdx > 0 ? "mt-8" : ""}>
                    <p className="font-bold text-mp-mint mb-3 text-[14px]">
                      {group.title}
                    </p>
                    <ul className="flex flex-col gap-2 text-white/80">
                      {group.links.map((link) => (
                        <li key={link.label + link.href}>
                          <Link href={link.href} className="hover:text-white hover:underline transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Huge Animated Marquee */}
        {marqueeText && (
          <div className="group/marquee relative w-full overflow-hidden border-t border-white/15 py-6 sm:py-8 md:py-10 select-none bg-mp-petrol">
            {/* Left & Right Soft Edge Fade Masks */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-mp-petrol via-mp-petrol/85 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-mp-petrol via-mp-petrol/85 to-transparent"
            />

            {/* Seamless 2-Track Infinite Marquee Container */}
            <div className="mp-animate-marquee flex items-center whitespace-nowrap will-change-transform text-mp-mint">
              {[0, 1].map((half) => (
                <div
                  key={half}
                  aria-hidden={half === 1 ? "true" : undefined}
                  className="flex shrink-0 items-center"
                >
                  {[0, 1, 2, 3].map((idx) => {
                    const isOutlined = idx % 2 === 1;
                    return (
                      <div key={idx} className="flex items-center shrink-0">
                        <span
                          className={`font-display text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-black tracking-[-0.04em] leading-none shrink-0 transition-all duration-300 ${
                            isOutlined
                              ? "text-transparent [-webkit-text-stroke:1.2px_var(--mp-mint)] sm:[-webkit-text-stroke:2px_var(--mp-mint)] hover:text-mp-mint cursor-default"
                              : "text-mp-mint hover:text-mp-mint/80 cursor-default"
                          }`}
                        >
                          {marqueeText}
                        </span>

                        {/* Aesthetic Separator Symbol */}
                        <span
                          aria-hidden="true"
                          className="mx-5 sm:mx-8 md:mx-10 flex items-center justify-center select-none text-mp-mint/40 text-[20px] sm:text-[28px] md:text-[34px] font-light transition-transform duration-500 group-hover/marquee:rotate-45"
                        >
                          ✦
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2. Off-White Bottom Legal Section */}
      <div className="w-full bg-mp-parchment text-mp-ink pt-12 pb-16 border-t border-mp-border">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-10 border-b border-mp-border">
            {/* Logo and Copyright */}
            <div>
              <span className="font-display text-[32px] font-extrabold tracking-[-0.04em] text-mp-ink">
                {legal?.brand}
               
              </span>
              <p className="mt-2 text-xs font-semibold text-mp-ink/70">
                {legal?.copyright}
              </p>
            </div>

            {/* Columns of Legal Links */}
            {legal?.columns && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[12.5px] text-mp-ink/80">
                {legal.columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    {col.map((link) => (
                      <Link
                        key={link.label + link.href}
                        href={link.href}
                        className="hover:underline hover:text-black"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* EEA / UK Regulatory Disclaimer */}
          {legal?.disclaimer && (
            <div className="pt-8 text-[11px] leading-[1.65] text-mp-muted">
              <p>
                <RichText text={legal.disclaimer} />
              </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
