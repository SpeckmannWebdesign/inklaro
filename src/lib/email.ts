// Brevo Transactional E-Mail-Versand für Inklaro

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const FROM_EMAIL = "info@inklaro.de";
const FROM_NAME = "Inklaro";
const NOTIFY_EMAIL = "info@speckmann-webdesign.de";

// ──────────────────────────────────────────────────
// Basis: E-Mail über Brevo API senden
// ──────────────────────────────────────────────────

async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  const empfaenger = (Array.isArray(to) ? to : [to]).map((email) => ({
    email,
  }));

  const body = {
    sender: { name: FROM_NAME, email: FROM_EMAIL },
    to: empfaenger,
    subject,
    htmlContent: html,
  };

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const fehler = await res.text();
    throw new Error(
      `Brevo E-Mail-Versand fehlgeschlagen (${res.status}): ${fehler}`
    );
  }
}

// HTML-Sonderzeichen escapen — verhindert XSS in E-Mail-Templates
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Nur den Vornamen extrahieren
function vorname(name: string): string {
  return name.split(" ")[0] || name;
}

// ──────────────────────────────────────────────────
// Datentyp für eine Website-Anfrage
// ──────────────────────────────────────────────────

export interface AnfrageData {
  // Schritt 1: Unternehmen
  firmenname: string;
  branche: string;
  beschreibung: string;
  standort?: string;
  website?: string;
  // Schritt 2: Zielgruppe
  zielgruppe: string;
  websiteZiel: string;
  zielgruppeBeschreibung?: string;
  // Schritt 3: Branding
  hatLogo: string;
  farben?: string;
  vorbilder?: string;
  stilPraeferenz?: string;
  // Schritt 4: Inhalte
  seiten: string[];
  texteVorhanden: string;
  sonstiges?: string;
  // Schritt 5: Kontakt
  ansprechpartner: string;
  email: string;
  telefon?: string;
}

// ──────────────────────────────────────────────────
// 3. Notification: Pencil-Prompt ist fertig
// ──────────────────────────────────────────────────

export async function sendPromptReadyNotification(
  anfrageId: string,
  firmenname: string,
  branche: string,
  promptLaenge: number,
  pencilPrompt: string
) {
  const inhalt = `
    <h1 style="font-size:22px; font-weight:800; color:#0F2B3C; margin:0 0 4px 0;">
      Pencil-Prompt fertig
    </h1>
    <p style="font-size:15px; color:#4A6274; line-height:1.7; margin:0 0 24px 0;">
      Der Design-Prompt f&uuml;r <strong style="color:#0F2B3C;">${esc(firmenname)}</strong> (${esc(branche)}) wurde automatisch generiert.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF5EB; border-radius:12px; margin-bottom:24px;">
      <tr>
        <td style="padding:24px;">
          <p style="font-size:14px; font-weight:700; color:#0F2B3C; margin:0 0 12px 0;">N&auml;chster Schritt:</p>
          <p style="font-size:14px; color:#4A6274; line-height:1.7; margin:0 0 8px 0;">
            &Ouml;ffne Claude Code im Inklaro-Projekt und f&uuml;hre aus:
          </p>
          <div style="background-color:#0F2B3C; border-radius:8px; padding:16px; margin:8px 0;">
            <code style="color:#E8564A; font-size:14px; font-family:monospace;">claude /pencil-design ${esc(anfrageId)}</code>
          </div>
        </td>
      </tr>
    </table>

    <p style="font-size:12px; font-weight:700; color:#E8564A; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px 0;">Generierter Pencil-Prompt</p>
    <div style="background-color:#F5F5F5; border-radius:12px; padding:20px; margin-bottom:16px; border:1px solid #E8DFD4;">
      <pre style="font-size:13px; color:#0F2B3C; line-height:1.6; white-space:pre-wrap; word-wrap:break-word; margin:0; font-family:monospace;">${esc(pencilPrompt)}</pre>
    </div>
    <p style="font-size:13px; color:#8DA4B4; margin:0;">
      Prompt-L&auml;nge: ${promptLaenge} Zeichen &middot; Anfrage-ID: ${esc(anfrageId)}
    </p>`;

  await sendEmail({
    to: NOTIFY_EMAIL,
    subject: `Prompt fertig: ${firmenname} (${branche})`,
    html: emailLayout(inhalt),
  });
}

// ──────────────────────────────────────────────────
// E-Mail-Layout-Wrapper mit Inklaro-Branding
// ──────────────────────────────────────────────────

function emailLayout(inhalt: string): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inklaro</title>
</head>
<body style="margin:0; padding:0; background-color:#FFFAF5; font-family:Arial, Helvetica, sans-serif; color:#0F2B3C; -webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFFAF5;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">
          <!-- Header -->
          <tr>
            <td style="text-align:center; padding-bottom:32px;">
              <span style="font-size:28px; font-weight:800; color:#E8564A; letter-spacing:-0.5px;">Inklaro</span>
            </td>
          </tr>
          <!-- Inhalt -->
          <tr>
            <td style="background-color:#FFFFFF; border-radius:16px; padding:40px 36px; border:1px solid #E8DFD4;">
              ${inhalt}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="text-align:center; padding-top:32px; color:#8DA4B4; font-size:12px; line-height:1.6;">
              Inklaro – ein Produkt der Speckmann Webdesign GmbH<br />
              Alexanderstraße 75, 26121 Oldenburg<br />
              <a href="https://inklaro.de" style="color:#E8564A; text-decoration:none;">inklaro.de</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ──────────────────────────────────────────────────
// 1. Bestätigungs-E-Mail an den Kunden
// ──────────────────────────────────────────────────

export async function sendAnfrageConfirmation(daten: AnfrageData) {
  const name = esc(vorname(daten.ansprechpartner));

  const inhalt = `
    <h1 style="font-size:24px; font-weight:800; color:#0F2B3C; margin:0 0 8px 0;">
      Vielen Dank für Ihre Anfrage, ${name}!
    </h1>
    <p style="font-size:15px; color:#4A6274; line-height:1.7; margin:0 0 24px 0;">
      Wir haben Ihre Website-Anfrage für <strong style="color:#0F2B3C;">${esc(daten.firmenname)}</strong> erhalten und freuen uns darauf, Ihnen eine beeindruckende Website zu erstellen.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF5EB; border-radius:12px; padding:24px; margin-bottom:24px;">
      <tr>
        <td style="padding:24px;">
          <p style="font-size:14px; font-weight:700; color:#0F2B3C; margin:0 0 16px 0;">So geht es weiter:</p>
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-bottom:12px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:32px; height:32px; background-color:#E8564A; border-radius:50%; text-align:center; vertical-align:middle; color:#FFFFFF; font-size:14px; font-weight:700;">1</td>
                    <td style="padding-left:12px; font-size:14px; color:#4A6274; line-height:1.5;">Wir analysieren Ihre Angaben und erstellen eine <strong style="color:#0F2B3C;">fertige Website-Vorschau</strong></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom:12px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:32px; height:32px; background-color:#E8564A; border-radius:50%; text-align:center; vertical-align:middle; color:#FFFFFF; font-size:14px; font-weight:700;">2</td>
                    <td style="padding-left:12px; font-size:14px; color:#4A6274; line-height:1.5;">In <strong style="color:#0F2B3C;">1–2 Werktagen</strong> melden wir uns bei Ihnen</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:32px; height:32px; background-color:#E8564A; border-radius:50%; text-align:center; vertical-align:middle; color:#FFFFFF; font-size:14px; font-weight:700;">3</td>
                    <td style="padding-left:12px; font-size:14px; color:#4A6274; line-height:1.5;">Sie sehen Ihre Website in einer <strong style="color:#0F2B3C;">persönlichen Live-Vorstellung</strong></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="font-size:14px; color:#4A6274; line-height:1.7; margin:0 0 4px 0;">
      Sie haben Fragen? Antworten Sie einfach auf diese E-Mail oder schreiben Sie uns an
      <a href="mailto:info@inklaro.de" style="color:#E8564A; text-decoration:none; font-weight:600;">info@inklaro.de</a>.
    </p>
    <p style="font-size:14px; color:#4A6274; line-height:1.7; margin:24px 0 0 0;">
      Herzliche Grüße<br />
      <strong style="color:#0F2B3C;">Ihr Inklaro-Team</strong>
    </p>`;

  await sendEmail({
    to: daten.email,
    subject: `Ihre Website-Anfrage für ${daten.firmenname} ist eingegangen`,
    html: emailLayout(inhalt),
  });
}

// ──────────────────────────────────────────────────
// 2. Benachrichtigung an Inklaro (info@inklaro.de)
// ──────────────────────────────────────────────────

export async function sendAnfrageNotification(daten: AnfrageData) {
  const zeile = (label: string, wert: string | string[] | undefined) => {
    if (!wert || (Array.isArray(wert) && wert.length === 0)) return "";
    const text = Array.isArray(wert) ? wert.join(", ") : wert;
    return `
      <tr>
        <td style="padding:8px 12px; font-size:13px; color:#8DA4B4; font-weight:600; white-space:nowrap; vertical-align:top;">${esc(label)}</td>
        <td style="padding:8px 12px; font-size:14px; color:#0F2B3C; line-height:1.5;">${esc(text)}</td>
      </tr>`;
  };

  const inhalt = `
    <h1 style="font-size:22px; font-weight:800; color:#0F2B3C; margin:0 0 4px 0;">
      Neue Website-Anfrage
    </h1>
    <p style="font-size:15px; color:#4A6274; line-height:1.7; margin:0 0 24px 0;">
      Es ist eine neue Anfrage über das Inklaro-Formular eingegangen.
    </p>

    <!-- Kontaktdaten -->
    <p style="font-size:12px; font-weight:700; color:#E8564A; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px 0;">Kontakt</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF5EB; border-radius:12px; margin-bottom:20px;">
      ${zeile("Name", daten.ansprechpartner)}
      ${zeile("E-Mail", daten.email)}
      ${zeile("Telefon", daten.telefon)}
    </table>

    <!-- Unternehmen -->
    <p style="font-size:12px; font-weight:700; color:#E8564A; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px 0;">Unternehmen</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF5EB; border-radius:12px; margin-bottom:20px;">
      ${zeile("Firma", daten.firmenname)}
      ${zeile("Branche", daten.branche)}
      ${zeile("Beschreibung", daten.beschreibung)}
      ${zeile("Standort", daten.standort)}
      ${zeile("Aktuelle Website", daten.website)}
    </table>

    <!-- Zielgruppe -->
    <p style="font-size:12px; font-weight:700; color:#E8564A; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px 0;">Zielgruppe & Ziele</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF5EB; border-radius:12px; margin-bottom:20px;">
      ${zeile("Zielgruppe", daten.zielgruppe)}
      ${zeile("Website-Ziel", daten.websiteZiel)}
      ${zeile("Details", daten.zielgruppeBeschreibung)}
    </table>

    <!-- Branding -->
    <p style="font-size:12px; font-weight:700; color:#E8564A; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px 0;">Design & Branding</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF5EB; border-radius:12px; margin-bottom:20px;">
      ${zeile("Logo vorhanden", daten.hatLogo)}
      ${zeile("Farben", daten.farben)}
      ${zeile("Stil-Präferenz", daten.stilPraeferenz)}
      ${zeile("Vorbilder", daten.vorbilder)}
    </table>

    <!-- Inhalte -->
    <p style="font-size:12px; font-weight:700; color:#E8564A; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px 0;">Inhalte & Seiten</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF5EB; border-radius:12px; margin-bottom:20px;">
      ${zeile("Gewünschte Seiten", daten.seiten)}
      ${zeile("Texte vorhanden", daten.texteVorhanden)}
      ${zeile("Sonstiges", daten.sonstiges)}
    </table>`;

  await sendEmail({
    to: NOTIFY_EMAIL,
    subject: `Neue Anfrage: ${daten.firmenname} (${daten.branche})`,
    html: emailLayout(inhalt),
  });
}
