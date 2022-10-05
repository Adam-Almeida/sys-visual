import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username, email, password, roleType } = req.body
    const createUserUseCase = new CreateUserUseCase()

    const result = await createUserUseCase.execute({
      username,
      email,
      password,
      roleType
    })

    return res
      .status(201)
      .json({ message: 'Cadastro realizado com sucesso', data: result })
  }
}
