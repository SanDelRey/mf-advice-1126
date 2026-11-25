// entry.txt: one sentence, the best advice ever received, <=200 chars
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const advice = "My dad, thirty years in a body shop, told me: 'You can't fix a dent in a hurry, and you can't fix a man that way either.'";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", advice.trim() + "\n", "utf8");
