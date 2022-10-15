import { prisma } from '@/database/prismaClient'

export class GetStockByIdUseCase {
  async execute(id: string) {
    const stock = await prisma.stock.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    })

    return stock
  }
}
