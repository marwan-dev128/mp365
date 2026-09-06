"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import defaultData from "@/store/home/why-mp.json";
import { useInView } from "@/hooks/useInView";

export interface WhyCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageType: "contain" | "cover" | string;
  linkText: string;
  href: string;
}

export interface WhyUsempCarouselProps {
  cards?: WhyCard[];
  autoplayDuration?: number;
}

const DEFAULT_CARDS: WhyCard[] = defaultData.cards as WhyCard[];
const DEFAULT_AUTOPLAY_DURATION = defaultData.autoplayDuration || 6000;

const CARD_WIDTH = 370;
const CARD_GAP = 24;

export function WhyUsempCarousel({
  cards = DEFAULT_CARDS,
  autoplayDuration = DEFAULT_AUTOPLAY_DURATION,
}: WhyUsempCarouselProps = {}) {
  const TOTAL_CARDS = cards.length;

  // Tripled cards for infinite smooth looping
  const DISPLAY_CARDS = [
    ...cards.map((c) => ({ ...c, cloneSet: 0 })),
    ...cards.map((c) => ({ ...c, cloneSet: 1 })),
    ...cards.map((c) => ({ ...c, cloneSet: 2 })),
  ];
  // Start at index 1 of middle set (Boost efficiency is active by default)
  const [virtualIndex, setVirtualIndex] = useState(TOTAL_CARDS + 1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Perf: stop the autoplay loop entirely while this section is off-screen.
  const { ref: viewRef, inView } = useInView<HTMLElement>();
  const viewportRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  const realIndex = ((virtualIndex % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS;

  // Track container width for exact centering
  useEffect(() => {
    const updateWidth = () => {
      if (viewportRef.current) {
        setContainerWidth(viewportRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const navigateToVirtual = useCallback(
    (targetVirtual: number) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setProgress(0);
      setEnableTransition(true);
      setVirtualIndex(targetVirtual);

      const targetReal = ((targetVirtual % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS;

      setTimeout(() => {
        isAnimatingRef.current = false;

        // Silent snap normalization if ventured outside middle set
        if (targetVirtual >= TOTAL_CARDS * 2 || targetVirtual < TOTAL_CARDS) {
          const normalizedIdx = TOTAL_CARDS + targetReal;
          setEnableTransition(false);
          setVirtualIndex(normalizedIdx);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setEnableTransition(true);
            });
          });
        }
      }, 600);
    },
    []
  );

  const handlePrev = useCallback(() => {
    navigateToVirtual(virtualIndex - 1);
  }, [navigateToVirtual, virtualIndex]);

  const handleNext = useCallback(() => {
    navigateToVirtual(virtualIndex + 1);
  }, [navigateToVirtual, virtualIndex]);

  const handleSelectDot = useCallback(
    (dotIdx: number) => {
      const diff = dotIdx - realIndex;
      navigateToVirtual(virtualIndex + diff);
    },
    [navigateToVirtual, realIndex, virtualIndex]
  );

  // High-precision smooth progress loader using requestAnimationFrame
  useEffect(() => {
    if (!inView || isPaused) return;

    let animFrameId: number;
    let startTimestamp: number | null = null;
    const duration = autoplayDuration;

    const tick = (now: number) => {
      if (startTimestamp === null) {
        startTimestamp = now;
      }

      const elapsed = now - startTimestamp;
      const currentPct = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentPct);

      if (elapsed < duration) {
        animFrameId = requestAnimationFrame(tick);
      } else {
        handleNext();
      }
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
      }
    };
  }, [handleNext, isPaused, virtualIndex, inView]);

  // Exact translate offset to place virtualIndex in center of viewport
  const cardStep = CARD_WIDTH + CARD_GAP;
  const trackOffset = virtualIndex * cardStep - (containerWidth - CARD_WIDTH) / 2;

  return (
    <section
      ref={viewRef}
      className="w-full bg-white py-16 sm:py-24 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-6xl text-center mb-12 sm:mb-16">
          <h2 className="font-display text-[clamp(36px,5vw,58px)] font-bold leading-[1.06] tracking-[-0.035em] text-mp-petrol">
            Why work with MP365?
          </h2>
        </div>

        {/* ------------------------------------------------ 3-Card Centered Carousel Viewport */}
        <div ref={viewportRef} className="mx-auto max-w-[1240px] overflow-hidden py-6">
          <div
            className={`flex items-center ${
              enableTransition
                ? "transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.35,1)]"
                : ""
            } will-change-transform`}
            style={{
              transform: `translate3d(-${trackOffset}px, 0px, 0px)`,
              gap: `${CARD_GAP}px`,
            }}
          >
            {DISPLAY_CARDS.map((card, displayIdx) => {
              const dist = Math.abs(displayIdx - virtualIndex);
              const isActive = dist === 0;
              const isAdjacent = dist === 1;

              return (
                <div
                  key={`${card.cloneSet}-${card.id}-${displayIdx}`}
                  onClick={() => navigateToVirtual(displayIdx)}
                  style={{ width: `${CARD_WIDTH}px` }}
                  className={`shrink-0 rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between min-h-[500px] cursor-pointer transition-all duration-600 ease-[cubic-bezier(0.25,1,0.35,1)] will-change-[transform,opacity] ${
                    isActive
                      ? "scale-105 bg-mp-parchment border border-mp-border shadow-lg z-10 opacity-100 visible pointer-events-auto"
                      : isAdjacent
                      ? "scale-95 bg-mp-parchment/80 border border-mp-border/60 shadow-2xs z-0 opacity-75 hover:opacity-95 visible pointer-events-auto"
                      : "scale-90 opacity-0 invisible pointer-events-none z-[-1]"
                  }`}
                >
                  <div>
                    {/* Media Graphic/Photo */}
                    <div className="relative h-[210px] sm:h-[230px] w-full rounded-[20px] overflow-hidden flex items-center justify-center">
                      {card.imageType === "cover" ? (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 310px, 370px"
                          className="object-cover object-center"
                        />
                      ) : (
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={260}
                          height={180}
                          className="max-h-[190px] w-auto object-contain"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-display text-[21px] sm:text-[23px] font-bold leading-[1.2] tracking-[-0.03em] text-mp-ink">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.6] text-mp-secondary">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-2">
                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full border border-mp-ink bg-transparent px-4 py-2 text-[12.5px] font-semibold text-mp-ink hover:bg-mp-petrol/[0.06] transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <span className="text-sm leading-none font-semibold">›</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------ Controls: Centered Dynamic Loading Dots & Right Arrows */}
        <div className="relative mt-10 sm:mt-12 w-full flex items-center justify-center">
          {/* Centered Pagination Dots with Smooth Progress Fill */}
          <div className="flex items-center justify-center gap-2.5 mx-auto">
            {cards.map((_, idx) => {
              const isActive = idx === realIndex;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectDot(idx)}
                  className={`relative h-2 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "w-12 sm:w-16 bg-mp-petrol/15"
                      : "w-2.5 bg-mp-petrol/20 hover:bg-mp-petrol/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {isActive && (
                    <span
                      className="absolute inset-y-0 left-0 bg-mp-petrol rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Circular Arrow Buttons */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-mp-ink/30 flex items-center justify-center text-mp-ink hover:border-mp-petrol hover:bg-mp-petrol/[0.06] transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <svg fill="none" viewBox="0 0 24 24" width="18" height="18" className="text-current">
                <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="currentColor" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-mp-ink/30 flex items-center justify-center text-mp-ink hover:border-mp-petrol hover:bg-mp-petrol/[0.06] transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <svg fill="none" viewBox="0 0 24 24" width="18" height="18" className="text-current">
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
