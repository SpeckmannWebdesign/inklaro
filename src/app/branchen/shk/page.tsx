import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";
export const metadata: Metadata = { title: "Website für SHK-Betriebe – Inklaro", description: "So könnte Ihre SHK-Website aussehen — professionell, zuverlässig und auf Ihre Kunden zugeschnitten. Ab 499 € netto." };
export default function Page() { return <BranchenShowcase branche="SHK-Betriebe" beschreibung="So könnte Ihre SHK-Website aussehen — professionell, zuverlässig und perfekt für Sanitär, Heizung und Klima." screenshot="/images/fKxcf.avif" url="www.schroeder-haustechnik.de" />; }
