import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";

export const metadata: Metadata = {
  title: "Website für Freelancer – Inklaro",
  description: "So könnte Ihre Freelancer-Website aussehen — modern, persönlich und perfekt für Ihr Portfolio. Ab 499 € netto.",
};

export default function FreelancerPage() {
  return (
    <BranchenShowcase
      branche="Freelancer"
      beschreibung="So könnte Ihre Freelancer-Website aussehen — modern, persönlich und perfekt für Ihr Portfolio. Für Berater, Designer und Kreative."
      screenshot="/images/fullpage-freelancer.avif"
      url="www.anna-richter-design.de"
    />
  );
}
