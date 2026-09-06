"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import type { SiteSettings } from "@prisma/client";
import { gsap } from "gsap";
import { MicrosoftLogo, ChevronDown, Menu, Close, Phone } from "@/components/ui/Icons";
import { MegaMenuIcon } from "@/components/ui/MegaMenuIcons";
import type {
  AnnouncementData,
  BrandLogoData,
  NavLinkItem,
  MegaMenuGroup,
} from "@/types/navigation";
import defaultNav from "@/store/navigation.json";

export interface HeaderProps {
  announcement?: AnnouncementData;
  logo?: BrandLogoData;
  navLinks?: NavLinkItem[];
  megaMenuGroups?: MegaMenuGroup[];
  rightActions?: {
    login?: { label: string; href: string };
    primaryCta?: { label: string; href: string };
  };
  services?: { slug: string; shortName: string }[];
  solutions?: { slug: string; name: string }[];
  industries?: { slug: string; name: string }[];
  settings?: Partial<SiteSettings>;
}

export function Header({
  announcement = defaultNav.announcement,
  logo = defaultNav.logo,
  navLinks: _navLinks = defaultNav.navLinks,
  megaMenuGroups = (defaultNav as { megaMenuGroups?: MegaMenuGroup[] }).megaMenuGroups || [],
  rightActions = defaultNav.rightActions,
  services: _services,
  solutions: _solutions,
  industries: _industries,
  settings: _settings,
}: HeaderProps = {}) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [renderedGroup, setRenderedGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const prevGroupRef = useRef<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);

  const phoneNumber = announcement?.phone || "(+1) 860-208-9537";
  const phoneHref = announcement?.phoneHref || "tel:+18602089537";

  const closeAll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveGroup(null);
    setMobileOpen(false);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isClosingRef.current = false;
    setActiveGroup(id);
    setRenderedGroup(id);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveGroup(null);
    }, 180);
  };

  const handleToggle = (id: string) => {
    setActiveGroup((current) => {
      const next = current === id ? null : id;
      if (next) {
        isClosingRef.current = false;
        setRenderedGroup(next);
      }
      return next;
    });
  };

  // Handle smooth exit animation when activeGroup becomes null
  useEffect(() => {
    if (activeGroup) {
      isClosingRef.current = false;
      return;
    }

    // Smooth exit animation when activeGroup becomes null
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (renderedGroup && cardRef.current && !isClosingRef.current) {
      isClosingRef.current = true;
      if (prefersReducedMotion) {
        requestAnimationFrame(() => {
          setRenderedGroup(null);
          prevGroupRef.current = null;
          isClosingRef.current = false;
        });
      } else {
        gsap.killTweensOf(cardRef.current);
        gsap.to(cardRef.current, {
          opacity: 0,
          y: -10,
          scale: 0.985,
          duration: 0.18,
          ease: "power2.in",
          onComplete: () => {
            setRenderedGroup(null);
            prevGroupRef.current = null;
            isClosingRef.current = false;
          },
        });
      }
    }
  }, [activeGroup, renderedGroup]);

  // GSAP animation when renderedGroup mounts or switches to the next item
  useEffect(() => {
    if (!renderedGroup || !cardRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(cardRef.current, { opacity: 1, y: 0, scale: 1 });
      if (contentRef.current) gsap.set(contentRef.current, { opacity: 1, x: 0 });
      prevGroupRef.current = renderedGroup;
      return;
    }

    const prev = prevGroupRef.current;
    const wasOpen = prev !== null;

    if (!wasOpen) {
      // 1. Initial Opening Animation
      gsap.killTweensOf([cardRef.current]);
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: -12, scale: 0.985 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" }
      );

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll(".mega-menu-item");
        const feature = contentRef.current.querySelector(".mega-menu-feature");
        const bottom = cardRef.current.querySelector(".mega-menu-bottom");

        if (items.length) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.24, stagger: 0.015, ease: "power2.out", delay: 0.04 }
          );
        }
        if (feature) {
          gsap.fromTo(
            feature,
            { opacity: 0, scale: 0.96, x: 12 },
            { opacity: 1, scale: 1, x: 0, duration: 0.28, ease: "power3.out", delay: 0.05 }
          );
        }
      }
    } else if (prev !== renderedGroup) {
      // 2. Transitioning to Next Item in Header (Directional Slide)
      const prevIdx = megaMenuGroups.findIndex((g) => g.id === prev);
      const nextIdx = megaMenuGroups.findIndex((g) => g.id === renderedGroup);
      const direction = nextIdx >= prevIdx ? "right" : "left";
      const xOffset = direction === "right" ? 28 : -28;

      // Ensure card remains fully visible and settled
      gsap.killTweensOf(cardRef.current);
      gsap.set(cardRef.current, { opacity: 1, y: 0, scale: 1 });

      if (contentRef.current) {
        gsap.killTweensOf(contentRef.current);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: xOffset },
          { opacity: 1, x: 0, duration: 0.26, ease: "power3.out" }
        );

        const items = contentRef.current.querySelectorAll(".mega-menu-item");
        const feature = contentRef.current.querySelector(".mega-menu-feature");

        if (items.length) {
          gsap.killTweensOf(items);
          gsap.fromTo(
            items,
            { opacity: 0, x: xOffset * 0.35, y: 4 },
            { opacity: 1, x: 0, y: 0, duration: 0.22, stagger: 0.012, ease: "power2.out" }
          );
        }
        if (feature) {
          gsap.killTweensOf(feature);
          gsap.fromTo(
            feature,
            { opacity: 0, scale: 0.97, x: xOffset * 0.5 },
            { opacity: 1, scale: 1, x: 0, duration: 0.26, ease: "power3.out" }
          );
        }
      }
    }

    prevGroupRef.current = renderedGroup;
  }, [renderedGroup, megaMenuGroups]);

  // Keyboard accessibility: Escape closes menus
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeAll();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeAll]);

  // Click outside to close desktop menu
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [closeAll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const activeGroupData = megaMenuGroups.find((g) => g.id === renderedGroup);

  const getCardWidthClass = (group?: MegaMenuGroup) => {
    if (!group) return "max-w-[1380px] w-full";
    if (group.width === "compact" || group.columns.length === 1) {
      return "max-w-[840px]";
    }
    if (group.width === "medium" || group.columns.length === 2) {
      return "max-w-[1140px]";
    }
    return "max-w-[1380px] w-full";
  };

  return (
    <>
      {/* Announcement strip — Permanent Top Info Bar */}
      {announcement?.enabled !== false && announcement && (
        <div className="bg-mp-lime text-mp-petrol text-[13px] md:text-[13.5px]">
          <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-6 px-6 sm:px-10 lg:px-12 py-2.5 font-normal tracking-tight">
            <p className="text-mp-petrol text-center sm:text-left text-balance">
              {announcement.text}
            </p>
            <div className="flex shrink-0 items-center gap-4 sm:gap-6">
              {announcement.linkText && announcement.linkHref && (
                <Link
                  href={announcement.linkHref}
                  onClick={closeAll}
                  className="font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  {announcement.linkText}
                </Link>
              )}
              <a
                href={phoneHref}
                className="inline-flex items-center gap-1.5 font-bold text-mp-petrol hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-mp-petrol" />
                <span>{phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Sticky Header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-mp-parchment/95 backdrop-blur-md border-b border-black/[0.05]"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-6 sm:px-10 lg:px-12 py-3 sm:py-3.5">
          <div className="flex items-center gap-7 xl:gap-10">
            {/* Logo */}
            <Link
              href={logo.href}
              onClick={closeAll}
              className="flex items-start group select-none shrink-0"
            >
              <span className="font-display text-[27px] sm:text-[29px] font-bold tracking-[-0.03em] text-mp-ink leading-none">
                {logo.text}
              </span>
             
            </Link>

            {/* Desktop Navigation Triggers */}
            <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Primary">
              {megaMenuGroups.map((group) => {
                const isOpen = activeGroup === group.id;
                return (
                  <div
                    key={group.id}
                    className="relative py-1"
                    onMouseEnter={() => handleMouseEnter(group.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(group.id)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`group inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] font-semibold tracking-tight transition-all duration-200 ${
                        isOpen
                          ? "bg-mp-petrol text-white shadow-xs"
                          : "text-mp-ink hover:bg-black/[0.04] hover:text-mp-petrol"
                      }`}
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-mp-mint"
                            : "text-mp-ink/40 group-hover:text-mp-petrol"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Book a consultation CTA */}
            {rightActions?.primaryCta && (
              <Link
                href={rightActions.primaryCta.href}
                onClick={closeAll}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-mp-lime px-5 py-2.5 text-[13.5px] font-bold text-mp-ink hover:bg-mp-lime-hover transition-colors shadow-2xs"
              >
                <span>{rightActions.primaryCta.label}</span>
                <span className="text-[15px] leading-none font-semibold">›</span>
              </Link>
            )}

            {/* Get started button (secondary) */}
            <Link
              href="/contact/"
              onClick={closeAll}
              className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-mp-petrol bg-mp-petrol px-4.5 py-2.5 text-[13.5px] font-semibold text-mp-mint hover:bg-mp-petrol-2 hover:border-mp-petrol-2 transition-colors shadow-2xs"
            >
              <span>Get started</span>
              <span className="text-[15px] leading-none font-semibold">›</span>
            </Link>

            {/* Hamburger button (Mobile & Tablet) */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white/70 hover:bg-white text-mp-ink transition-colors lg:hidden shadow-2xs"
            >
              {mobileOpen ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown Panel */}
        {activeGroupData && (
          <div
            className="absolute top-full left-0 right-0 w-full pt-2.5 pb-8 z-50 pointer-events-auto"
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
              <div
                ref={cardRef}
                className={`overflow-hidden rounded-[28px] border border-black/10 bg-[#fdfdfc] p-7 sm:p-8 lg:p-9 shadow-[0_32px_80px_-16px_rgba(14,42,43,0.25),0_0_0_1px_rgba(0,0,0,0.04)] transition-[max-width] duration-300 ease-out ${getCardWidthClass(
                  activeGroupData
                )}`}
              >
                <div ref={contentRef} className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                  {/* Categorized Columns */}
                  <div
                    className={`flex-1 grid gap-y-7 ${
                      activeGroupData.columns.length === 1
                        ? "grid-cols-1 max-w-md gap-x-8"
                        : activeGroupData.columns.length === 2
                        ? "grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8"
                    }`}
                  >
                    {activeGroupData.columns.map((col) => (
                      <div key={col.title} className="flex flex-col">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-mp-parchment text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-mp-petrol/90 mb-3 w-fit border border-black/[0.04]">
                          {col.title}
                        </span>
                        <div className="flex flex-col gap-1">
                          {col.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeAll}
                              className="mega-menu-item group/item -mx-2.5 flex items-start gap-3.5 rounded-2xl p-2.5 hover:bg-mp-parchment/80 hover:shadow-2xs transition-all duration-200"
                            >
                              {/* Squircle Icon Badge */}
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-black/[0.06] text-mp-petrol group-hover/item:bg-mp-petrol group-hover/item:text-mp-mint group-hover/item:border-mp-petrol group-hover/item:scale-105 transition-all duration-200 shadow-2xs">
                                <MegaMenuIcon name={item.icon} className="h-4.5 w-4.5" />
                              </div>
                              {/* Item Text */}
                              <div className="flex flex-col flex-1 min-w-0 pt-0.5">
                                <span className="text-[13.5px] font-bold text-mp-ink group-hover/item:text-mp-petrol transition-colors">
                                  {item.label}
                                </span>
                                {item.description && (
                                  <span className="mt-0.5 text-[12px] leading-snug text-mp-secondary/90 line-clamp-2">
                                    {item.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Feature Card */}
                  {activeGroupData.featureCard && (
                    <div className="mega-menu-feature w-full lg:w-[330px] shrink-0">
                      <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-mp-petrol p-6 text-white min-h-[290px] h-full shadow-md border border-white/10">
                        {activeGroupData.featureCard.bgImage && (
                          <div className="absolute inset-0 z-0">
                            <Image
                              src={activeGroupData.featureCard.bgImage}
                              alt=""
                              fill
                              className="object-cover object-center brightness-[0.70] contrast-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-mp-petrol via-mp-petrol/85 to-mp-petrol/45" />
                          </div>
                        )}
                        <div className="relative z-10 flex flex-col items-start">
                          {activeGroupData.featureCard.tag && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-mp-mint/40 bg-mp-petrol/60 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-mp-mint backdrop-blur-xs">
                              <MicrosoftLogo className="h-3 w-3" />
                              <span>{activeGroupData.featureCard.tag}</span>
                            </span>
                          )}
                          <h4 className="mt-4 font-display text-[17px] font-bold leading-tight text-white">
                            {activeGroupData.featureCard.title}
                          </h4>
                          <p className="mt-2 text-[12.5px] leading-[1.6] text-white/85 line-clamp-3">
                            {activeGroupData.featureCard.description}
                          </p>
                        </div>
                        <div className="relative z-10 mt-6 pt-2">
                          <Link
                            href={activeGroupData.featureCard.href}
                            onClick={closeAll}
                            className="inline-flex items-center gap-1.5 rounded-full bg-mp-lime px-5 py-2.5 text-[13px] font-bold text-mp-ink hover:bg-mp-lime-hover transition-colors shadow-2xs"
                          >
                            <span>{activeGroupData.featureCard.ctaText}</span>
                            <span className="text-xs font-semibold">›</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-[55px] sm:top-[63px] bottom-0 z-50 bg-white/98 backdrop-blur-xl overflow-y-auto px-6 py-6 border-t border-black/8 flex flex-col justify-between lg:hidden">
            <div className="flex flex-col gap-1">
              {megaMenuGroups.map((group) => {
                const isExpanded = mobileExpanded === group.id;
                return (
                  <div key={group.id} className="border-b border-black/[0.06] py-2">
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : group.id)}
                      aria-expanded={isExpanded}
                      className="flex w-full items-center justify-between py-2 text-[15.5px] font-bold text-mp-ink"
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 text-mp-secondary ${
                          isExpanded ? "rotate-180 text-mp-petrol" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="flex flex-col gap-3 pl-2 pr-1 pt-2 pb-3">
                        {group.columns.map((col) => (
                          <div key={col.title} className="flex flex-col gap-1.5 pt-1">
                            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-mp-secondary/70">
                              {col.title}
                            </span>
                            {col.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeAll}
                                className="flex items-start gap-3 py-2"
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mp-parchment text-mp-petrol">
                                  <MegaMenuIcon name={item.icon} className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[13.5px] font-semibold text-mp-ink hover:text-mp-petrol">
                                    {item.label}
                                  </span>
                                  {item.description && (
                                    <span className="text-[11.5px] text-mp-secondary line-clamp-1">
                                      {item.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link
                          href={group.href}
                          onClick={closeAll}
                          className="mt-2 inline-flex items-center gap-1 text-[12.5px] font-bold text-mp-petrol underline underline-offset-4"
                        >
                          <span>View all {group.label}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="mt-8 pt-4 border-t border-black/[0.08] flex flex-col gap-3">
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-black/15 bg-mp-parchment py-3 text-[13.5px] font-bold text-mp-ink"
              >
                <Phone className="h-4 w-4 text-mp-petrol" />
                <span>{phoneNumber}</span>
              </a>
              <Link
                href="/contact/"
                onClick={closeAll}
                className="flex items-center justify-center gap-1.5 rounded-full bg-mp-lime py-3 text-[13.5px] font-bold text-mp-ink hover:bg-mp-lime-hover transition-colors shadow-2xs"
              >
                <span>Book a consultation</span>
                <span className="text-sm font-semibold">›</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop when desktop mega menu is open */}
      {activeGroup !== null && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-40 transition-opacity hidden lg:block"
          onClick={closeAll}
          aria-hidden="true"
        />
      )}
    </>
  );
}
