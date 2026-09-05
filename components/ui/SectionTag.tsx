/**
 * Perk-style category eyebrow pill: weight 500, 11px uppercase label with
 * generous 0.1em tracking in a rounded-full pill container.
 */
export function SectionTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface-light px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-navy ${className}`}>
      <span
        aria-hidden="true"
        className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-azure text-[9px] font-bold text-white"
      >
        +
      </span>
      <span>{children}</span>
    </div>
  );
}

