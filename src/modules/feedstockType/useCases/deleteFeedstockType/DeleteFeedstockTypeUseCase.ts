import { prisma } from '@/database/prismaClient'
import { NotFoundError } from '@/errors/ApiErrors'

export class DeleteFeedstockTypeUseCase {
  async execute(id: string) {
    const customer = await prisma.feedstockType.findFirst({
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
      throw new NotFoundError('Tipo de insumo não encontrado para este id.')
    }

    return await prisma.feedstockType.delete({
      where: {
        id,
      },
    })
  }
}
