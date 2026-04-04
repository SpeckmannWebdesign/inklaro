import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";
export const metadata: Metadata = { title: "Website für Cafés – Inklaro", description: "So könnte Ihre Café-Website aussehen — warm, einladend und appetitlich. Ab 499 € netto." };
export default function Page() { return <BranchenShowcase branche="Cafés & Bäckereien" beschreibung="So könnte Ihre Café-Website aussehen — warm, einladend und so gemütlich wie Ihr Laden." screenshot="/images/5nEbT.jpeg" url="www.cafe-goldstueck.de" />; }
