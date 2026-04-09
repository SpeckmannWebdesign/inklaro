import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Cafés erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Cafés und Bäckereien. Mit Speisekarte, Öffnungszeiten und Atmosphäre-Fotos. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function Page() {
  return (
    <BranchenShowcase
      branche="Cafés & Bäckereien"
      beschreibung="So könnte deine Café-Website aussehen — warm, einladend und so gemütlich wie dein Laden."
      screenshot="/images/5nEbT.avif"
      url="www.cafe-goldstueck.de"
      seoText="Ob Frühstück, Kaffeespezialitäten oder hausgemachter Kuchen — Gäste suchen ihr nächstes Lieblingscafé online. Sie scrollen durch Fotos, schauen die Karte an und prüfen die Öffnungszeiten, bevor sie vorbeikommen. Ein Café ohne eigene Website verliert diese Gäste an die Konkurrenz, die mit schönen Bildern und klaren Infos überzeugt. Die Atmosphäre deines Cafés muss sich bereits auf der Website widerspiegeln — warme Farben, einladende Fotos und eine Speisekarte, die Lust auf einen Besuch macht."
      vorteile={[
        { titel: "Atmosphäre digital spürbar machen", text: "Gemütliche Fotos, warme Farben und ein einladendes Design — deine Website vermittelt das Gefühl deines Cafés, noch bevor der Gast durch die Tür kommt." },
        { titel: "Speisekarte und Angebot zeigen", text: "Kaffee-Spezialitäten, Frühstücksangebote, Tagesgerichte — alles übersichtlich auf einen Blick. So wissen deine Gäste vorher, was sie erwartet." },
        { titel: "Öffnungszeiten und Standort", text: "Wann hast du geöffnet? Wo genau bist du? Mit Karte, Adresse und aktuellen Öffnungszeiten finden deine Gäste ohne Umwege zu dir." },
        { titel: "Events und Besonderheiten hervorheben", text: "Sonntagsbrunch, Live-Musik, saisonale Angebote — mach auf Besonderheiten aufmerksam und gib Stammgästen einen Grund, regelmäßig vorbeizuschauen." },
      ]}
      faqs={[
        { frage: "Kann ich meine Speisekarte und Öffnungszeiten aktualisieren lassen?", antwort: "Ja, Änderungen an Speisekarte, Öffnungszeiten oder saisonalen Angeboten kannst du jederzeit bei uns beauftragen. Das ist im monatlichen Paket (79 €/Monat) inklusive." },
        { frage: "Brauche ich professionelle Fotos von meinem Café?", antwort: "Eigene Fotos wirken am authentischsten — aber auch gute Smartphone-Fotos reichen oft aus. Alternativ arbeiten wir mit passenden Stockfotos, die die Atmosphäre deines Cafés transportieren." },
        { frage: "Kann ich Events oder Aktionen auf der Website ankündigen?", antwort: "Ja, wir können einen Bereich für aktuelle Events, Wochenangebote oder saisonale Aktionen einrichten. So bleiben deine Stammgäste immer informiert." },
        { frage: "Wie schnell ist meine Café-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
      ]}
    />
  );
}
