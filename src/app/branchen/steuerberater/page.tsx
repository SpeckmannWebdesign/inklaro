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
      beschreibung="So könnte deine Steuerberater-Website aussehen — kompetent, modern und auf Vertrauen gebaut."
      screenshot="/images/LgAzE.avif"
      url="www.steuerberatung-hartmann.de"
      seoText="Die Suche nach einem neuen Steuerberater beginnt fast immer bei Google. Mandanten vergleichen Kanzleien, lesen Bewertungen und achten darauf, ob die Website Kompetenz und Vertrauen ausstrahlt. Eine professionelle Online-Präsenz mit klarer Leistungsübersicht und sympathischer Teamvorstellung macht den Unterschied zwischen einer Anfrage und einem Weiterklicken. Besonders Gründer, Freiberufler und kleine Unternehmen suchen einen Steuerberater, der modern auftritt und digital erreichbar ist."
      vorteile={[
        { titel: "Leistungen strukturiert darstellen", text: "Finanzbuchhaltung, Jahresabschluss, Lohnabrechnung, Gründungsberatung — deine Mandanten sehen auf einen Blick, welche Leistungen du anbietest und ob du der richtige Berater bist." },
        { titel: "Vertrauen durch Teamvorstellung", text: "Zeig dein Team mit Fotos und Qualifikationen. Mandanten vertrauen dir ihre Finanzen an — ein persönlicher Eindruck vorab ist dabei entscheidend." },
        { titel: "Mandantenanfragen vereinfachen", text: "Ein übersichtliches Kontaktformular oder ein Rückruf-Service macht es Interessenten leicht, dich zu kontaktieren — ohne lange Wartezeiten am Telefon." },
        { titel: "Branchenspezifische Kompetenz zeigen", text: "Ob Ärzte, Gastronomen oder E-Commerce — zeig, für welche Branchen du besondere Expertise mitbringst. Das spricht gezielt die richtigen Mandanten an." },
      ]}
      faqs={[
        { frage: "Ist die Website berufsrechtlich konform?", antwort: "Ja, wir achten auf die Anforderungen des Steuerberatungsgesetzes — insbesondere Impressumspflicht und Berufspflichten. Der vollständige Datenschutz ist bei jeder Website selbstverständlich mit dabei." },
        { frage: "Kann ich meine Leistungen und Teamseite aktualisieren lassen?", antwort: "Ja, Änderungen an Texten, Teamfotos oder Leistungsbeschreibungen kannst du jederzeit bei uns beauftragen. Das ist im monatlichen Paket (39 €/Monat) inklusive." },
        { frage: "Wird meine Kanzlei bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Steuerberater in [Stadt]', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Steuerberater-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
