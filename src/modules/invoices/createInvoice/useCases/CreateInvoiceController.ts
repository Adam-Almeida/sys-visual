import { BadRequestError } from '@/errors/ApiErrors'
import { GetCustomerByIdUseCase } from '@/modules/customers/getCustomerById/useCases/GetCustomerByIdUseCase'
import { CalcStockUseCase } from '@/modules/stock/calcStock/useCases/CalcStockUseCase'
import { GetStockByIdUseCase } from '@/modules/stock/getStockById/GetStockByIdUseCase'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'

export class CreateInvoiceController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array()[0].msg)
    }
    const { customerId, stockMediaId, comp, alt, qtd, price } = matchedData(req)

    const getCostumerByIdUseCase = new GetCustomerByIdUseCase()
    const costumerExists = await getCostumerByIdUseCase.execute(customerId)

    if (costumerExists === null) {
      throw new BadRequestError('O cliente não foi localizado para este id.')
    }

    const getStockByIdUseCase = new GetStockByIdUseCase()
    const stockExists = await getStockByIdUseCase.execute(stockMediaId)

    if (stockExists === null) {
      throw new BadRequestError(
        'O item no estoque não foi localizado para este id.'
      )
    }

    // criar a função de calculo da altura e comprimento
    const finalMetter = parseFloat(comp) * parseFloat(alt) * qtd

    // verificar a metragem no estoque e se é suficiente
    if (
      stockExists.qtd - stockExists.lose_per_meter * finalMetter <
      finalMetter
    ) {
      throw new BadRequestError(
        'O item no estoque não tem a quantidade suficiente para este pedido'
      )
    }

    // atualiza o valor do stock
    const newStockCalc = Number(
      stockExists.qtd - (finalMetter + stockExists.lose_per_meter * finalMetter)
    )

    const updateStockUseCase = new CalcStockUseCase()
    const calcNewStock = await updateStockUseCase.execute(
      newStockCalc,
      stockMediaId
    )

    if (!calcNewStock) {
      throw new BadRequestError(
        'Tivemos um erro ao realizar a atualização do estoque.'
      )
    }

    



    res.json({ true: true })
  }
}
