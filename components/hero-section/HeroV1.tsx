import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MicrosoftLogo, Phone } from "@/components/ui/Icons";

interface HeroV1Props {
  settings: {
    city: string;
    region: string;
    phone: string;
    phoneDisplay: string;
  };
}

export function HeroV1({ settings }: HeroV1Props) {
  return (
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

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-6 sm:px-10 lg:px-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[12.5px] font-semibold text-white/85 backdrop-blur">
              <MicrosoftLogo className="h-3.5 w-3.5" />
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
  );
}
