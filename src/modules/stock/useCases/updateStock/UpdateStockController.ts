import { BadRequestError } from '@/errors/ApiErrors'
import { slugIFy } from '@/utils/slugIFy'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { UpdateStockUseCase } from './UpdateStockUseCase'

const slugIFyCreate = new slugIFy().slug

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

    const data = matchedData(req)

    let slug = ''
    if (data.name) {
      slug = slugIFyCreate(data.name + '-' + data.grammage.toString() + '-g')
    }

    const updateStockUseCase = new UpdateStockUseCase()
    const result = await updateStockUseCase.execute(id, slug, {...data})

    return res
      .status(200)
      .json({ message: 'Cadastro atualizado com sucesso', data: result })
  }
}
