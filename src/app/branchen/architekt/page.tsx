import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Architekten erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Architekturbüros. Mit Projekt-Portfolio, Leistungen und Kontakt. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Architekten"
      beschreibung="So könnte deine Architektur-Website aussehen — klar, strukturiert und so durchdacht wie deine Entwürfe."
      screenshot="/images/fullpage-architekt.avif"
      url="www.atelier-nordlicht.de"
      seoText="Bauherren entscheiden heute online, mit welchem Architekturbüro sie sprechen wollen. Sie scrollen durch Referenzen, prüfen den gestalterischen Stil und suchen nach einem Büro, dessen Handschrift zu ihrem Projekt passt. Ohne eine starke Online-Präsenz mit echten Projekten bleibst du unsichtbar — und das gerade in einer Branche, in der visuelle Qualität alles ist. Eine Website, die deine Architekturhandschrift zeigt, gewinnt Bauherren, bevor das erste Gespräch überhaupt stattfindet."
      vorteile={[
        { titel: "Projekt-Portfolio im Mittelpunkt", text: "Deine Referenzen sind dein wichtigstes Verkaufsargument. Großflächige Bilder, klare Beschreibungen und Daten zu Bauvolumen oder Bauzeit zeigen sofort, was du kannst." },
        { titel: "Leistungsphasen verständlich erklärt", text: "Vom Entwurf bis zur Bauleitung — beschreibe klar, welche HOAI-Leistungsphasen du anbietest. Bauherren wissen sofort, ob du der richtige Partner bist." },
        { titel: "Persönliche Handschrift sichtbar", text: "Architektur ist Vertrauenssache. Eine authentische Vorstellung von dir und deinem Team mit Foto und Werdegang schafft die Verbindung, die Bauherren suchen." },
        { titel: "Anfragen ohne Hürden", text: "Ein klares Kontaktformular mit Feldern für Projektart, Standort und Budget macht es Interessenten leicht, den ersten Schritt zu gehen — ohne lange Telefonate." },
      ]}
      faqs={[
        { frage: "Kann ich neue Projekte regelmäßig hinzufügen?", antwort: "Ja, neue Referenzprojekte mit Fotos, Plänen und Texten pflegen wir jederzeit für dich ein. Das ist im monatlichen Paket (39 €/Monat) inklusive." },
        { frage: "Brauche ich professionelle Architekturfotos?", antwort: "Professionelle Fotos sind ideal — gerade für die Außenwirkung. Wir können aber auch mit guten Renderings, Skizzen oder hochwertigen Smartphone-Fotos starten." },
        { frage: "Wird mein Architekturbüro bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Architekt in [Stadt]' oder 'Architekturbüro Einfamilienhaus', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Architektur-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
