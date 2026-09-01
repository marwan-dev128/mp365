import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { getSiteSettings, getPeople, getServices, getSolutions, getIndustries } from "@/lib/data";
import { BRAND_NAME, SITE_URL } from "@/lib/config";
import { stripInlineMarkup } from "@/lib/richtext";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    // SITE_URL, not settings.url — canonical URLs in lib/metadata.ts and every
    // @id in lib/schema.ts derive from SITE_URL, so metadataBase must use the
    // same origin or a DB edit would silently split the site across two hosts.
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${BRAND_NAME} — ${stripInlineMarkup(settings.tagline)}`,
      template: `%s | ${BRAND_NAME}`,
    },
    description: stripInlineMarkup(settings.description),
    openGraph: { siteName: BRAND_NAME, type: "website" },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
    // app/favicon.ico is picked up automatically; these declare the rest of
    // the generated set so Android/iOS get the right resolution.
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/site.webmanifest",
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [settings, people, services, solutions, industries] = await Promise.all([
    getSiteSettings(),
    getPeople(),
    getServices(),
    getSolutions(),
    getIndustries(),
  ]);

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full`}>
      {/*
        suppressHydrationWarning covers attributes injected into <body> by
        browser extensions before React hydrates — Grammarly's
        data-gr-ext-installed / data-new-gr-c-s-check-loaded are the common
        pair. The warning is about the extension, not our markup, and it only
        ever appears on a developer's machine.

        Scope note: this suppresses the attribute diff on <body> itself only.
        Child mismatches still warn normally, so a genuine hydration bug
        anywhere in the tree is not hidden by this.
      */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans antialiased"
      >
        <JsonLd data={organizationSchema(settings, people)} />
        <JsonLd data={websiteSchema(settings)} />
        {/* WCAG 2.4.1 Bypass Blocks — the announcement strip, logo, four
            dropdown triggers and their children all precede the content. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-azure focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to main content
        </a>
        <Header services={services} solutions={solutions} industries={industries} settings={settings} />
        <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-24 outline-none">
          {children}
        </main>
        <Footer services={services} settings={settings} />
      </body>
    </html>
  );
}
