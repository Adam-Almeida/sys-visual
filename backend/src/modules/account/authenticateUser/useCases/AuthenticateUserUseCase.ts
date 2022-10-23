import { prisma } from '@/database/prismaClient'
import { BadRequestError } from '@/errors/ApiErrors'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

interface IAuthenticateUser {
  email: string
  password: string
}

export class AuthenticateUserUseCase {
  async execute({ password, email }: IAuthenticateUser) {
    const userAuth = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    })

    if (!userAuth) {
      throw new BadRequestError('Usuário ou senha inválidos.')
    }

    const auth = await compare(password, userAuth.password)

    if (!auth) {
      throw new BadRequestError('Usuário ou senha inválidos.')
    }

    const token = jwt.sign(
      { email },
      '20ccdc4c8aa3e60eff889d646105d7d640a9e2a8',
      {
        subject: userAuth.id,
        expiresIn: '1d',
      }
    )

    return token
  }
}
