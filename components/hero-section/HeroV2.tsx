import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MicrosoftLogo, Phone, Shield, Layers, Users } from "@/components/ui/Icons";

interface HeroV2Props {
  settings: {
    city: string;
    region: string;
    phone: string;
    phoneDisplay: string;
  };
}

interface OrbitNodeProps {
  src: string;
  alt: string;
  label: string;
  angle: number;
  speed: number;
  direction?: "cw" | "ccw";
}

function OrbitNode({
  src,
  alt,
  label,
  angle,
  speed,
  direction = "cw",
}: OrbitNodeProps) {
  const armAnim = direction === "cw" ? "mp-spin-cw" : "mp-spin-ccw";
  const iconAnim = direction === "cw" ? "mp-counter-spin-cw" : "mp-counter-spin-ccw";

  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-full"
      style={
        {
          "--start-angle": `${angle}deg`,
          animation: `${armAnim} ${speed}s linear infinite`,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-auto absolute left-1/2 top-0"
        style={
          {
            "--start-angle": `${angle}deg`,
            animation: `${iconAnim} ${speed}s linear infinite`,
          } as React.CSSProperties
        }
      >
        <div className="group relative">
          <div className="mp-float-anim flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white p-2.5 shadow-[0_4px_16px_rgba(0,16,51,0.06),0_1px_3px_rgba(0,16,51,0.04)] transition-all duration-300 hover:scale-115 hover:border-azure hover:shadow-[0_8px_24px_rgba(0,98,255,0.18)]">
            <Image
              src={src}
              alt={alt}
              width={28}
              height={28}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md bg-navy px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 whitespace-nowrap z-30">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export function HeroV2({ settings }: HeroV2Props) {
  return (
    <section className="relative overflow-hidden px-5 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Subtle ambient light gradient & architect grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_25%,rgba(0,98,255,0.07),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(rgba(0,16,51,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(0,16,51,0.6)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto flex min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4 items-center justify-center">
        {/* ---------------------------------------------------------------- 3 Centered Concentric Orbit Rings */}
        <div
          aria-hidden="false"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          {/* Ring 1 (Inner — 4 Icons with massive 90° gaps | Speed: 55s Clockwise) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[540px] w-[540px] sm:h-[660px] sm:w-[660px] lg:h-[760px] lg:w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/90">
            <OrbitNode
              src="/images/ecosystem/power-automate.svg"
              alt="Microsoft Power Automate"
              label="Power Automate / Flow"
              angle={0}
              speed={55}
              direction="cw"
            />
            <OrbitNode
              src="/images/ecosystem/power-bi.svg"
              alt="Microsoft Power BI"
              label="Power BI (Analytics)"
              angle={90}
              speed={55}
              direction="cw"
            />
            <OrbitNode
              src="/images/ecosystem/power-apps.svg"
              alt="Microsoft Power Apps"
              label="Power Apps"
              angle={180}
              speed={55}
              direction="cw"
            />
            <OrbitNode
              src="/images/ecosystem/copilot.png"
              alt="Microsoft Copilot"
              label="Microsoft Copilot (AI)"
              angle={270}
              speed={55}
              direction="cw"
            />
          </div>

          {/* Ring 2 (Middle — 6 Icons with generous 60° gaps | Speed: 80s Counter-Clockwise) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[780px] w-[780px] sm:h-[960px] sm:w-[960px] lg:h-[1100px] lg:w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/75">
            <OrbitNode
              src="/images/ecosystem/dynamics-365.svg"
              alt="Microsoft Dynamics 365"
              label="Dynamics 365"
              angle={30}
              speed={80}
              direction="ccw"
            />
            <OrbitNode
              src="/images/ecosystem/azure.svg"
              alt="Microsoft Azure"
              label="Microsoft Azure"
              angle={90}
              speed={80}
              direction="ccw"
            />
            <OrbitNode
              src="/images/ecosystem/fabric.svg"
              alt="Microsoft Fabric"
              label="Microsoft Fabric"
              angle={150}
              speed={80}
              direction="ccw"
            />
            <OrbitNode
              src="/images/ecosystem/purview.svg"
              alt="Microsoft Purview"
              label="Microsoft Purview"
              angle={210}
              speed={80}
              direction="ccw"
            />
            <OrbitNode
              src="/images/ecosystem/entra.svg"
              alt="Microsoft Entra ID"
              label="Microsoft Entra ID"
              angle={270}
              speed={80}
              direction="ccw"
            />
            <OrbitNode
              src="/images/ecosystem/business-central.svg"
              alt="Business Central"
              label="Dynamics 365 Business Central"
              angle={330}
              speed={80}
              direction="ccw"
            />
          </div>

          {/* Ring 3 (Outer — 6 Icons with generous 60° gaps | Speed: 105s Clockwise) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1020px] w-[1020px] sm:h-[1260px] sm:w-[1260px] lg:h-[1440px] lg:w-[1440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/50">
            <OrbitNode
              src="/images/ecosystem/teams.png"
              alt="Microsoft Teams"
              label="Microsoft Teams"
              angle={15}
              speed={105}
              direction="cw"
            />
            <OrbitNode
              src="/images/ecosystem/sharepoint.png"
              alt="SharePoint"
              label="SharePoint Online"
              angle={75}
              speed={105}
              direction="cw"
            />
            <OrbitNode
              src="/images/ecosystem/onedrive.png"
              alt="Microsoft 365 OneDrive"
              label="OneDrive & Microsoft 365"
              angle={135}
              speed={105}
              direction="cw"
            />
            <OrbitNode
              src="/images/ecosystem/defender.svg"
              alt="Microsoft Defender"
              label="Microsoft Defender (Security)"
              angle={195}
              speed={105}
              direction="cw"
            />
            <OrbitNode
              src="/images/ecosystem/intune.svg"
              alt="Microsoft Intune"
              label="Microsoft Intune"
              angle={255}
              speed={105}
              direction="cw"
            />
            <OrbitNode
              src="/images/ecosystem/devops.svg"
              alt="Azure DevOps"
              label="Azure DevOps"
              angle={315}
              speed={105}
              direction="cw"
            />
          </div>
        </div>

        {/* ---------------------------------------------------------------- Centered Hero Typography & CTAs */}
        <div className="relative z-20 mx-auto max-w-3xl px-4 text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface-light px-4 py-1.5 text-[12.5px] font-semibold text-navy shadow-xs">
            <MicrosoftLogo className="h-3.5 w-3.5" />
            Microsoft consulting partner · {settings.city}, {settings.region}
          </p>

          <h1 className="font-display text-[clamp(34px,5.8vw,64px)] font-extrabold uppercase leading-[1.04] tracking-[-0.03em] text-navy">
            Microsoft consulting,
            <br />
            <span className="text-azure">minus the friction</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15.5px] sm:text-[17px] leading-[1.75] text-ink-2">
            We plan and execute Microsoft 365 M&amp;A tenant migrations, Dynamics 365 and Power
            Platform implementations, and data governance for mid-market and enterprise teams —
            without the six-month discovery cycle of a traditional systems integrator.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/contact/"
              className="mp-press inline-flex items-center gap-2 rounded-full bg-azure px-7 py-3.5 text-sm font-bold text-white shadow-mp-azure hover:bg-azure-hover"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${settings.phone}`}
              className="mp-press inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm hover:bg-surface-light"
            >
              <Phone className="h-4 w-4 text-azure" />
              {settings.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line/60 pt-6 text-[13px] font-semibold text-navy/80">
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-azure" />
              Senior architects, not a bench
            </span>
            <span className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-azure" />
              Zero-downtime M&amp;A playbooks
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers className="h-4 w-4 text-azure" />
              Entire Microsoft cloud surface
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
