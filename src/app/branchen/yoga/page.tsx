import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Yogastudios erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Yogastudios. Mit Stundenplan, Online-Buchung und Lehrer-Vorstellung. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Yogastudios"
      beschreibung="So könnte deine Yogastudio-Website aussehen — ruhig, klar und so einladend wie deine Kurse."
      screenshot="/images/fullpage-yoga.avif"
      url="www.studio-mantra.de"
      seoText="Wer ein Yogastudio sucht, möchte sich vorher ein Bild machen — von der Atmosphäre, den Lehrern und dem Stil. Gerade Anfänger zögern lange, bevor sie eine Probestunde buchen, und entscheiden oft nach dem ersten Eindruck einer Website. Eine ruhige, klar strukturierte Online-Präsenz mit Stundenplan, Lehrer-Profilen und einfacher Buchung baut die Hemmschwelle ab und gewinnt Mitglieder. Stilfragen wie Vinyasa, Hatha oder Yin werden online geklärt, lange bevor jemand die Studiotür öffnet."
      vorteile={[
        { titel: "Stundenplan immer aktuell", text: "Dein Wochenplan ist übersichtlich online — mit Kursnamen, Lehrern und Levels. Schüler sehen sofort, wann der nächste Vinyasa-Kurs stattfindet." },
        { titel: "Online-Buchung integriert", text: "Probestunden, Drop-Ins oder Karten — Schüler buchen direkt über deine Website, ohne dich anrufen zu müssen. Mehr Anmeldungen, weniger Aufwand." },
        { titel: "Lehrer-Vorstellung mit Profil", text: "Zeig dein Team mit Foto, Stil und Ausbildung. Schüler suchen oft gezielt nach einem Lehrer, dessen Energie zu ihnen passt — mach es ihnen leicht." },
        { titel: "Atmosphäre digital spürbar", text: "Warme Farben, ruhige Bilder und klare Sprache transportieren die Stimmung deines Studios. Wer deine Website besucht, soll schon Lust auf die Matte bekommen." },
      ]}
      faqs={[
        { frage: "Kann ich meinen Stundenplan selbst aktualisieren lassen?", antwort: "Ja, Änderungen am Stundenplan, an Kursen oder Lehrer-Profilen kannst du jederzeit bei uns beauftragen. Das ist im monatlichen Paket (39 €/Monat) inklusive." },
        { frage: "Kann ich ein Online-Buchungssystem einbinden?", antwort: "Ja, wir binden gängige Buchungssysteme wie Eversports, Mindbody oder ein einfaches Kontaktformular ein. So buchen deine Schüler bequem rund um die Uhr." },
        { frage: "Wird mein Yogastudio bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Yoga in [Stadt]', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Yogastudio-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
