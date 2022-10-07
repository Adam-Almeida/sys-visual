import { Request, Response } from 'express'
import { ListAllUsersUseCase } from './ListAllUsersUseCase'

interface IRequest {
  limit?: number
  offset?: number
}

export class ListAllUsersController {
  async handle(req: Request, res: Response) {
    const { limit, offset }: IRequest = req.query

    const listAllUsersUseCase = new ListAllUsersUseCase()
    const users = await listAllUsersUseCase.execute(
      Number(limit),
      Number(offset)
    )

    res.json(users)
  }
}
