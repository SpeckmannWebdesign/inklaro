import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Restaurants erstellen lassen – Ab 799 € | Inklaro",
  description: "Professionelle Website für Restaurants und Gastronomie. Mit Speisekarte, Reservierung und Öffnungszeiten. Ab 799 € netto — erst zahlen bei Zufriedenheit.",
};

export default function RestaurantPage() {
  return (
    <BranchenShowcase
      branche="Restaurants"
      beschreibung="So könnte deine Restaurant-Website aussehen — elegant, einladend und perfekt auf deine Gastronomie zugeschnitten. Für Restaurants, Cafés und Catering."
      screenshot="/images/fullpage-restaurant.avif"
      url="www.labella-vita-restaurant.de"
      seoText="Über 80 % der Gäste informieren sich online, bevor sie einen Tisch reservieren — sie schauen die Speisekarte an, lesen Bewertungen und prüfen die Öffnungszeiten. Ohne eine professionelle Website landen potenzielle Gäste bei der Konkurrenz, die nur einen Klick entfernt ist. Eine ansprechende Website mit appetitlichen Fotos, aktueller Speisekarte und einfacher Reservierungsmöglichkeit verwandelt Interessenten in Gäste. Besonders in der Gastronomie zählt der erste Eindruck — und der beginnt heute im Netz."
      vorteile={[
        { titel: "Speisekarte immer aktuell", text: "Deine Speisekarte ist übersichtlich online verfügbar — mit Allergenen, Preisen und saisonalen Gerichten. Gäste wissen vorher, was sie erwartet." },
        { titel: "Online-Reservierung integriert", text: "Kein Telefonklingeln mehr in der Stoßzeit. Gäste reservieren direkt über deine Website — bequem, rund um die Uhr und ohne Wartezeit." },
        { titel: "Appetitliche Bildwelt", text: "Hochwertige Fotos deiner Gerichte und deines Ambientes wecken Appetit und Vorfreude. Bilder verkaufen in der Gastronomie mehr als Worte." },
        { titel: "Öffnungszeiten und Anfahrt", text: "Deine Gäste finden sofort, wann du geöffnet hast und wie sie zu dir kommen — mit Karteneinbindung und Parkmöglichkeiten." },
      ]}
      faqs={[
        { frage: "Kann ich meine Speisekarte selbst aktualisieren?", antwort: "Änderungen an deiner Speisekarte kannst du jederzeit bei uns beauftragen — das ist im monatlichen Paket (39 €/Monat) inklusive. So bleibt deine Karte immer aktuell." },
        { frage: "Wie schnell ist meine Restaurant-Website fertig?", antwort: "In der Regel senden wir dir innerhalb von 1–2 Werktagen einen Vorschau-Link zur fertigen Website. Wenn du zufrieden bist, stellen wir die Rechnung — und nach Zahlung geht deine Website sofort live." },
        { frage: "Kann ich eine Online-Reservierung einbinden?", antwort: "Ja, wir binden gängige Reservierungssysteme wie Google Reservierung oder ein einfaches Kontaktformular ein. So können Gäste direkt über deine Website buchen." },
        { frage: "Brauche ich professionelle Fotos meiner Gerichte?", antwort: "Eigene Fotos wirken am besten — aber wir können auch mit professionellen Stockfotos arbeiten, die zu deinem Konzept passen. Ein Smartphone-Foto in guter Qualität reicht oft schon aus." },
      ]}
    />
  );
}
