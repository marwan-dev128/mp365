"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user reduced motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize ultra-smooth Lenis scroll
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll events with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Scoped GSAP Scroll Animation Context
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Premium Section Headers Reveal (smooth elevation + fade)
      const headers = document.querySelectorAll(
        "[data-component='headerAnimatedValue'], [data-component='platformShowcaseHeader'], .feature-tabs-showcase > div:first-child, section > div > div.text-center"
      );
      headers.forEach((header) => {
        gsap.fromTo(
          header,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: header,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Premium Staggered Card Entrances (4-col feature cards, persona cards, etc.)
      const cardGrids = document.querySelectorAll(
        "[data-component='fourCardsContainer'] .grid, .feature-grid, .grid-cols-1.sm\\:grid-cols-2"
      );
      cardGrids.forEach((grid) => {
        const cards = grid.querySelectorAll(":scope > div");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.09,
              ease: "power2.out",
              scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // 3. Premium Interactive Showcase & Proof Panels
      const showcaseCards = document.querySelectorAll(
        ".showcase-panel, .proof-bar-panels, [data-component='featureTabsShowcase'] .rounded-\\[24px\\], [data-component='featureTabsShowcase'] .rounded-\\[28px\\]"
      );
      showcaseCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 4. Subtle Parallax Effect for visual media / videos
      const parallaxItems = document.querySelectorAll(
        ".showcase-panel video, [data-component='featureTabsShowcase'] video"
      );
      parallaxItems.forEach((media) => {
        gsap.to(media, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: media.parentElement || media,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    });

    // Cleanup on unmount
    return () => {
      ctx.revert();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On route changes, scroll smoothly to top and refresh ScrollTrigger
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
