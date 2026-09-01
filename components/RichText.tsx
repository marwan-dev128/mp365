import Link from "next/link";
import { Fragment } from "react";
import { inlineTokenPattern } from "@/lib/richtext";

// Grammar lives in lib/richtext.ts so this renderer and stripInlineMarkup()
// (used for JSON-LD) can never drift apart.

type Part =
  | { kind: "text"; value: string }
  | { kind: "link"; label: string; href: string }
  // Bold keeps its raw inner text so it can be parsed again — a lead-in like
  // `**[Data policies](/x/) are not exfiltration control.**` is one bold token
  // whose body contains a link, and a single flat pass would print that link
  // as literal `[label](/path)`.
  | { kind: "strong"; value: string };

function parse(text: string): Part[] {
  const pattern = inlineTokenPattern();
  const parts: Part[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) {
      parts.push({ kind: "text", value: text.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      parts.push({ kind: "link", label: match[1], href: match[2] });
    } else {
      parts.push({ kind: "strong", value: match[3] });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push({ kind: "text", value: text.slice(lastIndex) });

  return parts;
}

/**
 * Renders seeded copy with lightweight inline markup — just enough for
 * internal links and emphasis, without pulling in a full markdown renderer.
 *
 * Every place that renders authored copy must route through this. Rendering
 * `{item}` directly leaks raw `**` and `[label](/path)` onto the page and
 * silently drops the link.
 */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {parse(text).map((part, i) => {
        if (part.kind === "text") return <Fragment key={i}>{part.value}</Fragment>;
        if (part.kind === "strong")
          return (
            <strong key={i} className="font-semibold text-navy">
              <RichText text={part.value} />
            </strong>
          );
        return (
          <Link key={i} href={part.href} className="font-semibold text-azure hover:underline">
            {part.label}
          </Link>
        );
      })}
    </>
  );
}
