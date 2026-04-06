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
            <p className="text-[#5A7A8C] text-sm leading-[1.6] mb-4">Professionelle Websites zum Festpreis. Schnell, DSGVO-konform und persönlich betreut.</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+4915208709068" className="text-[#8DA4B4] text-sm hover:text-white transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                0152 0870 9068
              </a>
              <a href="https://wa.me/4915208709068" target="_blank" rel="noopener noreferrer" className="text-[#8DA4B4] text-sm hover:text-white transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp schreiben
              </a>
            </div>
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
