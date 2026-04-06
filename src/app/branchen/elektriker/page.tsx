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
      beschreibung="So könnte Ihre Elektriker-Website aussehen — professionell, vertrauenswürdig und perfekt auf Ihren Betrieb zugeschnitten."
      screenshot="/images/fullpage-handwerker.avif"
      url="www.mueller-elektrotechnik.de"
      seoText="Wenn ein Sicherungskasten ausfällt oder eine Steckdose nicht funktioniert, greifen die meisten Menschen als Erstes zum Smartphone. Wer dann keinen professionellen Internetauftritt hat, verliert den Auftrag an den Betrieb, der zuerst bei Google erscheint. Eine moderne Website zeigt nicht nur Ihre Leistungen — sie schafft Vertrauen, bevor der Kunde überhaupt anruft. Referenzfotos, Meisterbrief-Hinweise und echte Kundenstimmen machen den Unterschied zwischen einem Anruf und einem Weiterklicken."
      vorteile={[
        { titel: "Notdienst prominent sichtbar", text: "Ihre Notdienst-Nummer gehört ganz nach oben — groß, klickbar und auf jedem Gerät sofort erreichbar. Kein Suchen, kein Scrollen." },
        { titel: "Leistungen klar strukturiert", text: "Elektroinstallation, Photovoltaik, Smart Home, E-Mobilität — Ihre Kunden sehen auf einen Blick, was Sie anbieten und ob Sie der richtige Betrieb sind." },
        { titel: "Vertrauen durch Qualifikation", text: "Meisterbetrieb, Innungsmitglied, Zertifizierungen — diese Signale gehören auf die Startseite. Sie unterscheiden Sie vom Hobbyhandwerker." },
        { titel: "Regionale Sichtbarkeit", text: "Ihre Website wird für Suchanfragen wie 'Elektriker in [Ihrer Stadt]' optimiert. So finden Sie genau die Kunden, die in Ihrem Einsatzgebiet suchen." },
      ]}
      faqs={[
        { frage: "Wie schnell ist meine Elektriker-Website online?", antwort: "In der Regel stellen wir Ihnen die fertige Website innerhalb von 1–2 Werktagen vor. Nach Ihrer Freigabe kann sie sofort live gehen." },
        { frage: "Kann ich meine Leistungen selbst ändern?", antwort: "Ja — Textänderungen, neue Fotos oder zusätzliche Leistungen können Sie jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) bereits enthalten." },
        { frage: "Wird die Website bei Google gefunden?", antwort: "Jede Website wird mit SEO-Grundoptimierung ausgeliefert: sauberer Code, Meta-Daten, schnelle Ladezeiten und lokale Keywords wie 'Elektriker in [Stadt]'. Für weiterführendes SEO beraten wir Sie gerne." },
        { frage: "Brauche ich vorher ein Logo oder Fotos?", antwort: "Nicht zwingend. Wir arbeiten auch mit Textlogos und professionellen Stockfotos. Wenn Sie eigene Fotos haben, umso besser — echte Bilder von Ihrem Team und Ihrer Arbeit wirken am stärksten." },
      ]}
    />
  );
}
