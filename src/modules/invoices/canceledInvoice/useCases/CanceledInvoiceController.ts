import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { CanceledInvoiceUseCase } from './CanceledInvoiceUseCase'

export class CanceledInvoiceController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const canceledInvoiceUseCase = new CanceledInvoiceUseCase()
    await canceledInvoiceUseCase.execute(id)

    return res
      .status(200)
      .json({ message: 'O pedido foi cancelado com sucesso.' })
  }
}
