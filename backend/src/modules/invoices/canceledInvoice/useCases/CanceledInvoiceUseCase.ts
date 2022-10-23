import { prisma } from '@/database/prismaClient'
import { BadRequestError } from '@/errors/ApiErrors'

export class CanceledInvoiceUseCase {
  async execute(id: string) {
    const invoiceExists = await prisma.invoice.findFirst({
      where: {
        id: {
          equals: id,
        },
        NOT: [
          {
            status: {
              equals: 'CANCELED',
            },
          },
          {
            status: {
              equals: 'FINISHED',
            },
          },
          {
            status: {
              equals: 'PRODUCTION',
            },
          },
        ],
      },
      select: {
        id: true,
        id_stock_media: true,
        total_meters: true,
      },
    })

    if (!invoiceExists) {
      throw new BadRequestError('O pedido informado não pode ser cancelado.')
    }

    // retornar os metros para o estoque
    const stockExists = await prisma.stock.findFirst({
      where: {
        id: {
          equals: invoiceExists.id_stock_media,
        },
      },
      select: {
        lose_per_meter: true,
      },
    })

    if (stockExists) {
      await prisma.stock.update({
        where: {
          id: invoiceExists.id_stock_media,
        },
        data: {
          qtd: stockExists.lose_per_meter * invoiceExists.total_meters,
        },
      })
    }

    const result = await prisma.invoice.update({
      where: {
        id,
      },
      data: {
        status: 'CANCELED',
      },
    })

    return result
  }
}
