import ApiErrors from '@/errors/ApiErrors'
import { Request, Response, NextFunction } from 'express'

export const ErrorsCaptureMiddleware = (
  error: Error & Partial<ApiErrors>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500
  res.status(statusCode).json({ message: error.message })
  return next
}
