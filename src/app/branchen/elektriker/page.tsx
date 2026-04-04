import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Elektriker – Inklaro",
  description: "So könnte Ihre Elektriker-Website aussehen — professionell, vertrauenswürdig und auf Ihre Branche zugeschnitten. Ab 499 € netto.",
};

export default function ElektrikerPage() {
  return (
    <BranchenShowcase
      branche="Elektriker"
      beschreibung="So könnte Ihre Elektriker-Website aussehen — professionell, vertrauenswürdig und perfekt auf Ihren Betrieb zugeschnitten."
      screenshot="/images/fullpage-handwerker.jpg"
      url="www.mueller-elektrotechnik.de"
    />
  );
}
