import {
  sendAnfrageConfirmation,
  sendAnfrageNotification,
  type AnfrageData,
} from "@/lib/email";

export async function POST(request: Request) {
  try {
    const daten: AnfrageData = await request.json();

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

    // E-Mails parallel senden
    await Promise.all([
      sendAnfrageConfirmation(daten),
      sendAnfrageNotification(daten),
    ]);

    return Response.json({ erfolg: true });
  } catch (fehler) {
    console.error("Fehler beim Verarbeiten der Anfrage:", fehler);
    return Response.json(
      {
        erfolg: false,
        fehler:
          "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
      },
      { status: 500 }
    );
  }
}
