import { BadRequestError } from '@/errors/ApiErrors'
import { sanitizeValidate } from '@/utils/sanitizeValidate'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { UpdateStockUseCase } from './UpdateStockUseCase'

const sanitize = new sanitizeValidate().sanitizeStringToUppercase

export class UpdateStockController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array()[0].msg)
    }

    const { id } = req.params
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const { name, qtd, grammage, basePrice } = matchedData(req)

    const updateStockUseCase = new UpdateStockUseCase()

    const result = await updateStockUseCase.execute(id, {
      name: name ? sanitize(name) : name,
      qtd,
      grammage,
      basePrice,
    })

    return res
      .status(200)
      .json({ message: 'Cadastro atualizado com sucesso', data: result })
  }
}
