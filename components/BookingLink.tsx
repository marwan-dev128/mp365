import { Calendar } from "@/components/ui/Icons";

/** The public booking page (Microsoft Bookings or similar), if configured. */
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "";

/**
 * "Book a call" link for the visitors who would rather pick a slot than wait
 * for a reply. Renders nothing until NEXT_PUBLIC_BOOKING_URL is set, so it can
 * sit in templates before the calendar exists. Clicks report `booking_click`
 * through the site-wide ClickTracker.
 */
export function BookingLink({
  source,
  industry,
  label = "Book a 20-minute call",
  variant = "outline",
  className = "",
}: {
  source: string;
  industry?: string;
  label?: string;
  variant?: "outline" | "light" | "text";
  className?: string;
}) {
  if (!BOOKING_URL || !/^https:\/\//.test(BOOKING_URL)) return null;
  const styles = {
    outline:
      "inline-flex items-center justify-center gap-2 rounded-full border border-mp-border bg-white px-6 py-3 text-sm font-bold text-mp-petrol transition-colors hover:border-mp-petrol/40",
    light:
      "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-white/20",
    text: "inline-flex items-center gap-1.5 text-[13.5px] font-bold text-mp-petrol underline underline-offset-4 hover:text-azure",
  }[variant];
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener"
      data-track="booking_click"
      data-track-source={source}
      data-track-industry={industry}
      className={`${styles} ${className}`}
    >
      <Calendar className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}
