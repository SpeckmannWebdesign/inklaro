/**
 * Lädt eine Anfrage aus der Produktions-Datenbank und gibt sie als JSON aus.
 * Nutzung: npx tsx scripts/load-anfrage.ts <anfrage-id>
 */
import { connectProductionDb, disconnect } from "./db-connection";

const id = process.argv[2];
if (!id) {
  console.error("Fehler: Keine Anfrage-ID angegeben.");
  process.exit(1);
}

async function main() {
  const prisma = await connectProductionDb();
  try {
    const anfrage = await prisma.anfrage.findUnique({ where: { id } });
    if (!anfrage) {
      console.error(`Fehler: Anfrage mit ID "${id}" nicht gefunden.`);
      process.exit(1);
    }
    console.log(JSON.stringify(anfrage, null, 2));
  } finally {
    await disconnect(prisma);
  }
}

main().catch((e) => {
  console.error("Datenbankfehler:", e.message);
  process.exit(1);
});
