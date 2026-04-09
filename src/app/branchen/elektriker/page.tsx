import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Elektriker erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Elektriker und Elektrobetriebe. Responsive, DSGVO-konform, mit Online-Terminbuchung. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function ElektrikerPage() {
  return (
    <BranchenShowcase
      branche="Elektriker"
      beschreibung="So könnte deine Elektriker-Website aussehen — professionell, vertrauenswürdig und perfekt auf deinen Betrieb zugeschnitten."
      screenshot="/images/fullpage-handwerker.avif"
      url="www.mueller-elektrotechnik.de"
      seoText="Wenn ein Sicherungskasten ausfällt oder eine Steckdose nicht funktioniert, greifen die meisten Menschen als Erstes zum Smartphone. Wer dann keinen professionellen Internetauftritt hat, verliert den Auftrag an den Betrieb, der zuerst bei Google erscheint. Eine moderne Website zeigt nicht nur deine Leistungen — sie schafft Vertrauen, bevor der Kunde überhaupt anruft. Referenzfotos, Meisterbrief-Hinweise und echte Kundenstimmen machen den Unterschied zwischen einem Anruf und einem Weiterklicken."
      vorteile={[
        { titel: "Notdienst prominent sichtbar", text: "Deine Notdienst-Nummer gehört ganz nach oben — groß, klickbar und auf jedem Gerät sofort erreichbar. Kein Suchen, kein Scrollen." },
        { titel: "Leistungen klar strukturiert", text: "Elektroinstallation, Photovoltaik, Smart Home, E-Mobilität — deine Kunden sehen auf einen Blick, was du anbietest und ob du der richtige Betrieb bist." },
        { titel: "Vertrauen durch Qualifikation", text: "Meisterbetrieb, Innungsmitglied, Zertifizierungen — diese Signale gehören auf die Startseite. Sie unterscheiden dich vom Hobbyhandwerker." },
        { titel: "Regionale Sichtbarkeit", text: "Deine Website wird für Suchanfragen wie 'Elektriker in [deiner Stadt]' optimiert. So findest du genau die Kunden, die in deinem Einsatzgebiet suchen." },
      ]}
      faqs={[
        { frage: "Wie schnell ist meine Elektriker-Website online?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
        { frage: "Kann ich meine Leistungen selbst ändern?", antwort: "Ja — Textänderungen, neue Fotos oder zusätzliche Leistungen kannst du jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) bereits enthalten." },
        { frage: "Wird die Website bei Google gefunden?", antwort: "Jede Website wird mit SEO-Grundoptimierung ausgeliefert: sauberer Code, Meta-Daten, schnelle Ladezeiten und lokale Keywords wie 'Elektriker in [Stadt]'. Für weiterführendes SEO beraten wir dich gerne." },
        { frage: "Brauche ich vorher ein Logo oder Fotos?", antwort: "Nicht zwingend. Wir arbeiten auch mit Textlogos und professionellen Stockfotos. Wenn du eigene Fotos hast, umso besser — echte Bilder von deinem Team und deiner Arbeit wirken am stärksten." },
      ]}
    />
  );
}
