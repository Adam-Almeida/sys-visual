/*
  Middleware de validação do nivel de acesso
  nivel de acesso:  USUÁRIO DA EMPRESA E ADMIN DO SISTEMA
*/

import { UnauthorizedError } from '@/errors/ApiErrors'
import { prisma } from '@/database/prismaClient'
import { NextFunction, Request, Response } from 'express'

export async function userAndAdminUserToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.user_id
  const user = await prisma.user.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  })

  const role = ['ADMIN', 'USER']

  if (!user || !role.includes(user.roleType)) {
    throw new UnauthorizedError(
      'Você não tem autorização para executar esta ação.'
    )
  }

  return next()
}
