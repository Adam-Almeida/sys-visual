import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { GetCustomerByUserIdUseCase } from './GetCustomerByIdUseCase'

export class GetCustomerByUserIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const getCustomerByUserIdUseCase = new GetCustomerByUserIdUseCase()
    const customer = await getCustomerByUserIdUseCase.execute(id)

    if (!customer) {
      throw new BadRequestError('Cliente não encontrado para este usuário')
    }
    res.json(customer)
  }
}
