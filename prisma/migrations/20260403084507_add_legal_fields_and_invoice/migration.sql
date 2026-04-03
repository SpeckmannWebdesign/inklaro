-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PAID', 'PROCESSING', 'DESIGNING', 'CODING', 'DEPLOYING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "PipelineStep" AS ENUM ('PAYMENT_CONFIRMED', 'DATA_PREPARED', 'PROMPT_GENERATED', 'DESIGN_CREATED', 'CODE_GENERATED', 'REPO_CREATED', 'DEPLOYED', 'EMAIL_SENT', 'INVOICE_SENT');

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "stripeSessionId" TEXT NOT NULL,
    "stripePaymentId" TEXT,
    "companyName" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logoUrl" TEXT,
    "primaryColor" TEXT,
    "secondaryColor" TEXT,
    "existingWebsite" TEXT,
    "contactEmail" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "legalAddress" TEXT,
    "legalPhone" TEXT,
    "legalForm" TEXT,
    "legalCeo" TEXT,
    "legalRegisterNr" TEXT,
    "widerrufsrechtAkzeptiert" BOOLEAN NOT NULL DEFAULT false,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "currentStep" "PipelineStep",
    "pencilDesignPath" TEXT,
    "githubRepoUrl" TEXT,
    "previewUrl" TEXT,
    "errorMessage" TEXT,
    "amount" INTEGER NOT NULL DEFAULT 49900,
    "currency" TEXT NOT NULL DEFAULT 'eur',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "invoiceNumber" SERIAL NOT NULL,
    "orderId" TEXT NOT NULL,
    "grossAmount" INTEGER NOT NULL,
    "netAmount" INTEGER NOT NULL,
    "taxAmount" INTEGER NOT NULL,
    "taxRate" DOUBLE PRECISION NOT NULL DEFAULT 0.19,
    "recipientName" TEXT NOT NULL,
    "recipientEmail" TEXT NOT NULL,
    "recipientCompany" TEXT NOT NULL,
    "recipientAddress" TEXT,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PipelineLog" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "step" "PipelineStep" NOT NULL,
    "status" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PipelineLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaitlistEntry" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WaitlistEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_stripeSessionId_key" ON "Order"("stripeSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_orderId_key" ON "Invoice"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "WaitlistEntry_email_key" ON "WaitlistEntry"("email");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PipelineLog" ADD CONSTRAINT "PipelineLog_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
