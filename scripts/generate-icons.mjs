import sharp from 'sharp';
import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const src = path.resolve('public/images/logo.png');
const outDir = path.resolve('public/icons');

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function generate() {
  await ensureDir(outDir);
  const sizes = [32, 180, 192, 512];
  for (const size of sizes) {
    const target = path.join(outDir, `icon-${size}x${size}.png`);
    await sharp(src).resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toFile(target);
    console.log('Generated', target);
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});


