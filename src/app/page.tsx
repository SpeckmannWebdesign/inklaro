import Link from "next/link";

const BRANCHEN = [
  {
    icon: "🔨",
    name: "Handwerk & Bau",
    beispiel: "Zimmerei Müller GmbH",
    features: ["Leistungsübersicht", "Referenzen", "Kontaktformular"],
  },
  {
    icon: "🍽️",
    name: "Restaurant & Gastronomie",
    beispiel: "Restaurant Bella Italia",
    features: ["Speisekarte", "Öffnungszeiten", "Tischreservierung"],
  },
  {
    icon: "✂️",
    name: "Beauty & Wellness",
    beispiel: "Friseur Salon Sarah",
    features: ["Leistungen & Preise", "Online-Buchung", "Team-Vorstellung"],
  },
  {
    icon: "🏥",
    name: "Arzt & Gesundheit",
    beispiel: "Praxis Dr. Schmidt",
    features: ["Fachbereiche", "Terminvergabe", "Anfahrt & Kontakt"],
  },
  {
    icon: "🛒",
    name: "Einzelhandel",
    beispiel: "Mode-Boutique Lena",
    features: ["Produktkategorien", "Öffnungszeiten", "Standort"],
  },
  {
    icon: "💼",
    name: "Dienstleistungen",
    beispiel: "Steuerberater Klein",
    features: ["Leistungsbeschreibung", "Über uns", "Kontakt"],
  },
];

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-gray-900 text-lg">KI-Website Generator</div>
          <div className="flex items-center gap-6">
            <a href="#wie-es-funktioniert" className="text-sm text-gray-500 hover:text-gray-800 transition hidden sm:block">
              Wie es funktioniert
            </a>
            <a href="#branchen" className="text-sm text-gray-500 hover:text-gray-800 transition hidden sm:block">
              Branchen
            </a>
            <Link
              href="/order"
              className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Website bestellen
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ⚡ Fertig in unter 60 Minuten
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Ihre professionelle Website –{" "}
            <span className="text-blue-600">vollautomatisch</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            Formular ausfüllen, bezahlen – fertig. KI erstellt Design und Code, wir deployen
            die Website. Unter 60 Minuten. Kein Entwickler nötig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="bg-gray-900 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-700 transition"
            >
              Jetzt Website bestellen – 499 €
            </Link>
            <a
              href="#wie-es-funktioniert"
              className="border border-gray-200 text-gray-700 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition"
            >
              Wie funktioniert das?
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Einmalige Zahlung · Kein Abo · Inklusive Hosting-Setup
          </p>
        </div>
      </section>

      {/* Wie es funktioniert */}
      <section id="wie-es-funktioniert" className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            So einfach funktioniert es
          </h2>
          <p className="text-gray-500 text-center mb-14 text-lg">
            Von der Bestellung bis zur fertigen Website in 4 automatischen Schritten.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                nummer: "1",
                titel: "Formular ausfüllen",
                text: "Firmenname, Branche, Beschreibung, Logo und Farben – in 3 Minuten ausgefüllt.",
                icon: "📋",
              },
              {
                nummer: "2",
                titel: "Zahlung (499 €)",
                text: "Sichere Zahlung via Stripe. Danach startet die Pipeline automatisch.",
                icon: "💳",
              },
              {
                nummer: "3",
                titel: "KI erstellt Ihre Website",
                text: "Design wird generiert, HTML/CSS/JS Code wird gebaut, GitHub Repo angelegt.",
                icon: "🤖",
              },
              {
                nummer: "4",
                titel: "Website live",
                text: "Automatisches Deployment. Sie erhalten eine E-Mail mit dem Link zu Ihrer Website.",
                icon: "🚀",
              },
            ].map((s) => (
              <div key={s.nummer} className="text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="inline-block w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mb-3 mx-auto">
                  {s.nummer}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.titel}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branchen-Showcase */}
      <section id="branchen" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Für jede Branche
          </h2>
          <p className="text-gray-500 text-center mb-14 text-lg">
            Die KI optimiert Design und Texte automatisch für Ihre Branche.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHEN.map((b) => (
              <div
                key={b.name}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{b.name}</h3>
                <p className="text-gray-400 text-xs mb-4">{b.beispiel}</p>
                <ul className="space-y-1.5">
                  {b.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-green-500 text-xs">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preis */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ein Preis, alles inklusive</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Keine versteckten Kosten. Kein Abo. Einmalige Investition in Ihre Online-Präsenz.
          </p>

          <div className="bg-white text-gray-900 rounded-2xl p-8 inline-block w-full max-w-md">
            <div className="text-5xl font-extrabold mb-2">499 €</div>
            <p className="text-gray-400 text-sm mb-6">inkl. 19% MwSt. · Einmalige Zahlung</p>

            <ul className="space-y-3 text-left mb-8">
              {[
                "Professionelles KI-Design",
                "Vollständiger HTML/CSS/JS Code",
                "Eigenes GitHub Repository",
                "Deployment auf Hosting-Plattform",
                "Bestätigungs-E-Mail mit Preview-Link",
                "Fertig in unter 60 Minuten",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/order"
              className="block w-full bg-gray-900 text-white font-bold py-4 rounded-xl text-center hover:bg-gray-700 transition"
            >
              Jetzt bestellen →
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Optionales Hosting & Wartungspaket: 29 €/Monat
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Häufige Fragen
          </h2>

          <div className="space-y-6">
            {[
              {
                f: "Wie lange dauert die Erstellung?",
                a: "In der Regel unter 60 Minuten nach Ihrer Zahlung. Sie erhalten eine E-Mail, sobald Ihre Website fertig ist.",
              },
              {
                f: "Kann ich die Website danach bearbeiten?",
                a: "Ja! Sie erhalten Zugang zum GitHub Repository mit dem vollständigen Code. Änderungen können Sie selbst vornehmen oder uns beauftragen.",
              },
              {
                f: "Was ist mit dem Hosting?",
                a: "Die Website wird automatisch auf einem Hosting-Server deployed. Optional bieten wir ein Wartungspaket für 29 €/Monat an.",
              },
              {
                f: "Muss ich noch etwas tun?",
                a: "Nur die DNS-Einrichtung für Ihre Domain. Wir senden Ihnen eine Anleitung dazu.",
              },
              {
                f: "DSGVO-konform?",
                a: "Ja. Der generierte Code enthält Impressum, Datenschutzerklärung und kann auf deutschen Servern gehostet werden.",
              },
            ].map((q) => (
              <div key={q.f} className="border-b border-gray-100 pb-6">
                <p className="font-semibold text-gray-800 mb-2">{q.f}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{q.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Bereit für Ihre neue Website?
        </h2>
        <p className="text-gray-500 mb-8">
          In unter 60 Minuten zur professionellen Online-Präsenz.
        </p>
        <Link
          href="/order"
          className="bg-gray-900 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-700 transition inline-block"
        >
          Jetzt für 499 € bestellen →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 text-center text-sm">
        <p className="mb-3">© {new Date().getFullYear()} KI-Website Generator · Speckmann Webdesign GmbH · Oldenburg</p>
        <div className="flex justify-center gap-6">
          <Link href="/impressum" className="hover:text-white transition">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
        </div>
      </footer>
    </main>
  );
}
