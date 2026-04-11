import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Inklaro",
  description:
    "Datenschutzerklärung von Inklaro / Speckmann Webdesign GmbH — Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
  robots: "noindex, follow",
};

export default function Datenschutz() {
  return (
    <>
      <Nav />

      <main className="pt-20 bg-[#FFFAF5] min-h-screen">
        <div className="max-w-[720px] mx-auto px-5 lg:px-16 py-16">
          <p className="text-[11px] font-semibold tracking-[0.15em] text-[#4A6274] uppercase mb-4">
            Rechtliche Informationen
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[#0F2B3C] mb-12">
            Datenschutzerklärung
          </h1>

          <div className="text-[#4A6274] text-[15px] leading-[1.8] space-y-10">
            {/* 1. Datenschutz auf einen Blick */}
            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-xl mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Allgemeine Hinweise
              </h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Datenerfassung auf dieser Website
              </h3>
              <h4 className="font-semibold text-[#0F2B3C] text-[15px] mb-1">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h4>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen
                Stelle&ldquo; in dieser Datenschutzerklärung entnehmen.
              </p>

              <h4 className="font-semibold text-[#0F2B3C] text-[15px] mb-1">
                Wie erfassen wir Ihre Daten?
              </h4>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontakt- oder
                Bestellformular eingeben.
              </p>
              <p className="mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h4 className="font-semibold text-[#0F2B3C] text-[15px] mb-1">
                Wofür nutzen wir Ihre Daten?
              </h4>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können,
                werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige
                Auftragsanfragen verarbeitet.
              </p>

              <h4 className="font-semibold text-[#0F2B3C] text-[15px] mb-1">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h4>
              <p className="mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                Aufsichtsbehörde zu.
              </p>
              <p className="mb-4">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
                uns wenden.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Analyse-Tools und Tools von Dritt&shy;anbietern
              </h3>
              <p className="mb-4">
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden.
                Das geschieht vor allem mit sogenannten Analyseprogrammen.
              </p>
              <p>
                Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                Datenschutzerklärung.
              </p>
            </section>

            {/* 2. Hosting */}
            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-xl mb-4">2. Hosting</h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">Hetzner</h3>
              <p className="mb-4">
                Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen
                (nachfolgend Hetzner).
              </p>
              <p className="mb-4">
                Details entnehmen Sie der Datenschutzerklärung von Hetzner:{" "}
                <a
                  href="https://www.hetzner.com/de/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F2B3C] underline hover:opacity-75"
                >
                  https://www.hetzner.com/de/legal/privacy-policy/
                </a>
                .
              </p>
              <p className="mb-4">
                Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung
                unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
                Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
                Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff
                auf Informationen im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
                Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>

              <h4 className="font-semibold text-[#0F2B3C] text-[15px] mb-1">
                Auftragsverarbeitung
              </h4>
              <p>
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben
                genannten Dienstes geschlossen. Hierbei handelt es sich um einen
                datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
                personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter
                Einhaltung der DSGVO verarbeitet.
              </p>
            </section>

            {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-xl mb-4">
                3. Allgemeine Hinweise und Pflicht&shy;informationen
              </h2>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
                können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
                wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p className="mb-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
                Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mb-2">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-[#F0EBE5] border border-[#E2DDD7] rounded-lg p-5 mb-4">
                <p className="mb-1">
                  Speckmann Webdesign GmbH
                  <br />
                  Dwaschweg 5<br />
                  26133 Oldenburg
                </p>
                <p>
                  Telefon: +49 15208709068
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:info@inklaro.de"
                    className="text-[#0F2B3C] underline hover:opacity-75"
                  >
                    info@inklaro.de
                  </a>
                </p>
              </div>
              <p className="mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">Speicherdauer</h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
                oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
                dieser Gründe.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
              </h3>
              <p className="mb-4">
                Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
                personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9
                Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
                Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
                Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B. via
                Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
                auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
                Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1
                lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung
                einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1
                lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
                Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall
                einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser
                Datenschutzerklärung informiert.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Empfänger von personenbezogenen Daten
              </h3>
              <p className="mb-4">
                Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen
                zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an
                diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
                externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich
                ist, wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten
                an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f
                DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die
                Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir
                personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über
                Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein
                Vertrag über gemeinsame Verarbeitung geschlossen.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
                Direktwerbung (Art. 21 DSGVO)
              </h3>
              <p className="mb-4 uppercase text-[13px] font-semibold leading-[1.8]">
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
                ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE
                JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
                PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE
                SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
                UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG
                ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>
              <p className="mb-4 uppercase text-[13px] font-semibold leading-[1.8]">
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO
                HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH
                FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN
                SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM
                ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Beschwerde&shy;recht bei der zuständigen Aufsichts&shy;behörde
              </h3>
              <p className="mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Recht auf Daten&shy;übertrag&shy;barkeit
              </h3>
              <p className="mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
                dies nur, soweit es technisch machbar ist.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Auskunft, Berichtigung und Löschung
              </h3>
              <p className="mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p className="mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf
                Einschränkung der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="list-disc ml-5 mb-4 space-y-2">
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                  bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer
                  der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                  können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
                  Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben
                  Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                  Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                  nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
              </ul>
              <p className="mb-4">
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen
                diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
                Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
                wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
                verarbeitet werden.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p className="mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns
                als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol
                in Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an
                uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>

            {/* 4. Datenerfassung auf dieser Website */}
            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-xl mb-4">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">Cookies</h3>
              <p className="mb-4">
                Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind
                kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden
                entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
                (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach
                Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
                Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung
                durch Ihren Webbrowser erfolgt.
              </p>
              <p className="mb-4">
                Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog.
                Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter
                Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies
                zur Abwicklung von Zahlungsdienstleistungen).
              </p>
              <p className="mb-4">
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig,
                da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.&nbsp;B.
                die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur
                Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
              </p>
              <p className="mb-4">
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur
                Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.&nbsp;B. für die
                Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung
                des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
                angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der
                Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten
                Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
                und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
                Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="mb-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
                informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies
                für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der
                Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies
                kann die Funktionalität dieser Website eingeschränkt sein.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Anfrage per E-Mail, Telefon oder Telefax
              </h3>
              <p className="mb-4">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
                inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
                Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese
                Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die
                Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="mb-4">
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis
                Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
                der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener
                Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
                gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Kontaktformular
              </h3>
              <p className="mb-4">
                Wenn Sie uns über unser Kontaktformular Anfragen zukommen lassen, werden Ihre
                Angaben aus dem Formular (Name, E-Mail-Adresse, Nachricht) zum Zwecke der
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet.
              </p>
              <p className="mb-4">
                Für den Versand der E-Mails nutzen wir den Dienst{" "}
                <strong>Brevo</strong> (ehemals Sendinblue) der Sendinblue GmbH, Köpenicker Str. 126,
                10179 Berlin, Deutschland. Brevo verarbeitet die von Ihnen im Formular eingegebenen
                Daten in unserem Auftrag, um die E-Mail-Zustellung (Benachrichtigung an uns sowie
                Eingangsbestätigung an Sie) zu ermöglichen.
              </p>
              <p className="mb-4">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                (vorvertragliche Maßnahmen bzw. Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der zuverlässigen Zustellung von Kontaktanfragen).
              </p>
              <p className="mb-4">
                Die über das Kontaktformular übermittelten Daten verbleiben bei uns, bis Sie uns zur
                Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
                die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
                Aufbewahrungsfristen – bleiben unberührt.
              </p>
              <p>
                Weitere Informationen zum Datenschutz von Brevo finden Sie unter:{" "}
                <a
                  href="https://www.brevo.com/de/legal/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F2B3C] underline hover:opacity-75"
                >
                  https://www.brevo.com/de/legal/privacypolicy/
                </a>
                .
              </p>
            </section>

            {/* 5. Analyse-Tools und Werbung */}
            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-xl mb-4">
                5. Analyse-Tools und Werbung
              </h2>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">Fathom Analytics</h3>
              <p className="mb-4">
                Wir haben Fathom Analytics auf dieser Website eingebunden. Anbieter ist die Conva
                Ventures Inc., BOX 37058 Millstream PO Victoria, British Columbia V9B 0E8, Canada.
              </p>
              <p className="mb-4">
                Mit Fathom Analytics können wir das Verhalten unserer Websitebesucher analysieren. Zu
                diesem Zweck wird die IP-Adresse und der Useragent nach der Erfassung durch die
                Erstellung eines individuellen Hashs unverzüglich anonymisiert. Der Hashwert wird bei
                Hetzner in Deutschland für 48 Stunden gespeichert. Der Hash kann nicht wieder dekodiert
                werden. Fathom Analytics verwendet keine Cookies, und keine Daten durch die der
                Besucher getrackt oder geloggt werden kann.
              </p>
              <p className="mb-4">
                Nach Aussage von Fathom Analytics verbleiben alle in der EU erfassten Daten auf
                EU-Servern.
              </p>
              <p className="mb-4">
                Die Verwendung von Fathom Analytics erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten
                Analyse des Nutzerverhaltens und um sein Webangebot zu optimieren. Sofern eine
                entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die
                Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
                Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
                Die Einwilligung ist jederzeit widerrufbar.
              </p>

              <h4 className="font-semibold text-[#0F2B3C] text-[15px] mb-1">
                Auftragsverarbeitung
              </h4>
              <p className="mb-8">
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben
                genannten Dienstes geschlossen. Hierbei handelt es sich um einen
                datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
                personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter
                Einhaltung der DSGVO verarbeitet.
              </p>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">Meta Pixel</h3>
              <p className="mb-4">
                Wir verwenden auf dieser Website das Meta Pixel (ehemals Facebook Pixel). Anbieter
                ist die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
              </p>
              <p className="mb-4">
                Das Meta Pixel ermöglicht es uns, das Verhalten von Nutzern nachzuverfolgen, nachdem
                diese durch Klick auf eine Meta-Werbeanzeige (Facebook/Instagram) auf unsere Website
                weitergeleitet wurden. So können wir die Wirksamkeit der Meta-Werbeanzeigen für
                statistische und Marktforschungszwecke erfassen und zukünftige Werbemaßnahmen
                optimieren. Die erhobenen Daten sind für uns als Betreiber dieser Website nicht
                einsehbar und werden nur im Rahmen von Anzeigenauswertungen bereitgestellt.
              </p>
              <p className="mb-4">
                Das Meta Pixel setzt Cookies und ruft verschiedene Funktionen auf, die eine Analyse
                Ihres Nutzerverhaltens ermöglichen. Hierzu werden u.&nbsp;a. Ihre IP-Adresse, Geräte-
                und Browserinformationen sowie Seitenaufrufe erfasst und an Meta-Server in den USA
                übermittelt.
              </p>
              <p className="mb-4">
                Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6
                Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit
                widerrufbar.
              </p>
              <p className="mb-4">
                Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der
                EU-Kommission gestützt. Details finden Sie hier:{" "}
                <a
                  href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F2B3C] underline hover:opacity-75"
                >
                  https://www.facebook.com/legal/EU_data_transfer_addendum
                </a>
                .
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Meta finden Sie unter:{" "}
                <a
                  href="https://www.facebook.com/about/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F2B3C] underline hover:opacity-75"
                >
                  https://www.facebook.com/about/privacy/
                </a>
                .
              </p>
            </section>

            {/* 6. Plugins und Tools */}
            <section>
              <h2 className="font-semibold text-[#0F2B3C] text-xl mb-4">
                6. Plugins und Tools
              </h2>

              <h3 className="font-semibold text-[#0F2B3C] text-base mb-2">
                Google Fonts (lokales Hosting)
              </h3>
              <p className="mb-4">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google
                Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert.
                Eine Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
              <p>
                Weitere Informationen zu Google Fonts finden Sie unter{" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F2B3C] underline hover:opacity-75"
                >
                  https://developers.google.com/fonts/faq
                </a>{" "}
                und in der Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F2B3C] underline hover:opacity-75"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
