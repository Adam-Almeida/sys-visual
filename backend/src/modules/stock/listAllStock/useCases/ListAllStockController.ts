import { Request, Response } from 'express'
import { ListAllStockUseCase } from './ListAllStockUseCase'

interface IRequest {
  limit?: number
  offset?: number
}

export class ListAllStockController {
  async handle(req: Request, res: Response) {
    const { limit, offset }: IRequest = req.query

    const listAllStockUseCase = new ListAllStockUseCase()
    const stock = await listAllStockUseCase.execute(
      Number(limit),
      Number(offset)
    )

    res.json(stock)
  }
}
