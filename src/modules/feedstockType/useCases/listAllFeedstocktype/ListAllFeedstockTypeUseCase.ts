import { prisma } from '@/database/prismaClient'

export class ListAllFeedstockTypeUseCase {
  async execute(limit?: number, offset?: number) {
    const total = await prisma.feedstockType.findMany({
      select: {
        id: true,
      },
    })

    const newLimit = !limit || isNaN(limit) ? total.length : limit
    const newOffset = !offset || isNaN(offset) ? 0 : offset

    const feedstocksTypes = await prisma.feedstockType.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
      take: Number(newLimit),
      skip: Number(newOffset),
    })
    return { feedstocksTypes, total: total.length ?? 0 }
  }
}
