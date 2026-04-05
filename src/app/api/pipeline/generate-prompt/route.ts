// Pipeline-Endpoint: Generiert automatisch einen Pencil-Prompt aus einer Anfrage
// Wird intern von /api/anfragen aufgerufen (fire-and-forget)

import { prisma } from "@/lib/prisma";
import { mapAnfrageToPencilInput } from "@/lib/prompt-mapping";
import { generatePencilPrompt } from "@/lib/prompt-generator";
import { sendPromptReadyNotification } from "@/lib/email";

const PIPELINE_SECRET = process.env.PIPELINE_SECRET;

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
    // Anfrage aus DB laden
    const anfrage = await prisma.anfrage.findUnique({
      where: { id: anfrageId },
    });

    if (!anfrage) {
      return Response.json(
        { fehler: "Anfrage nicht gefunden" },
        { status: 404 }
      );
    }

    // Status auf PROMPT_GENERATING setzen
    await prisma.anfrage.update({
      where: { id: anfrageId },
      data: { status: "PROMPT_GENERATING" },
    });

    await prisma.anfrageLog.create({
      data: {
        anfrageId,
        step: "prompt_generation",
        status: "started",
        message: `Prompt-Generierung gestartet für ${anfrage.firmenname}`,
      },
    });

    // Formular-Daten auf Pencil-Input mappen
    const pencilInput = mapAnfrageToPencilInput({
      firmenname: anfrage.firmenname,
      branche: anfrage.branche,
      beschreibung: anfrage.beschreibung,
      standort: anfrage.standort || undefined,
      website: anfrage.website || undefined,
      zielgruppe: anfrage.zielgruppe,
      websiteZiel: anfrage.websiteZiel,
      zielgruppeBeschreibung: anfrage.zielgruppeBeschreibung || undefined,
      hatLogo: anfrage.hatLogo,
      farben: anfrage.farben || undefined,
      vorbilder: anfrage.vorbilder || undefined,
      stilPraeferenz: anfrage.stilPraeferenz || undefined,
      seiten: anfrage.seiten,
      texteVorhanden: anfrage.texteVorhanden,
      sonstiges: anfrage.sonstiges || undefined,
      ansprechpartner: anfrage.ansprechpartner,
      email: anfrage.email,
      telefon: anfrage.telefon || undefined,
    });

    // Claude API aufrufen
    const pencilPrompt = await generatePencilPrompt(pencilInput);

    // Ergebnis speichern
    await prisma.anfrage.update({
      where: { id: anfrageId },
      data: {
        status: "PROMPT_GENERATED",
        pencilPrompt,
      },
    });

    await prisma.anfrageLog.create({
      data: {
        anfrageId,
        step: "prompt_generation",
        status: "completed",
        message: `Pencil-Prompt erfolgreich generiert (${pencilPrompt.length} Zeichen)`,
      },
    });

    // Marcel benachrichtigen
    try {
      await sendPromptReadyNotification(
        anfrageId,
        anfrage.firmenname,
        anfrage.branche,
        pencilPrompt.length
      );
    } catch (emailError) {
      console.error("Prompt-Ready-Notification fehlgeschlagen:", emailError);
    }

    return Response.json({
      erfolg: true,
      anfrageId,
      promptLaenge: pencilPrompt.length,
    });
  } catch (fehler) {
    console.error("Pipeline-Fehler:", fehler);

    // Fehler in DB loggen
    try {
      await prisma.anfrage.update({
        where: { id: anfrageId },
        data: {
          status: "SUBMITTED",
          errorMessage:
            fehler instanceof Error ? fehler.message : "Unbekannter Fehler",
        },
      });

      await prisma.anfrageLog.create({
        data: {
          anfrageId,
          step: "prompt_generation",
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
        fehler: "Prompt-Generierung fehlgeschlagen",
        details:
          fehler instanceof Error ? fehler.message : "Unbekannter Fehler",
      },
      { status: 500 }
    );
  }
}
