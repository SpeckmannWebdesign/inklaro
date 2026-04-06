import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Tischler erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Tischlereien und Schreinereien. Mit Referenzprojekten, Leistungen und Kontakt. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Tischler & Schreiner"
      beschreibung="So könnte Ihre Tischlerei-Website aussehen — handwerklich, warm und so authentisch wie Ihre Arbeit."
      screenshot="/images/wj1Qk.avif"
      url="www.tischlerei-hartmann.de"
      seoText="Kunden, die eine Maßanfertigung, einen Einbauschrank oder eine individuelle Küche suchen, vergleichen Tischlereien online. Sie wollen sehen, was ein Betrieb kann — echte Projekte, handwerkliche Qualität und die Liebe zum Detail. Eine Website mit überzeugenden Referenzfotos und klarer Leistungsübersicht ist dabei der entscheidende Faktor. Gerade im Tischlerhandwerk verkaufen Bilder mehr als Worte: Vorher-Nachher-Vergleiche, Nahaufnahmen von Holzverbindungen und fertige Einbauten sprechen für sich."
      vorteile={[
        { titel: "Referenzprojekte als Visitenkarte", text: "Zeigen Sie Ihre besten Arbeiten mit hochwertigen Fotos — Maßmöbel, Innenausbau, Treppen oder Küchen. Potenzielle Kunden sehen sofort, was Sie können." },
        { titel: "Leistungsspektrum klar kommunizieren", text: "Möbelbau, Innenausbau, Fenster, Türen, Restaurierung — machen Sie deutlich, welche Leistungen Sie anbieten und welche Materialien Sie verarbeiten." },
        { titel: "Handwerksqualität sichtbar machen", text: "Meisterbetrieb, Innungsmitgliedschaft, regionale Hölzer — diese Qualitätsmerkmale gehören prominent auf Ihre Website. Sie unterscheiden Sie von Billiganbietern." },
        { titel: "Anfragen über die Website generieren", text: "Ein Kontaktformular mit der Möglichkeit, Fotos oder Skizzen hochzuladen, macht es Kunden leicht, ihr Projekt zu beschreiben und eine Anfrage zu stellen." },
      ]}
      faqs={[
        { frage: "Kann ich neue Projekte regelmäßig hinzufügen?", antwort: "Ja, neue Referenzprojekte mit Fotos und Beschreibungen pflegen wir jederzeit für Sie ein. Das ist im monatlichen Paket (79 €/Monat) inklusive." },
        { frage: "Brauche ich professionelle Fotos meiner Arbeiten?", antwort: "Professionelle Fotos sind ideal, aber gute Smartphone-Fotos bei Tageslicht reichen oft aus. Wichtig ist, dass die Qualität Ihrer Arbeit erkennbar ist." },
        { frage: "Wird meine Tischlerei bei Google gefunden?", antwort: "Jede Website wird mit SEO-Grundoptimierung ausgeliefert — mit Keywords wie 'Tischlerei in [Stadt]' oder 'Maßmöbel [Region]', sauberem Code und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Tischlerei-Website fertig?", antwort: "In der Regel stellen wir Ihnen die fertige Website innerhalb von 1–2 Werktagen vor. Nach Ihrer Freigabe geht sie direkt online." },
      ]}
    />
  );
}
