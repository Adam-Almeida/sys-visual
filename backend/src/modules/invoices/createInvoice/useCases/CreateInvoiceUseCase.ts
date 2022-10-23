import { prisma } from '@/database/prismaClient'

interface IRequestInvoice {
  status: InvoiceStatus | any
  customerName: string
  customerId: string
  stockMediaName: string
  stockMediaId: string
  qtd: number
  comp: number
  alt: number
  price: number
  file: string
  paymentSignal: number
  paymentType: string
  totalValue: number
  totalMeters: number
}

type InvoiceStatus = {
  PRODUCTION: string
  AVAILABLE: string
  NEW: string
  URGENT: string
  FINISHED: string
  CANCELED: string
}

export class CreateInvoiceUseCase {
  async execute({ ...invoiceData }: IRequestInvoice) {
    const invoice = await prisma.invoice.create({
      data: {
        status: invoiceData.status,
        customer_name: invoiceData.customerName,
        stock_media_name: invoiceData.stockMediaName,
        qtd: invoiceData.qtd,
        comp: invoiceData.comp,
        alt: invoiceData.alt,
        price: invoiceData.price,
        file: invoiceData.file,
        payment_signal: invoiceData.paymentSignal,
        payment_type: invoiceData.paymentType,
        total_value: invoiceData.totalValue,
        total_meters: invoiceData.totalMeters,
        id_stock_media: invoiceData.stockMediaId,
        id_customer: invoiceData.customerId,
      },
    })
    return invoice
  }
}
