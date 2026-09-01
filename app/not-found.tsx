import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | MP365" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32 text-center">
      <p className="text-sm font-bold text-azure uppercase tracking-wide mb-3">404</p>
      <h1 className="text-3xl font-extrabold text-ink mb-4">We couldn&rsquo;t find that page</h1>
      <p className="text-ink-2 mb-8 max-w-md mx-auto">
        The page may have moved as part of our recent rebrand. Try the services overview or head back home.
      </p>
      <div className="flex justify-center gap-3">
        <Link href="/" className="rounded-md bg-azure px-5 py-2.5 text-sm font-bold text-white hover:bg-azure-hover transition-colors">
          Go home
        </Link>
        <Link href="/services/" className="rounded-md border border-line px-5 py-2.5 text-sm font-bold text-ink hover:bg-surface-card transition-colors">
          View services
        </Link>
      </div>
    </Container>
  );
}
