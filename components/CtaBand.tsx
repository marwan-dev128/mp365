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
    <section className="mx-auto max-w-[1200px] px-5 sm:px-8 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[28px] bg-navy px-8 py-12 sm:px-14 sm:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(110%_100%_at_85%_0%,rgba(0,98,255,0.45)_0%,rgba(0,16,51,0)_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan/15 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-cyan">
            Next Steps
          </p>
          <h2 className="max-w-2xl font-display text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
            {heading}
          </h2>
          <p className="max-w-xl text-[15.5px] leading-[1.7] text-white/70">{subheading}</p>
          <div className="flex flex-wrap gap-3.5 pt-2">
            <Link
              href="/contact/"
              className="mp-press inline-flex items-center gap-2 rounded-full bg-azure px-8 py-3.5 text-sm font-medium text-white hover:bg-azure-hover"
            >
              Get a free consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${settings.phone}`}
              className="mp-press inline-flex items-center gap-2.5 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-cyan" />
              {settings.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
