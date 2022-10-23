import { Request, Response } from 'express'
import { ListAllCustomerUseCase } from './ListAllCustomersUseCase'

interface IRequest {
  limit?: number
  offset?: number
}

export class ListAllCustomerController {
  async handle(req: Request, res: Response) {
    const { limit, offset }: IRequest = req.query

    const listAllCustomersUseCase = new ListAllCustomerUseCase()
    const customers = await listAllCustomersUseCase.execute(
      Number(limit),
      Number(offset)
    )

    res.json(customers)
  }
}
