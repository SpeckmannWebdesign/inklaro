import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Arztpraxen – Inklaro",
  description: "So könnte Ihre Praxis-Website aussehen — vertrauenswürdig, seriös und patientenfreundlich. Ab 499 € netto.",
};

export default function ArztpraxisPage() {
  return (
    <BranchenShowcase
      branche="Arztpraxen"
      beschreibung="So könnte Ihre Praxis-Website aussehen — vertrauenswürdig, seriös und patientenfreundlich. Für Ärzte, Zahnärzte und Therapeuten."
      screenshot="/images/fullpage-arztpraxis.jpg"
      url="www.praxis-dr-weber.de"
    />
  );
}
