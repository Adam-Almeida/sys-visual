import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username, email, password } = req.body
    const createUserUseCase = new CreateUserUseCase()

    const result = await createUserUseCase.execute({
      username,
      email,
      password,
    })

    return res
      .status(201)
      .json({ message: 'Cadastro realizado com sucesso', data: result })
  }
}
