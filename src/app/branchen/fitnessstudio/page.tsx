import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Fitnessstudios erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Fitnessstudios und Personal Trainer. Mit Kursplan, Mitgliedschaft und Probetraining. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function FitnessstudioPage() {
  return (
    <BranchenShowcase
      branche="Fitnessstudios"
      beschreibung="So könnte deine Fitness-Website aussehen — kraftvoll, energetisch und motivierend. Für Gyms, Personal Trainer und Yoga-Studios."
      screenshot="/images/fullpage-fitnessstudio.avif"
      url="www.kraft-fitness-oldenburg.de"
      seoText="Wer ein neues Fitnessstudio sucht, vergleicht online — Ausstattung, Kursangebot, Preise und Atmosphäre. Eine Website, die Energie ausstrahlt und alle Informationen auf einen Blick liefert, ist der entscheidende Faktor für eine Probetraining-Anfrage. Ohne professionellen Internetauftritt gehen potenzielle Mitglieder zum Studio nebenan, das online besser aufgestellt ist. Gerade im Fitnessbereich zählen Bilder, Emotionen und ein klarer Call-to-Action: Jetzt Probetraining sichern."
      vorteile={[
        { titel: "Kursplan übersichtlich dargestellt", text: "Deine Mitglieder und Interessenten sehen auf einen Blick, welche Kurse wann stattfinden — aktuell, übersichtlich und auf dem Smartphone abrufbar." },
        { titel: "Probetraining direkt buchbar", text: "Ein prominenter Button für das kostenlose Probetraining senkt die Hemmschwelle. Interessenten melden sich direkt an — ohne erst anrufen zu müssen." },
        { titel: "Ausstattung und Angebot zeigen", text: "Trainingsgeräte, Wellness-Bereich, Personal Training — zeig, was dein Studio besonders macht. Bilder und kurze Beschreibungen wirken stärker als lange Texte." },
        { titel: "Mitgliedschaften transparent darstellen", text: "Klare Preismodelle und Mitgliedschaftsoptionen direkt auf der Website schaffen Vertrauen und vermeiden Überraschungen beim Erstgespräch." },
      ]}
      faqs={[
        { frage: "Kann ich meinen Kursplan regelmäßig aktualisieren lassen?", antwort: "Ja, Änderungen am Kursplan oder an Öffnungszeiten kannst du jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) inklusive." },
        { frage: "Kann ich ein Probetraining-Formular einbinden?", antwort: "Ja, wir integrieren ein Anmeldeformular für Probetrainings, das direkt auf deiner Startseite oder einer separaten Landingpage platziert wird." },
        { frage: "Funktioniert die Website auch gut auf dem Handy?", antwort: "Absolut — alle unsere Websites sind mobile-first entwickelt. Gerade im Fitnessbereich suchen die meisten Interessenten am Smartphone." },
        { frage: "Wie schnell ist meine Fitness-Website online?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
