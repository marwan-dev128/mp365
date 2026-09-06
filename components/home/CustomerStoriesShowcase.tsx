"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import defaultData from "@/store/home/customer-stories.json";

export interface Story {
  id: string;
  name: string;
  logoText: string;
  logoImage: string;
  bgImage: string;
  title: string;
  href: string;
}

export interface CustomerStoriesShowcaseProps {
  title?: string;
  stories?: Story[];
}

export function CustomerStoriesShowcase({
  title = defaultData.title,
  stories = defaultData.stories,
}: CustomerStoriesShowcaseProps = {}) {
  const defaultActiveId = stories?.[0]?.id ?? defaultData.stories[0]?.id ?? "hunter-panels";
  const [activeId, setActiveId] = useState<string>(defaultActiveId);
  const currentActiveId = activeId || defaultActiveId;

  return (
    <section className="w-full bg-mp-petrol py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-6xl text-center mb-12 sm:mb-16">
          <h2 className="font-display text-[clamp(34px,4.8vw,58px)] font-bold leading-[1.08] tracking-[-0.035em] text-white whitespace-pre-line">
            {title}
          </h2>
        </div>

        {/* ------------------------------------------------ Interactive Stories Accordion */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[480px] w-full select-none">
          {stories.map((story) => {
            const isActive = story.id === currentActiveId;

            return (
              <div
                key={story.id}
                onClick={() => setActiveId(story.id)}
                onMouseEnter={() => setActiveId(story.id)}
                className={`relative overflow-hidden rounded-[26px] sm:rounded-[30px] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.35,1)] will-change-[flex-grow] group ${
                  isActive
                    ? "lg:flex-[4.2] min-h-[360px] lg:min-h-full shadow-md"
                    : "lg:flex-1 h-[70px] lg:h-full shadow-2xs hover:shadow-xs"
                }`}
              >
                {/* Background Photo */}
                <Image
                  src={story.bgImage}
                  alt={story.name}
                  fill
                  sizes={isActive ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 12vw"}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={isActive}
                />

                {/* Dark Overlay: rich gradient on active, subtle dark tint on inactive for tab legibility */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-black/90 via-black/60 to-black/35 opacity-100"
                      : "bg-black/45 group-hover:bg-black/30 opacity-100"
                  }`}
                />

                {/* Active Full Content Layer */}
                <div
                  className={`relative z-10 flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.35,1)] ${
                    isActive
                      ? "opacity-100 translate-y-0 delay-150 pointer-events-auto"
                      : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
                  }`}
                >
                  {/* Top: Brand / Industry Pill & Title */}
                  <div>
                    <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white/90 backdrop-blur-xs border border-white/20">
                      {story.name}
                    </span>
                    <h3 className="mt-4 font-display text-[21px] sm:text-[25px] lg:text-[28px] font-bold leading-[1.2] tracking-[-0.03em] max-w-md text-white">
                      {story.title}
                    </h3>
                  </div>

                  {/* Bottom: Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-6 sm:mt-8">
                    <Link
                      href={story.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/10 backdrop-blur-md px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-white hover:text-mp-ink transition-colors duration-200"
                    >
                      <span>Read more</span>
                      <span className="text-sm">›</span>
                    </Link>
                    <Link
                      href="/case-studies/"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[13.5px] font-medium text-white/90 hover:text-white underline underline-offset-4 transition-opacity"
                    >
                      <span>Browse all stories</span>
                      <span className="text-sm">›</span>
                    </Link>
                  </div>
                </div>

                {/* Inactive Label Display (Rotated on desktop, centered on mobile) */}
                <div
                  className={`relative z-10 flex items-center justify-center p-4 lg:p-6 w-full h-full transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none hidden" : "opacity-100 flex"
                  }`}
                >
                  <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-white group-hover:text-white transition-colors lg:[writing-mode:vertical-rl] lg:rotate-180 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {story.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
