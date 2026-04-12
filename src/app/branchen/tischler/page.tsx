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
      beschreibung="So könnte deine Tischlerei-Website aussehen — handwerklich, warm und so authentisch wie deine Arbeit."
      screenshot="/images/fullpage-tischler.avif"
      url="www.tischlerei-hartmann.de"
      seoText="Kunden, die eine Maßanfertigung, einen Einbauschrank oder eine individuelle Küche suchen, vergleichen Tischlereien online. Sie wollen sehen, was ein Betrieb kann — echte Projekte, handwerkliche Qualität und die Liebe zum Detail. Eine Website mit überzeugenden Referenzfotos und klarer Leistungsübersicht ist dabei der entscheidende Faktor. Gerade im Tischlerhandwerk verkaufen Bilder mehr als Worte: Vorher-Nachher-Vergleiche, Nahaufnahmen von Holzverbindungen und fertige Einbauten sprechen für sich."
      vorteile={[
        { titel: "Referenzprojekte als Visitenkarte", text: "Zeig deine besten Arbeiten mit hochwertigen Fotos — Maßmöbel, Innenausbau, Treppen oder Küchen. Potenzielle Kunden sehen sofort, was du kannst." },
        { titel: "Leistungsspektrum klar kommunizieren", text: "Möbelbau, Innenausbau, Fenster, Türen, Restaurierung — mach deutlich, welche Leistungen du anbietest und welche Materialien du verarbeitest." },
        { titel: "Handwerksqualität sichtbar machen", text: "Meisterbetrieb, Innungsmitgliedschaft, regionale Hölzer — diese Qualitätsmerkmale gehören prominent auf deine Website. Sie unterscheiden dich von Billiganbietern." },
        { titel: "Anfragen über die Website generieren", text: "Ein Kontaktformular mit der Möglichkeit, Fotos oder Skizzen hochzuladen, macht es Kunden leicht, ihr Projekt zu beschreiben und eine Anfrage zu stellen." },
      ]}
      faqs={[
        { frage: "Kann ich neue Projekte regelmäßig hinzufügen?", antwort: "Ja, neue Referenzprojekte mit Fotos und Beschreibungen pflegen wir jederzeit für dich ein. Das ist im monatlichen Paket (39 €/Monat) inklusive." },
        { frage: "Brauche ich professionelle Fotos meiner Arbeiten?", antwort: "Professionelle Fotos sind ideal, aber gute Smartphone-Fotos bei Tageslicht reichen oft aus. Wichtig ist, dass die Qualität deiner Arbeit erkennbar ist." },
        { frage: "Wird meine Tischlerei bei Google gefunden?", antwort: "Ja, jede Website wird so gebaut, dass sie bei Google gut sichtbar ist — mit passenden Suchbegriffen wie 'Tischlerei in [Stadt]' oder 'Maßmöbel [Region]', sauberer Technik und schnellen Ladezeiten." },
        { frage: "Wie schnell ist meine Tischlerei-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
