import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { DeleteStockUseCase } from './DeleteStockUseCase'

export class DeleteStockController {
  async handle(req: Request, res: Response) {
    const { id } = req.body
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const deleStockUseCase = new DeleteStockUseCase()
    await deleStockUseCase.execute(id)

    return res
      .status(200)
      .json({ message: 'O icone no do estoque foi removido com sucesso' })
  }
}
