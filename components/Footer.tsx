import Link from "next/link";

export function Footer({
  services: _services,
  settings: _settings,
}: {
  services?: unknown;
  settings?: unknown;
} = {}) {
  const year = 2026;

  return (
    <footer className="w-full">
      {/* 1. Electric Lime Core Section */}
      <div className="w-full bg-[#beff50] text-[#14140f] pt-14 sm:pt-16 pb-0 overflow-hidden">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8">
          {/* Top Assistance & Social Row */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-[#14140f]/15">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <span className="font-display text-[24px] sm:text-[28px] font-extrabold tracking-[-0.03em] text-[#14140f]">
                How can we help?
              </span>
              <div className="flex items-center gap-6 text-[14.5px] font-semibold text-[#14140f]">
                <Link href="/contact/" className="hover:underline underline-offset-4">
                  Contact us
                </Link>
                <Link href="/resources/glossary/" className="hover:underline underline-offset-4">
                  Help center
                </Link>
                <Link href="/contact/" className="hover:underline underline-offset-4">
                  Status
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Social Icons - Round Black */}
              <div className="flex items-center gap-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/perk"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14140f] text-[#beff50] hover:opacity-85 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14140f] text-[#beff50] hover:opacity-85 transition-opacity"
                  aria-label="X"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14140f] text-[#beff50] hover:opacity-85 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14140f] text-[#beff50] hover:opacity-85 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14140f] text-[#beff50] hover:opacity-85 transition-opacity"
                  aria-label="YouTube"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14140f] text-[#beff50] hover:opacity-85 transition-opacity"
                  aria-label="TikTok"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>

              {/* Get the app Apple pill */}
              <a
                href="https://apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#14140f] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-black/90 transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.7-7.97-12.04-14.67-6.08-9.42-10.96-20.2-14.64-32.33-3.68-12.13-5.52-23.72-5.52-34.77 0-14.53 3.68-26.69 11.05-36.49 7.37-9.8 16.7-14.82 27.99-15.06 4.93 0 10.37 1.34 16.32 4.02 5.95 2.68 9.87 4.07 11.75 4.18 1.54 0 5.64-1.46 12.31-4.38 6.67-2.92 12.51-4.23 17.52-3.94 13.06.74 23.4 5.73 31.02 14.97-11.45 6.94-17.06 16.48-16.82 28.61.24 9.53 3.86 17.65 10.86 24.36 7 6.71 15.22 10.61 24.67 11.7-2.12 6.47-4.7 13.1-7.74 19.89zm-38.39-105.74c0-7.37 2.68-14.28 8.04-20.73 5.36-6.45 12.02-10.45 19.98-12.02.24 1.3.36 2.47.36 3.52 0 7.37-2.73 14.39-8.19 21.05-5.46 6.66-12.18 10.55-20.16 11.68-.03-1.17-.03-2.34-.03-3.5z" />
                </svg>
                <span>Get the app</span>
              </a>

              {/* Language Selector */}
              <div className="flex items-center gap-2 rounded-full border border-[#14140f]/20 bg-transparent px-3.5 py-1.5 text-xs font-bold text-[#14140f] cursor-pointer hover:bg-black/5 transition-colors">
                <span>🌐</span>
                <span>English</span>
                <span className="text-[10px]">∨</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-[13.5px]">
            {/* Col 1: Solutions & Add-ons */}
            <div>
              <p className="font-bold text-[#14140f] mb-3 text-[14px]">Solutions</p>
              <ul className="flex flex-col gap-2 text-[#14140f]/80">
                <li><Link href="/contact/" className="hover:text-black hover:underline">Finance teams</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Travel managers</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Travelers</Link></li>
              </ul>

              <p className="font-bold text-[#14140f] mt-8 mb-3 text-[14px]">Add-ons</p>
              <ul className="flex flex-col gap-2 text-[#14140f]/80">
                <li><Link href="/contact/" className="hover:text-black hover:underline">Integrations</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">FlexiTravel</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Green Trip</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">VIP Experience</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Group Trip</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Invoice</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Perk Card</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Lodge Card</Link></li>
              </ul>
            </div>

            {/* Col 2: Product */}
            <div>
              <p className="font-bold text-[#14140f] mb-3 text-[14px]">Product</p>
              <ul className="flex flex-col gap-2 text-[#14140f]/80">
                <li><Link href="/contact/" className="hover:text-black hover:underline">Expense</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Pay</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Spend management</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Events</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">24/7 support</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Travel alerts</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Flights</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Rail</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Accommodation</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Car rental</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Traveler tracker</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Policies and approvals</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Duty of Care</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Travel reporting</Link></li>
              </ul>
            </div>

            {/* Col 3: Resources & Research */}
            <div>
              <p className="font-bold text-[#14140f] mb-3 text-[14px]">Resources</p>
              <ul className="flex flex-col gap-2 text-[#14140f]/80">
                <li><Link href="/resources/glossary/" className="hover:text-black hover:underline">Corporate travel resources</Link></li>
                <li><Link href="/resources/glossary/" className="hover:text-black hover:underline">Corporate travel glossary</Link></li>
                <li><Link href="/blog/" className="hover:text-black hover:underline">Blog</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Compliance center</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Developer doc</Link></li>
              </ul>

              <p className="font-bold text-[#14140f] mt-8 mb-3 text-[14px]">Research</p>
              <ul className="flex flex-col gap-2 text-[#14140f]/80">
                <li><Link href="/contact/" className="hover:text-black hover:underline">Expense Fraud report</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">The cost of shadow work</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Value of business travel report</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Travel disruption survey</Link></li>
              </ul>
            </div>

            {/* Col 4: Services & About */}
            <div>
              <p className="font-bold text-[#14140f] mb-3 text-[14px]">Services</p>
              <ul className="flex flex-col gap-2 text-[#14140f]/80">
                <li><Link href="/contact/" className="hover:text-black hover:underline">Travel booking</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Travel software</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">SME travel management</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Travel expense management software</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">Finance transformation</Link></li>
              </ul>

              <p className="font-bold text-[#14140f] mt-8 mb-3 text-[14px]">About</p>
              <ul className="flex flex-col gap-2 text-[#14140f]/80">
                <li><Link href="/about/" className="hover:text-black hover:underline">Company</Link></li>
                <li><Link href="/about/" className="hover:text-black hover:underline">Careers</Link></li>
                <li><Link href="/about/" className="hover:text-black hover:underline">Partner program</Link></li>
                <li><Link href="/case-studies/" className="hover:text-black hover:underline">Customers</Link></li>
                <li><Link href="/contact/" className="hover:text-black hover:underline">User reviews</Link></li>
                <li><Link href="/about/" className="hover:text-black hover:underline">Media center</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Huge Animated Marquee: Powering real work */}
        <div className="relative w-full overflow-hidden border-t border-[#14140f]/15 py-8 select-none">
          <div className="mp-animate-marquee flex items-center gap-10 whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="font-display text-[75px] sm:text-[130px] font-black tracking-[-0.04em] text-[#14140f] leading-none shrink-0"
              >
                Powering real work
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Off-White Bottom Legal Section */}
      <div className="w-full bg-[#f5f5eb] text-[#14140f] pt-12 pb-16 border-t border-[#e0e0d2]">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-10 border-b border-[#e0e0d2]">
            {/* Logo and Copyright */}
            <div>
              <span className="font-display text-[32px] font-extrabold tracking-[-0.04em] text-[#14140f]">
                perk<sup className="text-[#14140f] text-[20px] top-[-0.3em] font-bold">+</sup>
              </span>
              <p className="mt-2 text-xs font-semibold text-[#14140f]/70">
                © {year} Perk
              </p>
            </div>

            {/* 3 Columns of Legal Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[12.5px] text-[#14140f]/80">
              <div className="flex flex-col gap-2">
                <Link href="/privacy/" className="hover:underline hover:text-black">
                  Cookies policy
                </Link>
                <Link href="/about/" className="hover:underline hover:text-black">
                  Modern slavery act | statement
                </Link>
                <Link href="/terms/" className="hover:underline hover:text-black">
                  Legal
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <Link href="/terms/" className="hover:underline hover:text-black">
                  Cardholder terms
                </Link>
                <Link href="/about/" className="hover:underline hover:text-black">
                  Trust center
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <Link href="/about/" className="hover:underline hover:text-black">
                  Imprint
                </Link>
                <Link href="/privacy/" className="hover:underline hover:text-black">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>

          {/* EEA / UK Regulatory Disclaimer */}
          <div className="pt-8 text-[11px] leading-[1.65] text-[#66665e]">
            <p>
              Cards provided to EEA residents are issued by Transact Payments Malta Limited and cards provided to UK residents are issued by Transact Payments Limited pursuant to licence by Visa Europe Limited. Transact Payments Malta Limited is duly authorised and regulated by the Malta Financial Services Authority as a Financial Institution under the Financial Institution Act 1994. Registration number C 91879. Transact Payments Limited is authorised and regulated by the Gibraltar Financial Service Commission.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
