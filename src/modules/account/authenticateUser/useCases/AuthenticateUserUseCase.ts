import { prisma } from '@/database/prismaClient'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

interface IAuthenticateUser {
  email: string
  password: string
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    })

    if (!user) {
      throw new Error('Login ou senha estão incorretos')
    }

    const auth = await compare(password, user.password)

    if (!auth) {
      throw new Error('Login ou senha estão incorretos')
    }

    const token = jwt.sign(
      { email },
      '20ccdc4c8aa3e60eff889d646105d7d640a9e2a8',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )

    return token
  }
}
