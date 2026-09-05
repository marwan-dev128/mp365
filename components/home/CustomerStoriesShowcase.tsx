"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Story {
  id: string;
  name: string;
  logoText: string;
  logoImage: string;
  bgImage: string;
  title: string;
  href: string;
}

const STORIES: Story[] = [
  {
    id: "lush",
    name: "Lush",
    logoText: "LUSH",
    logoImage: "/images/perk/stories/lush_logo.webp",
    bgImage: "/images/perk/stories/lush_story.webp",
    title: "How Lush reimagined work travel with Perk",
    href: "/contact/",
  },
  {
    id: "breitling",
    name: "Breitling",
    logoText: "BREITLING 1884",
    logoImage: "/images/perk/stories/breitling_logo.webp",
    bgImage: "/images/perk/stories/breitling_story.webp",
    title: "We now have a single source of truth with unmatched data quality for the audit trail.",
    href: "/contact/",
  },
  {
    id: "nord",
    name: "Nord Security",
    logoText: "NORD SECURITY",
    logoImage: "/images/perk/stories/nord_logo.webp",
    bgImage: "/images/perk/stories/nord_story.webp",
    title: "How Nord Security simplified, scaled, and saved on travel management with Perk",
    href: "/contact/",
  },
  {
    id: "bitpanda",
    name: "Bitpanda",
    logoText: "bitpanda",
    logoImage: "/images/perk/stories/bitpanda_logo.webp",
    bgImage: "/images/perk/stories/bitpanda_story.webp",
    title: "How Bitpanda reduced expense management operating costs by 62.4%",
    href: "/contact/",
  },
  {
    id: "on",
    name: "On",
    logoText: "on",
    logoImage: "/images/perk/stories/on_logo.webp",
    bgImage: "/images/perk/stories/on_story.webp",
    title: "How On automates 90% of their expenses with Perk",
    href: "/contact/",
  },
  {
    id: "umb",
    name: "UMB",
    logoText: "UMB",
    logoImage: "/images/perk/stories/umb_logo.webp",
    bgImage: "/images/perk/stories/umb_story.webp",
    title: "How UMB streamlined expenses with Perk",
    href: "/contact/",
  },
];

export function CustomerStoriesShowcase() {
  const [activeId, setActiveId] = useState<string>("lush");

  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28">
      {/* ------------------------------------------------ Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <h2 className="font-display text-[clamp(34px,4.8vw,58px)] font-bold leading-[1.08] tracking-[-0.035em] text-[#14140f]">
          12,000+ real businesses,
          <br />
          getting real work done
        </h2>
      </div>

      {/* ------------------------------------------------ Interactive Stories Accordion */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[480px] w-full select-none">
        {STORIES.map((story) => {
          const isActive = story.id === activeId;

          if (isActive) {
            return (
              /* Expanded Story Card */
              <div
                key={story.id}
                className="relative overflow-hidden rounded-[26px] sm:rounded-[30px] lg:flex-[4] min-h-[360px] lg:min-h-full transition-all duration-500 ease-out group"
              >
                {/* Background Image */}
                <Image
                  src={story.bgImage}
                  alt={story.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Dark Gradient Overlay for Typography Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10 text-white">
                  {/* Top: Logo / Brand Name */}
                  <div>
                    {story.logoImage ? (
                      <div className="relative h-7 w-28 brightness-0 invert">
                        <Image
                          src={story.logoImage}
                          alt={story.name}
                          fill
                          unoptimized
                          className="object-contain object-left"
                        />
                      </div>
                    ) : (
                      <span className="font-display text-xl font-black uppercase tracking-wider text-white">
                        {story.logoText}
                      </span>
                    )}
                    <h3 className="mt-4 font-display text-[22px] sm:text-[26px] lg:text-[28px] font-bold leading-[1.2] tracking-[-0.03em] max-w-md text-white">
                      {story.title}
                    </h3>
                  </div>

                  {/* Bottom: Action Buttons */}
                  <div className="flex flex-wrap items-center gap-5 mt-8">
                    <Link
                      href={story.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/10 backdrop-blur-md px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-white hover:text-[#14140f] transition-colors duration-200"
                    >
                      <span>Read more</span>
                      <span className="text-sm">›</span>
                    </Link>
                    <Link
                      href="/case-studies/"
                      className="inline-flex items-center gap-1 text-[13.5px] font-medium text-white/90 hover:text-white underline underline-offset-4 transition-opacity"
                    >
                      <span>Browse all stories</span>
                      <span className="text-sm">›</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }

          /* Inactive Vertical Pill Card */
          return (
            <div
              key={story.id}
              onClick={() => setActiveId(story.id)}
              onMouseEnter={() => setActiveId(story.id)}
              className="relative overflow-hidden rounded-[26px] sm:rounded-[30px] lg:flex-1 h-[90px] lg:h-full cursor-pointer transition-all duration-500 ease-out group"
            >
              {/* Background Photo */}
              <Image
                src={story.bgImage}
                alt={story.name}
                fill
                sizes="(max-width: 1024px) 100vw, 12vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Tint Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Brand Logo at Top */}
              <div className="relative z-10 flex items-center justify-center p-4 lg:pt-8 w-full">
                {story.logoImage ? (
                  <div className="relative h-6 w-16 brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={story.logoImage}
                      alt={story.name}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {story.logoText}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------ Loved by 1M+ users & G2 Badges */}
      <div className="mt-8 rounded-[24px] sm:rounded-[28px] bg-[#f6f6ee] px-8 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-[17px] sm:text-[19px] font-bold text-[#14140f] tracking-tight">
          Loved by 1M+ users
        </p>
        <div className="relative h-12 sm:h-14 w-full md:w-auto max-w-[580px] flex items-center justify-center md:justify-end">
          <Image
            src="/images/perk/stories/g2_badges.webp"
            alt="G2 Summer 2026 Badges: High Performer, Leader, Momentum Leader, Best Usability, Most Implementable"
            width={575}
            height={80}
            unoptimized
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
