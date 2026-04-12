import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Coaches erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Coaches und Trainer. Mit Angebot, Methoden und Buchung. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Coaches"
      beschreibung="So könnte deine Coaching-Website aussehen — persönlich, klar positioniert und auf Vertrauen gebaut."
      screenshot="/images/fullpage-coaching.avif"
      url="www.lena-mahler-coaching.de"
      seoText="Coaching ist Vertrauenssache — und Vertrauen entsteht heute zuerst online. Wer einen Business-, Life- oder Karriere-Coach sucht, googelt, vergleicht Persönlichkeiten und entscheidet, mit wem ein Erstgespräch infrage kommt. Ohne eigene Website mit klarer Positionierung, persönlicher Vorstellung und überzeugenden Stimmen bisheriger Kunden bleibst du eine austauschbare Stimme im Markt. Eine professionelle Online-Präsenz, die zeigt, für wen du arbeitest und wie deine Methoden wirken, gewinnt Klienten — bevor das erste Gespräch überhaupt stattfindet."
      vorteile={[
        { titel: "Klare Positionierung", text: "Wer bist du, für wen arbeitest du, was kannst du verändern? Deine Website beantwortet diese drei Fragen in den ersten Sekunden — und filtert die richtigen Klienten zu dir." },
        { titel: "Methoden und Ansatz erklärt", text: "Systemisches Coaching, NLP, lösungsorientiert — beschreibe deinen Ansatz so, dass Klienten verstehen, was sie erwartet und warum es funktioniert." },
        { titel: "Authentische Vorstellung", text: "Eine starke Über-mich-Seite mit deinem Foto, deiner Geschichte und deiner Haltung schafft die emotionale Verbindung, ohne die Coaching nicht funktioniert." },
        { titel: "Erstgespräch einfach buchen", text: "Ein klarer Call-to-Action für ein kostenfreies Kennenlern-Gespräch — über Kalender-Tool oder Formular — senkt die Hürde und füllt deinen Kalender." },
      ]}
      faqs={[
        { frage: "Kann ich Kalender-Tools wie Calendly oder TidyCal einbinden?", antwort: "Ja, wir binden gängige Buchungstools für Erstgespräche oder Sessions ein. Klienten buchen direkt freie Slots — ohne Hin und Her per E-Mail." },
        { frage: "Kann ich später einen Onlinekurs oder Newsletter anbinden?", antwort: "Ja, deine Website ist von Anfang an so aufgebaut, dass wir später Newsletter-Anmeldungen, Kursverkäufe oder digitale Produkte einfach ergänzen können." },
        { frage: "Wird meine Coaching-Website bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Business Coach [Stadt]' oder 'Karriere Coaching online', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Coaching-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
