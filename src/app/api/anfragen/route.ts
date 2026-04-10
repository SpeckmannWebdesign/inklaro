import {
  sendAnfrageConfirmation,
  sendAnfrageNotification,
  type AnfrageData,
} from "@/lib/email";
import { prisma } from "@/lib/prisma";

const PIPELINE_SECRET = process.env.PIPELINE_SECRET;

export async function POST(request: Request) {
  try {
    const daten: AnfrageData & { stilPraeferenz?: string } =
      await request.json();

    // Pflichtfelder validieren
    const pflichtfelder: (keyof AnfrageData)[] = [
      "firmenname",
      "branche",
      "beschreibung",
      "ansprechpartner",
      "email",
      "zielgruppe",
      "websiteZiel",
      "hatLogo",
    ];

    const fehlend = pflichtfelder.filter((feld) => {
      const wert = daten[feld];
      return !wert || (typeof wert === "string" && wert.trim() === "");
    });

    if (fehlend.length > 0) {
      return Response.json(
        {
          erfolg: false,
          fehler: `Pflichtfelder fehlen: ${fehlend.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // E-Mail-Format prüfen
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(daten.email)) {
      return Response.json(
        { erfolg: false, fehler: "Ungültige E-Mail-Adresse" },
        { status: 400 }
      );
    }

    // Anfrage in Datenbank speichern
    const anfrage = await prisma.anfrage.create({
      data: {
        firmenname: daten.firmenname,
        branche: daten.branche,
        beschreibung: daten.beschreibung,
        standort: daten.standort || null,
        website: daten.website || null,
        erfahrung: daten.erfahrung || null,
        teamgroesse: daten.teamgroesse || null,
        leistungen: daten.leistungen || null,
        usp: daten.usp || null,
        slogan: daten.slogan || null,
        zielgruppe: daten.zielgruppe,
        websiteZiel: daten.websiteZiel,
        zielgruppeBeschreibung: daten.zielgruppeBeschreibung || null,
        tonalitaet: daten.tonalitaet || null,
        gewuenschteCta: daten.gewuenschteCta || [],
        hatLogo: daten.hatLogo,
        farben: daten.farben || null,
        vorbilder: daten.vorbilder || null,
        stilPraeferenz: daten.stilPraeferenz || null,
        eigeneFotos: daten.eigeneFotos || null,
        seiten: daten.seiten || [],
        texteVorhanden: daten.texteVorhanden || "",
        sonstiges: daten.sonstiges || null,
        socialMedia: daten.socialMedia || null,
        oeffnungszeiten: daten.oeffnungszeiten || null,
        ansprechpartner: daten.ansprechpartner,
        email: daten.email,
        telefon: daten.telefon || null,
      },
    });

    // E-Mails parallel senden
    await Promise.all([
      sendAnfrageConfirmation(daten),
      sendAnfrageNotification(daten),
    ]);

    // Pipeline: Prompt-Generierung im Hintergrund anstoßen (fire-and-forget)
    if (PIPELINE_SECRET) {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      fetch(`${baseUrl}/api/pipeline/generate-prompt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-pipeline-key": PIPELINE_SECRET,
        },
        body: JSON.stringify({ anfrageId: anfrage.id }),
      }).catch((err: unknown) => {
        console.error("Pipeline-Trigger fehlgeschlagen:", err);
      });
    }

    return Response.json({ erfolg: true, anfrageId: anfrage.id });
  } catch (fehler) {
    console.error("Fehler beim Verarbeiten der Anfrage:", fehler);
    return Response.json(
      {
        erfolg: false,
        fehler:
          "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.",
      },
      { status: 500 }
    );
  }
}
