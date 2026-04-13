import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { resolve, join } from "node:path";

const SRC_DIR = "/Users/marcelspeckmann/Documents/Claude/Website Designs/exports";
const OUT_DIR = resolve(process.cwd(), "public/images");
const TARGET_WIDTH = 1600;
const CARD_RATIO = 2 / 3; // Höhe / Breite (3:2 landscape, passt zur Card 480x320)

// Pencil-Dateiname → Slug auf der Website
const MAP = {
  "yogastudio.png": "yoga",
  "fitnessstudio.png": "fitnessstudio",
  "tischler.png": "tischler",
  "hochzeitsplanerin.png": "hochzeitsplanung",
  "shk.png": "shk",
  "architekt.png": "architekt",
  "physiotherapie.png": "physiotherapie",
  "café.png": "cafe",
  "fotograf.png": "fotograf",
  "coach.png": "coaching",
  "zahnarzt.png": "zahnarzt",
  "steuerberater.png": "steuerberater",
  "rechtsanwalt.png": "rechtsanwalt",
  "restaurant.png": "restaurant",
};

const filesByLowercase = {};
for (const f of readdirSync(SRC_DIR)) {
  if (statSync(join(SRC_DIR, f)).isFile()) {
    filesByLowercase[f.normalize("NFC").toLowerCase()] = f;
  }
}

console.log(`Quelle: ${SRC_DIR}`);
console.log(`Ziel:   ${OUT_DIR}\n`);

for (const [pencilLower, slug] of Object.entries(MAP)) {
  const real = filesByLowercase[pencilLower.normalize("NFC")];
  if (!real) {
    console.warn(`!! Nicht gefunden: ${pencilLower}`);
    continue;
  }
  const srcPath = join(SRC_DIR, real);
  const meta = await sharp(srcPath).metadata();
  const targetWidth = Math.min(TARGET_WIDTH, meta.width);

  // Fullpage-Variante (komplette Seite, fuer Detailseite der jeweiligen Branche)
  const fullPipeline = sharp(srcPath).resize({ width: targetWidth, withoutEnlargement: true });
  const avifPath = join(OUT_DIR, `fullpage-${slug}.avif`);
  const jpgPath = join(OUT_DIR, `fullpage-${slug}.jpg`);
  await fullPipeline.clone().avif({ quality: 60, effort: 4 }).toFile(avifPath);
  await fullPipeline.clone().jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(jpgPath);

  // Card-Variante (nur Hero-Ausschnitt, fuer Branchen-Cards auf Startseite/Showcase)
  const cardCropHeight = Math.round(meta.width * CARD_RATIO);
  const cardAvifPath = join(OUT_DIR, `card-${slug}.avif`);
  const cardJpgPath = join(OUT_DIR, `card-${slug}.jpg`);
  const cardPipeline = sharp(srcPath)
    .extract({ left: 0, top: 0, width: meta.width, height: cardCropHeight })
    .resize({ width: Math.min(1200, meta.width), withoutEnlargement: true });
  await cardPipeline.clone().avif({ quality: 62, effort: 4 }).toFile(cardAvifPath);
  await cardPipeline.clone().jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(cardJpgPath);

  const full = statSync(avifPath).size;
  const card = statSync(cardAvifPath).size;
  console.log(`✓ ${real.padEnd(22)} → fullpage + card  (${(full / 1024).toFixed(0)} / ${(card / 1024).toFixed(0)} KB avif)`);
}

console.log("\nFertig.");
