"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ShieldCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);

interface BranchenShowcaseProps {
  branche: string;
  beschreibung: string;
  screenshot: string;
  url: string;
}

const alleBranchen = [
  { name: "Elektriker", desc: "Elektroinstallation, Smart Home, Notdienst", img: "/images/oQ5OH.jpeg", href: "/branchen/elektriker" },
  { name: "Restaurant", desc: "Gastronomie, Café, Catering", img: "/images/nuGnq.jpeg", href: "/branchen/restaurant" },
  { name: "Freelancer", desc: "Portfolio, Berater, Kreative", img: "/images/IPZsz.jpeg", href: "/branchen/freelancer" },
  { name: "Arztpraxis", desc: "Ärzte, Zahnärzte, Therapeuten", img: "/images/Tfgar.jpeg", href: "/branchen/arztpraxis" },
  { name: "Fitnessstudio", desc: "Gym, Personal Training, Yoga", img: "/images/5cM2T.jpeg", href: "/branchen/fitnessstudio" },
  { name: "Immobilien", desc: "Makler, Hausverwaltung, Bauträger", img: "/images/q71eS.jpeg", href: "/branchen/immobilien" },
  { name: "Rechtsanwalt", desc: "Kanzlei, Anwalt, Notar", img: "/images/hero-rechtsanwalt.jpeg", href: "/branchen/rechtsanwalt" },
  { name: "Steuerberater", desc: "Buchhaltung, Steuern, Beratung", img: "/images/hero-steuerberater.jpeg", href: "/branchen/steuerberater" },
  { name: "Café", desc: "Café, Bäckerei, Bistro", img: "/images/hero-cafe.jpeg", href: "/branchen/cafe" },
  { name: "Tischler", desc: "Tischlerei, Schreiner, Möbelbau", img: "/images/hero-tischler.jpeg", href: "/branchen/tischler" },
  { name: "SHK-Betrieb", desc: "Sanitär, Heizung, Klima", img: "/images/hero-shk.jpeg", href: "/branchen/shk" },
  { name: "Hochzeitsplanung", desc: "Hochzeitsplaner, Events", img: "/images/hero-hochzeit.jpeg", href: "/branchen/hochzeitsplanung" },
];

export default function BranchenShowcase({ branche, beschreibung, screenshot, url }: BranchenShowcaseProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const andereBranchen = alleBranchen.filter((b) => b.name !== branche);

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF5]/90 backdrop-blur-xl border-b border-[#E8DFD4]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-5 lg:px-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/inklaro-logo.png" alt="Inklaro" width={120} height={40} className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#branchen" className="flex items-center gap-2 text-[#4A6274] hover:text-[#0F2B3C] transition text-sm font-medium px-5 py-2.5 rounded-full border border-[#E8DFD4] hover:border-[#0F2B3C]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Zurück zur Übersicht
            </Link>
            <Link href="/anfragen" className="bg-[#E8564A] text-white font-bold text-sm px-7 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200">
              Website anfragen
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20 bg-[#FFFAF5]">
        {/* HERO */}
        <section className="bg-[#FFF5EB]">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-20 flex flex-col items-center gap-6 text-center">
            <p className="text-[#E8564A] text-xs font-semibold tracking-[2px]">BRANCHEN-BEISPIEL</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-[56px] text-[#0F2B3C] leading-[1.1]">
              Website für {branche}
            </h1>
            <p className="text-[#4A6274] text-lg max-w-[640px] leading-[1.6]">{beschreibung}</p>
            <div className="flex items-center gap-6 text-[#8DA4B4] text-[13px]">
              {["Responsive", "DSGVO-konform", "Blitzschnell", "SEO-optimiert"].map((b) => (
                <span key={b} className="flex items-center gap-1.5">✓ {b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* BROWSER MOCKUP */}
        <section className="bg-[#FFFAF5]">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 pb-8 flex justify-center fade-in">
            <div className="w-full max-w-[1200px] rounded-t-2xl bg-white border border-[#E8DFD4] overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 h-11 bg-[#FFF5EB] px-4 border-b border-[#E8DFD4]">
                <span className="w-3 h-3 rounded-full bg-[#E8564A]" />
                <span className="w-3 h-3 rounded-full bg-[#F5A623]" />
                <span className="w-3 h-3 rounded-full bg-[#4CD964]" />
                <div className="bg-white rounded-full px-3 py-1 ml-2 border border-[#E8DFD4]">
                  <span className="text-[#8DA4B4] text-[11px]">{url}</span>
                </div>
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={screenshot} alt={`${branche} Website komplett`} className="w-full h-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F2B3C]">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-20 flex flex-col items-center gap-8 text-center fade-in">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white leading-[1.15]">Gefällt Ihnen diese Website?</h2>
            <p className="text-[#8DA4B4] text-lg max-w-[600px] leading-[1.6]">Genau so — oder noch besser angepasst an Ihr Unternehmen. Ab 499 € netto, und Sie zahlen erst, wenn Sie zufrieden sind.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/anfragen" className="bg-[#E8564A] text-white font-bold text-[17px] px-10 py-[18px] rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200">So eine Website möchte ich auch</Link>
              <Link href="/" className="text-white font-semibold text-[17px] px-10 py-[18px] rounded-full border border-white/25 hover:bg-white/5 transition-all duration-200">Weitere Beispiele ansehen</Link>
            </div>
            <div className="flex items-center gap-2"><span className="text-[#E8564A]"><ShieldCheck /></span><span className="text-[#8DA4B4] text-sm">Kostenlos anfragen — Zahlung erst nach Ihrer Zufriedenheit</span></div>
          </div>
        </section>

        {/* WEITERE BRANCHEN */}
        <section className="bg-[#FFF5EB]">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24">
            <div className="text-center mb-12">
              <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">WEITERE BEISPIELE</p>
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#0F2B3C]">Weitere Branchen-Beispiele</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {andereBranchen.map((b) => (
                <Link key={b.name} href={b.href} className="bg-white rounded-2xl border border-[#E8DFD4] overflow-hidden card-hover transition-all duration-300 group">
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.img} alt={`${b.name} Website-Beispiel`} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-[family-name:var(--font-display)] text-lg text-[#0F2B3C]">{b.name}</h4>
                    <p className="text-[#8DA4B4] text-sm mt-1">{b.desc}</p>
                    <p className="text-[#E8564A] text-sm font-semibold mt-2 group-hover:translate-x-1 transition-transform">Beispiel ansehen →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A1F2B]">
        <div className="max-w-[1440px] mx-auto">
          <div className="h-px bg-[#1A3D50]" />
          <div className="flex flex-col sm:flex-row justify-between items-center px-5 lg:px-16 py-6 gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[#5A7A8C] text-[13px]">© 2026 Inklaro — Ein Angebot der Speckmann Webdesign GmbH</span>
            </Link>
            <div className="flex gap-6">
              <Link href="/impressum" className="text-[#5A7A8C] text-[13px] hover:text-[#8DA4B4] transition">Impressum</Link>
              <Link href="/datenschutz" className="text-[#5A7A8C] text-[13px] hover:text-[#8DA4B4] transition">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
