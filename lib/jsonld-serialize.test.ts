import { test } from "node:test";
import assert from "node:assert/strict";
import { serializeJsonLd } from "./jsonld-serialize";

// Regression tests for the script-breakout defect found in the schema audit:
// JSON.stringify leaves `<` raw, so a `</script` sequence in any DB-sourced
// field would terminate the <script> element early and silently drop the
// whole JSON-LD block.

test("escapes a literal </script> so it cannot close the script element", () => {
  const out = serializeJsonLd({ name: "A </script><img src=x onerror=alert(1)> B" });
  assert.ok(!out.includes("</script>"), "must not contain a literal </script>");
  assert.ok(!out.includes("<"), "must not contain any raw < character");
});

test("escapes every < regardless of case or spacing of the closing tag", () => {
  // Per the HTML spec the raw-text end tag match is case-insensitive and
  // permits whitespace/slash after the name, so `</ScRiPt >` also closes it.
  for (const payload of ["</ScRiPt >", "</script\t>", "</script/", "<!--", "<"]) {
    const out = serializeJsonLd({ v: payload });
    assert.ok(!out.includes("<"), `raw < survived for payload: ${payload}`);
  }
});

test("escaped output still parses back to the identical object", () => {
  const input = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [{ name: "Is 5 < 10?", acceptedAnswer: { text: "Yes </script> really" } }],
  };
  assert.deepEqual(JSON.parse(serializeJsonLd(input)), input);
});

test("leaves payloads without < byte-identical to JSON.stringify", () => {
  const input = { "@type": "Service", name: "Dynamics 365 Consulting" };
  assert.equal(serializeJsonLd(input), JSON.stringify(input));
});
