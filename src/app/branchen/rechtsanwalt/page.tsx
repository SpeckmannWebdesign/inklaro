import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Rechtsanwälte erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Rechtsanwälte und Kanzleien. Seriös, DSGVO-konform, mit Rechtsgebieten und Kontakt. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Rechtsanwälte"
      beschreibung="So könnte Ihre Kanzlei-Website aussehen — seriös, vertrauenswürdig und auf Ihre Mandanten zugeschnitten."
      screenshot="/images/KgvdS.avif"
      url="www.kanzlei-berger-partner.de"
      seoText="Wenn Menschen einen Rechtsanwalt suchen, googeln sie — und sie entscheiden in Sekunden, ob eine Kanzlei vertrauenswürdig wirkt. Eine professionelle Website mit klarer Darstellung der Rechtsgebiete, Anwaltsprofile und einer seriösen Gestaltung ist das Fundament für Mandantengewinnung. Ohne eigene Website verlieren Sie Mandanten an Kanzleien, die online professioneller auftreten. Besonders bei sensiblen Themen wie Familienrecht oder Arbeitsrecht suchen Menschen eine Kanzlei, die schon auf der Website Kompetenz und Vertrauen ausstrahlt."
      vorteile={[
        { titel: "Rechtsgebiete klar dargestellt", text: "Arbeitsrecht, Familienrecht, Mietrecht — Ihre Mandanten sehen sofort, ob Sie der richtige Ansprechpartner für ihr Anliegen sind. Klare Struktur statt juristischer Textwüsten." },
        { titel: "Anwaltsprofile mit Expertise", text: "Zeigen Sie Ihr Team mit Foto, Fachgebieten und Werdegang. Mandanten wollen wissen, wer ihren Fall bearbeitet — ein persönlicher Eindruck schafft Vertrauen." },
        { titel: "Erstberatung einfach anfragen", text: "Ein gut platziertes Kontaktformular oder ein Rückruf-Button macht es Mandanten leicht, den ersten Schritt zu gehen — niedrige Hemmschwelle, mehr Anfragen." },
        { titel: "Seriöse Außenwirkung", text: "Design, Sprache und Struktur Ihrer Website transportieren Professionalität. Das ist gerade bei Kanzleien entscheidend — Mandanten vertrauen Ihnen schließlich ihre wichtigsten Angelegenheiten an." },
      ]}
      faqs={[
        { frage: "Ist die Website berufsrechtlich konform?", antwort: "Ja, wir achten auf die Anforderungen der BRAO und BORA — insbesondere bei Pflichtangaben im Impressum und der Darstellung Ihrer Kanzlei. DSGVO-Konformität ist ebenfalls Standard." },
        { frage: "Kann ich meine Rechtsgebiete selbst anpassen?", antwort: "Änderungen an Rechtsgebieten, Anwaltsprofilen oder Texten können Sie jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) inklusive." },
        { frage: "Wird meine Kanzlei bei Google gefunden?", antwort: "Jede Website wird mit SEO-Grundoptimierung ausgeliefert — mit lokalen Keywords wie 'Rechtsanwalt in [Stadt]', sauberem Code und schnellen Ladezeiten." },
        { frage: "Wie schnell ist die Kanzlei-Website fertig?", antwort: "In der Regel stellen wir Ihnen die fertige Website innerhalb von 1–2 Werktagen vor. Nach Ihrer Freigabe geht sie direkt online." },
      ]}
    />
  );
}
