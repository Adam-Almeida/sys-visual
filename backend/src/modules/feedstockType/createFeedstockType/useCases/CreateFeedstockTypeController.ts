import { Request, Response } from 'express'
import { slugIFy } from '@/utils/slugIFy'
import { BadRequestError } from '@/errors/ApiErrors'
import { CreateFeedstockTypeUseCase } from './CreateFeedstockTypeUseCase'
import { sanitizeValidate } from '@/utils/sanitizeValidate'

const sanitize = new sanitizeValidate().sanitizeStringToUppercase
const slugFy = new slugIFy()

export class CreateFeedstockTypeController {
  async handle(req: Request, res: Response) {
    const sanitizeName = req.body.name

    if (!sanitizeName) {
      throw new BadRequestError(
        'O nome para o tipo de insumo não pode estar em branco.'
      )
    }

    const slug = slugFy.slug(sanitizeName)
    const name = sanitize(sanitizeName)

    const createFeedstockUseCase = new CreateFeedstockTypeUseCase()
    const result = await createFeedstockUseCase.execute({ name, slug })

    return res
      .status(200)
      .json({ message: 'Tipo de insumo cadastrado com sucesso', data: result })
  }
}
