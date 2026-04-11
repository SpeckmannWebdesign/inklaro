"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

/* ── SVG Icons ── */
const ShieldCheck = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);
const Smartphone = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>);
const LockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
const FileText = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>);
const CodeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const VideoIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>);
const ZapIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>);
const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>);
const PenLine = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>);
const CircleCheck = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>);
const BanIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>);
const UserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);

/* ── Design Tokens ── */
const C = {
  bg: "#FFFAF5", surface: "#FFF5EB", dark: "#0F2B3C", accent: "#E8564A",
  head: "#0F2B3C", body: "#4A6274", muted: "#8DA4B4", border: "#E8DFD4",
  darkCard: "#1A3D50", white: "#FFFFFF",
};

const branchen = [
  { name: "Fitnessstudio", desc: "Gym, Personal Training, Yoga", img: "/images/5cM2T.avif", href: "/branchen/fitnessstudio" },
  { name: "Restaurant", desc: "Gastronomie, Café, Catering", img: "/images/nuGnq.avif", href: "/branchen/restaurant" },
  { name: "Freelancer", desc: "Portfolio, Berater, Kreative", img: "/images/IPZsz.avif", href: "/branchen/freelancer" },
  { name: "Arztpraxis", desc: "Ärzte, Zahnärzte, Therapeuten", img: "/images/Tfgar.avif", href: "/branchen/arztpraxis" },
  { name: "Hochzeitsplanung", desc: "Hochzeitsplaner, Events", img: "/images/hero-hochzeit.avif", href: "/branchen/hochzeitsplanung" },
  { name: "Immobilien", desc: "Makler, Hausverwaltung, Bauträger", img: "/images/q71eS.avif", href: "/branchen/immobilien" },
  { name: "Rechtsanwalt", desc: "Kanzlei, Anwalt, Notar", img: "/images/hero-rechtsanwalt.avif", href: "/branchen/rechtsanwalt" },
  { name: "Steuerberater", desc: "Buchhaltung, Steuern, Beratung", img: "/images/hero-steuerberater.avif", href: "/branchen/steuerberater" },
  { name: "Café", desc: "Café, Bäckerei, Bistro", img: "/images/hero-cafe.avif", href: "/branchen/cafe" },
  { name: "Tischler", desc: "Tischlerei, Schreiner, Möbelbau", img: "/images/hero-tischler.avif", href: "/branchen/tischler" },
  { name: "SHK-Betrieb", desc: "Sanitär, Heizung, Klima", img: "/images/hero-shk.avif", href: "/branchen/shk" },
  { name: "Elektriker", desc: "Elektroinstallation, Smart Home, Notdienst", img: "/images/oQ5OH.avif", href: "/branchen/elektriker" },
];

/* ── Form Helpers ── */
function FormStep({ num, title, amber }: { num: string; title: string; amber?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-7 h-7 ${amber ? "bg-[#E8564A]" : "bg-[#0F2B3C]"} rounded-full flex items-center justify-center`}>
        <span className="text-[13px] font-bold text-white">{num}</span>
      </div>
      <span className="font-[family-name:var(--font-display)] text-xl text-[#0F2B3C]">{title}</span>
    </div>
  );
}

function FormField({ id, label, placeholder, type = "text", required, textarea }: { id: string; label: string; placeholder: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls = "bg-[#FFF5EB] border border-[#E8DFD4] rounded-xl px-4 py-3.5 text-[#0F2B3C] text-[15px] placeholder:text-[#8DA4B4] focus:border-[#E8564A] focus:outline-none transition w-full";
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[#4A6274] text-xs font-semibold">{label}</label>
      {textarea ? <textarea id={id} rows={3} placeholder={placeholder} required={required} className={`${cls} resize-none`} /> : <input id={id} type={type} placeholder={placeholder} required={required} className={cls} />}
    </div>
  );
}

function FormSelect({ id, label, options, required }: { id: string; label: string; options: string[]; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[#4A6274] text-xs font-semibold">{label}</label>
      <select id={id} required={required} defaultValue="" className="bg-[#FFF5EB] border border-[#E8DFD4] rounded-xl px-4 py-3.5 text-[#0F2B3C] text-[15px] focus:border-[#E8564A] focus:outline-none transition appearance-none w-full">
        <option value="" disabled className="text-[#8DA4B4]">Bitte wählen...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in, .fade-in-stagger").forEach((el) => observer.observe(el));
    const handleScroll = () => { navRef.current?.classList.toggle("nav-scrolled", window.scrollY > 50); };
    window.addEventListener("scroll", handleScroll);
    return () => { observer.disconnect(); window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF5] border-b border-[#E8DFD4] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-5 lg:px-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/inklaro-logo.png" alt="Inklaro" width={240} height={80} className="h-16 w-auto" priority />
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            {[["#prozess","So funktioniert's"],["#features","Leistungen"],["#preise","Preise"],["#ueber-mich","Über mich"]].map(([h,t])=>(
              <a key={h} href={h} className="text-[#4A6274] hover:text-[#0F2B3C] transition text-[15px] font-medium">{t}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+4915208709068" className="hidden lg:flex items-center gap-2 text-[#4A6274] hover:text-[#0F2B3C] transition text-[15px] font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              0152 0870 9068
            </a>
            <a href="/anfragen" className="bg-[#E8564A] text-white font-bold text-sm px-7 py-3 rounded-full btn-primary transition-all duration-200">Website anfragen</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Menü öffnen">
              <span className={`w-6 h-0.5 bg-[#0F2B3C] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-[#0F2B3C] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-[#0F2B3C] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#FFFAF5] border-t border-[#E8DFD4] px-5 pb-6 pt-4 flex flex-col gap-4">
            {[["#prozess","So funktioniert's"],["#features","Leistungen"],["#preise","Preise"],["#ueber-mich","Über mich"]].map(([h,t])=>(
              <a key={h} href={h} onClick={() => setMenuOpen(false)} className="text-[#4A6274] hover:text-[#0F2B3C] transition text-[15px] font-medium">{t}</a>
            ))}
          </div>
        )}
      </nav>

      <main id="main" className="pt-20">
        {/* HERO */}
        <section className="bg-[#FFFAF5]">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-5 lg:px-16 pt-8 pb-16 lg:py-0 lg:min-h-[700px]">
            <div className="flex-1 flex flex-col gap-8 max-w-[640px]">
              <div className="inline-flex items-center gap-2 bg-[#FFF5EB] border border-[#E8DFD4] rounded-full px-4 py-2 w-fit">
                <span className="w-2 h-2 bg-[#E8564A] rounded-full" />
                <span className="text-[#E8564A] text-[13px] font-medium">Erst zahlen, wenn du zufrieden bist</span>
              </div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-[60px] text-[#0F2B3C] leading-[1.1]">Deine professionelle Website ab 799 €. Erst zahlen, wenn du begeistert bist.</h1>
              <p className="text-[#4A6274] text-lg leading-[1.7] max-w-[540px]">Individuell für dein Unternehmen — sieht auf jedem Gerät gut aus, rechtlich sicher und blitzschnell geladen. Kein Risiko: Du zahlst nur, wenn dir die Website gefällt.</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="/anfragen" className="bg-[#E8564A] text-white font-bold text-base px-8 py-4 rounded-full btn-primary transition-all duration-200">Website jetzt anfragen</a>
                <a href="#prozess" className="text-[#0F2B3C] font-semibold text-base px-8 py-4 rounded-full border-2 border-[#0F2B3C] btn-secondary transition-all duration-200">So funktioniert&apos;s</a>
              </div>
            </div>
            <div className="flex-1 max-w-[560px]">
              <Image src="/images/hero.avif" alt="Professionelle Website erstellen lassen" width={560} height={620} className="rounded-3xl w-full object-cover" priority sizes="(max-width: 1024px) 100vw, 560px" />
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-[#FFF5EB]">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-center gap-8 md:gap-20 px-5 lg:px-16 py-12">
            {[{icon:<ShieldCheck />,t:"Zufriedenheitsgarantie",s:"Erst zahlen, wenn du begeistert bist"},{icon:<Smartphone />,t:"Auf allen Geräten perfekt",s:"Handy, Tablet & Desktop"},{icon:<LockIcon />,t:"Rechtlich sicher",s:"Datenschutz & Hosting in Deutschland"}].map((item,i)=>(
              <div key={i} className="flex items-center gap-4">
                {i > 0 && <span className="hidden md:block w-px h-12 bg-[#E8DFD4] -ml-10 mr-10" />}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm"><span className="text-[#0F2B3C]">{item.icon}</span></div>
                <div>
                  <div className="text-[15px] font-semibold text-[#0F2B3C]">{item.t}</div>
                  <div className="text-[#8DA4B4] text-sm">{item.s}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROZESS */}
        <section id="prozess" className="bg-[#FFFAF5] scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 flex flex-col items-center gap-16">
            <div className="text-center fade-in">
              <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">SO EINFACH GEHT&apos;S</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[#0F2B3C] leading-[1.15]">Deine Website in 3 Schritten</h2>
              <p className="text-[#4A6274] text-lg mt-4 max-w-[500px] mx-auto leading-[1.6]">Kein technisches Wissen nötig. Einfach Angaben machen — wir erledigen den Rest.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full fade-in-stagger">
              {[{num:"01",icon:<FileText />,title:"Formular ausfüllen",desc:"Beschreibe dein Unternehmen, deine Branche und deine Ziele. In 5 Minuten haben wir alles, was wir brauchen.",highlight:false},{num:"02",icon:<CodeIcon />,title:"Website wird erstellt",desc:"Im Hintergrund entsteht deine komplette Website — Design, Texte, Technik. Alles aus einer Hand, ohne dein Zutun.",highlight:true},{num:"03",icon:<VideoIcon />,title:"Ansehen & Entscheiden",desc:"In 1–2 Tagen bekommst du einen Vorschau-Link zu deiner fertigen Website. Gefällt sie dir? Dann geht sie live. Wenn nicht — kein Problem.",highlight:false,badge:true}].map((step)=>(
                <div key={step.num} className={`rounded-2xl p-10 ${step.highlight ? "bg-[#0F2B3C]" : "bg-[#FFF5EB]"} card-hover transition-all duration-300`}>
                  <div className={`font-[family-name:var(--font-display)] text-5xl ${step.highlight ? "text-[#8DA4B4]" : "text-[#C7AE8E]"} mb-6`}>{step.num}</div>
                  <h3 className={`font-[family-name:var(--font-display)] text-[22px] ${step.highlight ? "text-white" : "text-[#0F2B3C]"} mb-4`}>{step.title}</h3>
                  <p className={`text-[15px] leading-[1.7] ${step.highlight ? "text-[#8DA4B4]" : "text-[#4A6274]"}`}>{step.desc}</p>
                  {step.badge && <div className="flex items-center gap-2 mt-6 bg-[#FFF5EB] rounded-full px-4 py-2.5"><span className="text-[#E8564A]"><ShieldCheck size={16} /></span><span className="text-[#E8564A] text-[13px] font-medium">Kein Risiko — erst zahlen bei Zufriedenheit</span></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-[#0F2B3C] scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 flex flex-col items-center gap-16">
            <div className="text-center fade-in">
              <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">ALLES INKLUSIVE</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white leading-[1.15]">Was in deiner Website drinsteckt</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full fade-in-stagger">
              {[{icon:<Smartphone />,t:"Auf allen Geräten perfekt",d:"Deine Website sieht auf Handy, Tablet und Computer gleich gut aus — ohne Kompromisse."},{icon:<SearchIcon />,t:"Bereit für Google",d:"Deine Website ist technisch so aufgebaut, dass Google sie optimal lesen und anzeigen kann."},{icon:<ZapIcon />,t:"Blitzschnelle Ladezeit",d:"Deine Website lädt sofort — ohne nervige Wartezeit. Gut für Besucher und für Google."},{icon:<LockIcon />,t:"Rechtlich sicher",d:"Impressum, Datenschutz, Cookie-Hinweis — alles dabei. Gehostet auf deutschen Servern."},{icon:<CodeIcon />,t:"Professionell gebaut",d:"Kein Baukastensystem — deine Website wird individuell und sauber programmiert."},{icon:<PenLine />,t:"Texte & Bilder änderbar",d:"Du möchtest etwas anpassen? Texte und Bilder kannst du jederzeit ändern lassen — im monatlichen Paket inklusive.",hl:true}].map((f,i)=>(
                <div key={i} className={`rounded-2xl p-8 ${f.hl ? "bg-[#E8564A]" : "bg-[#1A3D50]"} card-hover transition-all duration-300`}>
                  <div className={`w-12 h-12 ${f.hl ? "bg-[#D04A3F]" : "bg-[#0F2B3C]"} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-white">{f.icon}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-white mb-2">{f.t}</h3>
                  <p className={`text-[15px] leading-[1.7] ${f.hl ? "text-[#FFD4CF]" : "text-[#8DA4B4]"}`}>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VERGLEICH */}
        <section className="bg-[#FFFAF5] scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 flex flex-col items-center gap-16">
            <div className="text-center fade-in">
              <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">WARUM INKLARO</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[#0F2B3C] leading-[1.15]">Im Vergleich schnell erklärt</h2>
            </div>
            <div className="w-full max-w-[900px] fade-in overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-[#8DA4B4] text-xs font-bold tracking-[1px] pb-4 pr-4" />
                    <th className="text-center text-[#8DA4B4] text-xs font-bold tracking-[1px] pb-4 px-4">SELBER BAUEN</th>
                    <th className="text-center text-[#8DA4B4] text-xs font-bold tracking-[1px] pb-4 px-4">AGENTUR</th>
                    <th className="text-center pb-4 px-4"><span className="bg-[#E8564A] text-white text-xs font-bold tracking-[1px] px-3 py-1 rounded-full">INKLARO</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Einmalige Kosten", self: "0 €", agency: "5.000–15.000 €", inklaro: "799 €" },
                    { label: "Monatliche Kosten", self: "15–30 €/Monat", agency: "0–200 €/Monat", inklaro: "39 €/Monat" },
                    { label: "Qualität", self: "Template-Look", agency: "Individuell", inklaro: "Individuell" },
                    { label: "Aufwand für dich", self: "Alles selbst", agency: "Viele Meetings", inklaro: "5 Min Formular" },
                    { label: "Fertig in", self: "Tage bis Wochen", agency: "4–8 Wochen", inklaro: "1–2 Tage" },
                    { label: "Rechtlich sicher", self: "Selbst kümmern", agency: "Meist inklusive", inklaro: "Inklusive" },
                    { label: "Risiko", self: "Eigenes Ergebnis", agency: "Anzahlung nötig", inklaro: "Erst zahlen bei Zufriedenheit" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-[#FFF5EB]" : ""}>
                      <td className="text-[#0F2B3C] text-[15px] font-semibold py-4 px-4 rounded-l-xl">{row.label}</td>
                      <td className="text-[#8DA4B4] text-[15px] text-center py-4 px-4">{row.self}</td>
                      <td className="text-[#8DA4B4] text-[15px] text-center py-4 px-4">{row.agency}</td>
                      <td className="text-[#E8564A] text-[15px] text-center font-bold py-4 px-4 rounded-r-xl">{row.inklaro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="/anfragen" className="bg-[#E8564A] text-white font-bold text-base px-8 py-4 rounded-full btn-primary transition-all duration-200">Jetzt kostenlos anfragen</a>
          </div>
        </section>

        {/* BRANCHEN SHOWCASE */}
        <section id="branchen" className="bg-[#FFF5EB] scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 flex flex-col items-center gap-16">
            <div className="text-center fade-in">
              <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">BRANCHEN-BEISPIELE</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[#0F2B3C] leading-[1.15]">Eine Website für deine Branche</h2>
              <p className="text-[#4A6274] text-lg mt-4 max-w-[620px] mx-auto leading-[1.6]">Schau dir echte Beispiel-Websites an — genau so könnte deine aussehen.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full fade-in-stagger">
              {branchen.map((b)=>(
                <Link key={b.name} href={b.href} className="bg-white rounded-2xl border border-[#E8DFD4] overflow-hidden card-hover transition-all duration-300 group">
                  <div className="overflow-hidden">
                    <Image src={b.img} alt={`${b.name} Website-Beispiel`} width={480} height={320} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#0F2B3C]">{b.name}</h3>
                    <p className="text-[#8DA4B4] text-sm mt-1">{b.desc}</p>
                    <p className="text-[#E8564A] text-sm font-semibold mt-2 group-hover:translate-x-1 transition-transform">Beispiel ansehen →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PREISE */}
        <section id="preise" className="bg-[#FFFAF5] scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 flex flex-col items-center gap-16">
            <div className="text-center fade-in">
              <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">PREISE</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[#0F2B3C] leading-[1.15]">Transparent. Klar. Ohne Überraschungen.</h2>
              <p className="text-[#4A6274] text-lg mt-4 max-w-[520px] mx-auto leading-[1.6]">Kein Kleingedrucktes. Einfach eine faire Partnerschaft.</p>
            </div>
            <div className="w-full max-w-[720px] bg-white rounded-2xl border border-[#E8DFD4] overflow-hidden shadow-sm fade-in">
              <div className="p-10 pb-8">
                <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mb-6">
                  <div>
                    <p className="text-[#8DA4B4] text-[11px] font-bold tracking-[2px] mb-2">EINMALIG</p>
                    <div className="flex items-end gap-1">
                      <span className="font-[family-name:var(--font-display)] text-[56px] text-[#0F2B3C] leading-none">799 €</span>
                      <span className="text-[#8DA4B4] text-base pb-1">netto</span>
                    </div>
                    <p className="text-[#4A6274] text-sm mt-1">Einmalige Erstellung deiner Website</p>
                  </div>
                  <div className="hidden md:block text-[#E8DFD4] text-3xl font-light pb-3">+</div>
                  <div>
                    <p className="text-[#8DA4B4] text-[11px] font-bold tracking-[2px] mb-2">MONATLICH</p>
                    <div className="flex items-end gap-1">
                      <span className="font-[family-name:var(--font-display)] text-[56px] text-[#0F2B3C] leading-none">39 €</span>
                      <span className="text-[#8DA4B4] text-base pb-1">/ Monat netto</span>
                    </div>
                    <p className="text-[#E8564A] text-sm font-medium mt-1">Monatlich kündbar — ohne Mindestlaufzeit</p>
                  </div>
                </div>
                <p className="text-[#4A6274] text-[15px] leading-[1.6]">Du zahlst die Einmalgebühr erst, wenn du mit der Website zufrieden bist. Die monatlichen Kosten decken Server, Hosting, technische Tools (z.B. Formular-Zustellung) und laufende Wartung — alles, was deine Website am Laufen hält. Monatlich kündbar.</p>
              </div>
              <div className="h-px bg-[#E8DFD4]" />
              <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  <div>
                    <p className="text-[#0F2B3C] text-xs font-bold tracking-[1px] mb-4">IN DER EINMALGEBÜHR</p>
                    {["Individuelles Design für deine Branche","Sieht auf allen Geräten gut aus","Impressum & Datenschutz inklusive","Technisch bereit für Google","Vorschau-Link vor Zahlung — kein Risiko"].map((f)=>(
                      <div key={f} className="flex items-center gap-3 mb-3"><span className="text-[#E8564A]"><CircleCheck /></span><span className="text-[#0F2B3C] text-[15px]">{f}</span></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[#0F2B3C] text-xs font-bold tracking-[1px] mb-4">DARUM MONATLICHE KOSTEN</p>
                    {["Hosting auf deutschen Servern","Sicherheitszertifikat & Internetadresse","Kontaktformular & technische Tools","Texte & Bilder ändern lassen","Technische Wartung & Sicherheitsupdates"].map((f)=>(
                      <div key={f} className="flex items-center gap-3 mb-3"><span className="text-[#E8564A]"><CircleCheck /></span><span className="text-[#0F2B3C] text-[15px]">{f}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-px bg-[#E8DFD4]" />
              <div className="p-10">
                <p className="text-[#8DA4B4] text-[13px] leading-[1.6] mb-6"><span className="text-[#E8564A] font-semibold">Wichtig zu wissen:</span> Das Modell funktioniert als Abo — wir stellen dir Server, Tools und Technik zur Verfügung und halten alles am Laufen. Eine Herausgabe der Website ist nicht vorgesehen. Dafür kümmern wir uns um alles, damit du dich auf dein Geschäft konzentrieren kannst.</p>
                <a href="/anfragen" className="block w-full text-center bg-[#E8564A] text-white font-bold text-base py-4 rounded-full btn-primary transition-all duration-200">Jetzt kostenlos anfragen</a>
                <div className="flex items-center justify-center gap-2 mt-4"><span className="text-[#E8564A]"><ShieldCheck size={16} /></span><span className="text-[#8DA4B4] text-sm">Erst zahlen, wenn du 100% zufrieden bist</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ÜBER MICH */}
        <section id="ueber-mich" className="bg-[#0F2B3C] scroll-mt-20 overflow-hidden">
          {/* Foto als breites Banner */}
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 pt-24 fade-in">
            <div className="relative rounded-3xl overflow-hidden max-w-[900px] mx-auto">
              <Image src="/images/marcel-speckmann.avif" alt="Marcel Speckmann — Wirtschaftspsychologe und Webdesigner" width={1000} height={800} className="w-full h-auto" sizes="(max-width: 1440px) 100vw, 900px" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F2B3C] to-transparent h-32" />
            </div>
          </div>
          {/* Text darunter */}
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 pb-24 pt-12">
            <div className="max-w-[760px] mx-auto text-center fade-in">
              <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">ÜBER MICH</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[44px] text-white leading-[1.2] mb-8">799 € für eine professionelle Website — wie geht das?</h2>
              <p className="text-[#8DA4B4] text-[17px] leading-[1.7] mb-6 text-left max-w-[640px] mx-auto">Ich bin Marcel Speckmann — Wirtschaftspsychologe und Webdesigner aus Oldenburg. Seit Jahren baue ich professionelle Websites für Unternehmen. Und ich weiß: Der größte Kostentreiber ist nicht die Website selbst — sondern alles drumherum.</p>
              <p className="text-[#8DA4B4] text-[17px] leading-[1.7] mb-6 text-left max-w-[640px] mx-auto">Bei klassischen Projekten kosten <span className="text-white font-medium">stundenlange Beratungsgespräche</span>, endlose Abstimmungsrunden und Änderungswünsche in jeder Phase oft mehr als die eigentliche Umsetzung. Die Kommunikation allein kann ein Projekt auf 5.000 – 10.000 € treiben.</p>
              <p className="text-[#8DA4B4] text-[17px] leading-[1.7] mb-6 text-left max-w-[640px] mx-auto">Bei Inklaro fällt das weg. Du füllst ein kurzes Formular aus — und wir erstellen deine Website <span className="text-white font-medium">komplett eigenständig</span>. Kein Hin und Her, keine wochenlangen Abstimmungen. Design, Texte und Technik entstehen in einem durchgetakteten Prozess.</p>
              <p className="text-[#8DA4B4] text-[17px] leading-[1.7] mb-6 text-left max-w-[640px] mx-auto">Erst wenn alles fertig ist, bekommst du einen Vorschau-Link zu deiner Website. Dann kannst du Änderungswünsche äußern. Aber der Großteil der Arbeit ist bereits erledigt — <span className="text-white font-medium">und genau deshalb können wir dir für 799 € eine Website liefern, die andere für das Fünf- bis Zehnfache anbieten.</span></p>
            </div>
          </div>
        </section>

        {/* GARANTIE */}
        <section className="bg-[#FFF5EB]">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-center gap-8 md:gap-16 px-5 lg:px-16 py-16">
            {[{icon:<ShieldCheck size={28} />,t:"Zufriedenheitsgarantie",s:"Erst zahlen bei 100% Zufriedenheit"},{icon:<BanIcon />,t:"Keine versteckten Kosten",s:"Alle Preise transparent auf dieser Seite"},{icon:<UserIcon />,t:"Persönlicher Kontakt",s:"Deutscher Anbieter, direkt erreichbar"}].map((item,i)=>(
              <div key={i} className="flex items-center gap-4">
                {i > 0 && <span className="hidden md:block w-px h-12 bg-[#E8DFD4] -ml-8 mr-8" />}
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#E8564A]">{item.icon}</div>
                <div>
                  <div className="text-base font-semibold text-[#0F2B3C]">{item.t}</div>
                  <div className="text-[#4A6274] text-sm">{item.s}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#FFFAF5]">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-24 flex flex-col items-center gap-16">
            <div className="text-center fade-in">
              <p className="text-[#E8564A] text-xs font-semibold tracking-[2px] mb-4">HÄUFIGE FRAGEN</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[#0F2B3C] leading-[1.15]">Noch Fragen? Hier sind Antworten.</h2>
            </div>
            <div className="w-full max-w-[720px] flex flex-col gap-4 fade-in">
              {[
                { q: "Wie lange dauert es, bis meine Website fertig ist?", a: "In der Regel bekommst du innerhalb von 1–2 Tagen einen Vorschau-Link zu deiner fertigen Website. Je nach Umfang der Angaben kann es auch mal einen Tag länger dauern." },
                { q: "Was passiert, wenn mir die Website nicht gefällt?", a: "Dann zahlst du nichts. Wir passen die Website nach deinem Feedback an oder belassen es — ganz ohne Risiko für dich." },
                { q: "Gehört mir die Website?", a: "Das Modell funktioniert als Abo: Wir stellen dir Server, Technik und Wartung zur Verfügung. Die Website läuft, solange das Abo aktiv ist. Eine Herausgabe des Quellcodes ist nicht vorgesehen — dafür kümmern wir uns um alles Technische." },
                { q: "Was passiert, wenn ich kündige?", a: "Du kannst monatlich kündigen. Nach der Kündigung wird die Website zum Ende des Abrechnungszeitraums abgeschaltet. Deine Internetadresse (Domain) kannst du selbstverständlich mitnehmen." },
                { q: "Wofür sind die monatlichen Kosten?", a: "Die 39 € / Monat decken Hosting auf deutschen Servern, Sicherheitszertifikat, technische Tools (z.B. Kontaktformular), Wartung, Sicherheitsupdates und die Möglichkeit, Texte und Bilder ändern zu lassen." },
                { q: "Brauche ich technisches Wissen?", a: "Nein, überhaupt nicht. Du füllst ein Formular aus, wir machen den Rest. Wenn du später etwas ändern möchtest, sag uns einfach Bescheid." },
                { q: "Kann ich meine eigene Internetadresse verwenden?", a: "Ja, selbstverständlich. Wenn du bereits eine Internetadresse (z.B. www.dein-name.de) hast, verbinden wir diese mit deiner neuen Website. Falls nicht, helfen wir dir bei der Registrierung." },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-[#E8DFD4] overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                    <span className="font-semibold text-[#0F2B3C] text-[15px] pr-4">{faq.q}</span>
                    <span className="text-[#E8564A] text-xl font-light shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-[#4A6274] text-[15px] leading-[1.7]">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="bg-[#0F2B3C]">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-20 flex flex-col items-center gap-8 text-center fade-in">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white leading-[1.15]">Bereit für deine neue Website?</h2>
            <p className="text-[#8DA4B4] text-lg max-w-[540px] leading-[1.6]">In 5 Minuten ausgefüllt — in 1–2 Tagen bekommst du deinen Vorschau-Link. Kostenlos und unverbindlich.</p>
            <Link href="/anfragen" className="bg-[#E8564A] text-white font-bold text-[17px] px-10 py-[18px] rounded-full btn-primary transition-all duration-200">Jetzt Website anfragen →</Link>
            <div className="flex items-center gap-2"><span className="text-[#E8564A]"><ShieldCheck size={16} /></span><span className="text-[#8DA4B4] text-sm">Erst zahlen, wenn du 100% zufrieden bist</span></div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
