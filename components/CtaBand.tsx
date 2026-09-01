import Link from "next/link";
import { getSiteSettings } from "@/lib/data";
import { ArrowUpRight, Phone } from "./ui/Icons";

export async function CtaBand({
  heading = "Ready to talk about your Microsoft environment?",
  subheading = "Tell us what you're working with — migration, Dynamics 365, or Power Platform — and we'll respond with next steps, not a sales script.",
}: {
  heading?: string;
  subheading?: string;
}) {
  const settings = await getSiteSettings();
  return (
    <section className="px-5 pt-20 sm:px-6">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[var(--mp-radius-hero)] bg-navy px-6 py-14 sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(110%_100%_at_85%_0%,rgba(0,98,255,0.5)_0%,rgba(0,16,51,0)_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan/15 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-5">
          <h2 className="max-w-2xl font-display text-[clamp(24px,3.2vw,34px)] font-extrabold leading-[1.15] text-white">
            {heading}
          </h2>
          <p className="max-w-xl text-[15.5px] leading-[1.7] text-white/65">{subheading}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/contact/"
              className="mp-press inline-flex items-center gap-2 rounded-full bg-azure px-6 py-3 text-sm font-bold text-white hover:bg-azure-hover"
            >
              Get a free consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${settings.phone}`}
              className="mp-press inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {settings.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
