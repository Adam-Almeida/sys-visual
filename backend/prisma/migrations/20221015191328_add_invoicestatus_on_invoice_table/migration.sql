-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('PRODUCTION', 'AVAILABLE', 'NEW', 'URGENT', 'FINISHED');

-- AlterTable
ALTER TABLE "invoice" ADD COLUMN     "status" "InvoiceStatus" NOT NULL DEFAULT 'NEW';
