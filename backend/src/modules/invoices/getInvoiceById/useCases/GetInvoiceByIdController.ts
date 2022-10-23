import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { GetInvoiceByIdUseCase } from './GetInvoiceByIdUseCase'

export class GetInvoiceByIdController {
  async handle(req: Request, res: Response) {
        const { id } = req.params
        const uuidValid = await uuidValidate(id)
    
        if (!uuidValid) {
          throw new BadRequestError('O id informado não parece válido.')
        }
        const getInvoiceByIdUseCase = new GetInvoiceByIdUseCase()
        const invoice = await getInvoiceByIdUseCase.execute(id)
    
        if (!invoice) {
          throw new BadRequestError('Usuário não encontrado para este id.')
        }
    
        res.json(invoice)
  }
}
