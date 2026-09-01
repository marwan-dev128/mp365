import Link from "next/link";
import { Logo } from "./Logo";
import type { SiteSettings } from "@prisma/client";
import { ArrowUpRight, LinkedIn, Mail, MapPin, Phone } from "./ui/Icons";

export function Footer({
  services,
  settings,
}: {
  services: { slug: string; shortName: string }[];
  settings: Pick<
    SiteSettings,
    "legalName" | "brandName" | "street" | "city" | "region" | "postalCode" | "phone" | "phoneDisplay" | "email" | "sameAs"
  >;
}) {
  const year = new Date().getFullYear();
  const linkedIn = settings.sameAs.find((u) => u.includes("linkedin.com"));

  return (
    <footer className="px-5 pb-5 pt-20 sm:px-6">
      <div className="relative overflow-hidden rounded-[var(--mp-radius-hero)] bg-navy px-6 py-12 text-white sm:px-12 sm:py-14">
        {/* Geometric watermark — the MP zigzag, oversized and low-opacity. */}
      

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-9">
            <Logo inverse />
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MP365 on LinkedIn"
                className="mp-press flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-azure"
              >
                <LinkedIn className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <p className="font-display text-[15px] font-bold">Stay on top of Microsoft change</p>
              <p className="mt-2 max-w-[38ch] text-[13.5px] leading-relaxed text-white/60">
                Occasional notes on M&amp;A migration, Dynamics 365, and Power Platform. No cadence
                promises we won&rsquo;t keep.
              </p>
              {/* Points at /contact/ rather than posing as a live subscribe
                  form — there is no mailing-list backend, and a form that
                  silently does nothing is worse than an honest link. */}
              <Link
                href="/contact/"
                className="mp-press mt-4 inline-flex items-center gap-2 rounded-full bg-azure px-5 py-2.5 text-[13px] font-bold text-white hover:bg-azure-hover"
              >
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div>
              <p id="footer-services" className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
                Services
              </p>
              <ul aria-labelledby="footer-services" className="flex flex-col gap-2.5">
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="text-[13.5px] text-white/70 transition-colors hover:text-cyan"
                    >
                      {s.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p id="footer-explore" className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
                Explore
              </p>
              <ul aria-labelledby="footer-explore" className="flex flex-col gap-2.5 text-[13.5px] text-white/70">
                {[
                  { name: "Dynamics 365", href: "/dynamics-365/" },
                  { name: "Pricing", href: "/pricing/" },
                  { name: "Compare", href: "/compare/" },
                  { name: "Migrations", href: "/migrations/" },
                  { name: "Assessments", href: "/assessments/" },
                  { name: "Glossary", href: "/resources/glossary/" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-cyan">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
                {settings.city} Office
              </p>
              <address className="flex flex-col gap-3 not-italic text-[13.5px] text-white/70">
                <span className="flex gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                  <span>
                    {settings.street}
                    <br />
                    {settings.city}, {settings.region} {settings.postalCode}
                  </span>
                </span>
                <a href={`tel:${settings.phone}`} className="flex items-center gap-2.5 hover:text-cyan">
                  <Phone className="h-4 w-4 shrink-0 text-cyan" />
                  {settings.phoneDisplay}
                </a>
                <a href={`mailto:${settings.email}`} className="flex items-center gap-2.5 hover:text-cyan">
                  <Mail className="h-4 w-4 shrink-0 text-cyan" />
                  {settings.email}
                </a>
              </address>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6 text-[12.5px] text-white/50">
            <p>
              © {year} {settings.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-6">
              {[
                { name: "About", href: "/about/" },
                { name: "Case Studies", href: "/case-studies/" },
                { name: "Blog", href: "/blog/" },
                { name: "Connecticut", href: "/microsoft-consultant-connecticut/" },
                { name: "Contact", href: "/contact/" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-cyan">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
