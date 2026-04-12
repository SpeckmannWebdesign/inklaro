import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Fotografen erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Fotografen. Mit Portfolio-Galerie, Paketen und Buchung. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Fotografen"
      beschreibung="So könnte deine Fotografen-Website aussehen — visuell stark, aufgeräumt und ganz auf deine Bilder fokussiert."
      screenshot="/images/fullpage-fotograf.avif"
      url="www.lichtgestalt-fotografie.de"
      seoText="Für Fotografen ist die eigene Website der wichtigste Verkaufsraum überhaupt. Brautpaare, Familien und Unternehmen vergleichen Portfolios online — und entscheiden in wenigen Sekunden, ob ein Stil zu ihnen passt. Wer sein Portfolio nur auf Instagram zeigt, ist von einem Algorithmus abhängig und kann seine Bilder nicht so präsentieren, wie sie es verdienen. Eine eigene Website mit großflächigen Galerien, klaren Paketen und einer einfachen Buchung verwandelt Bewunderer in zahlende Kunden."
      vorteile={[
        { titel: "Großflächige Portfolio-Galerien", text: "Deine Bilder kommen voll zur Geltung — in hochauflösenden Galerien, ohne ablenkendes Drumherum. Genau so, wie sie gesehen werden sollen." },
        { titel: "Pakete und Preise transparent", text: "Hochzeit, Familie, Business — zeig deine Pakete mit klaren Inhalten und Preisen. Das filtert vor und du sprichst nur noch mit Kunden, die zu dir passen." },
        { titel: "Anfragen über die Website", text: "Ein Anfrage-Formular mit Feldern für Datum, Ort und Wünschen macht es Kunden leicht, dich zu buchen — und liefert dir alle wichtigen Infos vorab." },
        { titel: "Persönlichkeit zeigen", text: "Eine authentische Über-mich-Seite mit deinem Foto und deiner Geschichte schafft Vertrauen. Kunden buchen Fotografen, bei denen sie sich wohlfühlen werden." },
      ]}
      faqs={[
        { frage: "Kann ich neue Fotos und Galerien hinzufügen lassen?", antwort: "Ja, neue Galerien, Portfolio-Updates oder Saisonprojekte pflegen wir jederzeit für dich ein. Das ist im monatlichen Paket (39 €/Monat) inklusive." },
        { frage: "Sind meine Bilder vor Diebstahl geschützt?", antwort: "Wir richten technische Schutzmechanismen wie Rechtsklick-Sperre und Wasserzeichen-Optionen ein. Hundertprozentigen Schutz gibt es nie, aber wir machen es Bilderdieben deutlich schwerer." },
        { frage: "Kann ich ein Anfrage-Formular für Buchungen einbinden?", antwort: "Ja, wir erstellen ein individuelles Formular mit Feldern für Datum, Ort, Paket und Wünsche. So bekommst du qualifizierte Anfragen und sparst dir lange Klärungs-E-Mails." },
        { frage: "Wie schnell ist meine Fotografen-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
