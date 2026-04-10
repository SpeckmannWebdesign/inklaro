// Pipeline-Endpoint: Erstellt automatisch ein Design via Pencil CLI
// Wird intern nach Prompt-Generierung aufgerufen (fire-and-forget)

import { prisma } from "@/lib/prisma";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const PIPELINE_SECRET = process.env.PIPELINE_SECRET;
const DESIGNS_DIR = process.env.DESIGNS_DIR || "/var/designs";
const PENCIL_MODEL = process.env.PENCIL_MODEL || "claude-sonnet-4-6";

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

    // Pencil CLI aufrufen
    const penPath = `${DESIGNS_DIR}/${anfrageId}.pen`;
    const pdfPath = `${DESIGNS_DIR}/${anfrageId}.pdf`;

    // Prompt in temporäre Datei schreiben (vermeidet Shell-Escape-Probleme)
    const promptEscaped = anfrage.pencilPrompt
      .replace(/\\/g, "\\\\")
      .replace(/'/g, "'\\''");

    const command = `pencil --out '${penPath}' --export '${pdfPath}' --export-type pdf --model ${PENCIL_MODEL} --prompt '${promptEscaped}'`;

    console.log(`[Pipeline] Starte Pencil CLI für ${anfrage.firmenname}...`);

    const { stdout, stderr } = await execAsync(command, {
      timeout: 600000, // 10 Minuten Timeout
      env: { ...process.env, PATH: process.env.PATH + ":/usr/local/bin:/usr/bin" },
    });

    console.log(`[Pipeline] Pencil CLI stdout:`, stdout.slice(-500));
    if (stderr) console.log(`[Pipeline] Pencil CLI stderr:`, stderr.slice(-500));

    // Ergebnis speichern
    await prisma.anfrage.update({
      where: { id: anfrageId },
      data: {
        status: "DESIGN_CREATED",
        pencilDesignPath: penPath,
      },
    });

    await prisma.anfrageLog.create({
      data: {
        anfrageId,
        step: "design_creation",
        status: "completed",
        message: `Design erstellt: ${penPath}`,
      },
    });

    // Marcel benachrichtigen
    try {
      const { sendDesignReadyNotification } = await import("@/lib/email");
      await sendDesignReadyNotification(anfrageId, anfrage.firmenname, anfrage.branche);
    } catch (emailError) {
      console.error("Design-Ready-Notification fehlgeschlagen:", emailError);
    }

    return Response.json({
      erfolg: true,
      anfrageId,
      penPath,
      pdfPath,
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
