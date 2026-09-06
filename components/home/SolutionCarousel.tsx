"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

import defaultData from "@/store/home/solutions.json";
import { useInView } from "@/hooks/useInView";

export interface ExpandableSlideItem {
  id: string;
  pill: string;
  title: string;
  description: string;
  href: string;
  videoSrc: string;
  videoPoster?: string;
}

export interface SolutionCarouselProps {
  slides?: ExpandableSlideItem[];
  autoplayDuration?: number;
}

const DEFAULT_SLIDES: ExpandableSlideItem[] = defaultData.slides;
const DEFAULT_AUTOPLAY_DURATION = defaultData.autoplayDuration || 6500;

const PHASE1_SLIDE_DURATION = 750; // time to slide previous card away & move next card into place (ms)
const PHASE2_EXPAND_DURATION = 750; // time to expand the card width to 860px (ms)

const DESKTOP_COLLAPSED_WIDTH = 420;
const DESKTOP_GAP = 20;

export function SolutionCarousel({
  slides = DEFAULT_SLIDES,
  autoplayDuration = DEFAULT_AUTOPLAY_DURATION,
}: SolutionCarouselProps = {}) {
  const TOTAL_SLIDES = slides.length;

  // Triple the slides for seamless forward/backward infinite looping
  const DISPLAY_SLIDES = [
    ...slides.map((s) => ({ ...s, cloneSet: 0 })),
    ...slides.map((s) => ({ ...s, cloneSet: 1 })),
    ...slides.map((s) => ({ ...s, cloneSet: 2 })),
  ];
  // Start at the beginning of the middle set (index 7)
  const [virtualIndex, setVirtualIndex] = useState(TOTAL_SLIDES);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Perf: stop the autoplay loop entirely while this section is off-screen.
  const { ref: viewRef, inView } = useInView<HTMLElement>();
  const [isAnimating, setIsAnimating] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  const phaseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const snapTimerRef = useRef<NodeJS.Timeout | null>(null);

  const realIndex = ((virtualIndex % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;

  // Two-phase transition sequence with infinite normalization
  const transitionToVirtual = useCallback(
    (targetVirtualIdx: number) => {
      if (isAnimating) return;
      if (targetVirtualIdx === virtualIndex && expandedIndex !== null) return;

      setIsAnimating(true);
      setEnableTransition(true);
      setProgress(0);

      // Phase 1: Collapse current card and shift track to target virtual index
      setExpandedIndex(null);
      setVirtualIndex(targetVirtualIdx);

      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);

      const targetReal = ((targetVirtualIdx % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;

      // Phase 2: After slide completes (~750ms), expand target card
      phaseTimerRef.current = setTimeout(() => {
        setExpandedIndex(targetReal);
        setIsAnimating(false);

        // Silent snap normalization after Phase 2 expansion
        snapTimerRef.current = setTimeout(() => {
          // If we ventured into the 3rd set (>= 14) or 1st set (< 7), silently snap back to middle set
          if (targetVirtualIdx >= TOTAL_SLIDES * 2 || targetVirtualIdx < TOTAL_SLIDES) {
            const normalizedIdx = TOTAL_SLIDES + targetReal;
            setEnableTransition(false);
            setVirtualIndex(normalizedIdx);

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setEnableTransition(true);
              });
            });
          }
        }, PHASE2_EXPAND_DURATION);
      }, PHASE1_SLIDE_DURATION);
    },
    [expandedIndex, isAnimating, virtualIndex]
  );

  const handlePrev = useCallback(() => {
    transitionToVirtual(virtualIndex - 1);
  }, [transitionToVirtual, virtualIndex]);

  const handleNext = useCallback(() => {
    transitionToVirtual(virtualIndex + 1);
  }, [transitionToVirtual, virtualIndex]);

  const handleSelectDot = useCallback(
    (dotIdx: number) => {
      if (dotIdx === realIndex && expandedIndex === dotIdx) return;
      // Calculate shortest distance from current real index to target dot
      const diff = dotIdx - realIndex;
      transitionToVirtual(virtualIndex + diff);
    },
    [expandedIndex, realIndex, transitionToVirtual, virtualIndex]
  );

  // High-precision smooth progress loader using requestAnimationFrame
  useEffect(() => {
    if (!inView || isPaused || isAnimating || expandedIndex === null) {
      return;
    }

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
        // Automatically go to the next slide infinitely
        handleNext();
      }
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
      }
    };
  }, [expandedIndex, handleNext, isAnimating, isPaused, inView]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
    };
  }, []);

  // Compute precise track offset based on virtualIndex
  const trackOffset = virtualIndex * (DESKTOP_COLLAPSED_WIDTH + DESKTOP_GAP);

  return (
    <section
      ref={viewRef}
      className="w-full bg-white py-16 sm:py-24 overflow-hidden"
      data-component="expandableCarousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-6xl text-center mb-12 sm:mb-16">
          <h2 className="font-display text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-mp-petrol">
            Eight services,
            <br />
            one Microsoft stack.
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-[15px] sm:text-[16px] leading-[1.55] text-mp-secondary font-normal">
            Tenant migrations, Dynamics 365, Power Platform, governance, app modernization, collaboration and contract flow. Each one you can buy on its own.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------ Animated Carousel Viewport (Infinite Loop) */}
      <div className="w-full relative overflow-hidden">
        <div className="overflow-hidden ml-5 sm:ml-8 lg:ml-[max(3rem,calc((100vw-1440px)/2+3rem))]">
          <div
            className={`flex items-stretch ${
              enableTransition
                ? "transition-transform duration-[750ms] ease-[cubic-bezier(0.25,1,0.35,1)]"
                : ""
            } will-change-transform`}
            style={{
              transform: `translate3d(-${trackOffset}px, 0px, 0px)`,
              gap: `${DESKTOP_GAP}px`,
            }}
          >
            {DISPLAY_SLIDES.map((slide, displayIdx) => {
              const isCurrent = displayIdx === virtualIndex;
              const isExpanded = isCurrent && expandedIndex !== null;
              const isPast = displayIdx < virtualIndex;

              return (
                <div
                  key={`${slide.cloneSet}-${slide.id}-${displayIdx}`}
                  onClick={() => transitionToVirtual(displayIdx)}
                  className={`group shrink-0 relative bg-[#F1EBDF] h-[460px] md:h-[430px] rounded-[24px] md:rounded-[28px] overflow-hidden cursor-pointer ${
                    enableTransition
                      ? "transition-[width,opacity,border-color,box-shadow] duration-[750ms] ease-[cubic-bezier(0.25,1,0.35,1)]"
                      : ""
                  } will-change-[width,opacity] ${
                    isExpanded
                      ? "w-[min(420px,100vw-40px)] md:w-[860px] border-2 border-mp-lime shadow-sm"
                      : "w-[min(420px,100vw-40px)] md:w-[420px] border-2 border-transparent hover:border-mp-border"
                  } ${isPast ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                  data-expanded={isExpanded}
                  data-current={isCurrent}
                >
                  {/* Left Column Content */}
                  <div className="flex flex-col justify-between h-full p-6 md:p-8 max-w-[340px] z-[2]">
                    {/* Top Pill */}
                    <div className="shrink-0 mb-auto rounded-full border border-mp-ink/20 bg-white/80 backdrop-blur-xs py-1.5 px-3 w-fit flex items-center gap-1.5 shadow-2xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        className="size-2.5 text-mp-ink"
                        fill="currentColor"
                      >
                        <path d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z" />
                        <path d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z" />
                      </svg>
                      <span className="text-mp-ink text-[11px] font-mono font-medium uppercase tracking-[0.1em]">
                        {slide.pill}
                      </span>
                    </div>

                    {/* Bottom Title & Expandable Details */}
                    <div>
                      <h4 className="font-display text-[20px] md:text-[23px] font-bold text-mp-ink leading-[1.2] tracking-[-0.02em] whitespace-pre-line">
                        {slide.title}
                      </h4>

                      {/* Expandable Paragraph & Link */}
                      <div
                        className={`transition-all duration-[750ms] ease-[cubic-bezier(0.25,1,0.35,1)] overflow-hidden ${
                          isExpanded ? "max-h-[160px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p className="text-[13.5px] md:text-[14px] leading-[1.55] text-mp-secondary font-normal">
                          {slide.description}
                        </p>
                        <div className="mt-4 flex items-center">
                          <Link
                            href={slide.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[13px] md:text-[13.5px] font-bold text-mp-ink underline underline-offset-4 hover:opacity-75 transition-opacity"
                          >
                            <span>Read more</span>
                            <span className="text-sm font-normal">›</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Video Mockup (Smooth Opacity & Scale Transition in Phase 2) */}
                  <div
                    className={`hidden md:flex absolute right-0 bottom-0 top-0 w-[460px] h-full items-center justify-end overflow-hidden rounded-tl-[24px] transition-all duration-[750ms] ease-[cubic-bezier(0.25,1,0.35,1)] ${
                      isExpanded
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {/* Perf: the carousel renders 3 clone sets, so eagerly loading every
                        slide's clip pulled ~6MB before the section was even scrolled to.
                        Only the expanded slide gets a src; the rest show the poster. */}
                    <video
                      src={isExpanded ? slide.videoSrc : undefined}
                      poster={slide.videoPoster}
                      autoPlay={isExpanded}
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-hidden="true"
                      className="w-full h-full object-cover object-left rounded-tl-[24px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ Bottom Controls: Dots Progress + Arrow Buttons */}
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4 mt-8 sm:mt-12 flex items-center justify-center">
        {/* Centered Dynamic Progress Indicators (Always 7 Dots) */}
        <div className="flex items-center gap-2.5 justify-center">
          {slides.map((slide, idx) => {
            const isActive = idx === realIndex;

            return (
              <button
                key={slide.id}
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

        {/* Previous / Next Arrow Buttons (Aligned on the right) */}
        <div className="hidden md:flex absolute right-5 sm:right-8 lg:right-12 items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-mp-ink/25 flex items-center justify-center text-mp-ink hover:bg-mp-petrol/[0.06] hover:border-mp-petrol transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <svg fill="none" viewBox="0 0 24 24" width="18" height="18" className="text-current">
              <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-mp-ink/25 flex items-center justify-center text-mp-ink hover:bg-mp-petrol/[0.06] hover:border-mp-petrol transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <svg fill="none" viewBox="0 0 24 24" width="18" height="18" className="text-current">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
