import { prisma } from '@/database/prismaClient'

export class ListAllStockUseCase {
  async execute(limit?: number, offset?: number) {
    const total = await prisma.stock.findMany({
      select: {
        id: true,
      },
    })

    const newLimit = !limit || isNaN(limit) ? total.length : limit
    const newOffset = !offset || isNaN(offset) ? 0 : offset

    const stock = await prisma.stock.findMany({
      select: {
        id: true,
        name: true,
        qtd: true,
        type: true,
        lose_per_meter: true,
        grammage: true,
        base_price: true,
        description: true,
        notify_storage: true,

        createdAt: true,
        updatedAt: true,
      },
      take: Number(newLimit),
      skip: Number(newOffset),
    })
    return { stock, total: total.length ?? 0 }
  }
}
