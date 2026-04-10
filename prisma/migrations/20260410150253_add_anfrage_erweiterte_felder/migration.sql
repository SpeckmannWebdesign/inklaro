-- AlterTable
ALTER TABLE "Anfrage" ADD COLUMN     "eigeneFotos" TEXT,
ADD COLUMN     "erfahrung" TEXT,
ADD COLUMN     "gewuenschteCta" TEXT[],
ADD COLUMN     "leistungen" TEXT,
ADD COLUMN     "oeffnungszeiten" TEXT,
ADD COLUMN     "slogan" TEXT,
ADD COLUMN     "socialMedia" TEXT,
ADD COLUMN     "teamgroesse" TEXT,
ADD COLUMN     "tonalitaet" TEXT,
ADD COLUMN     "usp" TEXT;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "amount" SET DEFAULT 79900;
