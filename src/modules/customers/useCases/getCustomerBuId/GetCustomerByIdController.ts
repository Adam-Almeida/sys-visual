import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { GetCustomerByIdUseCase } from './GetCustomerByIdUseCase'

export class GetCustomerByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const getCustomerByIdUseCase = new GetCustomerByIdUseCase()
    const customer = await getCustomerByIdUseCase.execute(id)

    if (!customer) {
      throw new BadRequestError('Cliente não encontrado para este id.')
    }
    res.json(customer)
  }
}
