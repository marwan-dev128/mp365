/**
 * The reference's signature dual-weight headline: an extrabold navy first
 * line, then a lighter slate continuation. Both halves are one heading for
 * assistive tech — the weight change is presentation, not structure.
 */
export function DualTitle({
  bold,
  light,
  as: Tag = "h2",
  className,
}: {
  bold: string;
  light?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={`font-display text-[clamp(28px,3.6vw,42px)] leading-[1.12] tracking-[-0.03em] ${className ?? ""}`}
    >
      <span className="block font-extrabold text-navy">{bold}</span>
      {light && <span className="block font-medium text-ink-2">{light}</span>}
    </Tag>
  );
}
