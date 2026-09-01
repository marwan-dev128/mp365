import Image from "next/image";

/**
 * The official MP365 brand lockup.
 *
 * The artwork already contains the "MP 365 / INTEGRATED DIGITAL SERVICES"
 * wordmark, so no text is rendered alongside it — a second wordmark would
 * duplicate what the image already says.
 *
 * Because the type inside the artwork is dark grey, `inverse` places it on a
 * white plate for dark surfaces rather than filtering it (a filter would
 * flatten the blue in the globe).
 */
export function Logo({
  className,
  inverse = false,
}: {
  className?: string;
  /** Use on dark surfaces (footer, dark bands). */
  inverse?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center ${
        inverse ? "rounded-[12px] bg-white px-3 py-2" : ""
      } ${className ?? ""}`}
    >
      <Image
        src="/logo-brand.png"
        alt="MP 365 — Integrated Digital Services"
        width={1182}
        height={556}
        priority
        sizes="(max-width: 640px) 120px, 150px"
        className="h-12 w-auto object-contain sm:h-14"
      />
    </span>
  );
}
