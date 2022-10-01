import { Request, Response } from 'express'

export async function ErrorsCaptureMiddleware(
  err: Error,
  request: Request,
  response: Response
) {
  if (err instanceof Error) {
    return response.status(422).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error.',
  })
}
