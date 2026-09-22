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
          {/* Ambient background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-mp-petrol/10 blur-3xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center rounded-full bg-white border border-mp-border px-3.5 py-1 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-petrol mb-4 shadow-2xs">
                <span>{eyebrow}</span>
              </div>
              
              <h2 className="font-display text-[28px] sm:text-[34px] lg:text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-mp-petrol">
                {title}
              </h2>
              
              <p className="mt-4 text-[15px] sm:text-[16.5px] leading-[1.65] text-mp-secondary max-w-xl">
                {description}
              </p>

              {/* Regional Coverage Pills & SLA */}
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-mp-petrol border border-mp-border shadow-2xs">
                  Vernon, CT Headquarters
                </span>
                <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-mp-petrol border border-mp-border shadow-2xs">
                  New England &amp; Tri-State
                </span>
                <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-mp-petrol border border-mp-border shadow-2xs">
                  North America Nationwide
                </span>
                <span className="inline-flex items-center rounded-full bg-mp-petrol text-mp-mint px-3.5 py-1.5 text-xs font-bold shadow-2xs">
                  &lt; 15-Min Scoping SLA
                </span>
              </div>
            </div>

            {/* Right Card / Contact Details */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] sm:rounded-[28px] bg-white border border-mp-border p-6 sm:p-8 shadow-xs hover:border-mp-petrol/30 transition-all">
                <h3 className="text-xs font-bold uppercase tracking-wider text-mp-muted mb-5 flex items-center justify-between">
                  <span>Direct Office Information</span>
                  <span className="text-[10px] bg-mp-parchment text-mp-petrol px-2 py-0.5 rounded-md font-bold">EST / UTC-5</span>
                </h3>

                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-mp-muted">
                      Headquarters
                    </dt>
                    <dd className="mt-1 font-semibold text-mp-ink leading-relaxed">
                      {address}
                    </dd>
                  </div>

                  <div className="pt-3 border-t border-mp-border/60">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-mp-muted">
                      Direct Telephone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={phoneHref}
                        className="font-bold text-mp-petrol hover:text-mp-petrol-2 hover:underline inline-flex items-center gap-1.5 text-base"
                      >
                        <span>{phone}</span>
                        <span className="text-sm font-bold">›</span>
                      </a>
                    </dd>
                  </div>

                  <div className="pt-3 border-t border-mp-border/60">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-mp-muted">
                      Senior Engineering Desk
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={emailHref}
                        className="font-bold text-mp-petrol hover:text-mp-petrol-2 hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{email}</span>
                        <span className="text-sm font-bold">›</span>
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 pt-5 border-t border-mp-border/80">
                  <Link
                    href="/contact/"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-mp-saffron py-3.5 text-sm font-bold text-mp-ink hover:bg-mp-saffron-hover transition-colors shadow-2xs mp-press"
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
