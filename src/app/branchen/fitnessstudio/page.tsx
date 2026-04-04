import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Fitnessstudios – Inklaro",
  description: "So könnte Ihre Fitness-Website aussehen — kraftvoll, energetisch und motivierend. Ab 499 € netto.",
};

export default function FitnessstudioPage() {
  return (
    <BranchenShowcase
      branche="Fitnessstudios"
      beschreibung="So könnte Ihre Fitness-Website aussehen — kraftvoll, energetisch und motivierend. Für Gyms, Personal Trainer und Yoga-Studios."
      screenshot="/images/fullpage-fitnessstudio.jpg"
      url="www.kraft-fitness-oldenburg.de"
    />
  );
}
