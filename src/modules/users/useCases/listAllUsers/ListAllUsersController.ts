import { Request, Response } from 'express'
import { ListAllUsersUseCase } from './ListAllUsersUseCase'

interface IRequest {
  limit?: number
}

export class ListAllUsersController {
  async handle(req: Request, res: Response) {
    const { limit }: IRequest = req.query

    const listAllUsersUseCase = new ListAllUsersUseCase()
    const users = await listAllUsersUseCase.execute(limit)

    res.json(users)
  }
}
