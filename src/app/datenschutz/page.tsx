import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Inklaro",
  description: "Datenschutzerklärung der Speckmann Webdesign GmbH / Inklaro.",
};

export default function Datenschutz() {
  return (
    <>
      <Nav />

      <main className="pt-20 bg-[#FFFAF5] min-h-screen">
        <div className="max-w-[720px] mx-auto px-5 lg:px-16 py-16">
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[#0F2B3C] mb-4">Datenschutzerklärung</h1>
          <p className="text-[#4A6274] text-[15px] mb-12">Inklaro ist eine Marke der Speckmann Webdesign GmbH.</p>

          <div className="text-[#4A6274] text-[15px] leading-[1.8] space-y-8">
            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">1. Verantwortlicher</h2>
              <p>
                Speckmann Webdesign GmbH, Dwaschweg 5, 26133 Oldenburg.<br />
                E-Mail: info@inklaro.de
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">2. Welche Daten wir erheben</h2>
              <p>
                Beim Bestellen einer Website erheben wir folgende Daten: Name, E-Mail-Adresse,
                Firmenname, Branchenbeschreibung, Logo (optional), Farbwünsche und ggf.
                bestehende Website. Diese Daten werden ausschließlich zur Erbringung unserer
                Dienstleistung verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">3. Zahlungsabwicklung</h2>
              <p>
                Zahlungen werden über Stripe Inc. abgewickelt. Stripe verarbeitet deine
                Zahlungsdaten gemäß eigener Datenschutzrichtlinie. Wir speichern keine
                vollständigen Kreditkartendaten.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">4. E-Mail-Versand</h2>
              <p>
                Transaktionale E-Mails werden über Resend versendet. Deine E-Mail-Adresse
                wird ausschließlich für auftragsrelevante Kommunikation genutzt.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">5. Deine Rechte</h2>
              <p>
                Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                der Verarbeitung deiner personenbezogenen Daten. Wende dich dazu an:
                info@inklaro.de
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">6. Speicherdauer</h2>
              <p>
                Bestelldaten werden gemäß gesetzlicher Aufbewahrungsfristen (10 Jahre) gespeichert.
                Eine frühere Löschung ist auf Anfrage möglich, sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-lg mb-2">7. Beschwerderecht</h2>
              <p>
                Du hast das Recht, dich bei einer Datenschutzbehörde zu beschweren.
                Zuständige Behörde: Landesbeauftragter für Datenschutz Niedersachsen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
