/**
 * The small azure eyebrow above a section heading — a filled square glyph
 * plus uppercase label. From the reference's `.mp-badge-tag`.
 */
export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-azure mb-4">
      <span
        aria-hidden="true"
        className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-azure text-[10px] font-black text-white"
      >
        +
      </span>
      {children}
    </p>
  );
}
