import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Zahnärzte erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Zahnarztpraxen. Mit Leistungen, Team und Online-Terminbuchung. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Zahnärzte"
      beschreibung="So könnte deine Zahnarzt-Website aussehen — modern, vertrauenswürdig und perfekt für deine Praxis."
      screenshot="/images/fullpage-zahnarzt.avif"
      url="www.zahnarztpraxis-schmidt.de"
      seoText="Die Suche nach einem neuen Zahnarzt beginnt fast immer bei Google. Patienten lesen Bewertungen, schauen sich Praxis-Fotos an und prüfen, ob die Leistungen zu ihren Bedürfnissen passen — bevor sie auch nur einen Termin anfragen. Eine professionelle Website mit modernem Design, klarer Leistungsübersicht und einem sympathischen Team-Eindruck baut Berührungsängste ab und gewinnt neue Patienten. Gerade bei sensiblen Themen wie Implantaten, Kieferorthopädie oder Bleaching entscheidet die Außenwirkung der Website darüber, ob jemand anruft oder weiterklickt."
      vorteile={[
        { titel: "Leistungen verständlich erklärt", text: "Prophylaxe, Implantate, ästhetische Zahnheilkunde, Kinderzahnheilkunde — Patienten sehen sofort, ob du das anbietest, was sie suchen." },
        { titel: "Team mit echter Persönlichkeit", text: "Zeig dein Team mit Foto, Spezialisierung und persönlichem Bezug. Wer den Behandler vorab kennt, kommt entspannter zur Behandlung." },
        { titel: "Online-Terminbuchung", text: "Patienten buchen ihren Termin direkt über die Website — ohne Telefonwarteschleife, ohne Rückrufbitte. Das entlastet dein Team und füllt den Kalender." },
        { titel: "Praxisrundgang in Bildern", text: "Helle Räume, moderne Geräte, freundliche Atmosphäre — eine Bildergalerie deiner Praxis nimmt Patienten die Angst, bevor sie überhaupt vor der Tür stehen." },
      ]}
      faqs={[
        { frage: "Kann ich Doctolib oder ein anderes Buchungssystem einbinden lassen?", antwort: "Ja, wir binden gängige Terminbuchungs-Systeme wie Doctolib oder Jameda ein. Alternativ richten wir ein einfaches Anfrage-Formular ein, das dein Team direkt erreicht." },
        { frage: "Ist die Website berufsrechtlich konform?", antwort: "Ja, wir achten auf die Anforderungen des Heilmittelwerbegesetzes (HWG) und der zahnärztlichen Berufsordnung. Datenschutz nach DSGVO ist bei jeder Website von uns selbstverständlich." },
        { frage: "Wird meine Praxis lokal bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Zahnarzt in [Stadt]', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Zahnarzt-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
