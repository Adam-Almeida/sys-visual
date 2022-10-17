import { prisma } from '@/database/prismaClient'

interface IRequestInvoice {
  status?: InvoiceStatus | any
  offset?: number
  limit?: number
}

interface InvoiceStatus {
  PRODUCTION: string
  AVAILABLE: string
  NEW: string
  URGENT: string
  FINISHED: string
  CANCELED: string
}

export class ListInvoiceByStatusUseCase {
  async execute({ status, offset, limit }: IRequestInvoice) {
    if (status !== undefined) {
      const total = await prisma.invoice.findMany({
        where: {
          status: {
            equals: status,
          },
        },
        select: {
          id: true,
        },
      })

      const newLimit = !limit || isNaN(limit) ? total.length : limit
      const newOffset = !offset || isNaN(offset) ? 0 : offset

      const invoices = await prisma.invoice.findMany({
        where: {
          status: {
            equals: status,
          },
        },
        select: {
          id: true,
          status: true,
          customer_name: true,
          stock_media_name: true,
          qtd: true,
          comp: true,
          alt: true,
          price: true,
          file: true,
          payment_signal: true,
          payment_type: true,
          total_value: true,
          total_meters: true,
          stock: true,
          customer: true,
          createdAt: true,
          updatedAt: true,
        },
        take: Number(newLimit),
        skip: Number(newOffset),
      })

      return { invoices, total: total.length ?? 0 }
    }

    const total = await prisma.invoice.findMany({
      select: {
        id: true,
      },
    })

    const newLimit = !limit || isNaN(limit) ? total.length : limit
    const newOffset = !offset || isNaN(offset) ? 0 : offset

    const invoices = await prisma.invoice.findMany({
      select: {
        id: true,
        status: true,
        customer_name: true,
        stock_media_name: true,
        qtd: true,
        comp: true,
        alt: true,
        price: true,
        file: true,
        payment_signal: true,
        payment_type: true,
        total_value: true,
        total_meters: true,
        stock: true,
        customer: true,
        createdAt: true,
        updatedAt: true,
      },
      take: Number(newLimit),
      skip: Number(newOffset),
    })

    return { invoices, total: total.length ?? 0 }
  }
}
