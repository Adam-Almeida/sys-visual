import { BadRequestError } from '@/errors/ApiErrors'
import { Request, Response } from 'express'
import { getUserBiIdUseCase } from './GetUserByIdUseCase'

export class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    if (!id) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const getUserByIdUseCase = new getUserBiIdUseCase()
    const user = await getUserByIdUseCase.execute(id)

    if (!user) {
      throw new BadRequestError('Usuário não encontrado para este id.')
    }

    res.json(user)
  }
}
