import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Immobilien – Inklaro",
  description: "So könnte Ihre Immobilien-Website aussehen — exklusiv, professionell und auf Vertrauen gebaut. Ab 499 € netto.",
};

export default function ImmobilienPage() {
  return (
    <BranchenShowcase
      branche="Immobilien"
      beschreibung="So könnte Ihre Immobilien-Website aussehen — exklusiv, professionell und auf Vertrauen gebaut. Für Makler, Hausverwaltungen und Bauträger."
      screenshot="/images/fullpage-immobilien.avif"
      url="www.thornburg-immobilien.de"
    />
  );
}
