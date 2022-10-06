import { BadRequestError } from '@/errors/ApiErrors'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array()[0].msg)
    }
    const data = matchedData(req)

    const { username, email, password, roleType } = data
    const createUserUseCase = new CreateUserUseCase()

    const result = await createUserUseCase.execute({
      username,
      email,
      password,
      roleType,
    })

    return res
      .status(201)
      .json({ message: 'Cadastro realizado com sucesso', data: result })
  }
}
