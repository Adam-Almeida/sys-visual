-- CreateTable
CREATE TABLE "invoice" (
    "id" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "stock_media_name" TEXT NOT NULL,
    "qtd" INTEGER NOT NULL,
    "comp" DOUBLE PRECISION NOT NULL,
    "alt" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "file" TEXT NOT NULL,
    "payment_signal" DOUBLE PRECISION NOT NULL,
    "payment_type" TEXT NOT NULL,
    "total_value" DOUBLE PRECISION NOT NULL,
    "total_meters" DOUBLE PRECISION NOT NULL,
    "id_stock_media" TEXT NOT NULL,
    "id_customer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "invoice_id_stock_media_key" ON "invoice"("id_stock_media");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_id_customer_key" ON "invoice"("id_customer");

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_id_stock_media_fkey" FOREIGN KEY ("id_stock_media") REFERENCES "stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
