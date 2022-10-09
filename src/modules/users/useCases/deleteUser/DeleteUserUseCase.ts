import { prisma } from '@/database/prismaClient'
import { NotFoundError } from '@/errors/ApiErrors'

export class DeleteUserUseCase {
  async execute(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id: { equals: id },
      },
      select:{
        id: true
      }
    })

    if (!user) {
      throw new NotFoundError('Usuário não encontrado para este id.')
    }

    return await prisma.user.delete({
      where: {
        id,
      },
    })
  }
}
