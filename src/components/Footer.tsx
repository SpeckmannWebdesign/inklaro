import Image from "next/image";
import Link from "next/link";

const branchen = [
  { name: "Fitnessstudio", href: "/branchen/fitnessstudio" },
  { name: "Restaurant", href: "/branchen/restaurant" },
  { name: "Freelancer", href: "/branchen/freelancer" },
  { name: "Arztpraxis", href: "/branchen/arztpraxis" },
  { name: "Hochzeitsplanung", href: "/branchen/hochzeitsplanung" },
  { name: "Immobilien", href: "/branchen/immobilien" },
  { name: "Rechtsanwalt", href: "/branchen/rechtsanwalt" },
  { name: "Steuerberater", href: "/branchen/steuerberater" },
  { name: "Café", href: "/branchen/cafe" },
  { name: "Tischler", href: "/branchen/tischler" },
  { name: "SHK-Betrieb", href: "/branchen/shk" },
  { name: "Elektriker", href: "/branchen/elektriker" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1F2B]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 px-5 lg:px-16 py-16 pb-12">
          <div className="max-w-[320px]">
            <Link href="/" className="mb-4 block">
              <Image src="/images/inklaro-logo.png" alt="Inklaro" width={300} height={100} className="h-20 w-auto brightness-0 invert" />
            </Link>
            <p className="text-[#5A7A8C] text-sm leading-[1.6]">Professionelle Websites zum Festpreis. Schnell, DSGVO-konform und persönlich betreut.</p>
          </div>
          <div className="flex gap-16 flex-wrap">
            <div className="flex flex-col gap-4">
              <span className="text-[#8DA4B4] text-[13px] font-bold tracking-[1px]">Navigation</span>
              {[["/#prozess", "So funktioniert's"], ["/#features", "Leistungen"], ["/#preise", "Preise"], ["/#ueber-mich", "Über mich"]].map(([h, t]) => (
                <Link key={h} href={h} className="text-[#5A7A8C] text-sm hover:text-[#8DA4B4] transition">{t}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[#8DA4B4] text-[13px] font-bold tracking-[1px]">Branchen</span>
              {branchen.map((b) => (
                <Link key={b.name} href={b.href} className="text-[#5A7A8C] text-sm hover:text-[#8DA4B4] transition">{b.name}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[#8DA4B4] text-[13px] font-bold tracking-[1px]">Rechtliches</span>
              <Link href="/impressum" className="text-[#5A7A8C] text-sm hover:text-[#8DA4B4] transition">Impressum</Link>
              <Link href="/datenschutz" className="text-[#5A7A8C] text-sm hover:text-[#8DA4B4] transition">Datenschutzerklärung</Link>
            </div>
          </div>
        </div>
        <div className="h-px bg-[#1A3D50]" />
        <div className="flex flex-col sm:flex-row justify-between items-center px-5 lg:px-16 py-6 gap-2">
          <span className="text-[#5A7A8C] text-[13px]">© 2026 Inklaro — Ein Angebot der Speckmann Webdesign GmbH</span>
          <span className="text-[#5A7A8C] text-[13px]">Oldenburg, Deutschland</span>
        </div>
      </div>
    </footer>
  );
}
