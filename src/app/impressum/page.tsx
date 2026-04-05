import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Speckmann Webdesign GmbH",
  description: "Impressum der Speckmann Webdesign GmbH, Oldenburg.",
};

export default function Impressum() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF5]/90 backdrop-blur-xl border-b border-[#E8DFD4]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-5 lg:px-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/images/inklaro-logo.png" alt="Inklaro" width={240} height={80} className="h-16 w-auto" />
          </Link>
          <Link href="/" className="text-[#4A6274] hover:text-[#0F2B3C] transition text-sm font-medium px-5 py-2.5 rounded-full border border-[#E8DFD4] hover:border-[#0F2B3C]">
            ← Zurück zur Startseite
          </Link>
        </div>
      </nav>

      <main className="pt-20 bg-[#FFFAF5] min-h-screen">
        <div className="max-w-[720px] mx-auto px-5 lg:px-16 py-16">
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[#0F2B3C] mb-4">Impressum</h1>
          <p className="text-[#4A6274] text-[15px] mb-12">Inklaro ist eine Marke der Speckmann Webdesign GmbH.</p>

          <div className="text-[#4A6274] text-[15px] leading-[1.8] space-y-8">
            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">Angaben gemäß DDG</h2>
              <p>
                Speckmann Webdesign GmbH<br />
                Dwaschweg 5<br />
                26133 Oldenburg
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">Handelsregister</h2>
              <p>
                HRB 221809<br />
                Registergericht: Amtsgericht Oldenburg
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">Vertreten durch</h2>
              <p>Marcel Speckmann</p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">Kontakt</h2>
              <p>
                Telefon: 015208709068<br />
                E-Mail: info@speckmann-webdesign.de
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">Umsatzsteuer-Identifikationsnummer</h2>
              <p>DE451681191</p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">Berufsbezeichnung</h2>
              <p>Webdesigner</p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">Redaktionell verantwortlich</h2>
              <p>Marcel Speckmann</p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">Streitbeilegung</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              <p className="mt-2">
                Allgemeine Informationspflicht nach § 36 VSBG: Es besteht keine Pflicht und keine Bereitschaft, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-[#0A1F2B]">
        <div className="max-w-[1440px] mx-auto">
          <div className="h-px bg-[#1A3D50]" />
          <div className="flex flex-col sm:flex-row justify-between items-center px-5 lg:px-16 py-6 gap-2">
            <span className="text-[#5A7A8C] text-[13px]">© 2026 Inklaro — Ein Angebot der Speckmann Webdesign GmbH</span>
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
