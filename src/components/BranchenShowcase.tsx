"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const ShieldCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);

interface BranchenFAQ {
  frage: string;
  antwort: string;
}

interface BranchenVorteil {
  titel: string;
  text: string;
}

interface BranchenShowcaseProps {
  branche: string;
  beschreibung: string;
  screenshot: string;
  url: string;
  seoText?: string;
  vorteile?: BranchenVorteil[];
  faqs?: BranchenFAQ[];
}

const alleBranchen = [
  { name: "Elektriker", desc: "Elektroinstallation, Smart Home, Notdienst", img: "/images/oQ5OH.avif", href: "/branchen/elektriker" },
  { name: "Restaurant", desc: "Gastronomie, Café, Catering", img: "/images/nuGnq.avif", href: "/branchen/restaurant" },
  { name: "Freelancer", desc: "Portfolio, Berater, Kreative", img: "/images/IPZsz.avif", href: "/branchen/freelancer" },
  { name: "Arztpraxis", desc: "Ärzte, Zahnärzte, Therapeuten", img: "/images/Tfgar.avif", href: "/branchen/arztpraxis" },
  { name: "Fitnessstudio", desc: "Gym, Personal Training, Yoga", img: "/images/5cM2T.avif", href: "/branchen/fitnessstudio" },
  { name: "Immobilien", desc: "Makler, Hausverwaltung, Bauträger", img: "/images/q71eS.avif", href: "/branchen/immobilien" },
  { name: "Rechtsanwalt", desc: "Kanzlei, Anwalt, Notar", img: "/images/hero-rechtsanwalt.avif", href: "/branchen/rechtsanwalt" },
  { name: "Steuerberater", desc: "Buchhaltung, Steuern, Beratung", img: "/images/hero-steuerberater.avif", href: "/branchen/steuerberater" },
  { name: "Café", desc: "Café, Bäckerei, Bistro", img: "/images/hero-cafe.avif", href: "/branchen/cafe" },
  { name: "Tischler", desc: "Tischlerei, Schreiner, Möbelbau", img: "/images/hero-tischler.avif", href: "/branchen/tischler" },
  { name: "SHK-Betrieb", desc: "Sanitär, Heizung, Klima", img: "/images/hero-shk.avif", href: "/branchen/shk" },
  { name: "Hochzeitsplanung", desc: "Hochzeitsplaner, Events", img: "/images/hero-hochzeit.avif", href: "/branchen/hochzeitsplanung" },
];

export default function BranchenShowcase({ branche, beschreibung, screenshot, url, seoText, vorteile, faqs }: BranchenShowcaseProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const andereBranchen = alleBranchen.filter((b) => b.name !== branche);

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.frage,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.antwort,
      },
    })),
  } : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Website für ${branche} erstellen lassen`,
    provider: { "@type": "Organization", name: "Inklaro", url: "https://www.inklaro.de" },
    description: beschreibung,
    areaServed: { "@type": "Country", name: "DE" },
    offers: {
      "@type": "Offer",
      price: "799",
      priceCurrency: "EUR",
      description: `Professionelle Website für ${branche} ab 799 € netto`,
    },
  };

  return (
    <>
      <StructuredData data={faqSchema ? [serviceSchema, faqSchema] : serviceSchema} />
      <Nav>
        <div className="flex items-center gap-4">
          <Link href="/#branchen" className="flex items-center gap-2 text-[#4A6274] hover:text-[#0F2B3C] transition text-sm font-medium px-5 py-2.5 rounded-full border border-[#E8DFD4] hover:border-[#0F2B3C]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Zurück zur Übersicht
          </Link>
          <Link href="/anfragen" className="bg-[#E8564A] text-white font-bold text-sm px-7 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200">
            Website anfragen
          </Link>
        </div>
      </Nav>

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
              {["Alle Geräte", "Rechtlich sicher", "Blitzschnell", "Bereit für Google"].map((b) => (
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
                  <span className="text-[#8DA4B4] text-[11px]">www.deine-website.de</span>
                </div>
              </div>
              <div>
                <Image src={screenshot} alt={`${branche} Website komplett`} width={1200} height={3000} className="w-full h-auto" sizes="(max-width: 1440px) 100vw, 1200px" />
              </div>
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        {seoText && (
          <section className="bg-[#FFFAF5]">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 fade-in">
              <div className="max-w-[760px] mx-auto">
                <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">WARUM EINE PROFESSIONELLE WEBSITE?</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[40px] text-[#0F2B3C] leading-[1.2] mb-8">Warum {branche} eine starke Website brauchen</h2>
                <p className="text-[#4A6274] text-[17px] leading-[1.8]">{seoText}</p>
              </div>
            </div>
          </section>
        )}

        {/* VORTEILE */}
        {vorteile && vorteile.length > 0 && (
          <section className="bg-[#FFF5EB]">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 fade-in">
              <div className="text-center mb-16">
                <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">DAS MACHT DEN UNTERSCHIED</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[40px] text-[#0F2B3C] leading-[1.2]">Was deine {branche}-Website können muss</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                {vorteile.map((v, i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 border border-[#E8DFD4]">
                    <div className="w-10 h-10 bg-[#FFF5EB] rounded-xl flex items-center justify-center mb-4">
                      <span className="text-[#E8564A] font-bold text-lg">{i + 1}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-[#0F2B3C] mb-3">{v.titel}</h3>
                    <p className="text-[#4A6274] text-[15px] leading-[1.7]">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faqs && faqs.length > 0 && (
          <section className="bg-[#FFFAF5]">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 fade-in">
              <div className="max-w-[760px] mx-auto">
                <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">HÄUFIGE FRAGEN</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[40px] text-[#0F2B3C] leading-[1.2] mb-12">Fragen zu Websites für {branche}</h2>
                <div className="flex flex-col gap-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-2xl p-8 border border-[#E8DFD4]">
                      <h3 className="font-semibold text-[17px] text-[#0F2B3C] mb-3">{faq.frage}</h3>
                      <p className="text-[#4A6274] text-[15px] leading-[1.7]">{faq.antwort}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-[#0F2B3C]">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-20 flex flex-col items-center gap-8 text-center fade-in">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white leading-[1.15]">Gefällt dir diese Website?</h2>
            <p className="text-[#8DA4B4] text-lg max-w-[600px] leading-[1.6]">Genau so — oder noch besser angepasst an dein Unternehmen. Ab 799 € netto, und du zahlst erst, wenn du zufrieden bist.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/anfragen" className="bg-[#E8564A] text-white font-bold text-[17px] px-10 py-[18px] rounded-full hover:shadow-lg hover:shadow-[#E8564A]/30 hover:-translate-y-0.5 transition-all duration-200">So eine Website möchte ich auch</Link>
              <Link href="/" className="text-white font-semibold text-[17px] px-10 py-[18px] rounded-full border border-white/25 hover:bg-white/5 transition-all duration-200">Weitere Beispiele ansehen</Link>
            </div>
            <div className="flex items-center gap-2"><span className="text-[#E8564A]"><ShieldCheck /></span><span className="text-[#8DA4B4] text-sm">Kostenlos anfragen — Zahlung erst nach deiner Zufriedenheit</span></div>
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
                    <Image src={b.img} alt={`${b.name} Website-Beispiel`} width={480} height={320} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
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

      <Footer />
    </>
  );
}
