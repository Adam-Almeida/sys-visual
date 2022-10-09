-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_id_customer_fkey";

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
