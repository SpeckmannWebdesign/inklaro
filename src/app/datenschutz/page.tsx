import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">
        ← Zurück
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

      <div className="text-gray-700 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold mb-2">1. Verantwortlicher</h2>
          <p>
            Speckmann Webdesign GmbH, Dwaschweg 5, 26133 Oldenburg.
            E-Mail: hallo@speckmann-webdesign.de
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">2. Welche Daten wir erheben</h2>
          <p>
            Beim Bestellen einer Website erheben wir folgende Daten: Name, E-Mail-Adresse,
            Firmenname, Branchenbeschreibung, Logo (optional), Farbwünsche und ggf.
            bestehende Website. Diese Daten werden ausschließlich zur Erbringung unserer
            Dienstleistung verarbeitet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">3. Zahlungsabwicklung</h2>
          <p>
            Zahlungen werden über Stripe Inc. abgewickelt. Stripe verarbeitet Ihre
            Zahlungsdaten gemäß eigener Datenschutzrichtlinie. Wir speichern keine
            vollständigen Kreditkartendaten.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">4. E-Mail-Versand</h2>
          <p>
            Transaktionale E-Mails werden über Resend versendet. Ihre E-Mail-Adresse
            wird ausschließlich für auftragsrelevante Kommunikation genutzt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
            der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich dazu an:
            hallo@speckmann-webdesign.de
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">6. Speicherdauer</h2>
          <p>
            Bestelldaten werden gemäß gesetzlicher Aufbewahrungsfristen (10 Jahre) gespeichert.
            Eine frühere Löschung ist auf Anfrage möglich, sofern keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">7. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutzbehörde zu beschweren.
            Zuständige Behörde: Landesbeauftragter für Datenschutz Niedersachsen.
          </p>
        </section>
      </div>
    </div>
  );
}
