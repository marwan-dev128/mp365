import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | MP-365" },
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/services/", label: "Services" },
  { href: "/clients/", label: "Clients" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/contact/", label: "Contact" },
];

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-azure">404</p>
      <h1 className="mb-4 text-3xl font-extrabold text-ink">We could not find that page</h1>
      <p className="mx-auto mb-8 max-w-md text-ink-2">
        The page may have moved. These are good places to continue.
      </p>
      <nav aria-label="Suggested pages" className="flex flex-wrap justify-center gap-3">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-md border border-line px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-surface-card"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </Container>
  );
}
