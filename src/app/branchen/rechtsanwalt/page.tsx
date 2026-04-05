import type { Metadata } from "next";
import BranchenShowcase from "@/components/BranchenShowcase";
export const metadata: Metadata = { title: "Website für Rechtsanwälte – Inklaro", description: "So könnte Ihre Kanzlei-Website aussehen — seriös, vertrauenswürdig und professionell. Ab 499 € netto." };
export default function Page() { return <BranchenShowcase branche="Rechtsanwälte" beschreibung="So könnte Ihre Kanzlei-Website aussehen — seriös, vertrauenswürdig und auf Ihre Mandanten zugeschnitten." screenshot="/images/KgvdS.avif" url="www.kanzlei-berger-partner.de" />; }
