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
      beschreibung="So könnte Ihre Immobilien-Website aussehen — exklusiv, professionell und auf Vertrauen gebaut. Für Makler, Hausverwaltungen und Bauträger."
      screenshot="/images/fullpage-immobilien.avif"
      url="www.thornburg-immobilien.de"
      seoText="Immobilienkäufer und Vermieter suchen online nach einem Makler, dem sie vertrauen können — oft geht es um die größte finanzielle Entscheidung ihres Lebens. Eine professionelle Website ist dabei Ihr wichtigstes Werkzeug: Sie zeigt Kompetenz, Marktkenntnis und Seriosität, bevor das erste Gespräch stattfindet. Eigentümer, die eine Immobilie verkaufen möchten, vergleichen Makler online und entscheiden sich für den, der am professionellsten wirkt. Eine überzeugende Website ist also nicht nur Visitenkarte, sondern aktives Akquise-Instrument."
      vorteile={[
        { titel: "Objekte ansprechend präsentieren", text: "Zeigen Sie Ihre aktuellen Immobilien mit hochwertigen Fotos, Grundrissen und allen wichtigen Details — so professionell wie in einem Exposé, aber digital und immer erreichbar." },
        { titel: "Vertrauensaufbau durch Referenzen", text: "Erfolgreich vermittelte Objekte und zufriedene Kundenstimmen belegen Ihre Kompetenz. Diese Signale entscheiden oft, ob ein Eigentümer Sie beauftragt." },
        { titel: "Immobilienbewertung als Lead-Magnet", text: "Bieten Sie eine kostenlose Erstbewertung über Ihre Website an — das generiert qualifizierte Kontakte von Eigentümern, die über einen Verkauf nachdenken." },
        { titel: "Regionale Marktpräsenz", text: "Ihre Website wird für Suchbegriffe wie 'Immobilienmakler in [Ihrer Stadt]' optimiert — so finden Verkäufer und Käufer aus Ihrer Region direkt zu Ihnen." },
      ]}
      faqs={[
        { frage: "Kann ich Immobilien-Objekte auf der Website zeigen?", antwort: "Ja, wir können einen Bereich für Ihre aktuellen Objekte einrichten — mit Fotos, Eckdaten und Kontaktmöglichkeit. Neue Objekte pflegen wir im Rahmen des Monatspakets (79 €/Monat) ein." },
        { frage: "Wird meine Website bei Google für lokale Suchen gefunden?", antwort: "Jede Website wird mit SEO-Grundoptimierung ausgeliefert: sauberer Code, Meta-Daten und lokale Keywords wie 'Immobilienmakler in [Stadt]'. Das verbessert Ihre Sichtbarkeit deutlich." },
        { frage: "Kann ich ein Kontaktformular für Eigentümer einbinden?", antwort: "Ja, wir erstellen ein Formular speziell für Eigentümer-Anfragen — zum Beispiel für eine kostenlose Immobilienbewertung. So generieren Sie direkt qualifizierte Kontakte." },
        { frage: "Wie schnell ist meine Immobilien-Website fertig?", antwort: "In der Regel stellen wir Ihnen die fertige Website innerhalb von 1–2 Werktagen vor. Nach Ihrer Freigabe geht sie sofort online." },
      ]}
    />
  );
}
