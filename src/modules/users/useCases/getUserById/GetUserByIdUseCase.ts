import { prisma } from '@/database/prismaClient'

export class getUserBiIdUseCase {
  async execute(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id: { equals: id },
      },
      select: {
        id: true,
        username: true,
        email: true,
        lastAcess: true,
        roleType: true,
      },
    })

    return user
  }
}
