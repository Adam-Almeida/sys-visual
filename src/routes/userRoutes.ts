import { authUserToken } from '@/middlewares/authUserToken'
import {CreateUserController} from '@/modules/users/useCases/createUser/CreateUserController'
import { Request, Response, Router } from 'express'

const userRoutes = Router()

const createUserController = new CreateUserController()

//list all users
userRoutes.get('/user', (req: Request, res: Response) => {
  res.json({ users: true })
})

//get user by id
userRoutes.get('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//get user by email
userRoutes.get('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//create user
userRoutes.post('/user', authUserToken, createUserController.handle)

//update user
userRoutes.patch('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//delete user
userRoutes.delete('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

export default userRoutes
