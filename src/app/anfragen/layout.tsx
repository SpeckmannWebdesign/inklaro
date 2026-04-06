import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website anfragen – Kostenlos & unverbindlich | Inklaro",
  description: "Füllen Sie unser Formular aus und erhalten Sie in 1–2 Tagen Ihre fertige Website-Vorschau. Kostenlos, unverbindlich — erst zahlen bei Zufriedenheit.",
};

export default function AnfragenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
