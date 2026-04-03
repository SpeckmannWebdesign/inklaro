import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "noreply@speckmann-webdesign.de";

export async function sendeBestellbestaetigung({
  email,
  name,
  companyName,
  orderId,
}: {
  email: string;
  name: string;
  companyName: string;
  orderId: string;
}) {
  return resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: `Ihre Bestellung wurde erhalten – ${companyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a1a1a;">Bestellung erhalten ✓</h1>
        <p>Hallo ${name},</p>
        <p>vielen Dank für Ihre Bestellung! Wir haben Ihre Zahlung erhalten und beginnen jetzt mit der Erstellung Ihrer Website für <strong>${companyName}</strong>.</p>
        <p>Ihre Bestellnummer: <strong>${orderId}</strong></p>
        <p>In den nächsten 60 Minuten erhalten Sie eine weitere E-Mail mit dem Link zu Ihrer fertigen Website.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #666; font-size: 14px;">Speckmann Webdesign GmbH · Oldenburg, Deutschland</p>
      </div>
    `,
  });
}

export async function sendeWebsiteFertig({
  email,
  name,
  companyName,
  previewUrl,
  githubRepoUrl,
  orderId,
}: {
  email: string;
  name: string;
  companyName: string;
  previewUrl: string;
  githubRepoUrl: string;
  orderId: string;
}) {
  return resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: `Ihre Website ist fertig! – ${companyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a1a1a;">Ihre Website ist fertig! 🎉</h1>
        <p>Hallo ${name},</p>
        <p>Ihre neue Website für <strong>${companyName}</strong> wurde erfolgreich erstellt und ist jetzt online!</p>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 24px 0;">
          <p style="margin: 0 0 12px;"><strong>Ihre Website-Vorschau:</strong></p>
          <a href="${previewUrl}" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Website öffnen →
          </a>
        </div>

        <h2 style="color: #1a1a1a; font-size: 18px;">Nächste Schritte</h2>
        <ol>
          <li>Öffnen Sie Ihre Website über den Link oben</li>
          <li>Überprüfen Sie Inhalte und Design</li>
          <li>Richten Sie Ihre Domain ein (DNS-Anleitung wird separat gesendet)</li>
          <li>Bei Fragen: antworten Sie einfach auf diese E-Mail</li>
        </ol>

        <p>Code-Repository: <a href="${githubRepoUrl}">${githubRepoUrl}</a></p>
        <p style="color: #666; font-size: 12px;">Bestellnummer: ${orderId}</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #666; font-size: 14px;">Speckmann Webdesign GmbH · Oldenburg, Deutschland</p>
      </div>
    `,
  });
}

export async function sendeRechnung({
  email,
  name,
  companyName,
  invoiceNumber,
  orderId,
  grossAmount,
  netAmount,
  taxAmount,
  issuedAt,
}: {
  email: string;
  name: string;
  companyName: string;
  invoiceNumber: number;
  orderId: string;
  grossAmount: number;  // in Cent
  netAmount: number;    // in Cent
  taxAmount: number;    // in Cent
  issuedAt: Date;
}) {
  const rechnungsnummer = `RE-${issuedAt.getFullYear()}-${String(invoiceNumber).padStart(4, "0")}`;
  const datum = issuedAt.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  const bruttoFormatiert = (grossAmount / 100).toFixed(2).replace(".", ",");
  const nettoFormatiert = (netAmount / 100).toFixed(2).replace(".", ",");
  const mwstFormatiert = (taxAmount / 100).toFixed(2).replace(".", ",");

  return resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: `Rechnung ${rechnungsnummer} – KI-Website Generator`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #1a1a1a;">

        <!-- Kopfzeile -->
        <table style="width: 100%; margin-bottom: 40px;">
          <tr>
            <td>
              <strong style="font-size: 20px;">Speckmann Webdesign GmbH</strong><br />
              Musterstraße 1<br />
              26123 Oldenburg<br />
              Deutschland<br />
              Tel.: +49 441 123456<br />
              E-Mail: info@speckmann-webdesign.de<br />
              USt-IdNr.: DE123456789
            </td>
            <td style="text-align: right; vertical-align: top;">
              <h1 style="font-size: 28px; margin: 0; color: #1a1a1a;">RECHNUNG</h1>
              <p style="color: #666; margin: 8px 0 0;">${rechnungsnummer}</p>
            </td>
          </tr>
        </table>

        <!-- Empfänger -->
        <div style="margin-bottom: 32px;">
          <strong>${name}</strong><br />
          ${companyName}<br />
          Rechnungsdatum: ${datum}<br />
          Leistungsdatum: ${datum}
        </div>

        <!-- Positionen -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <thead>
            <tr style="background: #f5f5f5;">
              <th style="text-align: left; padding: 10px 12px; border-bottom: 2px solid #e0e0e0; font-size: 13px;">Pos.</th>
              <th style="text-align: left; padding: 10px 12px; border-bottom: 2px solid #e0e0e0; font-size: 13px;">Leistung</th>
              <th style="text-align: right; padding: 10px 12px; border-bottom: 2px solid #e0e0e0; font-size: 13px;">Betrag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-size: 14px; vertical-align: top;">1</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-size: 14px;">
                <strong>KI-Website Generator – Einmalige Erstellung</strong><br />
                <span style="color: #666; font-size: 13px;">
                  Vollautomatische Erstellung einer professionellen Website für ${companyName}
                  inkl. Impressum, Datenschutzerklärung und Cookie-Banner.<br />
                  Bestellnummer: ${orderId}
                </span>
              </td>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-size: 14px; text-align: right; white-space: nowrap;">
                ${nettoFormatiert} €
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Summen -->
        <table style="width: 100%; max-width: 300px; margin-left: auto; margin-bottom: 32px;">
          <tr>
            <td style="padding: 6px 0; font-size: 14px; color: #666;">Nettobetrag</td>
            <td style="padding: 6px 0; font-size: 14px; text-align: right;">${nettoFormatiert} €</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 14px; color: #666;">zzgl. 19% MwSt.</td>
            <td style="padding: 6px 0; font-size: 14px; text-align: right;">${mwstFormatiert} €</td>
          </tr>
          <tr style="border-top: 2px solid #1a1a1a;">
            <td style="padding: 10px 0 6px; font-size: 16px; font-weight: bold;">Gesamtbetrag</td>
            <td style="padding: 10px 0 6px; font-size: 16px; font-weight: bold; text-align: right;">${bruttoFormatiert} €</td>
          </tr>
        </table>

        <!-- Hinweis -->
        <p style="font-size: 13px; color: #666; border-top: 1px solid #eee; padding-top: 20px;">
          Der Betrag wurde per Kreditkarte über Stripe bezahlt. Vielen Dank für Ihren Auftrag!
        </p>

        <p style="font-size: 12px; color: #999;">
          Speckmann Webdesign GmbH · Amtsgericht Oldenburg · HRB 12345 · Geschäftsführer: Marcel Speckmann
        </p>
      </div>
    `,
  });
}
