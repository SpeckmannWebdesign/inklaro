import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Physiotherapeuten erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Physiotherapie-Praxen. Mit Online-Terminbuchung, Leistungen und Team. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Physiotherapie-Praxen"
      beschreibung="So könnte deine Physio-Website aussehen — vertrauenswürdig, modern und perfekt für Praxis und Patienten."
      screenshot="/images/fullpage-physiotherapie.avif"
      url="www.physio-vital-praxis.de"
      seoText="Wer Schmerzen hat oder eine Verordnung in der Hand hält, sucht online nach einer Physiotherapie in der Nähe — und entscheidet in wenigen Sekunden, wo angerufen wird. Eine professionelle Website mit klaren Informationen zu Leistungen, Krankenkassen und freien Terminen ist dabei der entscheidende Vertrauensanker. Patienten wollen wissen, wer sie behandelt, welche Methoden eingesetzt werden und ob sie kurzfristig einen Termin bekommen. Ohne eine starke Online-Präsenz verlierst du Patienten an Praxen, die digital besser auftreten."
      vorteile={[
        { titel: "Online-Terminbuchung integriert", text: "Patienten buchen ihren Termin direkt über die Website — ohne Telefonketten, ohne Wartezeit. Das spart deinem Team Zeit und sorgt für volle Bücher." },
        { titel: "Leistungen klar dargestellt", text: "Manuelle Therapie, Krankengymnastik, Lymphdrainage, KGG — Patienten sehen sofort, ob du die Leistung anbietest, die auf ihrer Verordnung steht." },
        { titel: "Therapeuten-Team vorgestellt", text: "Zeig dein Team mit Foto und Spezialisierung. Patienten möchten wissen, wer sie behandelt, gerade bei längeren Therapieserien." },
        { titel: "Krankenkassen und Privatleistungen", text: "Mach klar, welche Kassen du abrechnest und welche zusätzlichen Privatleistungen du anbietest. Das schafft Transparenz und vermeidet Rückfragen." },
      ]}
      faqs={[
        { frage: "Kann ich ein Online-Terminbuchungssystem einbinden lassen?", antwort: "Ja, wir binden Systeme wie Doctolib oder ein einfaches Kontaktformular für Terminanfragen ein. So entlastest du dein Telefon und Patienten buchen rund um die Uhr." },
        { frage: "Ist die Website datenschutzkonform für Patientendaten?", antwort: "Ja, alle Formulare und Anfragen werden DSGVO-konform verarbeitet, inklusive sicherer Übertragung und vollständigem Datenschutz. Das gehört bei jeder Website von uns dazu." },
        { frage: "Wird meine Praxis lokal bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Physiotherapie in [Stadt]', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Physio-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
