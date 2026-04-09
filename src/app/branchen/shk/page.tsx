import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für SHK-Betriebe erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für SHK-Betriebe. Sanitär, Heizung, Klima — mit Notdienst, Leistungen und Kontakt. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="SHK-Betriebe"
      beschreibung="So könnte deine SHK-Website aussehen — professionell, zuverlässig und perfekt für Sanitär, Heizung und Klima."
      screenshot="/images/fKxcf.avif"
      url="www.schroeder-haustechnik.de"
      seoText="Wenn die Heizung im Winter ausfällt oder ein Rohrbruch das Badezimmer flutet, suchen Kunden sofort online nach einem SHK-Betrieb in der Nähe. Wer dann mit einer professionellen Website und gut sichtbarer Notdienstnummer erscheint, bekommt den Auftrag. Aber auch bei geplanten Projekten wie Badsanierung, Heizungstausch oder Wärmepumpe vergleichen Kunden Betriebe online. Eine klare Website mit Leistungsübersicht, Referenzen und regionaler SEO-Optimierung sorgt dafür, dass du gefunden wirst — nicht die Konkurrenz."
      vorteile={[
        { titel: "Notdienst sofort erreichbar", text: "Deine Notdienst-Nummer wird prominent und klickbar ganz oben angezeigt — auf jedem Gerät sofort sichtbar. In Notfällen zählt jede Sekunde." },
        { titel: "Leistungen übersichtlich gegliedert", text: "Badsanierung, Heizungsmodernisierung, Wärmepumpe, Klimaanlage — deine Kunden sehen auf einen Blick, was du anbietest und ob du der richtige Partner bist." },
        { titel: "Referenzen und Vorher-Nachher-Bilder", text: "Zeig abgeschlossene Projekte mit Fotos — besonders Badsanierungen eignen sich hervorragend für überzeugende Vorher-Nachher-Vergleiche." },
        { titel: "Fördermittel-Hinweise als Mehrwert", text: "Informiere deine Kunden über aktuelle Förderprogramme für Heizungstausch oder energetische Sanierung. Das zeigt Kompetenz und generiert Anfragen." },
      ]}
      faqs={[
        { frage: "Kann ich mein Leistungsangebot anpassen lassen?", antwort: "Ja, Änderungen an Leistungen, Texten oder Referenzprojekten kannst du jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) inklusive." },
        { frage: "Kann ich auf Fördermittel und Gesetze hinweisen?", antwort: "Ja, wir richten einen Bereich für aktuelle Informationen zu Förderprogrammen wie BEG oder GEG ein. So positionierst du dich als kompetenter Berater." },
        { frage: "Wird mein SHK-Betrieb lokal bei Google gefunden?", antwort: "Jede Website wird mit SEO-Grundoptimierung ausgeliefert — mit Keywords wie 'Heizungsbauer in [Stadt]' oder 'Badsanierung [Region]', sauberem Code und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine SHK-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
