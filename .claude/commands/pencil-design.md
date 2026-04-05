# Pencil-Design aus Anfrage erstellen

Du erhältst eine Anfrage-ID als Argument: $ARGUMENTS

## Deine Aufgabe

1. Lade die Anfrage aus der Datenbank:
   - Führe aus: `npx tsx -e "const {PrismaClient}=require('@prisma/client');const {PrismaPg}=require('@prisma/adapter-pg');const p=new PrismaClient({adapter:new PrismaPg({connectionString:process.env.DATABASE_URL})});p.anfrage.findUnique({where:{id:'$ARGUMENTS'}}).then(a=>{console.log(JSON.stringify(a,null,2));p.\$disconnect()})"`
   - Prüfe, dass die Anfrage existiert und `pencilPrompt` gefüllt ist

2. Lies den generierten `pencilPrompt` aus der Anfrage

3. Öffne ein neues Pencil-Dokument mit `open_document("new")`

4. Führe den Pencil-Prompt aus:
   - Nutze die Pencil MCP-Tools (`batch_design`, etc.)
   - Der Prompt enthält alle Design-Anweisungen (Farben, Fonts, Layout, Sektionen)

5. Speichere den Pfad zum fertigen Design:
   - Aktualisiere die Anfrage in der DB: `status` auf `DESIGN_CREATED`, `pencilDesignPath` auf den Pfad der .pen-Datei

6. Melde das Ergebnis
