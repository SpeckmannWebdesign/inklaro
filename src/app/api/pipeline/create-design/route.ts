// Pipeline-Endpoint: Erstellt automatisch ein Design via Pencil CLI
// Schreibt den Auftrag als JSON in /var/designs/queue/
// Ein Worker auf dem Host (pencil-worker.sh) verarbeitet die Aufträge

import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";

const PIPELINE_SECRET = process.env.PIPELINE_SECRET;
const DESIGNS_DIR = process.env.DESIGNS_DIR || "/var/designs";

export async function POST(request: Request) {
  // Interner Endpoint — nur mit Pipeline-Secret aufrufbar
  const authHeader = request.headers.get("x-pipeline-key");
  if (!PIPELINE_SECRET || authHeader !== PIPELINE_SECRET) {
    return Response.json(
      { fehler: "Nicht autorisiert" },
      { status: 401 }
    );
  }

  const { anfrageId } = await request.json();

  if (!anfrageId) {
    return Response.json(
      { fehler: "anfrageId fehlt" },
      { status: 400 }
    );
  }

  try {
    const anfrage = await prisma.anfrage.findUnique({
      where: { id: anfrageId },
    });

    if (!anfrage?.pencilPrompt) {
      return Response.json(
        { fehler: "Kein Pencil-Prompt vorhanden" },
        { status: 400 }
      );
    }

    // Status aktualisieren
    await prisma.anfrage.update({
      where: { id: anfrageId },
      data: { status: "DESIGN_CREATING" },
    });

    await prisma.anfrageLog.create({
      data: {
        anfrageId,
        step: "design_creation",
        status: "started",
        message: `Design-Erstellung gestartet für ${anfrage.firmenname}`,
      },
    });

    // Auftrag als JSON in die Queue schreiben
    const queueDir = `${DESIGNS_DIR}/queue`;
    await mkdir(queueDir, { recursive: true });

    const job = {
      anfrageId,
      firmenname: anfrage.firmenname,
      branche: anfrage.branche,
      email: anfrage.email,
      prompt: anfrage.pencilPrompt,
      createdAt: new Date().toISOString(),
    };

    await writeFile(
      `${queueDir}/${anfrageId}.json`,
      JSON.stringify(job, null, 2)
    );

    console.log(`[Pipeline] Design-Auftrag erstellt für ${anfrage.firmenname}`);

    return Response.json({
      erfolg: true,
      anfrageId,
      message: "Design-Auftrag in Queue geschrieben",
    });
  } catch (fehler) {
    console.error("Design-Pipeline-Fehler:", fehler);

    try {
      await prisma.anfrage.update({
        where: { id: anfrageId },
        data: {
          status: "PROMPT_GENERATED",
          errorMessage:
            fehler instanceof Error ? fehler.message : "Unbekannter Fehler",
        },
      });

      await prisma.anfrageLog.create({
        data: {
          anfrageId,
          step: "design_creation",
          status: "failed",
          message:
            fehler instanceof Error ? fehler.message : "Unbekannter Fehler",
        },
      });
    } catch {
      console.error("Konnte Fehler nicht in DB loggen");
    }

    return Response.json(
      {
        fehler: "Design-Erstellung fehlgeschlagen",
        details:
          fehler instanceof Error ? fehler.message : "Unbekannter Fehler",
      },
      { status: 500 }
    );
  }
}
