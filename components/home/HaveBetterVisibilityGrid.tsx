"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import defaultData from "@/store/home/visibility.json";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "@/components/ui/Icons";

export interface VisibilityCard {
  id: string;
  variant: "photo" | "map" | "headline" | string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface HaveBetterVisibilityGridProps {
  title?: string;
  subtitle?: string;
  cards?: VisibilityCard[];
}

const DEFAULT_CARDS: VisibilityCard[] = defaultData.cards as VisibilityCard[];

export function HaveBetterVisibilityGrid({
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  cards = DEFAULT_CARDS,
}: HaveBetterVisibilityGridProps = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const handlePrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    const step = card ? card.offsetWidth + 24 : 420;
    el.scrollBy({ left: -step, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    const step = card ? card.offsetWidth + 24 : 420;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section id="visibility" className="w-full bg-white py-12 sm:py-18" data-component="cardsContainer">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* ------------------------------------------------ Header: Left Title & Description, Right "View All" + Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="max-w-2xl text-left">
            <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[50px] font-bold leading-[1.1] tracking-[-0.03em] text-mp-petrol">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3.5 text-[15px] sm:text-[16.5px] leading-[1.55] text-mp-secondary">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 rounded-full border border-mp-border bg-mp-parchment hover:bg-mp-petrol hover:text-white hover:border-mp-petrol px-5 py-2.5 text-[13.5px] font-semibold text-mp-ink transition-all shadow-2xs group"
            >
              <span>View all industries</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollLeft}
                aria-label="Previous industry"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mp-border bg-white text-mp-ink hover:bg-mp-parchment transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollRight}
                aria-label="Next industry"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mp-border bg-white text-mp-ink hover:bg-mp-parchment transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ 3-Item Sliding Carousel */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="mt-10 sm:mt-12 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-2 pb-4 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card) => {
            if (card.variant === "photo") {
              return (
                <div
                  key={card.id}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-[28px] p-7 sm:p-8 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1 w-[85vw] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start"
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt || card.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 440px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mp-petrol/95 via-mp-petrol/55 to-transparent z-[1]" />

                  <div className="relative z-[2] flex flex-col justify-end">
                    <h3 className="font-display text-[22px] sm:text-[24px] font-bold text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.55] text-white/90">
                      {card.description}
                    </p>
                    {card.linkText && (
                      <Link
                        href={card.href}
                        className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-mp-petrol/45 backdrop-blur-sm px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/20 self-start"
                      >
                        <span>{card.linkText}</span>
                        <span className="text-xs">›</span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            }

            if (card.variant === "headline") {
              return (
                <div
                  key={card.id}
                  className="group flex flex-col justify-between rounded-[28px] bg-mp-parchment p-7 sm:p-8 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1 w-[85vw] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start"
                >
                  <div>
                    <h3 className="font-display text-[30px] sm:text-[34px] font-bold leading-[1.1] tracking-[-0.03em] text-mp-ink">
                      {card.title}
                    </h3>
                  </div>

                  <div className="mt-auto flex flex-col justify-end">
                    <p className="pt-16 sm:pt-20 text-[13px] sm:text-[13.5px] leading-[1.55] text-mp-secondary">
                      {card.description}
                    </p>
                    {card.linkText && (
                      <Link
                        href={card.href}
                        className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-mp-ink/25 bg-transparent px-5 py-2 text-[13px] font-medium text-mp-ink transition-colors hover:bg-mp-petrol/[0.06] self-start"
                      >
                        <span>{card.linkText}</span>
                        <span className="text-xs">›</span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            }

            // Default Map Card
            return (
              <div
                key={card.id}
                className="group flex flex-col justify-between rounded-[28px] bg-mp-parchment p-6 sm:p-7 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1 w-[85vw] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start"
              >
                {card.image && (
                  <div className="w-full aspect-[506/316] relative rounded-[20px] overflow-hidden bg-white/60 border border-mp-border/50">
                    <Image
                      src={card.image}
                      alt={card.imageAlt || card.title}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 350px, (min-width: 768px) 33vw, 85vw"
                    />
                  </div>
                )}

                <div className="mt-6 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-display text-[22px] sm:text-[24px] font-bold text-mp-ink leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.55] text-mp-secondary">
                      {card.description}
                    </p>
                  </div>

                  {card.linkText && (
                    <Link
                      href={card.href}
                      className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-mp-ink/25 bg-transparent px-5 py-2 text-[13px] font-medium text-mp-ink transition-colors hover:bg-mp-petrol/[0.06] self-start"
                    >
                      <span>{card.linkText}</span>
                      <span className="text-xs">›</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
