/**
 * Serializes a JSON-LD payload for injection into a <script> element.
 *
 * `JSON.stringify` leaves `<` raw, so a `</script` sequence anywhere in the
 * data (every schema field traces back to an editor-writable @db.Text column)
 * would terminate the script element early per the HTML spec's raw-text
 * rules — silently dropping the entire block's structured data and turning
 * the remainder into live DOM. `<` is a valid JSON escape that parses
 * back to `<`, so escaping it changes nothing semantically.
 *
 * Lives in lib/ rather than beside the component so it is importable from
 * the Node test runner without pulling in React/JSX.
 */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
