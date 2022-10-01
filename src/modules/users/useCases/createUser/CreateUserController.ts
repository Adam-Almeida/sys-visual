import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username, email, password } = req.body
    const createUserUseCase = new CreateUserUseCase()

    try {
      const result = await createUserUseCase.execute({
        username,
        email,
        password,
      })

      return res
        .status(201)
        .json({ message: 'Cadastro realizado com sucesso', data: result })
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Erro ao realizar o cadastro', data: error })
    }
  }
}
