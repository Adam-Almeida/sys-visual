import { prisma } from '@/database/prismaClient'

export class ListAllUsersUseCase {
  async execute(limit: number = 4) {
    
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        roleType: true,
        lastAcess: true,
      },
      take: (Number.isInteger(limit) ? limit : 2)
    })
    return users
  }
}
