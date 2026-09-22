"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export interface RelatedTermItem {
  slug: string;
  term: string;
  shortDefinition?: string | null;
  primaryServiceSlug?: string | null;
}

export interface IndustryTermsCarouselProps {
  terms: RelatedTermItem[];
  industryName: string;
  autoplayDuration?: number;
}

const CARD_GAP = 24;
const DEFAULT_AUTOPLAY_DURATION = 7000;

const TERM_IMAGE_MAP: Record<string, string> = {
  // Purview, Compliance & Governance
  "microsoft-purview": "/images/services/data-governance.jpg",
  "data-loss-prevention-dlp": "/images/services/data-governance.jpg",
  "retention-policy": "/images/services/data-governance.jpg",
  "sensitivity-label": "/images/services/data-governance.jpg",
  "ediscovery-hold": "/images/solutions/data-analytics.jpg",
  "insider-risk-management": "/images/services/data-governance.jpg",
  "communication-compliance": "/images/services/data-governance.jpg",
  "audit-log": "/images/services/data-governance.jpg",
  "records-management": "/images/services/contract-management.jpg",

  // M&A, Separation & Migrations
  "tenant-to-tenant-migration": "/images/services/ma-tenant-migration.jpg",
  "cross-tenant-identity-mapping": "/images/services/microsoft-365-migration.jpg",
  "carve-out": "/images/services/ma-tenant-migration.jpg",
  "tsa-exit": "/images/services/ma-tenant-migration.jpg",
  "day-1-coexistence": "/images/services/collaboration-enablement.jpg",
  "cutover-migration": "/images/services/microsoft-365-migration.jpg",
  "staged-migration": "/images/services/microsoft-365-migration.jpg",
  "identity-synchronization": "/images/services/microsoft-365-migration.jpg",

  // Power Platform, Cloud & Dynamics
  "dataverse": "/images/services/power-platform.jpg",
  "premium-connector": "/images/services/power-platform.jpg",
  "power-platform-environment": "/images/services/power-platform.jpg",
  "business-central": "/images/services/dynamics-365.jpg",
  "dynamics-365-sales": "/images/services/dynamics-365.jpg",
  "dynamics-365-customer-service": "/images/services/dynamics-365.jpg",
  "power-automate": "/images/services/power-platform.jpg",
  "power-apps": "/images/services/power-platform.jpg",

  // Regulatory, Security & Defense
  "cmmc": "/images/services/data-governance.jpg",
  "gcc-high": "/images/services/data-governance.jpg",
  "cui": "/images/services/data-governance.jpg",
  "dfars": "/images/services/data-governance.jpg",
  "conditional-access": "/images/services/data-governance.jpg",
  "fips-140-2": "/images/services/data-governance.jpg",
};

function getTermImage(slug: string, primaryServiceSlug?: string | null): string {
  if (TERM_IMAGE_MAP[slug]) return TERM_IMAGE_MAP[slug];
  if (primaryServiceSlug) return `/images/services/${primaryServiceSlug}.jpg`;
  return "/images/services/data-governance.jpg";
}

export function IndustryTermsCarousel({
  terms,
  industryName,
  autoplayDuration = DEFAULT_AUTOPLAY_DURATION,
}: IndustryTermsCarouselProps) {
  const cards = terms.map((t) => ({
    id: t.slug,
    slug: t.slug,
    term: t.term,
    description:
      t.shortDefinition ||
      "Core architectural standard, regulatory requirement, and governance definition for enterprise Microsoft estates.",
    image: getTermImage(t.slug, t.primaryServiceSlug),
    href: `/resources/glossary/${t.slug}/`,
    linkText: "Read definition",
  }));

  const TOTAL_CARDS = cards.length;

  // Tripled sets for smooth infinite looping (minimum 9 cards to wrap cleanly)
  const repeatMultiplier = Math.max(3, Math.ceil(9 / Math.max(TOTAL_CARDS, 1)));
  const middleSet = Math.floor(repeatMultiplier / 2);

  const DISPLAY_CARDS = Array.from({ length: repeatMultiplier }, (_, setIdx) =>
    cards.map((c) => ({ ...c, cloneSet: setIdx }))
  ).flat();

  // Start at the first card of the middle set
  const [virtualIndex, setVirtualIndex] = useState(TOTAL_CARDS * middleSet);
  const [enableTransition, setEnableTransition] = useState(true);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Performance: pause loop when scrolled off-screen
  const { ref: viewRef, inView } = useInView<HTMLElement>();
  const viewportRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  // Touch gesture tracking for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const realIndex = TOTAL_CARDS > 0 ? ((virtualIndex % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS : 0;

  // Track viewport width for precise centering on both mobile and desktop
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
      if (isAnimatingRef.current || TOTAL_CARDS === 0) return;
      isAnimatingRef.current = true;
      setProgress(0);
      setEnableTransition(true);
      setVirtualIndex(targetVirtual);

      const targetReal = ((targetVirtual % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS;

      setTimeout(() => {
        isAnimatingRef.current = false;

        // Silent snap normalization if navigated into outer clone sets
        if (
          targetVirtual >= TOTAL_CARDS * (repeatMultiplier - 1) ||
          targetVirtual < TOTAL_CARDS
        ) {
          const normalizedIdx = TOTAL_CARDS * middleSet + targetReal;
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
    [TOTAL_CARDS, middleSet, repeatMultiplier]
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
    if (!inView || isPaused || TOTAL_CARDS <= 1) return;

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
  }, [handleNext, isPaused, virtualIndex, inView, autoplayDuration, TOTAL_CARDS]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setIsPaused(false);
  };

  if (TOTAL_CARDS === 0) return null;

  // Responsive card width calculation:
  const isMobile = containerWidth < 480;
  const cardWidth = isMobile ? Math.max(280, containerWidth - 48) : 370;
  const cardStep = cardWidth + CARD_GAP;
  const trackOffset = virtualIndex * cardStep - (containerWidth - cardWidth) / 2;

  return (
    <section
      ref={viewRef}
      aria-label={`Related glossary terms for ${industryName}`}
      className="w-full bg-white py-16 sm:py-24 border-b border-mp-border/60 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-2">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-14">
          <span className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.16em] text-mp-petrol-2">
            Compliance & Architecture Definitions
          </span>
          <h2 className="mt-2 font-display text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-mp-petrol">
            Related Microsoft Terms for {industryName}
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[16px] leading-relaxed text-mp-secondary max-w-2xl mx-auto">
            Definitive explanations of regulatory controls, compliance mechanisms, and tenant architecture standards relevant to this sector.
          </p>
        </div>

        {/* ------------------------------------------------ Infinite Card Viewport */}
        <div ref={viewportRef} className="mx-auto max-w-[1240px] overflow-hidden py-4">
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
                  style={{ width: `${cardWidth}px` }}
                  className={`group shrink-0 rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between min-h-[480px] sm:min-h-[510px] cursor-pointer transition-all duration-600 ease-[cubic-bezier(0.25,1,0.35,1)] will-change-[transform,opacity] ${
                    isActive
                      ? "scale-105 bg-mp-parchment border border-mp-border shadow-lg z-10 opacity-100 visible pointer-events-auto"
                      : isAdjacent
                      ? "scale-95 bg-mp-parchment/80 border border-mp-border/60 shadow-2xs z-0 opacity-75 hover:opacity-95 visible pointer-events-auto"
                      : "scale-90 opacity-0 invisible pointer-events-none z-[-1]"
                  }`}
                >
                  <div>
                    {/* Media Card Graphic with Hover Zoom */}
                    <div className="relative h-[190px] sm:h-[220px] w-full rounded-[20px] overflow-hidden bg-mp-petrol/5">
                      <Image
                        src={card.image}
                        alt={card.term}
                        fill
                        sizes="(max-width: 768px) 320px, 370px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-mp-petrol/85 backdrop-blur-md text-[11px] font-semibold text-white tracking-wide shadow-xs">
                        Glossary Term
                      </div>
                    </div>

                    {/* Term Title */}
                    <h3 className="mt-5 font-display text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.025em] text-mp-petrol">
                      {card.term}
                    </h3>

                    {/* Short Definition */}
                    <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.6] text-mp-secondary line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-2">
                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full border border-mp-petrol/40 bg-white/80 px-4 py-2 text-[12.5px] font-semibold text-mp-petrol hover:bg-mp-petrol hover:text-white hover:border-mp-petrol transition-all duration-200 shadow-2xs"
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

        {/* ------------------------------------------------ Controls: Progress Dots & Arrow Buttons */}
        <div className="relative mt-8 sm:mt-12 w-full flex items-center justify-center">
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
          <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-mp-ink/25 bg-white/70 flex items-center justify-center text-mp-ink hover:border-mp-petrol hover:bg-mp-petrol hover:text-white transition-all cursor-pointer shadow-2xs"
              aria-label="Previous slide"
            >
              <svg fill="none" viewBox="0 0 24 24" width="18" height="18" className="text-current">
                <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="currentColor" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-mp-ink/25 bg-white/70 flex items-center justify-center text-mp-ink hover:border-mp-petrol hover:bg-mp-petrol hover:text-white transition-all cursor-pointer shadow-2xs"
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
