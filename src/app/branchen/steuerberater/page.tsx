import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Steuerberater erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Steuerberater und Steuerkanzleien. Mit Leistungsübersicht, Team und Kontakt. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Steuerberater"
      beschreibung="So könnte Ihre Steuerberater-Website aussehen — kompetent, modern und auf Vertrauen gebaut."
      screenshot="/images/LgAzE.avif"
      url="www.steuerberatung-hartmann.de"
      seoText="Die Suche nach einem neuen Steuerberater beginnt fast immer bei Google. Mandanten vergleichen Kanzleien, lesen Bewertungen und achten darauf, ob die Website Kompetenz und Vertrauen ausstrahlt. Eine professionelle Online-Präsenz mit klarer Leistungsübersicht und sympathischer Teamvorstellung macht den Unterschied zwischen einer Anfrage und einem Weiterklicken. Besonders Gründer, Freiberufler und kleine Unternehmen suchen einen Steuerberater, der modern auftritt und digital erreichbar ist."
      vorteile={[
        { titel: "Leistungen strukturiert darstellen", text: "Finanzbuchhaltung, Jahresabschluss, Lohnabrechnung, Gründungsberatung — Ihre Mandanten sehen auf einen Blick, welche Leistungen Sie anbieten und ob Sie der richtige Berater sind." },
        { titel: "Vertrauen durch Teamvorstellung", text: "Zeigen Sie Ihr Team mit Fotos und Qualifikationen. Mandanten vertrauen Ihnen ihre Finanzen an — ein persönlicher Eindruck vorab ist dabei entscheidend." },
        { titel: "Mandantenanfragen vereinfachen", text: "Ein übersichtliches Kontaktformular oder ein Rückruf-Service macht es Interessenten leicht, Sie zu kontaktieren — ohne lange Wartezeiten am Telefon." },
        { titel: "Branchenspezifische Kompetenz zeigen", text: "Ob Ärzte, Gastronomen oder E-Commerce — zeigen Sie, für welche Branchen Sie besondere Expertise mitbringen. Das spricht gezielt die richtigen Mandanten an." },
      ]}
      faqs={[
        { frage: "Ist die Website berufsrechtlich konform?", antwort: "Ja, wir achten auf die Anforderungen des Steuerberatungsgesetzes — insbesondere Impressumspflicht und Berufspflichten. DSGVO-Konformität ist bei jeder Website Standard." },
        { frage: "Kann ich meine Leistungen und Teamseite aktualisieren lassen?", antwort: "Ja, Änderungen an Texten, Teamfotos oder Leistungsbeschreibungen können Sie jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) inklusive." },
        { frage: "Wird meine Kanzlei bei Google gefunden?", antwort: "Jede Website wird mit SEO-Grundoptimierung ausgeliefert — mit Keywords wie 'Steuerberater in [Stadt]', sauberem Code und schnellen Ladezeiten für bessere Sichtbarkeit." },
        { frage: "Wie schnell ist meine Steuerberater-Website fertig?", antwort: "In der Regel stellen wir Ihnen die fertige Website innerhalb von 1–2 Werktagen vor. Nach Ihrer Freigabe kann sie sofort live gehen." },
      ]}
    />
  );
}
