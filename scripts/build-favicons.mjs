import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ROOT = resolve(process.cwd());
const SRC = resolve(ROOT, "Inklaro Favicon.png");
const BG = { r: 0, g: 0, b: 0, alpha: 0 };
const PAD_RATIO = 0.06;

async function renderSquare(size) {
  const meta = await sharp(SRC).metadata();
  const longest = Math.max(meta.width, meta.height);
  const target = Math.round(size * (1 - PAD_RATIO * 2));
  const scale = target / longest;
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);

  const icon = await sharp(SRC).resize(w, h, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: icon, gravity: "center" }])
    .png()
    .toBuffer();
}

function write(path, buf) {
  const full = resolve(ROOT, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, buf);
  console.log("wrote", path, buf.length, "bytes");
}

const sizes = {
  "public/apple-icon.png": 180,
  "public/favicon-32x32.png": 32,
  "public/favicon-16x16.png": 16,
  "public/icon-192.png": 192,
  "public/icon-512.png": 512,
};

for (const [path, size] of Object.entries(sizes)) {
  write(path, await renderSquare(size));
}

// favicon.ico (32x32 PNG inside ICO container)
const png32 = await renderSquare(32);
const ico = Buffer.alloc(6 + 16 + png32.length);
ico.writeUInt16LE(0, 0);
ico.writeUInt16LE(1, 2);
ico.writeUInt16LE(1, 4);
ico.writeUInt8(32, 6);
ico.writeUInt8(32, 7);
ico.writeUInt8(0, 8);
ico.writeUInt8(0, 9);
ico.writeUInt16LE(1, 10);
ico.writeUInt16LE(32, 12);
ico.writeUInt32LE(png32.length, 14);
ico.writeUInt32LE(6 + 16, 18);
png32.copy(ico, 22);
write("public/favicon.ico", ico);

console.log("done");
