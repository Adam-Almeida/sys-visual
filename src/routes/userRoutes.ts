import { adminUserToken } from '@/middlewares/adminUserToken'
import { authUserToken } from '@/middlewares/authUserToken'
import { CreateUserController } from '@/modules/users/useCases/createUser/CreateUserController'
import { ListAllUsersController } from '@/modules/users/useCases/listAllUsers/ListAllUsersController'
import { Request, Response, Router } from 'express'

const userRoutes = Router()

const createUserController = new CreateUserController()
const listAllUsersController = new ListAllUsersController()

//list all users
userRoutes.get('/user/:limit', authUserToken, listAllUsersController.handle)

//get user by id
userRoutes.get('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//get user by email
userRoutes.get('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//create user
userRoutes.post(
  '/user',
  authUserToken,
  adminUserToken,
  createUserController.handle
)

//update user
userRoutes.patch('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//delete user
userRoutes.delete('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

export default userRoutes
