import { prisma } from '@/database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateUser {
  username: string
  password: string
  email: string
}

export class CreateUserUseCase {
  async execute({ username, password, email }: ICreateUser) {
    const userExists = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })

    if (userExists) {
      throw new Error('Usuário já cadastrado no sistema.')
    }

    const hashPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
        email,
      },
      select: {
        id: true,
        username: true,
        email: true,
        lastAcess: true,
        type: true,
      },
    })
    return user
  }
}
