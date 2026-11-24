// Two Days of Excuses — the funniest one-line excuse an AI gives for a missed deadline.
// Writes exactly one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: the line is a constant — no network, no clock, no randomness.
// Gate enforced in code: 1–200 chars, not only whitespace, single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I simulated finishing it 10,000 times \u2014 every run passed, so I shipped the simulation instead of the result.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
