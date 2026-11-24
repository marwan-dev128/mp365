import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeCard } from "@/components/site/HomeCard";
import { MegaMenuIcon } from "@/components/ui/MegaMenuIcons";
import { CATEGORY_PAGES } from "@/lib/site-data";
import navigation from "@/store/navigation.json";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | MP-365" },
  robots: { index: false, follow: true },
};

const WRAP = "mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12";
const AREA_ICONS: { href?: string; icon?: string }[] = navigation.megaMenuGroups[0].columns;

const ROUTES = [
  {
    look: "mint" as const,
    eyebrow: "Services",
    title: "Every Microsoft service we deliver",
    body: "Dynamics 365, SharePoint, Copilot, Power Platform, migrations and data governance.",
    href: "/services/",
    cta: "Browse services",
  },
  {
    look: "picture" as const,
    image: "/images/mp365/illustrations/project-roadmap.webp",
    eyebrow: "Solutions",
    title: "Answers to a specific problem",
    body: "CRM rollouts, intranets, executive dashboards and merger IT, packaged by outcome.",
    href: "/solutions/",
    cta: "See solutions",
  },
  {
    look: "picture" as const,
    image: "/images/mp365/illustrations/two-buildings.webp",
    eyebrow: "Industries",
    title: "How it works in your sector",
    body: "Manufacturing, healthcare, government, financial services, retail and more.",
    href: "/industries/",
    cta: "Find your industry",
  },
  {
    look: "headline" as const,
    eyebrow: "Blog",
    title: "Guides from real projects",
    body: "Dynamics 365, Copilot and Microsoft 365, explained by the people who set them up.",
    href: "/blog/",
    cta: "Read the blog",
  },
];

/**
 * The 404 in the site's own language: the parchment hero with a large display
 * number and an illustration, then Home-style cards that route the visitor on.
 */
export default function NotFound() {
  return (
    <>
      <section className="relative -mt-1 w-full overflow-hidden border-b border-mp-border bg-mp-parchment">
        <div className={`${WRAP} grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-24`}>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-mp-teal">Error 404 • Page not found</p>
            <h1 className="mt-5 text-balance font-display text-[40px] font-bold leading-[1.04] tracking-[-0.04em] text-mp-ink sm:text-[56px] lg:text-[64px]">
              This page took a different route.
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-[1.65] text-mp-secondary sm:text-[17.5px]">
              The link may be old, or the page may have moved. Pick up from one of the routes below, or tell us what
              you were looking for and we will point you to it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-mp-petrol px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-mp-petrol-2"
              >
                <span aria-hidden="true">‹</span> Back to home
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-mp-saffron px-7 py-3.5 text-sm font-bold text-mp-ink transition-colors hover:bg-mp-saffron-hover"
              >
                Book a free consultation <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="relative mx-auto w-full max-w-[520px]">
            <p className="select-none text-center font-display text-[150px] font-bold leading-none tracking-[-0.07em] text-mp-petrol/[0.09] sm:text-[230px] lg:text-[260px]">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative aspect-[1.3] w-[68%]">
                <Image
                  src="/images/mp365/illustrations/magnifying-glass.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 340px, 60vw"
                  className="object-contain drop-shadow-[0_18px_30px_rgba(11,60,73,0.12)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14 sm:py-20">
        <div className={WRAP}>
          <h2 className="mx-auto mb-10 max-w-3xl text-center font-display text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-mp-petrol sm:mb-14">
            Where to go from here
          </h2>
          <nav aria-label="Suggested pages" className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ROUTES.map((r) => (
              <Link key={r.href} href={r.href} className="group block rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mp-petrol">
                <HomeCard
                  look={r.look}
                  image={r.image}
                  eyebrow={r.eyebrow}
                  title={r.title}
                  className="h-full"
                  footer={
                    <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-mp-petrol group-hover:underline">
                      {r.cta} <span aria-hidden="true">›</span>
                    </span>
                  }
                >
                  {r.body}
                </HomeCard>
              </Link>
            ))}
          </nav>

          <div className="mt-14 border-t border-mp-border pt-10">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-mp-muted">Or jump straight to a service area</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
              {CATEGORY_PAGES.map((c) => (
                <li key={c.path}>
                  <Link
                    href={c.path}
                    className="inline-flex items-center gap-2 rounded-full border border-mp-border bg-white px-4 py-2.5 text-[13.5px] font-semibold text-mp-ink transition-colors hover:border-mp-petrol hover:bg-mp-petrol hover:text-white"
                  >
                    <MegaMenuIcon name={AREA_ICONS.find((a) => a.href === c.path)?.icon} className="h-4 w-4" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
