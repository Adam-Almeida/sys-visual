import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { UpdateStatusInvoiceUseCase } from './UpdateStatusInvoiceUseCase'

export class UpdateStatusInvoiceController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { status } = req.body
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const statusList = ['production', 'available', 'new', 'urgent', 'finished']

    if (!statusList.find((iten) => iten === status)) {
      throw new BadRequestError('O status informado não existe para o pedido')
    }

    const updateStatusInvoiceUseCase = new UpdateStatusInvoiceUseCase()
    await updateStatusInvoiceUseCase.execute({
      id,
      status: status?.toUpperCase(),
    })

    return res
      .status(200)
      .json({ message: 'O pedido foi atualizado com sucesso.' })
  }
}
