import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import defaultData from "@/store/contact.json";

export interface ConsultationHubProps {
  phoneDisplay?: string;
  phoneHref?: string;
  email?: string;
  emailHref?: string;
  address?: string;
  guarantees?: {
    title: string;
    description: string;
  }[];
}

export function ConsultationHub({
  phoneDisplay = defaultData.phoneDisplay,
  phoneHref = defaultData.phoneHref,
  email = defaultData.email,
  emailHref = defaultData.emailHref,
  address = "59 Winding Brook Trail, Vernon, CT 06066",
  guarantees = defaultData.guarantees,
}: ConsultationHubProps = {}) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Access & Trust Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Direct Contact Card */}
            <div className="rounded-[28px] sm:rounded-[32px] border border-mp-border bg-mp-parchment p-7 sm:p-9 shadow-2xs">
              <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted block mb-3">
                DIRECT CONTACT
              </span>
              <h2 className="font-display text-[24px] sm:text-[28px] font-bold text-mp-ink leading-tight">
                Speak directly with senior engineers
              </h2>
              <p className="mt-3 text-[14px] sm:text-[14.5px] leading-[1.65] text-mp-secondary">
                No intermediate sales representatives. You will talk directly to platform architects who have led hundreds of tenant migrations and Dynamics 365 implementations.
              </p>

              <div className="mt-6 pt-6 border-t border-mp-border/80 flex flex-col gap-4 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-mp-muted block mb-1">
                    Direct Telephone
                  </span>
                  <a
                    href={phoneHref}
                    className="text-[15px] font-bold text-mp-petrol hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{phoneDisplay}</span>
                    <span className="text-xs font-semibold">›</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-mp-muted block mb-1">
                    Email Address
                  </span>
                  <a
                    href={emailHref}
                    className="text-[15px] font-bold text-mp-petrol hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{email}</span>
                    <span className="text-xs font-semibold">›</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-mp-muted block mb-1">
                    Headquarters
                  </span>
                  <p className="font-semibold text-mp-ink leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Guarantees */}
            <div className="rounded-[28px] sm:rounded-[32px] border border-mp-border bg-white p-7 sm:p-9 shadow-2xs">
              <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] text-mp-muted block mb-4">
                OUR ENGAGEMENT COMMITMENTS
              </span>
              <div className="flex flex-col gap-5">
                {guarantees.map((g, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mp-petrol text-mp-mint text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-[14.5px] font-bold text-mp-ink">
                        {g.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] leading-[1.55] text-mp-secondary mt-0.5">
                        {g.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Upgraded Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm email={email} />
          </div>
        </div>
      </div>
    </section>
  );
}
