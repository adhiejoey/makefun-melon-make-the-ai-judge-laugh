import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My boss says we're a family here, so I asked for my inheritance: the raise he promised two reviews ago.";

if (joke.length > 195 || joke.includes("\n") || joke.trim() !== joke) {
  throw new Error("Entry must be one line of at most 195 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
