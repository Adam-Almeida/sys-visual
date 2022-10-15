import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase'

export class UpdateCustomerController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array()[0].msg)
    }
    const data = matchedData(req)
    const { id } = req.params
    const uuidValid = await uuidValidate(id)

    if (!uuidValid) {
      throw new BadRequestError('O id informado não parece válido.')
    }

    const updateCustomerUseCase = new UpdateCustomerUseCase()
    const result = await updateCustomerUseCase.execute(id, { ...data })

    return res
      .status(200)
      .json({ message: 'Cadastro atualizado com sucesso', data: result })
  }
}
