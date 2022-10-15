import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase'

export class DeleteCustomerController {
  async handle(req: Request, res: Response) {
    const { id } = req.body

    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const deleteCustomerUseCase = new DeleteCustomerUseCase()
    await deleteCustomerUseCase.execute(id)

    return res.status(200).json({ message: 'Cliente removido com sucesso' })
  }
}
