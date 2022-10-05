import { prisma } from '@/database/prismaClient'

export class ListAllUsersUseCase {
  async execute() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        roleType: true,
        lastAcess: true,
      },
    })
    return users
  }
}
