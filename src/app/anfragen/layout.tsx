import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website anfragen – Kostenlos & unverbindlich | Inklaro",
  description: "Füll unser Formular aus und erhalte in 1–2 Tagen deine fertige Website-Vorschau. Kostenlos, unverbindlich — erst zahlen bei Zufriedenheit.",
};

export default function AnfragenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
