-- CreateEnum
CREATE TYPE "AnfrageStatus" AS ENUM ('SUBMITTED', 'PROMPT_GENERATING', 'PROMPT_GENERATED', 'DESIGN_CREATING', 'DESIGN_CREATED', 'DELIVERED', 'CONVERTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Anfrage" (
    "id" TEXT NOT NULL,
    "firmenname" TEXT NOT NULL,
    "branche" TEXT NOT NULL,
    "beschreibung" TEXT NOT NULL,
    "standort" TEXT,
    "website" TEXT,
    "zielgruppe" TEXT NOT NULL,
    "websiteZiel" TEXT NOT NULL,
    "zielgruppeBeschreibung" TEXT,
    "hatLogo" TEXT NOT NULL,
    "farben" TEXT,
    "vorbilder" TEXT,
    "stilPraeferenz" TEXT,
    "seiten" TEXT[],
    "texteVorhanden" TEXT NOT NULL,
    "sonstiges" TEXT,
    "ansprechpartner" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefon" TEXT,
    "status" "AnfrageStatus" NOT NULL DEFAULT 'SUBMITTED',
    "pencilPrompt" TEXT,
    "pencilDesignPath" TEXT,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anfrage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnfrageLog" (
    "id" TEXT NOT NULL,
    "anfrageId" TEXT NOT NULL,
    "step" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnfrageLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AnfrageLog" ADD CONSTRAINT "AnfrageLog_anfrageId_fkey" FOREIGN KEY ("anfrageId") REFERENCES "Anfrage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
