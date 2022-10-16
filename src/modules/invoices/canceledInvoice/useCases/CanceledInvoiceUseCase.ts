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
      },
    })

    if (!invoiceExists) {
      throw new BadRequestError('O pedido informado não pode ser cancelado.')
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
