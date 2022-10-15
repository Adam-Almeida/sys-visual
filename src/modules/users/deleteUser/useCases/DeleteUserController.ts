import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const deleteUserUseCase = new DeleteUserUseCase()
    await deleteUserUseCase.execute(id)

    return res.status(200).json({ message: 'Usuário removido com sucesso' })
  }
}
