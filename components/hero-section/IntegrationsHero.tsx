import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IntegrationWidgetData {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  style: React.CSSProperties & Record<string, string>;
}

const WIDGETS: IntegrationWidgetData[] = [
  {
    id: "bob",
    name: "HiBob",
    src: "/images/perk/integrations/bob.svg",
    width: 80,
    height: 80,
    style: {
      "--desktop-left": "0%",
      "--desktop-top": "5%",
      "--desktop-width": "80px",
      "--desktop-duration": "8s",
      "--desktop-distance-x": "16px",
      "--desktop-distance-y": "-18px",
      "--mobile-left": "3%",
      "--mobile-top": "0%",
      "--mobile-width": "46px",
      "--mobile-duration": "10s",
      "--mobile-distance-x": "-22px",
      "--mobile-distance-y": "16px",
      "--delay": "0s",
    },
  },
  {
    id: "lucca",
    name: "Lucca",
    src: "/images/perk/integrations/lucca.svg",
    width: 111,
    height: 110,
    style: {
      "--desktop-left": "5%",
      "--desktop-top": "70%",
      "--desktop-width": "110px",
      "--desktop-duration": "11s",
      "--desktop-distance-x": "-13px",
      "--desktop-distance-y": "21px",
      "--mobile-left": "35%",
      "--mobile-top": "60%",
      "--mobile-width": "46px",
      "--mobile-duration": "7s",
      "--mobile-distance-x": "13px",
      "--mobile-distance-y": "-19px",
      "--delay": "0.125s",
    },
  },
  {
    id: "bamboohr",
    name: "BambooHR",
    src: "/images/perk/integrations/bamboohr.svg",
    width: 79,
    height: 79,
    style: {
      "--desktop-left": "10%",
      "--desktop-top": "30%",
      "--desktop-width": "78px",
      "--desktop-duration": "7s",
      "--desktop-distance-x": "24px",
      "--desktop-distance-y": "14px",
      "--mobile-left": "2%",
      "--mobile-top": "50%",
      "--mobile-width": "42px",
      "--mobile-duration": "12s",
      "--mobile-distance-x": "20px",
      "--mobile-distance-y": "22px",
      "--delay": "0.25s",
    },
  },
  {
    id: "onelogin",
    name: "OneLogin",
    src: "/images/perk/integrations/onelogin.svg",
    width: 98,
    height: 97,
    style: {
      "--desktop-left": "20%",
      "--desktop-top": "62%",
      "--desktop-width": "96px",
      "--desktop-duration": "9s",
      "--desktop-distance-x": "-24px",
      "--desktop-distance-y": "-16px",
      "--mobile-left": "16%",
      "--mobile-top": "66%",
      "--mobile-width": "46px",
      "--mobile-duration": "8s",
      "--mobile-distance-x": "-16px",
      "--mobile-distance-y": "12px",
      "--delay": "0.375s",
    },
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    src: "/images/perk/integrations/google-calendar.svg",
    width: 76,
    height: 75,
    style: {
      "--desktop-left": "25%",
      "--desktop-top": "5%",
      "--desktop-width": "75px",
      "--desktop-duration": "12s",
      "--desktop-distance-x": "19px",
      "--desktop-distance-y": "-23px",
      "--mobile-left": "40%",
      "--mobile-top": "20%",
      "--mobile-width": "48px",
      "--mobile-duration": "9s",
      "--mobile-distance-x": "-12px",
      "--mobile-distance-y": "-17px",
      "--delay": "0.5s",
    },
  },
  {
    id: "tk",
    name: "TK",
    src: "/images/perk/integrations/tk.svg",
    width: 90,
    height: 90,
    style: {
      "--desktop-left": "30%",
      "--desktop-top": "73%",
      "--desktop-width": "89px",
      "--desktop-duration": "6s",
      "--desktop-distance-x": "-20px",
      "--desktop-distance-y": "13px",
      "--mobile-left": "56%",
      "--mobile-top": "40%",
      "--mobile-width": "60px",
      "--mobile-duration": "11s",
      "--mobile-distance-x": "23px",
      "--mobile-distance-y": "-15px",
      "--delay": "0.625s",
    },
  },
  {
    id: "personio",
    name: "Personio",
    src: "/images/perk/integrations/personio.svg",
    width: 108,
    height: 107,
    style: {
      "--desktop-left": "75%",
      "--desktop-top": "62%",
      "--desktop-width": "106px",
      "--desktop-duration": "10s",
      "--desktop-distance-x": "15px",
      "--desktop-distance-y": "-14px",
      "--mobile-left": "70%",
      "--mobile-top": "68%",
      "--mobile-width": "48px",
      "--mobile-duration": "6s",
      "--mobile-distance-x": "-19px",
      "--mobile-distance-y": "15px",
      "--delay": "0.75s",
    },
  },
  {
    id: "remote",
    name: "Remote",
    src: "/images/perk/integrations/remote.svg",
    width: 78,
    height: 78,
    style: {
      "--desktop-left": "77%",
      "--desktop-top": "15%",
      "--desktop-width": "77px",
      "--desktop-duration": "8s",
      "--desktop-distance-x": "-17px",
      "--desktop-distance-y": "24px",
      "--mobile-left": "20%",
      "--mobile-top": "15%",
      "--mobile-width": "48px",
      "--mobile-duration": "10s",
      "--mobile-distance-x": "14px",
      "--mobile-distance-y": "-24px",
      "--delay": "0.875s",
    },
  },
  {
    id: "timeshifter",
    name: "Timeshifter",
    src: "/images/perk/integrations/timeshifter.svg",
    width: 107,
    height: 106,
    style: {
      "--desktop-left": "84%",
      "--desktop-top": "74%",
      "--desktop-width": "106px",
      "--desktop-duration": "7s",
      "--desktop-distance-x": "18px",
      "--desktop-distance-y": "17px",
      "--mobile-left": "65%",
      "--mobile-top": "0%",
      "--mobile-width": "46px",
      "--mobile-duration": "7s",
      "--mobile-distance-x": "-14px",
      "--mobile-distance-y": "20px",
      "--delay": "1s",
    },
  },
  {
    id: "ramp",
    name: "Ramp",
    src: "/images/perk/integrations/ramp.svg",
    width: 86,
    height: 85,
    style: {
      "--desktop-left": "88%",
      "--desktop-top": "4%",
      "--desktop-width": "85px",
      "--desktop-duration": "11s",
      "--desktop-distance-x": "-15px",
      "--desktop-distance-y": "-21px",
      "--mobile-left": "87%",
      "--mobile-top": "8%",
      "--mobile-width": "42px",
      "--mobile-duration": "9s",
      "--mobile-distance-x": "17px",
      "--mobile-distance-y": "13px",
      "--delay": "1.125s",
    },
  },
  {
    id: "slack",
    name: "Slack",
    src: "/images/perk/integrations/slack.svg",
    width: 110,
    height: 110,
    style: {
      "--desktop-left": "94%",
      "--desktop-top": "40%",
      "--desktop-width": "109px",
      "--desktop-duration": "9s",
      "--desktop-distance-x": "22px",
      "--desktop-distance-y": "-12px",
      "--mobile-left": "85%",
      "--mobile-top": "45%",
      "--mobile-width": "52px",
      "--mobile-duration": "12s",
      "--mobile-distance-x": "-23px",
      "--mobile-distance-y": "-13px",
      "--delay": "1.25s",
    },
  },
];

interface IntegrationsHeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  settings?: any;
}

export function IntegrationsHero({
  title = "Sync your apps. Streamline your system.",
  description = "Seamlessly connect and integrate Perk with all your favorite HR, security, and workplace apps for even simpler and smarter work travel.",
  buttonText = "Learn more",
  buttonLink = "/contact/",
}: IntegrationsHeroProps = {}) {
  return (
    <section
      className="header-integrations relative w-full bg-[#f5f5eb] overflow-hidden py-16 sm:py-24 lg:py-32"
      data-testid="headerIntegrations"
    >
      {/* ------------------------------------------------ Floating Widgets Layer */}
      <div className="integration-widgets-container pointer-events-none select-none" aria-hidden="true">
        {WIDGETS.map((widget) => (
          <div
            key={widget.id}
            className="integration-widget drop-shadow-sm transition-transform duration-300"
            style={widget.style}
          >
            <Image
              src={widget.src}
              alt={widget.name}
              width={widget.width}
              height={widget.height}
              unoptimized
              className="w-full h-auto object-contain pointer-events-auto hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* ------------------------------------------------ Center Content */}
      <div className="relative text-center mx-auto max-w-[860px] z-[10] px-5 sm:px-6">
        <h1 className="font-display text-[clamp(38px,5.8vw,76px)] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#14140f] text-balance">
          {title}
        </h1>

        <div className="pt-6 sm:pt-8">
          <p className="text-[#47473f] text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.6] max-w-[720px] mx-auto font-normal">
            {description}
          </p>
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href={buttonLink}
            className="mp-press inline-flex items-center gap-1.5 rounded-full bg-[#beff50] px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-bold text-[#14140f] hover:bg-[#abf23a] transition-colors shadow-2xs"
          >
            <span>{buttonText}</span>
            <span className="text-base font-normal">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
