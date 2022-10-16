import { BadRequestError } from '@/errors/ApiErrors'
import { sanitizeValidate } from '@/utils/sanitizeValidate'
import { slugIFy } from '@/utils/slugIFy'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { CreateStockUseCase } from './CreateStockUseCase'

const slugIFyCreate = new slugIFy().slug
const sanitize = new sanitizeValidate().sanitizeStringToUppercase
const sanitizeNormalCase = new sanitizeValidate().sanitizeStringNormalCase

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

    const slug = slugIFyCreate(name + '-' + grammage.toString() + '-g')

    const createStockUseCase = new CreateStockUseCase()
    const stock = await createStockUseCase.execute({
      name: sanitize(name),
      type,
      slug,
      qtd,
      losePerMeter,
      grammage,
      basePrice,
      description: sanitizeNormalCase(description),
      notifyStorage,
    })

    return res
      .status(200)
      .json({ message: 'O item no estoque foi cadastrado com sucesso', data: stock })
  }
}
