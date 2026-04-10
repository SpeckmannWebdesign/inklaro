#!/bin/bash
# Pencil Design Worker
# Läuft auf dem Host-Server und verarbeitet Design-Aufträge aus /var/designs/queue/
# Wird als systemd-Service oder Cronjob ausgeführt

DESIGNS_DIR="/var/designs"
QUEUE_DIR="$DESIGNS_DIR/queue"
DONE_DIR="$DESIGNS_DIR/done"
MODEL="claude-opus-4-6"
DB_URL="${DATABASE_URL:-postgres://postgres:postgres@localhost:5432/postgres}"

mkdir -p "$QUEUE_DIR" "$DONE_DIR"

echo "[Worker] Pencil Design Worker gestartet"
echo "[Worker] Überwache: $QUEUE_DIR"

process_job() {
  local jobfile="$1"
  local filename=$(basename "$jobfile")
  local anfrageId="${filename%.json}"

  echo "[Worker] Verarbeite: $anfrageId"

  # Prompt aus JSON lesen
  local prompt=$(python3 -c "import json,sys; data=json.load(open('$jobfile')); print(data['prompt'])")
  local firmenname=$(python3 -c "import json,sys; data=json.load(open('$jobfile')); print(data['firmenname'])")

  if [ -z "$prompt" ]; then
    echo "[Worker] FEHLER: Kein Prompt in $jobfile"
    return 1
  fi

  local penPath="$DESIGNS_DIR/$anfrageId.pen"
  local pdfPath="$DESIGNS_DIR/$anfrageId.pdf"

  echo "[Worker] Starte Pencil CLI für $firmenname..."

  # Prompt in temporäre Datei schreiben (vermeidet Shell-Escape-Probleme)
  local promptFile=$(mktemp)
  python3 -c "import json; data=json.load(open('$jobfile')); print(data['prompt'])" > "$promptFile"

  # Pencil CLI aufrufen
  pencil --out "$penPath" --export "$pdfPath" --export-type pdf --model "$MODEL" --prompt "$(cat "$promptFile")" 2>&1

  local exitCode=$?
  rm -f "$promptFile"

  if [ $exitCode -eq 0 ] && [ -f "$pdfPath" ]; then
    echo "[Worker] Design erfolgreich erstellt: $pdfPath"

    # Status in DB aktualisieren
    psql "$DB_URL" -c "UPDATE \"Anfrage\" SET status='DESIGN_CREATED', \"pencilDesignPath\"='$penPath', \"updatedAt\"=NOW() WHERE id='$anfrageId';" 2>/dev/null
    psql "$DB_URL" -c "INSERT INTO \"AnfrageLog\" (id, \"anfrageId\", step, status, message, \"createdAt\") VALUES (gen_random_uuid(), '$anfrageId', 'design_creation', 'completed', 'Design erstellt: $penPath', NOW());" 2>/dev/null

    # Job als erledigt markieren
    mv "$jobfile" "$DONE_DIR/"
    echo "[Worker] Erledigt: $anfrageId"
  else
    echo "[Worker] FEHLER bei Design-Erstellung für $anfrageId (Exit: $exitCode)"

    # Fehler in DB loggen
    psql "$DB_URL" -c "UPDATE \"Anfrage\" SET status='PROMPT_GENERATED', \"errorMessage\"='Pencil CLI fehlgeschlagen (Exit: $exitCode)', \"updatedAt\"=NOW() WHERE id='$anfrageId';" 2>/dev/null
    psql "$DB_URL" -c "INSERT INTO \"AnfrageLog\" (id, \"anfrageId\", step, status, message, \"createdAt\") VALUES (gen_random_uuid(), '$anfrageId', 'design_creation', 'failed', 'Pencil CLI fehlgeschlagen (Exit: $exitCode)', NOW());" 2>/dev/null

    # Fehlgeschlagene Jobs nicht löschen, damit man sie debuggen kann
  fi
}

# Endlosschleife: Alle 15 Sekunden auf neue Jobs prüfen
while true; do
  for jobfile in "$QUEUE_DIR"/*.json; do
    [ -f "$jobfile" ] || continue
    process_job "$jobfile"
  done
  sleep 15
done
