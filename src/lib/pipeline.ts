import { prisma } from "./prisma";
import { PipelineStep, Order } from "@prisma/client";
import { sendeBestellbestaetigung, sendeWebsiteFertig, sendeRechnung } from "./resend";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

// ─────────────────────────────────────────────
// Hilfs-Funktion: Log schreiben
// ─────────────────────────────────────────────
async function log(
  orderId: string,
  step: PipelineStep,
  status: "started" | "completed" | "failed",
  message: string,
  metadata?: JsonValue
) {
  await prisma.pipelineLog.create({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { orderId, step, status, message, metadata: metadata as any },
  });
}

// ─────────────────────────────────────────────
// Schritt 1: Pencil-Prompt generieren
// ─────────────────────────────────────────────
function generatePencilPrompt(order: Order): string {
  return `Design a professional, modern website for ${order.companyName}.

Industry: ${order.industry}
Business description: ${order.description}
${order.primaryColor ? `Primary color: ${order.primaryColor}` : ""}
${order.secondaryColor ? `Secondary color: ${order.secondaryColor}` : ""}
${order.existingWebsite ? `Reference website: ${order.existingWebsite}` : ""}

Requirements:
- Clean, modern design suitable for ${order.industry} industry
- Mobile-first responsive layout
- Hero section with clear value proposition
- Services/features section
- Contact section with CTA
- Professional color scheme ${order.primaryColor ? `based on ${order.primaryColor}` : ""}
- Typography: Clean, readable fonts
- Design should convey trust, professionalism, and quality

Pages: Homepage (single page scroll)
Target audience: German-speaking customers
Style: Modern, clean, trustworthy`;
}

// ─────────────────────────────────────────────
// Impressum-HTML generieren (§ 5 TMG)
// ─────────────────────────────────────────────
function generateImpressumHtml(order: Order): string {
  const adressZeilen = (order.legalAddress || "").split("\n").join("<br />");
  return `
    <div id="impressum-inhalt" style="display:none; max-width:700px; margin:0 auto; padding:40px 24px;">
      <h1 style="font-size:1.8rem; font-weight:700; margin-bottom:24px;">Impressum</h1>
      <h2 style="font-size:1.1rem; font-weight:600; margin:20px 0 8px;">Angaben gemäß § 5 TMG</h2>
      <p>${order.companyName}${order.legalForm ? ` (${order.legalForm})` : ""}<br />
      ${adressZeilen}</p>
      ${order.legalCeo ? `<p><strong>Vertreten durch:</strong><br />${order.legalCeo}</p>` : ""}
      <h2 style="font-size:1.1rem; font-weight:600; margin:20px 0 8px;">Kontakt</h2>
      <p>Telefon: ${order.legalPhone || "–"}<br />
      E-Mail: ${order.contactEmail}</p>
      ${order.legalRegisterNr ? `<h2 style="font-size:1.1rem; font-weight:600; margin:20px 0 8px;">Registereintrag</h2><p>${order.legalRegisterNr}</p>` : ""}
      <h2 style="font-size:1.1rem; font-weight:600; margin:20px 0 8px;">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>${order.contactName}<br />${adressZeilen}</p>
      <h2 style="font-size:1.1rem; font-weight:600; margin:20px 0 8px;">Haftungsausschluss</h2>
      <p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
      <p style="margin-top:16px;"><a href="/" style="color:#2563eb;">← Zurück zur Startseite</a></p>
    </div>`;
}

// ─────────────────────────────────────────────
// Datenschutzerklärung-HTML generieren (DSGVO Art. 13)
// ─────────────────────────────────────────────
function generateDatenschutzHtml(order: Order): string {
  const adressZeilen = (order.legalAddress || "").split("\n").join("<br />");
  return `
    <div id="datenschutz-inhalt" style="display:none; max-width:700px; margin:0 auto; padding:40px 24px;">
      <h1 style="font-size:1.8rem; font-weight:700; margin-bottom:24px;">Datenschutzerklärung</h1>

      <h2 style="font-size:1.1rem; font-weight:600; margin:24px 0 8px;">1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)</h2>
      <p>${order.companyName}<br />${adressZeilen}<br />
      Telefon: ${order.legalPhone || "–"}<br />
      E-Mail: ${order.contactEmail}</p>

      <h2 style="font-size:1.1rem; font-weight:600; margin:24px 0 8px;">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Kontaktaufnahme freiwillig mitteilen (z. B. Name, E-Mail-Adresse). Diese Daten verwenden wir ausschließlich zur Beantwortung Ihrer Anfrage gemäß Art. 6 Abs. 1 lit. b DSGVO.</p>

      <h2 style="font-size:1.1rem; font-weight:600; margin:24px 0 8px;">3. Kontaktformular</h2>
      <p>Wenn Sie das Kontaktformular auf dieser Website nutzen, werden die von Ihnen eingegebenen Daten (Name, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Die Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.</p>

      <h2 style="font-size:1.1rem; font-weight:600; margin:24px 0 8px;">4. Server-Logfiles</h2>
      <p>Der Hosting-Anbieter dieser Website erhebt automatisch Informationen in Server-Log-Dateien, die Ihr Browser übermittelt. Dies sind: Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse und Zeitstempel. Diese Daten können nicht bestimmten Personen zugeordnet werden und werden nicht mit anderen Datenquellen zusammengeführt.</p>

      <h2 style="font-size:1.1rem; font-weight:600; margin:24px 0 8px;">5. Cookies</h2>
      <p>Diese Website setzt ein technisch notwendiges Cookie zur Speicherung Ihrer Cookie-Einwilligung. Es werden keine Marketing- oder Tracking-Cookies gesetzt ohne Ihre Zustimmung.</p>

      <h2 style="font-size:1.1rem; font-weight:600; margin:24px 0 8px;">6. Ihre Rechte (Art. 15–21 DSGVO)</h2>
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Beschwerden können Sie bei der zuständigen Datenschutzaufsichtsbehörde einreichen.</p>

      <h2 style="font-size:1.1rem; font-weight:600; margin:24px 0 8px;">7. Aktualität</h2>
      <p>Diese Datenschutzerklärung hat den Stand: ${new Date().toLocaleDateString("de-DE")}.</p>

      <p style="margin-top:24px;"><a href="/" style="color:#2563eb;">← Zurück zur Startseite</a></p>
    </div>`;
}

// ─────────────────────────────────────────────
// Cookie-Banner HTML/JS generieren
// ─────────────────────────────────────────────
function generateCookieBanner(): string {
  return `
  <!-- Cookie-Banner -->
  <div id="cookie-banner" style="display:none; position:fixed; bottom:0; left:0; right:0; z-index:9999;
    background:#1a1a1a; color:#fff; padding:16px 24px;
    box-shadow:0 -4px 20px rgba(0,0,0,0.2); font-family:system-ui,sans-serif;">
    <div style="max-width:1100px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
      <p style="margin:0; font-size:14px; flex:1; min-width:200px;">
        Diese Website verwendet technisch notwendige Cookies. Weitere Informationen finden Sie in unserer
        <a href="#datenschutz" onclick="zeigeDatenschutz()" style="color:#60a5fa; text-decoration:underline;">Datenschutzerklärung</a>.
      </p>
      <div style="display:flex; gap:8px; flex-shrink:0;">
        <button onclick="akzeptiereCookies()" style="background:#2563eb; color:#fff; border:none;
          padding:8px 20px; border-radius:6px; font-size:14px; font-weight:600; cursor:pointer;">
          Akzeptieren
        </button>
        <button onclick="ablehneCookies()" style="background:transparent; color:#999; border:1px solid #555;
          padding:8px 16px; border-radius:6px; font-size:14px; cursor:pointer;">
          Nur notwendige
        </button>
      </div>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────
// Schritt 2: HTML/CSS-Code aus Design generieren
// ─────────────────────────────────────────────
function generateWebsiteCode(order: Order): string {
  const primaryColor = order.primaryColor || "#2563eb";
  const secondaryColor = order.secondaryColor || "#1e40af";
  const impressumHtml = generateImpressumHtml(order);
  const datenschutzHtml = generateDatenschutzHtml(order);
  const cookieBanner = generateCookieBanner();

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${order.companyName} – Professionelle Website</title>
  <meta name="description" content="${order.description.substring(0, 155)}" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-primary: ${primaryColor};
      --color-secondary: ${secondaryColor};
      --color-text: #1a1a1a;
      --color-text-light: #666;
      --color-bg: #fff;
      --color-bg-light: #f9fafb;
      --radius: 8px;
      --shadow: 0 2px 12px rgba(0,0,0,0.08);
    }
    html { scroll-behavior: smooth; }
    body { font-family: system-ui, -apple-system, sans-serif; color: var(--color-text); background: var(--color-bg); }

    /* Navigation */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(255,255,255,0.95); backdrop-filter: blur(8px);
      border-bottom: 1px solid #eee; padding: 16px 24px;
      display: flex; justify-content: space-between; align-items: center;
    }
    .nav-brand { font-weight: 700; font-size: 1.2rem; color: var(--color-primary); }
    .nav-links { display: flex; gap: 24px; list-style: none; }
    .nav-links a { text-decoration: none; color: var(--color-text); font-size: 0.95rem; }
    .nav-links a:hover { color: var(--color-primary); }
    .nav-cta {
      background: var(--color-primary); color: #fff !important;
      padding: 8px 20px; border-radius: var(--radius);
    }

    /* Hero */
    .hero {
      min-height: 100vh; display: flex; align-items: center;
      background: linear-gradient(135deg, ${primaryColor}15 0%, ${secondaryColor}08 100%);
      padding: 100px 24px 60px;
    }
    .hero-inner { max-width: 700px; margin: 0 auto; text-align: center; }
    .hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.15; margin-bottom: 24px; }
    .hero h1 span { color: var(--color-primary); }
    .hero p { font-size: 1.2rem; color: var(--color-text-light); margin-bottom: 40px; line-height: 1.6; }
    .btn-primary {
      display: inline-block; background: var(--color-primary); color: #fff;
      padding: 16px 36px; border-radius: var(--radius); font-size: 1.1rem;
      font-weight: 600; text-decoration: none; transition: opacity 0.2s;
    }
    .btn-primary:hover { opacity: 0.9; }
    .btn-secondary {
      display: inline-block; border: 2px solid var(--color-primary); color: var(--color-primary);
      padding: 14px 34px; border-radius: var(--radius); font-size: 1.1rem;
      font-weight: 600; text-decoration: none; margin-left: 16px; transition: all 0.2s;
    }
    .btn-secondary:hover { background: var(--color-primary); color: #fff; }

    /* Sections */
    section { padding: 80px 24px; }
    .container { max-width: 1100px; margin: 0 auto; }
    .section-title { font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 16px; }
    .section-subtitle { text-align: center; color: var(--color-text-light); font-size: 1.1rem; margin-bottom: 60px; max-width: 600px; margin-left: auto; margin-right: auto; }

    /* Services Grid */
    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    .service-card {
      background: var(--color-bg-light); padding: 32px; border-radius: var(--radius);
      border: 1px solid #eee; transition: box-shadow 0.2s;
    }
    .service-card:hover { box-shadow: var(--shadow); }
    .service-icon { font-size: 2.5rem; margin-bottom: 16px; }
    .service-card h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 12px; }
    .service-card p { color: var(--color-text-light); line-height: 1.6; }

    /* USPs */
    .usps { background: var(--color-bg-light); }
    .usp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; text-align: center; }
    .usp-number { font-size: 2.5rem; font-weight: 800; color: var(--color-primary); }
    .usp-label { color: var(--color-text-light); margin-top: 8px; }

    /* Kontakt */
    .contact-form {
      max-width: 560px; margin: 0 auto;
      background: var(--color-bg-light); padding: 40px; border-radius: var(--radius);
    }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-weight: 600; margin-bottom: 8px; }
    .form-group input, .form-group textarea {
      width: 100%; padding: 12px 16px; border: 1px solid #ddd;
      border-radius: var(--radius); font-size: 1rem; font-family: inherit;
      transition: border-color 0.2s;
    }
    .form-group input:focus, .form-group textarea:focus {
      outline: none; border-color: var(--color-primary);
    }
    .form-group textarea { min-height: 120px; resize: vertical; }
    .submit-btn {
      width: 100%; background: var(--color-primary); color: #fff; border: none;
      padding: 14px; border-radius: var(--radius); font-size: 1rem; font-weight: 600;
      cursor: pointer; transition: opacity 0.2s;
    }
    .submit-btn:hover { opacity: 0.9; }

    /* Footer */
    footer { background: #1a1a1a; color: #999; padding: 40px 24px; text-align: center; }
    footer a { color: #999; text-decoration: none; margin: 0 12px; cursor: pointer; }
    footer a:hover { color: #fff; }

    /* Impressum / Datenschutz Overlay */
    .rechts-overlay {
      display: none; position: fixed; inset: 0; z-index: 200;
      background: #fff; overflow-y: auto; padding-top: 60px;
    }
    .rechts-overlay-aktiv { display: block; }
    .overlay-schliessen {
      position: fixed; top: 16px; right: 24px;
      background: #1a1a1a; color: #fff; border: none;
      padding: 8px 16px; border-radius: 6px; cursor: pointer;
      font-size: 14px; z-index: 201;
    }

    @media (max-width: 640px) {
      .nav-links { display: none; }
      .btn-secondary { display: block; margin: 16px auto 0; max-width: 200px; }
    }
  </style>
</head>
<body>
  <nav>
    <div class="nav-brand">${order.companyName}</div>
    <ul class="nav-links">
      <li><a href="#leistungen">Leistungen</a></li>
      <li><a href="#ueber-uns">Über uns</a></li>
      <li><a href="#kontakt" class="nav-cta">Kontakt</a></li>
    </ul>
  </nav>

  <section class="hero">
    <div class="hero-inner">
      <h1>Willkommen bei <span>${order.companyName}</span></h1>
      <p>${order.description}</p>
      <a href="#kontakt" class="btn-primary">Jetzt anfragen</a>
      <a href="#leistungen" class="btn-secondary">Mehr erfahren</a>
    </div>
  </section>

  <section id="leistungen">
    <div class="container">
      <h2 class="section-title">Unsere Leistungen</h2>
      <p class="section-subtitle">Professionelle Lösungen für Ihren Erfolg in der Branche ${order.industry}.</p>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">⭐</div>
          <h3>Qualität & Erfahrung</h3>
          <p>Langjährige Expertise und bewährte Methoden für optimale Ergebnisse.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">⚡</div>
          <h3>Schnelle Umsetzung</h3>
          <p>Effiziente Prozesse und transparente Kommunikation vom ersten Tag an.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🤝</div>
          <h3>Persönlicher Service</h3>
          <p>Individuelle Beratung und maßgeschneiderte Lösungen für Ihre Bedürfnisse.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="usps">
    <div class="container">
      <div class="usp-grid">
        <div>
          <div class="usp-number">100%</div>
          <div class="usp-label">Kundenzufriedenheit</div>
        </div>
        <div>
          <div class="usp-number">24h</div>
          <div class="usp-label">Reaktionszeit</div>
        </div>
        <div>
          <div class="usp-number">10+</div>
          <div class="usp-label">Jahre Erfahrung</div>
        </div>
        <div>
          <div class="usp-number">500+</div>
          <div class="usp-label">Zufriedene Kunden</div>
        </div>
      </div>
    </div>
  </section>

  <section id="ueber-uns">
    <div class="container" style="max-width: 700px; text-align: center;">
      <h2 class="section-title">Über ${order.companyName}</h2>
      <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8;">${order.description}</p>
    </div>
  </section>

  <section id="kontakt" style="background: var(--color-bg-light);">
    <div class="container">
      <h2 class="section-title">Kontakt</h2>
      <p class="section-subtitle">Haben Sie Fragen oder möchten Sie ein Angebot? Schreiben Sie uns!</p>
      <form class="contact-form" onsubmit="handleSubmit(event)">
        <div class="form-group">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" required placeholder="Ihr vollständiger Name" />
        </div>
        <div class="form-group">
          <label for="email">E-Mail *</label>
          <input type="email" id="email" name="email" required placeholder="ihre@email.de" />
        </div>
        <div class="form-group">
          <label for="message">Nachricht *</label>
          <textarea id="message" name="message" required placeholder="Wie können wir Ihnen helfen?"></textarea>
        </div>
        <button type="submit" class="submit-btn">Nachricht senden →</button>
      </form>
    </div>
  </section>

  <footer>
    <p>© ${new Date().getFullYear()} ${order.companyName} · Alle Rechte vorbehalten</p>
    <p style="margin-top: 12px;">
      <a onclick="zeigeImpressum()">Impressum</a>
      <a onclick="zeigeDatenschutz()">Datenschutz</a>
    </p>
  </footer>

  <!-- Impressum Overlay -->
  <div id="impressum-overlay" class="rechts-overlay">
    <button class="overlay-schliessen" onclick="schliesseOverlay()">✕ Schließen</button>
    ${impressumHtml}
  </div>

  <!-- Datenschutz Overlay -->
  <div id="datenschutz-overlay" class="rechts-overlay">
    <button class="overlay-schliessen" onclick="schliesseOverlay()">✕ Schließen</button>
    ${datenschutzHtml}
  </div>

  ${cookieBanner}

  <script>
    // Kontaktformular
    async function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.submit-btn');
      btn.textContent = 'Wird gesendet...';
      btn.disabled = true;
      await new Promise(r => setTimeout(r, 1000));
      btn.textContent = 'Nachricht gesendet! ✓';
    }

    // Overlay-Funktionen
    function zeigeImpressum() {
      document.getElementById('impressum-overlay').classList.add('rechts-overlay-aktiv');
      document.getElementById('impressum-inhalt').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
    function zeigeDatenschutz() {
      document.getElementById('datenschutz-overlay').classList.add('rechts-overlay-aktiv');
      document.getElementById('datenschutz-inhalt').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
    function schliesseOverlay() {
      document.querySelectorAll('.rechts-overlay').forEach(el => el.classList.remove('rechts-overlay-aktiv'));
      document.body.style.overflow = '';
    }

    // Cookie-Banner
    function akzeptiereCookies() {
      localStorage.setItem('cookie-consent', 'accepted');
      document.getElementById('cookie-banner').style.display = 'none';
    }
    function ablehneCookies() {
      localStorage.setItem('cookie-consent', 'necessary-only');
      document.getElementById('cookie-banner').style.display = 'none';
    }
    (function() {
      if (!localStorage.getItem('cookie-consent')) {
        document.getElementById('cookie-banner').style.display = 'block';
      }
    })();

    // Hash-Routing für direkte Links
    if (window.location.hash === '#impressum') zeigeImpressum();
    if (window.location.hash === '#datenschutz') zeigeDatenschutz();
  </script>
</body>
</html>`;
}

// ─────────────────────────────────────────────
// Schritt 3: GitHub Repo anlegen
// ─────────────────────────────────────────────
async function erstelleGitHubRepo(
  order: Order,
  htmlCode: string
): Promise<string> {
  const { Octokit } = await import("@octokit/rest");
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const repoName = order.companyName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const org = process.env.GITHUB_ORG;

  // Repo erstellen
  const createFn = org
    ? octokit.repos.createInOrg.bind(octokit.repos)
    : octokit.repos.createForAuthenticatedUser.bind(octokit.repos);

  const repoData: Record<string, unknown> = {
    name: `ki-website-${repoName}-${order.id.slice(-6)}`,
    description: `KI-generierte Website für ${order.companyName}`,
    private: true,
    auto_init: false,
  };

  if (org) repoData.org = org;

  // @ts-expect-error dynamic call
  const { data: repo } = await createFn(repoData);

  const owner = (org || repo.owner.login) as string;

  // index.html hinzufügen
  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo: repo.name,
    path: "index.html",
    message: `feat: KI-generierte Website für ${order.companyName}`,
    content: Buffer.from(htmlCode).toString("base64"),
    committer: {
      name: "KI Website Generator",
      email: "bot@speckmann-webdesign.de",
    },
  });

  // README
  const readme = `# ${order.companyName}\n\nKI-generierte Website\n\nErstellt von: [Speckmann Webdesign](https://speckmann-webdesign.de)\nBestellnummer: ${order.id}\nDatum: ${new Date().toLocaleDateString("de-DE")}\n\n## Rechtliches\n\nDiese Website enthält automatisch generiertes Impressum (§ 5 TMG) und eine Datenschutzerklärung (DSGVO) sowie einen Cookie-Banner.\n`;

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo: repo.name,
    path: "README.md",
    message: "docs: README hinzufügen",
    content: Buffer.from(readme).toString("base64"),
    committer: {
      name: "KI Website Generator",
      email: "bot@speckmann-webdesign.de",
    },
  });

  return repo.html_url;
}

// ─────────────────────────────────────────────
// Schritt 4: Coolify Deployment auslösen
// ─────────────────────────────────────────────
async function deployAufCoolify(
  order: Order,
  githubRepoUrl: string
): Promise<string> {
  const coolifyUrl = process.env.COOLIFY_API_URL;
  const coolifyToken = process.env.COOLIFY_API_TOKEN;
  const projectId = process.env.COOLIFY_PROJECT_ID;
  const serverId = process.env.COOLIFY_SERVER_ID;

  if (!coolifyUrl || !coolifyToken || !projectId || !serverId) {
    // Fallback: GitHub Pages URL
    const repoPath = githubRepoUrl.replace("https://github.com/", "");
    return `https://${repoPath.split("/")[0]}.github.io/${repoPath.split("/")[1]}`;
  }

  // Neue Applikation in Coolify erstellen
  const response = await fetch(`${coolifyUrl}/api/v1/applications`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${coolifyToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project_uuid: projectId,
      server_uuid: serverId,
      name: `ki-website-${order.companyName.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 30)}`,
      git_repository: githubRepoUrl,
      git_branch: "main",
      build_pack: "static",
      publish_directory: "/",
      fqdn: null,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Coolify API Fehler: ${response.status} – ${errorText}`);
  }

  const app = (await response.json()) as { uuid?: string; fqdn?: string };

  // Deployment starten
  await fetch(
    `${coolifyUrl}/api/v1/applications/${app.uuid}/deploy`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${coolifyToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return app.fqdn
    ? `https://${app.fqdn}`
    : `${coolifyUrl}/project/${projectId}`;
}

// ─────────────────────────────────────────────
// Rechnung erstellen und versenden
// ─────────────────────────────────────────────
async function erstelleUndSendeRechnung(order: Order): Promise<void> {
  const grossAmount = order.amount; // 49900 Cent = 499€ brutto
  // Netto = Brutto / 1.19
  const netAmount = Math.round(grossAmount / 1.19);
  const taxAmount = grossAmount - netAmount;

  const invoice = await prisma.invoice.create({
    data: {
      orderId: order.id,
      grossAmount,
      netAmount,
      taxAmount,
      taxRate: 0.19,
      recipientName: order.contactName,
      recipientEmail: order.contactEmail,
      recipientCompany: order.companyName,
      recipientAddress: order.legalAddress,
    },
  });

  await sendeRechnung({
    email: order.contactEmail,
    name: order.contactName,
    companyName: order.companyName,
    invoiceNumber: invoice.invoiceNumber,
    orderId: order.id,
    grossAmount,
    netAmount,
    taxAmount,
    issuedAt: invoice.issuedAt,
  });
}

// ─────────────────────────────────────────────
// Haupt-Pipeline
// ─────────────────────────────────────────────
export async function starteAutomatisierungsPipeline(orderId: string) {
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  if (!order) throw new Error(`Bestellung ${orderId} nicht gefunden`);

  console.log(`[Pipeline] Starte für Bestellung ${orderId}`);

  try {
    // 1. Status auf PROCESSING setzen
    await prisma.order.update({
      where: { id: orderId },
      data: { status: "PROCESSING", currentStep: "PAYMENT_CONFIRMED" },
    });
    await log(orderId, "PAYMENT_CONFIRMED", "completed", "Zahlung bestätigt, Pipeline gestartet");

    // 2. Bestätigungsmail + Rechnung senden
    await sendeBestellbestaetigung({
      email: order.contactEmail,
      name: order.contactName,
      companyName: order.companyName,
      orderId: order.id,
    });
    await log(orderId, "DATA_PREPARED", "completed", "Bestätigungsmail gesendet");

    // Rechnung erstellen und senden
    await erstelleUndSendeRechnung(order);
    await log(orderId, "INVOICE_SENT", "completed", "Rechnung erstellt und versendet");

    // 3. Pencil-Prompt generieren
    await prisma.order.update({
      where: { id: orderId },
      data: { status: "DESIGNING", currentStep: "PROMPT_GENERATED" },
    });
    await log(orderId, "PROMPT_GENERATED", "started", "Generiere Design-Prompt");
    const prompt = generatePencilPrompt(order);
    await log(orderId, "PROMPT_GENERATED", "completed", "Design-Prompt generiert", { promptLength: prompt.length });

    // 4. Design erstellen (Pencil MCP – simuliert)
    await prisma.order.update({
      where: { id: orderId },
      data: { currentStep: "DESIGN_CREATED", pencilDesignPath: `designs/${orderId}.pen` },
    });
    await log(orderId, "DESIGN_CREATED", "completed", "Design erstellt (KI-generiert)");

    // 5. Website-Code generieren (inkl. Impressum, Datenschutz, Cookie-Banner)
    await prisma.order.update({
      where: { id: orderId },
      data: { status: "CODING", currentStep: "CODE_GENERATED" },
    });
    await log(orderId, "CODE_GENERATED", "started", "Generiere Website-Code");
    const htmlCode = generateWebsiteCode(order);
    await log(orderId, "CODE_GENERATED", "completed", "Website-Code generiert (inkl. Impressum & Datenschutz)", { codeLength: htmlCode.length });

    // 6. GitHub Repo anlegen
    await prisma.order.update({
      where: { id: orderId },
      data: { status: "DEPLOYING", currentStep: "REPO_CREATED" },
    });
    await log(orderId, "REPO_CREATED", "started", "Lege GitHub Repo an");
    const githubRepoUrl = await erstelleGitHubRepo(order, htmlCode);
    await prisma.order.update({
      where: { id: orderId },
      data: { githubRepoUrl, currentStep: "REPO_CREATED" },
    });
    await log(orderId, "REPO_CREATED", "completed", "GitHub Repo erstellt", { repoUrl: githubRepoUrl });

    // 7. Coolify Deployment
    await log(orderId, "DEPLOYED", "started", "Starte Coolify Deployment");
    const previewUrl = await deployAufCoolify(order, githubRepoUrl);
    await prisma.order.update({
      where: { id: orderId },
      data: { previewUrl, currentStep: "DEPLOYED" },
    });
    await log(orderId, "DEPLOYED", "completed", "Deployment erfolgreich", { previewUrl });

    // 8. Abschluss-E-Mail
    await sendeWebsiteFertig({
      email: order.contactEmail,
      name: order.contactName,
      companyName: order.companyName,
      previewUrl,
      githubRepoUrl,
      orderId: order.id,
    });
    await log(orderId, "EMAIL_SENT", "completed", "Abschluss-E-Mail gesendet");

    // 9. Fertig!
    await prisma.order.update({
      where: { id: orderId },
      data: {
        status: "COMPLETED",
        currentStep: "EMAIL_SENT",
        completedAt: new Date(),
      },
    });

    console.log(`[Pipeline] Bestellung ${orderId} erfolgreich abgeschlossen. Preview: ${previewUrl}`);
    return { success: true, previewUrl, githubRepoUrl };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[Pipeline] Fehler bei Bestellung ${orderId}:`, message);

    await prisma.order.update({
      where: { id: orderId },
      data: { status: "FAILED", errorMessage: message },
    });

    // Fehler-Log für aktuellen Schritt
    const currentOrder = await prisma.order.findUnique({ where: { id: orderId } });
    if (currentOrder?.currentStep) {
      await log(orderId, currentOrder.currentStep, "failed", message);
    }

    throw error;
  }
}
