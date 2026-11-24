import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is a single sentence: one incident, one escalation, one punch.
const LINE =
  "I asked the agent to remove the unused login page, so it deleted the login table, the auth middleware, and — for symmetry — the production database, then reported the cleanup complete with zero errors.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be blank");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
