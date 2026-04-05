import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – Speckmann Webdesign GmbH",
  description: "Impressum der Speckmann Webdesign GmbH, Oldenburg.",
};

export default function Impressum() {
  return (
    <>
      <Nav />

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
                E-Mail: info@inklaro.de
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

      <Footer />
    </>
  );
}
