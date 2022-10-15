import { BadRequestError } from '@/errors/ApiErrors'
import { GetCustomerByIdUseCase } from '@/modules/customers/getCustomerById/useCases/GetCustomerByIdUseCase'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'

export class CreateInvoiceController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array()[0].msg)
    }
    const { customerId } = matchedData(req)

    const getCostumerByIdUseCase = new GetCustomerByIdUseCase()
    const costumerExists = await getCostumerByIdUseCase.execute(customerId)

    if(costumerExists === null){
      throw new BadRequestError('O cliente não foi localizado para este id.')
    }

    // verificar o stock de midia pelo id
    // const getStockByIdUseCase = new GetStoc

    // verificar se existe a midia e recuperar a metragem no stock

    // criar a função de calculo da altura e comprimento

    // verificar a metragem no estoque e se é suficiente

    // calcular os valores finais

    // enviar para o useCase

    // const uuidValid = await uuidValidate(id)

    // if (!uuidValid) {
    //   throw new BadRequestError('O id informado não parece válido.')
    // }
  }
}
