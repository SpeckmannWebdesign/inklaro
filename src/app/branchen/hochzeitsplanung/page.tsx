import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";
export const metadata: Metadata = { title: "Website für Hochzeitsplaner – Inklaro", description: "So könnte Ihre Hochzeitsplaner-Website aussehen — romantisch, elegant und einladend. Ab 499 € netto." };
export default function Page() { return <BranchenShowcase branche="Hochzeitsplaner" beschreibung="So könnte Ihre Website aussehen — romantisch-elegant und so einladend wie die Feste, die Sie planen." screenshot="/images/9zYQM.jpeg" url="www.sophie-lehmann-hochzeiten.de" />; }
