// Shared grammar for the lightweight inline markup used in seeded copy:
//   [label](/path/)  -> internal link
//   **text**         -> emphasis
//
// Two consumers must stay in lockstep:
//   - components/RichText.tsx renders it as JSX
//   - stripInlineMarkup() flattens it for contexts that take plain text only
//     (JSON-LD values, meta descriptions, anything non-HTML)
// Emitting the raw source into either place leaks `**` and `[](…)` to users
// and to search engines.

export const INLINE_TOKEN_SOURCE = String.raw`\[([^\]]+)\]\((\/[^)]*)\)|\*\*([^*]+)\*\*`;

/** A fresh RegExp per call — a shared one's lastIndex is unsafe across renders. */
export function inlineTokenPattern() {
  return new RegExp(INLINE_TOKEN_SOURCE, "g");
}

/**
 * Flattens inline markup to plain text, keeping the human-readable label and
 * discarding the syntax. Use anywhere the value is consumed as text rather
 * than rendered as HTML — notably JSON-LD, where raw `**` would be published
 * as part of the answer.
 */
export function stripInlineMarkup(text: string): string {
  // Tokens nest: `**[label](/path/) matters.**` is one bold token whose body
  // still holds a link. A single pass unwraps the bold and leaves the raw
  // `[label](/path/)` behind, so keep going until the text stops changing.
  // Every pass strictly shortens the string, so this always terminates.
  let out = text;
  for (let pass = 0; pass < 5; pass++) {
    const next = out.replace(inlineTokenPattern(), (_m, label, _href, strong) => label ?? strong ?? "");
    if (next === out) break;
    out = next;
  }
  return out;
}

/**
 * A card/teaser excerpt: strips inline markup FIRST, then truncates on a word
 * boundary and appends an ellipsis.
 *
 * Order matters. Truncating first can slice a link token in half and publish
 * `see [what actually drives cos…` — and card copy is normally rendered inside
 * a `<Link>`, where a nested `<a>` would be invalid HTML, so RichText is not an
 * option at those call sites. Stripping is.
 *
 * Use this instead of `value.slice(0, n).trimEnd() + "…"`.
 */
export function excerpt(text: string, maxChars: number): string {
  const flat = stripInlineMarkup(text).replace(/\s+/g, " ").trim();
  if (flat.length <= maxChars) return flat;

  const cut = flat.slice(0, maxChars);
  const lastSpace = cut.lastIndexOf(" ");
  // Honour the word boundary only when it isn't so early it guts the sentence.
  const body = lastSpace > maxChars * 0.6 ? cut.slice(0, lastSpace) : cut;
  // Trim trailing punctuation so we never emit ",…" or "—…".
  return body.replace(/[\s,;:.–—-]+$/, "") + "…";
}
