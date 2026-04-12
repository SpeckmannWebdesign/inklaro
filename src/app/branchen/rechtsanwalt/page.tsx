import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Rechtsanwälte erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Rechtsanwälte und Kanzleien. Seriös, rechtlich sicher, mit Rechtsgebieten und Kontakt. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Rechtsanwälte"
      beschreibung="So könnte deine Kanzlei-Website aussehen — seriös, vertrauenswürdig und auf deine Mandanten zugeschnitten."
      screenshot="/images/fullpage-rechtsanwalt.avif"
      url="www.kanzlei-berger-partner.de"
      seoText="Wenn Menschen einen Rechtsanwalt suchen, googeln sie — und sie entscheiden in Sekunden, ob eine Kanzlei vertrauenswürdig wirkt. Eine professionelle Website mit klarer Darstellung der Rechtsgebiete, Anwaltsprofile und einer seriösen Gestaltung ist das Fundament für Mandantengewinnung. Ohne eigene Website verlierst du Mandanten an Kanzleien, die online professioneller auftreten. Besonders bei sensiblen Themen wie Familienrecht oder Arbeitsrecht suchen Menschen eine Kanzlei, die schon auf der Website Kompetenz und Vertrauen ausstrahlt."
      vorteile={[
        { titel: "Rechtsgebiete klar dargestellt", text: "Arbeitsrecht, Familienrecht, Mietrecht — deine Mandanten sehen sofort, ob du der richtige Ansprechpartner für ihr Anliegen bist. Klare Struktur statt juristischer Textwüsten." },
        { titel: "Anwaltsprofile mit Expertise", text: "Zeig dein Team mit Foto, Fachgebieten und Werdegang. Mandanten wollen wissen, wer ihren Fall bearbeitet — ein persönlicher Eindruck schafft Vertrauen." },
        { titel: "Erstberatung einfach anfragen", text: "Ein gut platziertes Kontaktformular oder ein Rückruf-Button macht es Mandanten leicht, den ersten Schritt zu gehen — niedrige Hemmschwelle, mehr Anfragen." },
        { titel: "Seriöse Außenwirkung", text: "Design, Sprache und Struktur deiner Website transportieren Professionalität. Das ist gerade bei Kanzleien entscheidend — Mandanten vertrauen dir schließlich ihre wichtigsten Angelegenheiten an." },
      ]}
      faqs={[
        { frage: "Ist die Website berufsrechtlich konform?", antwort: "Ja, wir achten auf die Anforderungen der BRAO und BORA — insbesondere bei Pflichtangaben im Impressum und der Darstellung deiner Kanzlei. Der vollständige Datenschutz ist bei uns natürlich immer mit dabei." },
        { frage: "Kann ich meine Rechtsgebiete selbst anpassen?", antwort: "Änderungen an Rechtsgebieten, Anwaltsprofilen oder Texten kannst du jederzeit bei uns beauftragen. Das ist im monatlichen Paket (39 €/Monat) inklusive." },
        { frage: "Wird meine Kanzlei bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Rechtsanwalt in [Stadt]', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist die Kanzlei-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
