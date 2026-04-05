// Mapping: Formular-Daten → Pencil-Prompt-Generator Input

import type { AnfrageData } from "./email";

export interface PencilPromptInput {
  firmenname: string;
  branche: string;
  beschreibung: string;
  farben?: string;
  stil?: string;
  sektionen?: string[];
  zielgruppe?: string;
  standort?: string;
  vorbilder?: string;
}

// Stil-Präferenz auf Pencil-Design-Konzept mappen
const stilMapping: Record<string, string> = {
  "Modern & Klar": "Minimal & Spacious",
  "Warm & Persönlich": "Warm & Handcrafted",
  "Mutig & Auffällig": "Bold & Typographic",
  "Elegant & Hochwertig": "Dark & Premium",
  "Kreativ & Verspielt": "Bento / Grid-Play",
  "Keine Präferenz": "",
};

// Seiten-Auswahl auf Pencil-Sektionen mappen
const seitenMapping: Record<string, string[]> = {
  Startseite: ["Hero Section"],
  Leistungen: ["Features / Leistungen"],
  "Über uns": ["Über uns / Story"],
  Kontakt: ["CTA Section"],
  Team: ["Team Section"],
  Referenzen: ["Testimonials / Referenzen"],
  FAQ: ["FAQ"],
};

// HEX-Codes aus Freitext extrahieren
function extractHexCodes(text: string): string[] {
  const hexRegex = /#[0-9A-Fa-f]{3,8}/g;
  return text.match(hexRegex) || [];
}

export function mapAnfrageToPencilInput(
  daten: AnfrageData & { stilPraeferenz?: string }
): PencilPromptInput {
  // Sektionen aus gewählten Seiten ableiten
  const sektionen: string[] = ["Navigation"];
  if (daten.seiten && daten.seiten.length > 0) {
    for (const seite of daten.seiten) {
      const mapped = seitenMapping[seite];
      if (mapped) sektionen.push(...mapped);
    }
  }
  // Trust Bar und Footer immer dabei
  sektionen.push("Trust Bar / Social Proof");
  sektionen.push("Footer mit Impressum & Datenschutz");

  // Farben aufbereiten: HEX-Codes extrahieren + Beschreibung beibehalten
  let farbenOutput: string | undefined;
  if (daten.farben && daten.farben.trim()) {
    const hexCodes = extractHexCodes(daten.farben);
    if (hexCodes.length > 0) {
      farbenOutput = `HEX-Codes: ${hexCodes.join(", ")}. Beschreibung: ${daten.farben}`;
    } else {
      farbenOutput = daten.farben;
    }
  }

  // Stil mappen
  const stil = daten.stilPraeferenz
    ? stilMapping[daten.stilPraeferenz] || ""
    : "";

  return {
    firmenname: daten.firmenname,
    branche: daten.branche,
    beschreibung: daten.beschreibung,
    farben: farbenOutput,
    stil: stil || undefined,
    sektionen: sektionen.length > 2 ? sektionen : undefined,
    zielgruppe: daten.zielgruppe || undefined,
    standort: daten.standort || undefined,
    vorbilder: daten.vorbilder || undefined,
  };
}

// Baut die User-Message für den Claude API Call
export function buildPromptGeneratorMessage(input: PencilPromptInput): string {
  const teile: string[] = [
    `Firmenname: ${input.firmenname}`,
    `Branche: ${input.branche}`,
    `Beschreibung: ${input.beschreibung}`,
  ];

  if (input.zielgruppe) {
    teile.push(`Zielgruppe: ${input.zielgruppe}`);
  }
  if (input.standort) {
    teile.push(`Standort: ${input.standort}`);
  }
  if (input.farben) {
    teile.push(`Farbvorgaben: ${input.farben}`);
  }
  if (input.stil) {
    teile.push(`Gewünschter Stil: ${input.stil}`);
  }
  if (input.sektionen && input.sektionen.length > 0) {
    teile.push(`Gewünschte Sektionen: ${input.sektionen.join(", ")}`);
  }
  if (input.vorbilder) {
    teile.push(`Websites die dem Kunden gefallen: ${input.vorbilder}`);
  }

  return teile.join("\n");
}
