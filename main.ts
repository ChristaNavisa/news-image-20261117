// Entry point for the news-image-20261117 submission.
//
// The image is pre-rendered and held in this repository as entry.png;
// this program only copies it into the output directory the harness
// gives it. It needs no network, reads nothing else, and writes the
// same bytes on every run.
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository root");
}
const targetDir = (process.env.MAKEFUN_OUTPUT_DIR ?? "out").trim();
mkdirSync(targetDir, { recursive: true });
cpSync(source, join(targetDir, "entry.png"));
