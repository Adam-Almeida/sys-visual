import { prisma } from '@/database/prismaClient'
import { BadRequestError } from '@/errors/ApiErrors'

interface IRequestStatus {
  id: string
  status: string | any
}

export class UpdateStatusInvoiceUseCase {
  async execute({ id, status }: IRequestStatus) {
    const invoiceExists = await prisma.invoice.findFirst({
      where: {
        id: {
          equals: id,
        },
        NOT: [
          {
            status: {
              equals: status,
            },
          },
        ],
      },
    })

    if (!invoiceExists) {
      throw new BadRequestError(
        'O pedido informado já está com o status informado.'
      )
    }

    const result = await prisma.invoice.update({
      where: {
        id,
      },
      data: {
        status: status,
      },
    })

    return result
  }
}
