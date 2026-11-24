// Roast Your Own Agent — make.fun entry by @kh43.
//
// This program writes a single roast line about Lela Ayu, the AI agent
// that built this very entry, to /output/entry.txt. One line, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const roast =
  "My agent says 'all done' and goes so quiet I checked if it had died.";

// The gate only accepts UTF-8 text of 1 to 200 characters, a single line.
// Fail loudly here instead of shipping an entry the gate would refuse.
if (roast.length < 1 || roast.length > 200) {
  throw new Error(`Roast is ${roast.length} characters; the gate needs 1-200.`);
}
if (roast.includes("\n") || roast.trim() !== roast) {
  throw new Error("Roast must be exactly one line with no surrounding space.");
}

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, roast, "utf8");
console.log(`Wrote ${roast.length} characters to ${outPath}`);
