import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Freelancer erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Freelancer und Selbstständige. Mit Portfolio, Referenzen und Kontaktmöglichkeit. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function FreelancerPage() {
  return (
    <BranchenShowcase
      branche="Freelancer"
      beschreibung="So könnte deine Freelancer-Website aussehen — modern, persönlich und perfekt für dein Portfolio. Für Berater, Designer und Kreative."
      screenshot="/images/fullpage-freelancer.avif"
      url="www.anna-richter-design.de"
      seoText="Als Freelancer bist du deine eigene Marke — und deine Website ist deine digitale Visitenkarte. Potenzielle Kunden googeln deinen Namen, bevor sie dich beauftragen. Wer dann nur ein LinkedIn-Profil findet, verliert gegen die Konkurrenz mit eigener Website. Eine professionelle Online-Präsenz mit Portfolio, Referenzen und klarer Positionierung zeigt sofort: Hier arbeitet jemand, der sein Handwerk versteht. Gerade Freelancer, die auf Empfehlungen setzen, brauchen eine Seite, die beim ersten Klick überzeugt."
      vorteile={[
        { titel: "Portfolio, das überzeugt", text: "Zeig deine besten Arbeiten in einem ansprechenden Portfolio — visuell überzeugend und so strukturiert, dass potenzielle Kunden sofort sehen, was du kannst." },
        { titel: "Persönliche Positionierung", text: "Deine Website macht klar, wofür du stehst und was dich von anderen unterscheidet. Eine starke Über-mich-Seite schafft Vertrauen, bevor das erste Gespräch stattfindet." },
        { titel: "Direkte Kontaktmöglichkeit", text: "Ein gut platziertes Kontaktformular oder Buchungslink macht es Interessenten leicht, den nächsten Schritt zu gehen — ohne Umwege über E-Mail-Adressen." },
        { titel: "Sichtbar für neue Auftraggeber", text: "Deine Website wird für relevante Suchbegriffe optimiert — so finden nicht nur Empfehlungskunden, sondern auch neue Auftraggeber direkt zu dir." },
      ]}
      faqs={[
        { frage: "Kann ich mein Portfolio regelmäßig erweitern?", antwort: "Ja — neue Projekte, Referenzen oder Kundenstimmen kannst du jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) bereits enthalten." },
        { frage: "Brauche ich als Freelancer wirklich eine eigene Website?", antwort: "Definitiv. Social-Media-Profile und Plattformen wie Fiverr oder Upwork gehören dir nicht. Deine eigene Website ist der einzige Kanal, den du vollständig kontrollierst — und der professionellste Eindruck, den du hinterlassen kannst." },
        { frage: "Kann ich einen Buchungskalender einbinden?", antwort: "Ja, wir integrieren Tools wie Calendly oder Cal.com, damit Interessenten direkt einen Termin mit dir buchen können — ohne E-Mail-Pingpong." },
        { frage: "Wie schnell ist meine Freelancer-Website online?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
