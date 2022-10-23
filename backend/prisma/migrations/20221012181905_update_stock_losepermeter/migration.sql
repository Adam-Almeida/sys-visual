/*
  Warnings:

  - You are about to alter the column `lose_per_meter` on the `stock` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "stock" ALTER COLUMN "lose_per_meter" SET DATA TYPE DOUBLE PRECISION;
