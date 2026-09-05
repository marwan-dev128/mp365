"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCard {
  icon: string;
  alt: string;
  category: string;
  title: string | React.ReactNode;
  description: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: "/images/perk/icons/control.webp",
    alt: "Control",
    category: "CONTROL",
    title: "Make out-of-policy out of the question",
    description:
      "Set the rules once and Perk applies them everywhere. Our AI doesn’t just flag problems — it stops them happening.",
  },
  {
    icon: "/images/perk/icons/visibility.webp",
    alt: "Visibility",
    category: "VISIBILITY",
    title: (
      <>
        Month-end in <br />a few clicks
      </>
    ),
    description:
      "See the full cost of every trip, track spending in real time, and close the books up to 90% faster with audit-ready data that’s always up to date.",
  },
  {
    icon: "/images/perk/icons/experience.webp",
    alt: "Experience",
    category: "EXPERIENCE",
    title: "Tools people actually want to use",
    description:
      "Easy for everyone, fast for everything. And an AI that anticipates what you need before you have to ask.",
  },
  {
    icon: "/images/perk/icons/impact.webp",
    alt: "Impact",
    category: "IMPACT",
    title: (
      <>
        Real work, <br />real savings
      </>
    ),
    description:
      "Transparent pricing, uncapped cashback, and hours of manual work eliminated every week. Perk grows with your teams, and the bottom line impact grows, too.",
  },
];

export function FeatureGrid4Col() {
  const [animatedValue, setAnimatedValue] = useState("3.72");
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const from = 3.22;
          const to = 3.72;
          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = from + (to - from) * easeProgress;
            setAnimatedValue(currentVal.toFixed(2));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setAnimatedValue(to.toFixed(2));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="w-full relative bg-white py-16 sm:py-24">
      {/* ------------------------------------------------ Header with Animated Value */}
      <div
        className="w-full relative pb-12 md:pb-16"
        data-component="headerAnimatedValue"
        data-testid="cards-header"
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <h2 className="text-primary text-heading-m-mobile md:text-heading-m font-sono md:whitespace-pre-wrap text-center">
              $
              <span className="inline-grid justify-items-end">
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
                  {" "}
                  3.22{" "}
                </span>
                <span
                  data-animated-value=""
                  data-value-from="3.22"
                  data-value-to="3.72"
                  data-decimals="2"
                  data-locale="en-us"
                  className="col-start-1 row-start-1 whitespace-nowrap"
                >
                  {animatedValue}
                </span>
              </span>
              M<span className="align-super text-[0.6em] leading-none">*</span> off the books
              <br />
              and onto the bottom line.
            </h2>
            <p className="text-secondary text-body-m-mobile md:text-body-m font-sono font-regular mt-4 md:mt-6 max-w-[660px] md:whitespace-pre-wrap text-center">
              That's what happens when you have control over company spend, full sight of what's happening, and a tool people actually want to use.
            </p>
            <div className="mt-6 w-full flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4">
              {/* Desktop Button */}
              <Link
                data-style-type="primary"
                data-button-name="button-embedded-switch-save"
                className="styled-button-with-overlay relative items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start hidden sm:inline-flex rounded-[26px] h-10 px-4 py-2"
                href="/demo-request/"
              >
                <span className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block rounded-[26px]" />
                <span className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block rounded-[26px]" />
                <span className="button-content relative z-[10] flex items-center justify-center gap-1.5 h-[8px]">
                  <span className="text-body-xs font-sono font-medium" data-button-label="true">
                    Switch today and save
                  </span>
                  <span className="relative block w-[18px] h-[18px]">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      className="buttonIcon absolute inset-0 text-current"
                    >
                      <path
                        d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      className="buttonIconHover absolute inset-0 text-current"
                    >
                      <path
                        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </Link>

              {/* Mobile Button */}
              <Link
                data-style-type="primary"
                data-button-name="button-embedded-switch-save-mobile"
                className="styled-button-with-overlay relative items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed inline-flex sm:hidden w-full rounded-[26px] h-12 px-6 py-4"
                href="/demo-request/"
              >
                <span className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block rounded-[26px]" />
                <span className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block rounded-[26px]" />
                <span className="button-content relative z-[10] flex items-center justify-center gap-2 h-[8px]">
                  <span className="text-body-m-mobile font-sono font-medium" data-button-label="true">
                    Switch today and save
                  </span>
                  <span className="relative block w-[22px] h-[22px]">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      className="buttonIcon absolute inset-0 text-current"
                    >
                      <path
                        d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      className="buttonIconHover absolute inset-0 text-current"
                    >
                      <path
                        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ Four Cards Container */}
      <div className="w-full relative bg-white" data-component="fourCardsContainer">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {FEATURE_CARDS.map((card) => (
              <div key={card.category} className="w-full">
                <div
                  className="w-full relative card-filled flex h-full flex-col overflow-hidden bg-brand-light rounded-[20px] md:rounded-[28px] transition-colors duration-200"
                  data-component="cardFilled"
                >
                  <div className="flex w-full flex-col p-6 box-border">
                    {/* Icon */}
                    <div className="pb-6">
                      <div className="flex items-center justify-start size-[30px] bg-transparent">
                        <Image
                          src={card.icon}
                          alt={card.alt}
                          width={30}
                          height={30}
                          unoptimized
                          className="size-[30px] object-contain"
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <div className="pb-2.5">
                      <span className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase">
                        {card.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="pb-4">
                      <h3
                        className="text-primary text-heading-xs-mobile md:text-heading-xs font-sono card-filled-title break-words"
                        lang="en-us"
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <span className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular">
                      {card.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
