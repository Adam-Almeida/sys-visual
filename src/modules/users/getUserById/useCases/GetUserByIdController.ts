import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { getUserBiIdUseCase } from './GetUserByIdUseCase'

export class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
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
