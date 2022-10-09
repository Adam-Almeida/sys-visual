import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { CreateCustomerUseCase } from './CreateCustomerUseCase'

export class CreateCustomerController {
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

    const {
      name,
      document,
      email,
      type,
      phone,
      whats,
      cep,
      street,
      number,
      neighborhood,
      city,
      uf,
    } = data

    const createCustomerUseCase = new CreateCustomerUseCase()
    const customer = await createCustomerUseCase.execute({
      user_id: id,
      name,
      document,
      email,
      type,
      phone,
      whats,
      cep,
      street,
      number,
      neighborhood,
      city,
      uf,
    })

    return res
      .status(200)
      .json({ message: 'Ccliente cadastrado com sucesso', data: customer })
  }
}
