import Link from "next/link";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { SectionTag } from "@/components/ui/SectionTag";
import { DualTitle } from "@/components/ui/DualTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ArrowUpRight, Check, Layers, Phone, Shield, Users } from "@/components/ui/Icons";
import {
  getServices,
  getIndustries,
  getCaseStudies,
  getSiteSettings,
  getStaticPageFaqs,
} from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { excerpt } from "@/lib/richtext";
import { webPageSchema, ORG_ID } from "@/lib/schema";
import { BRAND_NAME } from "@/lib/config";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: `${BRAND_NAME} — Microsoft 365, Dynamics 365 & M&A Migration Consulting`,
  description:
    "MP365 is a Microsoft consulting partner specializing in M&A tenant migration, Microsoft 365, Dynamics 365, and Power Platform for mid-market and enterprise organizations.",
  path: "/",
  isFullTitle: true,
});

// Capability claims only — no client counts, ratings, or project metrics,
// none of which are substantiated anywhere in the data.
const PROOF = [
  {
    icon: Users,
    title: "Senior architects, not a bench",
    body: "Engagements are led by the people who have run tenant consolidations for 15+ years — not staffed to junior consultants after the pitch.",
  },
  {
    icon: Shield,
    title: "Zero-downtime playbooks",
    body: "Day-1 coexistence designed before any mailbox moves, so both organizations keep working through the transition.",
  },
  {
    icon: Layers,
    title: "The whole Microsoft surface",
    body: "Microsoft 365, Dynamics 365, Power Platform, and Azure treated as one environment, because that's how it actually behaves.",
  },
];

const FOCUS = [
  "M&A tenant migration",
  "Dynamics 365 CRM & ERP",
  "Power Platform governance",
  "Microsoft Purview & retention",
  "SharePoint & Teams architecture",
  "Azure application modernization",
];

export default async function HomePage() {
  const [services, industries, caseStudies, settings, faqs] = await Promise.all([
    getServices(),
    getIndustries(),
    getCaseStudies(),
    getSiteSettings(),
    getStaticPageFaqs("/"),
  ]);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: `${settings.brandName} — ${settings.tagline}`,
          description: settings.description,
          mainEntityId: ORG_ID,
        })}
      />

      {/* ---------------------------------------------------------------- Hero */}
      <section className="px-5 pt-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[var(--mp-radius-hero)] bg-navy">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_0%,rgba(0,98,255,0.55)_0%,rgba(0,16,51,0)_58%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:64px_64px]"
          />

          <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[12.5px] font-semibold text-white/85 backdrop-blur">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan" />
                Microsoft consulting partner · {settings.city}, {settings.region}
              </p>

              <h1 className="font-display text-[clamp(34px,5.6vw,60px)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white">
                Microsoft consulting,
                <br />
                <span className="text-cyan">minus the friction</span>
              </h1>

              <p className="mt-6 max-w-xl text-[15.5px] leading-[1.75] text-white/70">
                We plan and execute Microsoft 365 M&amp;A tenant migrations, Dynamics 365 and Power
                Platform implementations, and data governance for mid-market and enterprise teams —
                without the six-month discovery cycle of a traditional systems integrator.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact/"
                  className="mp-press inline-flex items-center gap-2 rounded-full bg-azure px-6 py-3.5 text-sm font-bold text-white hover:bg-azure-hover"
                >
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${settings.phone}`}
                  className="mp-press inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-cyan" />
                  {settings.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--mp-radius-card)] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <Image
                  src="/hero-executives.jpg"
                  alt="Two MP365 consultants reviewing a Microsoft 365 admin dashboard in a client meeting room"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ What we do */}
      <section className="mx-auto max-w-[1240px] px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <SectionTag>What we do</SectionTag>
            <DualTitle
              bold="Empowering your enterprise to"
              light="lead and achieve flawless cloud transformation"
            />
          </div>
          <div>
            <p className="mb-6 text-[15.5px] leading-[1.7] text-ink-2">
              Microsoft&rsquo;s platform is rarely the constraint — the constraint is how it was
              configured, who owns it, and whether anyone documented why. We work inside your existing
              environment, fix the architecture, and leave your team able to run it.
            </p>
            <p className="mb-4 font-display text-[15px] font-bold text-navy">
              Key areas we focus on
            </p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {FOCUS.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[13.5px] font-semibold text-navy">
                  <Check className="h-4 w-4 text-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Why choose us */}
      <section className="mx-auto max-w-[1240px] px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[var(--mp-radius-card)] bg-navy shadow-mp-card">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(110%_100%_at_20%_0%,rgba(0,98,255,0.5)_0%,rgba(0,16,51,0)_62%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]"
            />
            <div className="relative flex min-h-[420px] flex-col justify-end p-8">
              <p className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-cyan">
                Why teams call us
              </p>
              <p className="mt-3 max-w-[30ch] font-display text-[26px] font-extrabold leading-[1.2] text-white">
                Usually because a deadline moved and the plan didn&rsquo;t survive it.
              </p>
              <p className="mt-4 max-w-[42ch] text-[14.5px] leading-[1.7] text-white/60">
                Deal dates, TSA exits, and end-of-support cliffs don&rsquo;t negotiate. Most of our work
                starts when one of them is already close.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {PROOF.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="mp-press flex items-start gap-4 rounded-[var(--mp-radius-card)] border border-line bg-surface-light p-5 hover:border-[var(--mp-border-azure)] hover:bg-white hover:shadow-mp-card"
              >
                <span
                  aria-hidden="true"
                  className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[var(--mp-radius-badge)] bg-azure text-white"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[15.5px] font-bold text-navy">{title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.65] text-ink-2">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Tailored services */}
      <section className="mx-auto max-w-[1240px] px-6 pb-4 text-center">
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="flex justify-center">
            <SectionTag>Our services</SectionTag>
          </div>
          <DualTitle
            bold="Tailored services to"
            light="accelerate and secure your cloud"
            className="text-center"
          />
        </div>
        <div className="grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              name={s.name}
              description={excerpt(s.heroAnswer, 118)}
              href={`/services/${s.slug}/`}
              eyebrow={s.categoryLabel}
              // The M&A flagship is the featured azure card, matching the
              // reference's "card #2 is the accent" composition.
              featured={s.slug === "ma-tenant-migration"}
            />
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------- Industries */}
      <section className="mx-auto max-w-[1240px] px-6 pt-20">
        <div className="mb-10 max-w-2xl">
          <SectionTag>Industries</SectionTag>
          <DualTitle bold="Built around how" light="your industry actually runs" />
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {industries.map((i, idx) => (
            <ServiceCard
              key={i.slug}
              name={i.name}
              description={excerpt(i.challenges[0] ?? i.heroAnswer, 140)}
              href={`/industries/${i.slug}/`}
              eyebrow="Industry"
              featured={idx === 1}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ Case studies */}
      {caseStudies.length > 0 && (
        <section className="mx-auto max-w-[1240px] px-6 pt-20">
          <div className="mb-10 max-w-2xl">
            <SectionTag>Proof</SectionTag>
            <DualTitle bold="Selected work" light="with manufacturers and industrial leaders" />
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}/`}
                className="group mp-press rounded-[var(--mp-radius-card)] border border-line bg-surface-card p-7 shadow-mp-sm hover:-translate-y-1 hover:border-[var(--mp-border-azure)] hover:shadow-mp-hover"
              >
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-muted">
                  {c.industryLabel}
                </p>
                <h3 className="font-display text-[18px] font-extrabold text-navy">{c.client}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-ink-2">
                  {excerpt(c.summary, 160)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1240px] px-6 pt-20">
        <FaqSection faqs={faqs} path="/" />
      </section>

      <CtaBand />
    </>
  );
}
