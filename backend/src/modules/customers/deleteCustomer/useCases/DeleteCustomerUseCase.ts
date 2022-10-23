import { prisma } from '@/database/prismaClient'
import { NotFoundError } from '@/errors/ApiErrors'

export class DeleteCustomerUseCase {
  async execute(id: string) {
    const customer = await prisma.customer.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
      select: {
        id: true,
      },
    })

    if (!customer) {
      throw new NotFoundError('Cliente não encontrado para este id.')
    }

    return await prisma.customer.delete({
      where: {
        id,
      },
    })
  }
}
