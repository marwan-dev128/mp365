"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface WhyCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageType: "contain" | "cover";
  linkText: string;
  href: string;
}

const CARDS: WhyCard[] = [
  {
    id: "visibility",
    title: "Have better visibility",
    description:
      "Stay on top of things even as they move. In-depth reports and traveler maps give you insight on just how far your business is going.",
    image: "/images/perk/why/visibility.webp",
    imageType: "contain",
    linkText: "Learn more",
    href: "/contact/",
  },
  {
    id: "support",
    title: "Get extra support",
    description:
      "From events to emergencies, we support you in getting your teams there and back, safe and sound.",
    image: "/images/perk/why/support.webp",
    imageType: "cover",
    linkText: "Learn more",
    href: "/contact/",
  },
  {
    id: "efficiency",
    title: "Boost efficiency",
    description:
      "Get time back and free up focus with preset policies, automated approvals, and integrations that sync with all your systems.",
    image: "/images/perk/why/efficiency.webp",
    imageType: "contain",
    linkText: "Learn more",
    href: "/contact/",
  },
  {
    id: "policies",
    title: "Policies and approvals",
    description:
      "Speed up sign-offs while keeping budgets in check, with allocated reviewers, automated approvals, and preset policies that are easy to follow.",
    image: "/images/perk/why/policies.webp",
    imageType: "contain",
    linkText: "Learn more",
    href: "/contact/",
  },
];

export function WhyUsePerkCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Card 2 active by default as shown in screenshot
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    if (scrollRef.current) {
      const el = scrollRef.current.children[idx] as HTMLElement;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : CARDS.length - 1;
    handleSelect(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < CARDS.length - 1 ? activeIndex + 1 : 0;
    handleSelect(nextIdx);
  };

  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28 overflow-hidden">
      {/* ------------------------------------------------ Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <h2 className="font-display text-[clamp(36px,5vw,58px)] font-bold leading-[1.06] tracking-[-0.035em] text-[#14140f]">
          Why use Perk?
        </h2>
      </div>

      {/* ------------------------------------------------ Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none scroll-smooth justify-start md:justify-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {CARDS.map((card, idx) => (
          <div
            key={card.id}
            onClick={() => handleSelect(idx)}
            className="w-[310px] sm:w-[350px] lg:w-[370px] shrink-0 rounded-[28px] sm:rounded-[32px] border border-[#e8e8dc]/70 bg-[#f6f6ee] p-7 sm:p-8 flex flex-col justify-between min-h-[490px] transition-all duration-300 shadow-2xs hover:shadow-sm cursor-pointer"
          >
            <div>
              {/* Media Graphic/Photo */}
              <div className="relative h-[200px] sm:h-[220px] w-full rounded-[20px] overflow-hidden flex items-center justify-center bg-white/40">
                {card.imageType === "cover" ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 310px, 370px"
                    unoptimized
                    className="object-cover object-center"
                  />
                ) : (
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={260}
                    height={180}
                    unoptimized
                    className="max-h-[190px] w-auto object-contain"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="mt-6 font-display text-[21px] sm:text-[23px] font-bold leading-[1.2] tracking-[-0.03em] text-[#14140f]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.6] text-[#55554d]">
                {card.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-2">
              <Link
                href={card.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#14140f] bg-transparent px-4 py-2 text-[12.5px] font-semibold text-[#14140f] hover:bg-black/5 transition-colors"
              >
                <span>{card.linkText}</span>
                <span className="text-sm leading-none font-semibold">›</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------ Controls: Dots & Arrows */}
      <div className="mt-8 flex items-center justify-between px-2 max-w-[1150px] mx-auto">
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {CARDS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-6 h-1.5 bg-[#14140f] rounded-full"
                  : "w-1.5 h-1.5 bg-[#14140f]/25 hover:bg-[#14140f]/60 rounded-full"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Circular Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#14140f]/30 flex items-center justify-center text-[#14140f] hover:border-black hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <span className="text-base font-semibold leading-none -ml-0.5">‹</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#14140f]/30 flex items-center justify-center text-[#14140f] hover:border-black hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <span className="text-base font-semibold leading-none ml-0.5">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
