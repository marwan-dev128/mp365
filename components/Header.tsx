"use client";

import Link from "next/link";
import { useState } from "react";
import type { SiteSettings } from "@prisma/client";

export function Header({
  services: _services,
  solutions: _solutions,
  industries: _industries,
  settings: _settings,
}: {
  services: { slug: string; shortName: string }[];
  solutions: { slug: string; name: string }[];
  industries: { slug: string; name: string }[];
  settings: Pick<SiteSettings, "phone" | "phoneDisplay" | "email">;
}) {
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      {/* Announcement strip — exact Perk electric lime */}
      {bannerVisible && (
        <div className="bg-[#beff50] text-[#14140f] text-[13px] md:text-[13.5px]">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12 py-2.5 font-normal tracking-tight">
            <p className="text-[#14140f]">
              Be one of the first to bring spend and travel together on one platform. Available in the US in September.
            </p>
            <div className="flex shrink-0 items-center gap-4 ml-4">
              <Link
                href="/contact/"
                className="font-medium underline underline-offset-2 hover:opacity-75 transition-opacity"
              >
                Join the waitlist now.
              </Link>
              <button
                type="button"
                onClick={() => setBannerVisible(false)}
                className="text-[#14140f] hover:opacity-60 transition-opacity p-0.5 cursor-pointer"
                aria-label="Dismiss announcement"
              >
                <svg className="w-3.5 h-3.5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-[#f5f5eb]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-12 py-4">
          <div className="flex items-center gap-10 xl:gap-12">
            {/* Logo perk+ */}
            <Link href="/" className="flex items-start group select-none">
              <span className="font-display text-[29px] font-bold tracking-[-0.03em] text-[#14140f] leading-none">
                perk
              </span>
              <span className="text-[19px] font-bold text-[#14140f] leading-none -mt-1 ml-0.5">
                +
              </span>
            </Link>

            {/* Nav Links */}
            <nav className="hidden items-center gap-7 lg:gap-8 xl:flex" aria-label="Primary">
              <Link
                href="/services/"
                className="text-[14px] font-medium text-[#14140f] transition-opacity hover:opacity-70"
              >
                Product
              </Link>
              <Link
                href="/solutions/"
                className="text-[14px] font-medium text-[#14140f] transition-opacity hover:opacity-70"
              >
                Solutions
              </Link>
              <Link
                href="/case-studies/"
                className="text-[14px] font-medium text-[#14140f] transition-opacity hover:opacity-70"
              >
                Customers
              </Link>
              <Link
                href="/pricing/"
                className="text-[14px] font-medium text-[#14140f] transition-opacity hover:opacity-70"
              >
                Pricing
              </Link>
              <Link
                href="/services/power-platform/"
                className="text-[14px] font-medium text-[#14140f] transition-opacity hover:opacity-70"
              >
                Integrations
              </Link>
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
            {/* Language Selector */}
            <button
              type="button"
              className="flex items-center gap-1 text-[#14140f] hover:opacity-70 transition-opacity cursor-pointer p-1"
              aria-label="Select language"
            >
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <svg
                className="w-3 h-3 stroke-[2.2]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Book a demo */}
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#beff50] px-5 py-2.5 text-[13.5px] font-medium text-[#14140f] hover:bg-[#b0f53d] transition-colors"
            >
              <span>Book a demo</span>
              <span className="text-[15px] leading-none font-semibold">›</span>
            </Link>

            {/* Get started */}
            <Link
              href="/contact/"
              className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#14140f] bg-transparent px-5 py-2.5 text-[13.5px] font-medium text-[#14140f] hover:bg-black/5 transition-colors"
            >
              <span>Get started</span>
              <span className="text-[15px] leading-none font-semibold">›</span>
            </Link>

            {/* User Login Icon */}
            <Link
              href="/contact/"
              className="p-1 text-[#14140f] hover:opacity-70 transition-opacity ml-1"
              aria-label="User account"
            >
              <svg className="w-[19px] h-[19px] fill-[#14140f]" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </Link>

            {/* Menu Icon (two parallel horizontal bars) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-1 text-[#14140f] hover:opacity-70 transition-opacity cursor-pointer"
            >
              {open ? (
                <svg className="w-5 h-5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menu Drawer */}
        {open && (
          <div className="border-t border-[#14140f]/10 bg-[#f5f5eb] px-6 sm:px-10 lg:px-12 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#14140f]/50 mb-3">Product</h4>
                <ul className="space-y-2 text-sm font-medium text-[#14140f]">
                  <li><Link href="/services/" onClick={() => setOpen(false)} className="hover:underline">Travel Management</Link></li>
                  <li><Link href="/services/" onClick={() => setOpen(false)} className="hover:underline">Expense & Spend</Link></li>
                  <li><Link href="/services/" onClick={() => setOpen(false)} className="hover:underline">Corporate Cards</Link></li>
                  <li><Link href="/services/" onClick={() => setOpen(false)} className="hover:underline">Events & Meetings</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#14140f]/50 mb-3">Solutions</h4>
                <ul className="space-y-2 text-sm font-medium text-[#14140f]">
                  <li><Link href="/solutions/" onClick={() => setOpen(false)} className="hover:underline">Global Enterprises</Link></li>
                  <li><Link href="/solutions/" onClick={() => setOpen(false)} className="hover:underline">Fast-growing Teams</Link></li>
                  <li><Link href="/solutions/" onClick={() => setOpen(false)} className="hover:underline">Finance Operations</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#14140f]/50 mb-3">Company</h4>
                <ul className="space-y-2 text-sm font-medium text-[#14140f]">
                  <li><Link href="/case-studies/" onClick={() => setOpen(false)} className="hover:underline">Customers</Link></li>
                  <li><Link href="/pricing/" onClick={() => setOpen(false)} className="hover:underline">Pricing</Link></li>
                  <li><Link href="/contact/" onClick={() => setOpen(false)} className="hover:underline">Contact & Careers</Link></li>
                </ul>
              </div>
              <div className="bg-[#beff50] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14140f]/70">Ready to transform?</span>
                  <h3 className="text-lg font-bold text-[#14140f] mt-1">Experience Perk in action</h3>
                </div>
                <Link
                  href="/contact/"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#14140f] px-5 py-2.5 text-sm font-bold text-white hover:bg-black transition-colors"
                >
                  Book a demo →
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
