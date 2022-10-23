import { prisma } from '@/database/prismaClient'

export class ListAllUsersUseCase {
  async execute(limit: number, offset: number) {
    const total = await prisma.user.findMany({
      select: {
        id: true,
      },
    })

    const newLimit = !limit || isNaN(limit) ? total.length : limit
    const newOffset = !offset || isNaN(offset) ? 0 : offset

    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        roleType: true,
        lastAcess: true,
      },
      take: Number(newLimit),
      skip: Number(newOffset),
    })

    return { users, total: total.length ?? 0 }
  }
}
