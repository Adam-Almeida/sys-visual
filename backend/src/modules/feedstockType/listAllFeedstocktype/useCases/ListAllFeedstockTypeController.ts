import { Request, Response } from 'express'
import { ListAllFeedstockTypeUseCase } from './ListAllFeedstockTypeUseCase'

interface IRequest {
  limit?: number
  offset?: number
}

export class ListAllFeedstockTypeController {
  async handle(req: Request, res: Response) {
    const { limit, offset }: IRequest = req.query

    const listAllFeedstockTypeUseCase = new ListAllFeedstockTypeUseCase()
    const feedstockTypes = await listAllFeedstockTypeUseCase.execute(
      Number(limit),
      Number(offset)
    )

    res.json(feedstockTypes)
  }
}
