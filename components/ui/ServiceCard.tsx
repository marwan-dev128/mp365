import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Cloud } from "./Icons";

/**
 * The reference's tailored-services card: title + description at the top with
 * a circular ↗ button, and an inset media panel at the bottom carrying a
 * floating badge icon. `featured` renders the solid Electric Azure variant
 * used for the standout card in the grid.
 */
export function ServiceCard({
  name,
  description,
  href,
  eyebrow,
  imageUrl,
  featured = false,
}: {
  name: string;
  description: string;
  href: string;
  eyebrow?: string;
  imageUrl?: string | null;
  featured?: boolean;
}) {
  let autoImage: string | null = null;
  if (href.startsWith("/dynamics-365/")) {
    const slug = href.replace(/^\/dynamics-365\//, "").replace(/\/$/, "");
    autoImage = `/images/dynamics-365/${slug}.jpg`;
  } else if (href.startsWith("/services/")) {
    const slug = href.replace(/^\/services\//, "").replace(/\/$/, "");
    autoImage = `/images/services/${slug}.jpg`;
  } else if (href.startsWith("/industries/")) {
    const slug = href.replace(/^\/industries\//, "").replace(/\/$/, "");
    autoImage = `/images/industries/${slug}.jpg`;
  } else if (href.startsWith("/assessments/")) {
    const slug = href.replace(/^\/assessments\//, "").replace(/\/$/, "");
    autoImage = `/images/assessments/${slug}.jpg`;
  } else if (href.startsWith("/solutions/")) {
    const slug = href.replace(/^\/solutions\//, "").replace(/\/$/, "");
    autoImage = `/images/solutions/${slug}.jpg`;
  } else if (href.startsWith("/migrations/")) {
    const slug = href.replace(/^\/migrations\//, "").replace(/\/$/, "");
    autoImage = `/images/migrations/${slug}.jpg`;
  } else if (href.startsWith("/compare/")) {
    const slug = href.replace(/^\/compare\//, "").replace(/\/$/, "");
    autoImage = `/images/compare/${slug}.jpg`;
  }
  const resolvedImageUrl = imageUrl || autoImage;

  return (
    <Link
      href={href}
      className={`group mp-press flex min-h-[340px] w-full flex-col justify-between rounded-[28px] p-7 sm:p-8 ${
        featured
          ? "border border-azure/40 bg-gradient-to-br from-azure to-[#0048c8] text-white"
          : "border border-line bg-surface-card hover:border-[var(--mp-border-azure)] hover:bg-white"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            {eyebrow && (
              <p
                className={`mb-2 text-[11px] font-medium uppercase tracking-[0.1em] ${
                  featured ? "text-cyan" : "text-muted"
                }`}
              >
                {eyebrow}
              </p>
            )}
            <h3
              className={`font-display text-[18px] sm:text-[19px] font-bold leading-snug tracking-[-0.03em] ${
                featured ? "text-white" : "text-navy"
              }`}
            >
              {name}
            </h3>
          </div>
          <span
            aria-hidden="true"
            className={`mp-card-arrow flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
              featured
                ? "bg-white text-azure"
                : "border border-line bg-surface-light text-navy"
            }`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p
          className={`mt-3 text-[14px] leading-[1.65] ${
            featured ? "text-white/85" : "text-ink-2"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Inset media panel with 18px corner radius */}
      <div
        className={`relative mt-6 h-[140px] overflow-hidden rounded-[18px] ${
          featured ? "bg-white/10" : "bg-surface-muted"
        }`}
      >
        {resolvedImageUrl ? (
          <>
            <Image
              src={resolvedImageUrl}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className={`absolute inset-0 ${
                featured
                  ? "bg-gradient-to-t from-navy/60 via-navy/20 to-transparent"
                  : "bg-gradient-to-t from-navy/40 via-transparent to-transparent"
              }`}
            />
          </>
        ) : (
          <>
            <div
              aria-hidden="true"
              className={`absolute inset-0 ${
                featured
                  ? "bg-[radial-gradient(120%_110%_at_20%_0%,rgba(0,210,255,0.35)_0%,rgba(0,72,200,0)_65%)]"
                  : "bg-[radial-gradient(120%_110%_at_20%_0%,rgba(0,98,255,0.16)_0%,rgba(0,98,255,0)_65%)]"
              }`}
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 200 120"
              className={`absolute bottom-0 right-0 h-full w-full ${
                featured ? "text-white/25" : "text-azure/20"
              }`}
            >
              <path d="M0 96 40 68l34 20 38-38 34 22 54-40" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0 112 40 84l34 20 38-38 34 22 54-40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            </svg>
          </>
        )}
        <span
          aria-hidden="true"
          className={`absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-xs ${
            featured ? "bg-cyan text-navy" : "bg-white/95 text-azure border border-line/60"
          }`}
        >
          <Cloud className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
