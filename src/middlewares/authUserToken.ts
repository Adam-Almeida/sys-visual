import { UnauthorizedError } from '@/errors/ApiErrors'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export async function authUserToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new UnauthorizedError('O token enviado é inválido')
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub } = verify(
      token,
      '20ccdc4c8aa3e60eff889d646105d7d640a9e2a8'
    ) as IPayload

    req.user_id = sub

    return next()
  } catch (error) {
    throw new UnauthorizedError('Token inválido')
  }
}
