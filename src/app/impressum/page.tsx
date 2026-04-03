import Link from "next/link";

export default function Impressum() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">
        ← Zurück
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

      <div className="prose text-gray-700 space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold">Angaben gemäß § 5 TMG</h2>
        <p>
          Speckmann Webdesign GmbH<br />
          Musterstraße 1<br />
          26121 Oldenburg<br />
          Deutschland
        </p>

        <h2 className="text-lg font-semibold">Kontakt</h2>
        <p>
          E-Mail: hallo@speckmann-webdesign.de<br />
          Website: speckmann-webdesign.de
        </p>

        <h2 className="text-lg font-semibold">Handelsregister</h2>
        <p>
          Registergericht: Amtsgericht Oldenburg<br />
          Registernummer: HRB XXXXX
        </p>

        <h2 className="text-lg font-semibold">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
          DE XXX XXX XXX
        </p>

        <h2 className="text-lg font-semibold">Geschäftsführer</h2>
        <p>Marcel Speckmann</p>

        <h2 className="text-lg font-semibold">Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
  );
}
