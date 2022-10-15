import { BadRequestError } from '@/errors/ApiErrors'
import uuidValidate from '@/utils/uuidValidate'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
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

    const { username, email, password, confirmPassword } = data

    if (password || confirmPassword) {
      if (password !== confirmPassword) {
        throw new BadRequestError(
          'A senha e a confirmação de senha devem ser iguais.'
        )
      }
    }
    const updateUserUseCase = new UpdateUserUseCase()

    const result = await updateUserUseCase.execute(id, {
      username,
      email,
      password,
    })

    return res
      .status(200)
      .json({ message: 'Cadastro atualizado com sucesso', data: result })
  }
}
