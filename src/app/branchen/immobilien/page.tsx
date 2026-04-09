import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Immobilienmakler erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Immobilienmakler und Hausverwaltungen. Mit Objektpräsentation und Kontaktformular. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function ImmobilienPage() {
  return (
    <BranchenShowcase
      branche="Immobilien"
      beschreibung="So könnte deine Immobilien-Website aussehen — exklusiv, professionell und auf Vertrauen gebaut. Für Makler, Hausverwaltungen und Bauträger."
      screenshot="/images/fullpage-immobilien.avif"
      url="www.thornburg-immobilien.de"
      seoText="Immobilienkäufer und Vermieter suchen online nach einem Makler, dem sie vertrauen können — oft geht es um die größte finanzielle Entscheidung ihres Lebens. Eine professionelle Website ist dabei dein wichtigstes Werkzeug: Sie zeigt Kompetenz, Marktkenntnis und Seriosität, bevor das erste Gespräch stattfindet. Eigentümer, die eine Immobilie verkaufen möchten, vergleichen Makler online und entscheiden sich für den, der am professionellsten wirkt. Eine überzeugende Website ist also nicht nur Visitenkarte, sondern aktives Akquise-Instrument."
      vorteile={[
        { titel: "Objekte ansprechend präsentieren", text: "Zeig deine aktuellen Immobilien mit hochwertigen Fotos, Grundrissen und allen wichtigen Details — so professionell wie in einem Exposé, aber digital und immer erreichbar." },
        { titel: "Vertrauensaufbau durch Referenzen", text: "Erfolgreich vermittelte Objekte und zufriedene Kundenstimmen belegen deine Kompetenz. Diese Signale entscheiden oft, ob ein Eigentümer dich beauftragt." },
        { titel: "Immobilienbewertung als Lead-Magnet", text: "Biete eine kostenlose Erstbewertung über deine Website an — das generiert qualifizierte Kontakte von Eigentümern, die über einen Verkauf nachdenken." },
        { titel: "Regionale Marktpräsenz", text: "Deine Website wird für Suchbegriffe wie 'Immobilienmakler in [deiner Stadt]' optimiert — so finden Verkäufer und Käufer aus deiner Region direkt zu dir." },
      ]}
      faqs={[
        { frage: "Kann ich Immobilien-Objekte auf der Website zeigen?", antwort: "Ja, wir können einen Bereich für deine aktuellen Objekte einrichten — mit Fotos, Eckdaten und Kontaktmöglichkeit. Neue Objekte pflegen wir im Rahmen des Monatspakets (39 €/Monat) ein." },
        { frage: "Wird meine Website bei Google für lokale Suchen gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut gefunden wird — mit den richtigen technischen Einstellungen, passenden Suchbegriffen wie 'Immobilienmakler in [Stadt]' und schnellen Ladezeiten. Das verbessert deine Sichtbarkeit deutlich." },
        { frage: "Kann ich ein Kontaktformular für Eigentümer einbinden?", antwort: "Ja, wir erstellen ein Formular speziell für Eigentümer-Anfragen — zum Beispiel für eine kostenlose Immobilienbewertung. So generierst du direkt qualifizierte Kontakte." },
        { frage: "Wie schnell ist meine Immobilien-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
