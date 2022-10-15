import { prisma } from '@/database/prismaClient'
import { NotFoundError } from '@/errors/ApiErrors'

export class DeleteStockUseCase {
  async execute(id: string) {
    const customer = await prisma.stock.findFirst({
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
      throw new NotFoundError('Item no estoque não encontrado para este id.')
    }

    return await prisma.stock.delete({
      where: {
        id,
      },
    })
  }
}
