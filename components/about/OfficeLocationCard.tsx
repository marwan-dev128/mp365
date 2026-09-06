import Link from "next/link";
import defaultData from "@/store/about.json";

export interface OfficeLocationCardProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  address?: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  emailHref?: string;
}

export function OfficeLocationCard({
  eyebrow = defaultData.locationCard.eyebrow,
  title = defaultData.locationCard.title,
  description = defaultData.locationCard.description,
  address = defaultData.locationCard.address,
  phone = defaultData.locationCard.phone,
  phoneHref = defaultData.locationCard.phoneHref,
  email = defaultData.locationCard.email,
  emailHref = defaultData.locationCard.emailHref,
}: OfficeLocationCardProps = {}) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 border-t border-mp-border/50">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="rounded-[28px] sm:rounded-[36px] border border-mp-border bg-mp-parchment p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          {/* Subtle decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-mp-petrol/[0.04] blur-2xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="inline-block text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted mb-3">
                {eyebrow}
              </span>
              <h2 className="font-display text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.12] tracking-[-0.03em] text-mp-petrol">
                {title}
              </h2>
              <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.68] text-mp-secondary max-w-xl">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-mp-petrol border border-mp-border">
                  <span className="h-1.5 w-1.5 rounded-full bg-mp-petrol" />
                  Connecticut HQ
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-mp-petrol border border-mp-border">
                  <span className="h-1.5 w-1.5 rounded-full bg-mp-petrol" />
                  New England
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-mp-petrol border border-mp-border">
                  <span className="h-1.5 w-1.5 rounded-full bg-mp-petrol" />
                  United States Nationwide
                </span>
              </div>
            </div>

            {/* Right Card / Contact Details */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] sm:rounded-[28px] bg-white border border-mp-border p-6 sm:p-8 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-mp-muted mb-5">
                  Direct Office Information
                </h3>

                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-mp-secondary">
                      Headquarters
                    </dt>
                    <dd className="mt-1 font-semibold text-mp-ink leading-relaxed">
                      {address}
                    </dd>
                  </div>

                  <div className="pt-3 border-t border-mp-border/60">
                    <dt className="text-xs font-bold uppercase tracking-wider text-mp-secondary">
                      Direct Telephone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={phoneHref}
                        className="font-bold text-mp-petrol hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{phone}</span>
                        <span className="text-xs font-semibold">›</span>
                      </a>
                    </dd>
                  </div>

                  <div className="pt-3 border-t border-mp-border/60">
                    <dt className="text-xs font-bold uppercase tracking-wider text-mp-secondary">
                      General Enquiries
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={emailHref}
                        className="font-bold text-mp-petrol hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{email}</span>
                        <span className="text-xs font-semibold">›</span>
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 pt-5 border-t border-mp-border/80">
                  <Link
                    href="/contact/"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-mp-lime py-3 text-sm font-bold text-mp-ink hover:bg-mp-lime-hover transition-colors shadow-2xs"
                  >
                    <span>Request Scoping Consultation</span>
                    <span className="text-base font-bold leading-none">›</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
