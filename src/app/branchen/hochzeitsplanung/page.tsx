import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Hochzeitsplaner erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Hochzeitsplaner und Weddingplanner. Mit Portfolio, Referenzen und Kontakt. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Hochzeitsplaner"
      beschreibung="So könnte deine Website aussehen — romantisch-elegant und so einladend wie die Feste, die du planst."
      screenshot="/images/9zYQM.avif"
      url="www.sophie-lehmann-hochzeiten.de"
      seoText="Die Hochzeitsplanung beginnt heute auf Pinterest, Instagram und Google. Paare suchen nach Inspiration — und nach jemandem, der ihre Traumhochzeit umsetzt. Wer als Hochzeitsplaner keine eigene Website hat, existiert für viele Brautpaare schlicht nicht. Eine elegante Website mit echten Hochzeitsfotos, Referenzen und einer klaren Beschreibung deines Angebots überzeugt Paare davon, dass sie bei dir in den besten Händen sind. Emotionale Bildwelten und persönliche Texte sind dabei wichtiger als jede Preisliste."
      vorteile={[
        { titel: "Portfolio mit echten Hochzeiten", text: "Zeig deine schönsten Hochzeiten mit professionellen Fotos — Dekoration, Location, Details. Brautpaare wollen sehen, was du kreieren kannst." },
        { titel: "Leistungspakete transparent darstellen", text: "Komplettplanung, Teilplanung oder Day-of-Coordination — stell deine Pakete klar dar, damit Paare sofort wissen, welches Angebot zu ihnen passt." },
        { titel: "Persönliche Vorstellung", text: "Hochzeitsplanung ist Vertrauenssache. Eine authentische Über-mich-Seite mit Foto und persönlicher Geschichte schafft die emotionale Verbindung, die Paare suchen." },
        { titel: "Einfache Kontaktaufnahme", text: "Ein Anfrage-Formular mit Feldern für Datum, Location und Vorstellungen macht es Brautpaaren leicht, den ersten Schritt zu gehen — unverbindlich und unkompliziert." },
      ]}
      faqs={[
        { frage: "Kann ich neue Hochzeiten ins Portfolio aufnehmen lassen?", antwort: "Ja, neue Referenz-Hochzeiten mit Fotos und Beschreibungen pflegen wir jederzeit für dich ein. Das ist im monatlichen Paket (39 €/Monat) inklusive." },
        { frage: "Kann ich ein Anfrage-Formular für Brautpaare einbinden?", antwort: "Ja, wir erstellen ein Kontaktformular mit individuellen Feldern — zum Beispiel für Hochzeitsdatum, Gästezahl und besondere Wünsche. So erhältst du direkt qualifizierte Anfragen." },
        { frage: "Wird meine Website bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Hochzeitsplaner in [Stadt]', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Hochzeitsplaner-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
