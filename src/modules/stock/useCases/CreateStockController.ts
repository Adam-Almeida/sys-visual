import { BadRequestError } from '@/errors/ApiErrors'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { CreateStockUseCase } from './CreateStockUseCase'

export class CreateStockController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array()[0].msg)
    }
    const data = matchedData(req)

    const {
      name,
      type,
      qtd,
      losePerMeter,
      grammage,
      basePrice,
      description,
      notifyStorage,
    } = data

    const createStockUseCase = new CreateStockUseCase()
    const stock = await createStockUseCase.execute({
      name,
      type,
      qtd,
      losePerMeter,
      grammage,
      basePrice,
      description,
      notifyStorage,
    })

    return res
      .status(200)
      .json({ message: 'Cliente cadastrado com sucesso', data: stock })
  }
}
