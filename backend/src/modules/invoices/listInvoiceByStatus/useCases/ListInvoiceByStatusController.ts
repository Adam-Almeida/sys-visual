import { BadRequestError } from '@/errors/ApiErrors'
import { Request, Response } from 'express'
import { ListInvoiceByStatusUseCase } from './ListInvoiceByStatusUseCase'

interface IRequest {
  limit?: number
  offset?: number
  status?: string
}

export class ListInvoiceBYStatusController {
  async handle(req: Request, res: Response) {
    const { limit, offset, status }: IRequest = req.query

    if (status !== undefined) {
      const statusList = [
        'production',
        'available',
        'new',
        'urgent',
        'finished',
        'canceled',
      ]

      if (!statusList.find((iten) => iten === status)) {
        throw new BadRequestError(
          'O status informado não existe para os pedidos'
        )
      }
    }

    const listInvoiceByStatusUseCase = new ListInvoiceByStatusUseCase()
    const invoices = await listInvoiceByStatusUseCase.execute({
      status: status?.toUpperCase(),
      limit: Number(limit),
      offset: Number(offset),
    })

    res.json(invoices)
  }
}
