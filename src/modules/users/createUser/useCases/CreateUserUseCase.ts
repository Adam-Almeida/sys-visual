import { prisma } from '@/database/prismaClient'
import { BadRequestError } from '@/errors/ApiErrors'
import { hash } from 'bcrypt'

interface ICreateUser {
  username: string
  password: string
  email: string
  roleType?: Role | any
}

type Role = {
  ADMIN: string
  USER: string
  CLIENT: string
}

export class CreateUserUseCase {
  async execute({ username, password, email, roleType }: ICreateUser) {
    const userExists = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    })

    if (userExists) {
      throw new BadRequestError('Usuário já cadastrado para este email.')
    }

    const hashPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
        email,
        roleType: !roleType ? 'CLIENT' : roleType,
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
