import { prisma } from '@/database/prismaClient'
import { BadRequestError, NotFoundError } from '@/errors/ApiErrors'
import { hash } from 'bcrypt'

interface IRequestProps {
  username?: string
  email?: string
  password?: string
}

export class UpdateUserUseCase {
  async execute(id: string, { ...userData }: IRequestProps) {
    const user = await prisma.user.findFirst({
      where: {
        id: { equals: id },
      },
    })

    if (!user) {
      throw new NotFoundError('Usuário não encontrado para este id.')
    }

    if (userData.email && userData.email !== user.email) {
      const userExists = await prisma.user.findFirst({
        where: {
          email: {
            equals: userData.email,
            mode: 'insensitive',
          },
        },
      })

      if (userExists) {
        throw new BadRequestError('Usuário já cadastrado para este email.')
      }
    }

    let newPass = user.password

    if (userData.password) {
      newPass = await hash(userData.password, 10)
    }

    userData.password = newPass

    console.log({ ...userData })

    const newUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: { ...userData },
    })

    return newUser
  }
}
