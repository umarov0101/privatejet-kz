import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = "./src/assets";
const QUALITY = 82;

const files = await readdir(ASSETS_DIR);
const images = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f) && !f.includes("logo"));

console.log(`Converting ${images.length} images to WebP...\n`);

for (const file of images) {
  const input = join(ASSETS_DIR, file);
  const output = join(ASSETS_DIR, basename(file, extname(file)) + ".webp");

  const meta = await sharp(input).metadata();
  await sharp(input).webp({ quality: QUALITY, effort: 6 }).toFile(output);

  const { size: inSize } = await import("fs").then((fs) => fs.promises.stat(input));
  const { size: outSize } = await import("fs").then((fs) => fs.promises.stat(output));
  const saving = Math.round((1 - outSize / inSize) * 100);

  console.log(
    `✓ ${file} → ${basename(output)}  ${Math.round(inSize / 1024)}KB → ${Math.round(outSize / 1024)}KB  (-${saving}%)`,
  );
}

console.log("\nDone.");
