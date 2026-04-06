# Pencil-Design aus Anfrage erstellen

Du erhältst eine Anfrage-ID als Argument: $ARGUMENTS

## Deine Aufgabe

### Schritt 1: Anfrage aus der Datenbank laden

Führe aus:
```bash
npx tsx scripts/load-anfrage.ts $ARGUMENTS
```

**Prüfe:**
- Dass die Anfrage existiert (kein Fehler)
- Dass `pencilPrompt` gefüllt ist (nicht null/leer)
- Falls `pencilPrompt` leer ist: Breche ab und melde "Pencil-Prompt wurde noch nicht generiert. Bitte zuerst die Prompt-Generierung anstoßen."

### Schritt 2: Referenz-Websites analysieren (falls vorhanden)

Prüfe ob das Feld `vorbilder` gefüllt ist. Falls ja:

1. Nutze den **Playwright MCP** (`browser_navigate` + `browser_take_screenshot`) um jede angegebene Website zu besuchen und einen Screenshot zu machen
2. Analysiere für jede Website:
   - Farbschema und Kontraste
   - Layout-Struktur (Hero-Stil, Grid vs. Fullwidth, etc.)
   - Typografie-Stil (serifenlos, modern, klassisch)
   - Bildsprache (Fotos, Illustrationen, Icons)
   - Besondere Design-Elemente die auffallen
3. Fasse die Design-Erkenntnisse zusammen — diese fließen in Schritt 4 als Inspiration ein

**Bestehende Website scrapen** (`website`-Feld): Falls der Kunde eine eigene Website hat:

1. Besuche die Website per Playwright und mache Screenshots
2. **Scrape echte Inhalte** mit Firecrawl oder Playwright:
   - Team-Namen und Rollen
   - Echte Leistungen/Services
   - Öffnungszeiten, Adresse, Telefonnummer
   - Kundenstimmen/Testimonials
   - Firmenbeschreibung, Gründungsjahr, Geschichte
3. Nutze diese echten Inhalte im Design statt Platzhalter-Texte zu erfinden!
   
**Warum:** Ein Design mit echten Firmendaten (richtiger Geschäftsführer-Name, echte Leistungen, reale Adresse) wirkt sofort professionell und spart dem Kunden Korrekturschleifen.

### Schritt 3: Zusammenfassung zeigen & nachfragen

Zeige Marcel eine kurze Zusammenfassung der Anfrage:
- Firmenname
- Branche
- Stil-Präferenz
- Gewünschte Seiten/Sektionen
- Farbschema (falls vorhanden)
- **Referenz-Websites** (falls vorhanden): Zeige die wichtigsten Design-Erkenntnisse aus Schritt 2

**Frage dann:** "Soll ich so loslegen, oder gibt es noch etwas, das ich beachten soll? (z.B. bestimmter Stil, mehr/weniger Sektionen, dunkleres Design, etc.)"

**Warte auf Marcels Antwort.** Berücksichtige seine Wünsche beim Design.

### Schritt 4: Pencil-Prompt lesen & mit Anfrage-Daten abgleichen

Lies den `pencilPrompt` aus der Anfrage-Antwort. Dieser enthält die Design-Anweisungen. **Gleiche den Prompt mit den Original-Feldern der Anfrage ab:**

- **`farben`** — Falls der Kunde Farben angegeben hat, haben diese IMMER Vorrang vor den Farben im Prompt. Nutze die Kundenfarben als Primary/Accent und baue die restliche Palette darauf auf.
- **`stilPraeferenz`** — Prüfe, ob der gewählte Stil (z.B. "Modern & Klar", "Warm & Persönlich") im Prompt korrekt umgesetzt wurde.
- **`seiten`** — Prüfe, ob ALLE gewünschten Seiten/Sektionen im Prompt als Sektionen vorkommen. Falls welche fehlen, ergänze sie.
- **`hatLogo`** — Falls "Ja": Frage Marcel nach der Logo-Datei für die Navigation. Falls "Nein": Nutze einen Text-Logotyp mit dem Firmennamen.

Passe den Prompt an:
- Kundenfarben und -wünsche (haben Vorrang)
- Marcels Wünsche aus Schritt 3
- Design-Erkenntnisse aus den Referenz-Websites (Schritt 2)
- Echte Inhalte von der bestehenden Website (Schritt 2)

### Schritt 5: Pencil-Dokument erstellen und SOFORT SPEICHERN

1. Erstelle den Kundenordner mit Unterstruktur:
   ```bash
   mkdir -p designs/<firmenname-slug>
   ```
   Beispiel: `designs/elektro-mueller-gmbh/`
   
   Dieser Ordner ist der zentrale Ort für ALLES zu diesem Kunden — Designs, Code, Assets, Exports etc. kommen später hier rein.

2. Öffne ein neues Pencil-Dokument: `open_document("new")`
3. Erstelle sofort einen leeren Platzhalter-Frame mit dem Firmennamen
4. **WICHTIG: Speichere das Dokument SOFORT unter `designs/<firmenname-slug>/homepage.pen`** — teile Marcel mit, dass er Cmd+S drücken und unter diesem Pfad speichern soll. Die Datei MUSS einen Pfad auf der Festplatte haben, BEVOR du mit dem Design beginnst.
5. Warte bis `get_editor_state()` einen echten Dateipfad (nicht `/new`) zurückgibt

**Warum:** Der `G()`-Befehl für KI-generierte Bilder funktioniert nur, wenn das Dokument bereits gespeichert ist und einen Dateipfad hat. Ohne Speicherung schlägt jede Bildgenerierung fehl.

### Schritt 6: Design mit Bildern aufbauen

1. Lade die Pencil-Guidelines: `get_guidelines()` — wähle passenden Style + "Landing Page" Guide
2. Lade `get_editor_state({ include_schema: true })` für das Schema
3. Führe den Pencil-Prompt Schritt für Schritt aus:
   - Nutze die Pencil MCP-Tools (`batch_design`, `batch_get`, etc.)
   - Arbeite den Prompt sektionsweise ab (Nav → Hero → Trust → Features → etc.)
   - **Nutze `G()` für alle Bildplatzhalter** — KI-generierte Bilder mit passenden Prompts:
     - Hero-Bild: Authentisches Foto passend zur Branche
     - Team-Fotos: Professionelle Porträts
     - Über-uns-Bild: Arbeitsszene aus der Branche
   - Prüfe nach jeder größeren Sektion das Ergebnis mit `get_screenshot()`

### Schritt 7: Qualitäts-Check — jede Sektion einzeln prüfen

Gehe JEDE Sektion einzeln durch und mache jeweils einen `get_screenshot()`:

1. **Navigation** — Logo lesbar? CTA-Button sichtbar? Alle Links da?
2. **Hero** — Headline groß genug? Bild vorhanden? Buttons klickbar aussehend?
3. **Trust Bar** — Alle Zahlen/Fakten sichtbar? Gleichmäßig verteilt?
4. **Features/Leistungen** — Karten gleichmäßig? Icons sichtbar? Texte lesbar?
5. **Über uns** — Kontrast auf dunklem Hintergrund? Statistik-Zahl prominent?
6. **Team** — Fotos/Platzhalter vorhanden? Namen und Rollen lesbar?
7. **Testimonials** — Zitate gut lesbar? Autoren zugeordnet?
8. **FAQ** — Fragen und Antworten klar getrennt? Trennlinien sichtbar?
9. **CTA** — Button prominent? Kontaktdaten sichtbar?
10. **Footer** — Alle 4 Spalten gefüllt? Impressum + Datenschutz vorhanden?

**Bei Problemen:** Sofort fixen bevor du weitermachst. Typische Fehler:
- Text unsichtbar (fehlende `fill`-Property)
- Überlappende Elemente
- Zu wenig Kontrast (heller Text auf hellem Hintergrund)
- Abgeschnittene Texte
- Leere Bereiche ohne Inhalt

### Schritt 8: Design-Pfad ermitteln

Ermittle den Pfad der erstellten `.pen`-Datei über `get_editor_state()`.

### Schritt 9: Datenbank aktualisieren

Führe aus:
```bash
npx tsx scripts/update-anfrage.ts $ARGUMENTS '{"status":"DESIGN_CREATED","pencilDesignPath":"<PFAD_ZUR_PEN_DATEI>"}'
```

Ersetze `<PFAD_ZUR_PEN_DATEI>` mit dem tatsächlichen Pfad.

### Schritt 10: Ergebnis melden

Melde Marcel:
- Firmenname der Anfrage
- Pfad zur `.pen`-Datei
- Status: Design erstellt
- Hinweis auf generierte Bilder
