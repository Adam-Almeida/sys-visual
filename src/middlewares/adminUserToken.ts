import { UnauthorizedError } from '@/errors/ApiErrors'
import { prisma } from '@/database/prismaClient'
import { NextFunction, Request, Response } from 'express'

export async function adminUserToken(
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

  if (!user || user.roleType !== 'ADMIN') {
    throw new UnauthorizedError(
      'Você não tem autorização para executar esta ação.'
    )
  }

  return next()
}
