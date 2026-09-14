import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR = path.resolve('src', 'assets', 'images');
const QUALITY = 82;
const MAX_WIDTH = 1200;
const KEEP_PNG = new Set(['logo', 'logo_neg', 'logo_pos']);

for (const entry of await readdir(SRC_DIR)) {
  if (!entry.endsWith('.png')) continue;

  const base = entry.slice(0, -4);
  if (KEEP_PNG.has(base)) continue;

  const input = path.join(SRC_DIR, entry);
  const output = path.join(SRC_DIR, `${base}.webp`);
  const before = await stat(input);

  const resized = await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(output);

  console.log(
    `${entry} (${(before.size / 1024).toFixed(0)} KB) -> ${path.basename(output)} (${(resized.size / 1024).toFixed(0)} KB) ${resized.width}x${resized.height}`,
  );
}
