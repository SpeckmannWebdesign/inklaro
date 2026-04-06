/**
 * Aktualisiert eine Anfrage in der Produktions-Datenbank.
 * Nutzung: npx tsx scripts/update-anfrage.ts <anfrage-id> <json-daten>
 * Beispiel: npx tsx scripts/update-anfrage.ts abc123 '{"status":"DESIGN_CREATED","pencilDesignPath":"/path/to/file.pen"}'
 */
import { connectProductionDb, disconnect } from "./db-connection";

const id = process.argv[2];
const dataJson = process.argv[3];

if (!id || !dataJson) {
  console.error("Fehler: Nutzung: npx tsx scripts/update-anfrage.ts <id> '<json>'");
  process.exit(1);
}

let data: Record<string, unknown>;
try {
  data = JSON.parse(dataJson);
} catch {
  console.error("Fehler: Ungültiges JSON:", dataJson);
  process.exit(1);
}

async function main() {
  const prisma = await connectProductionDb();
  try {
    const updated = await prisma.anfrage.update({ where: { id }, data });
    console.log(JSON.stringify(updated, null, 2));
  } finally {
    await disconnect(prisma);
  }
}

main().catch((e) => {
  console.error("Datenbankfehler:", e.message);
  process.exit(1);
});
