import { Request, Response } from 'express'
import { ListAllUsersUseCase } from './ListAllUsersUseCase'

export class ListAllUsersController {
  async handle(req: Request, res: Response) {
    const listAllUsersUseCase = new ListAllUsersUseCase()
    const users = await listAllUsersUseCase.execute()

    res.json(users)
  }
}
