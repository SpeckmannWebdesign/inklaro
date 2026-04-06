import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Arztpraxen erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Arztpraxen und Therapeuten. Mit Sprechzeiten, Leistungen und Online-Terminbuchung. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function ArztpraxisPage() {
  return (
    <BranchenShowcase
      branche="Arztpraxen"
      beschreibung="So könnte Ihre Praxis-Website aussehen — vertrauenswürdig, seriös und patientenfreundlich. Für Ärzte, Zahnärzte und Therapeuten."
      screenshot="/images/fullpage-arztpraxis.avif"
      url="www.praxis-dr-weber.de"
      seoText="Patienten suchen heute ihren Arzt online — sie vergleichen Bewertungen, lesen Leistungsbeschreibungen und schauen sich die Praxis vorab an. Eine veraltete oder fehlende Website kostet Sie Patienten, denn Vertrauen beginnt beim ersten Eindruck. Eine professionelle Praxis-Website mit klaren Sprechzeiten, Leistungsübersicht und einem freundlichen Teamfoto nimmt Patienten die Unsicherheit. Besonders Neupatienten entscheiden oft anhand der Website, ob sie anrufen oder weitersuchen."
      vorteile={[
        { titel: "Sprechzeiten und Kontakt sofort sichtbar", text: "Ihre Patienten finden Sprechzeiten, Telefonnummer und Adresse auf einen Blick — ohne langes Suchen. Das reduziert unnötige Anrufe in der Praxis." },
        { titel: "Online-Terminbuchung möglich", text: "Binden Sie ein Online-Buchungstool ein, damit Patienten auch außerhalb der Sprechzeiten Termine vereinbaren können. Weniger Telefonate, mehr Struktur." },
        { titel: "Leistungen verständlich erklärt", text: "Von Vorsorge bis Spezialbehandlung — Ihre Patienten erfahren vorab, welche Leistungen Sie anbieten und was sie erwartet. Das schafft Vertrauen." },
        { titel: "Team und Praxis vorstellen", text: "Ein sympathisches Teamfoto und ein virtueller Blick in die Praxis nehmen neuen Patienten die Berührungsangst — besonders bei Zahnärzten ein entscheidender Faktor." },
      ]}
      faqs={[
        { frage: "Ist die Website DSGVO-konform für Arztpraxen?", antwort: "Ja, selbstverständlich. Alle unsere Websites sind DSGVO-konform — inklusive Datenschutzerklärung, Cookie-Hinweis und sicherer SSL-Verschlüsselung. Patientendaten werden nicht über die Website verarbeitet." },
        { frage: "Kann ich Sprechzeiten selbst ändern?", antwort: "Änderungen an Sprechzeiten, Urlaubszeiten oder Leistungen können Sie jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) inklusive." },
        { frage: "Kann ich eine Online-Terminbuchung integrieren?", antwort: "Ja, wir binden gängige Buchungssysteme wie Doctolib oder Jameda ein. So können Patienten rund um die Uhr Termine buchen." },
        { frage: "Wie schnell ist die Praxis-Website fertig?", antwort: "Wir stellen Ihnen die fertige Website in 1–2 Werktagen vor. Nach Ihrer Freigabe geht sie direkt online — Sie können sich weiter auf Ihre Patienten konzentrieren." },
      ]}
    />
  );
}
