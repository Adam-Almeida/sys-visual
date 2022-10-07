import { adminUserToken } from '@/middlewares/adminUserToken'
import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateUserController } from '@/modules/users/useCases/createUser/CreateUserController'
import { GetUserByIdController } from '@/modules/users/useCases/getUserById/GetUserByIdController'
import { ListAllUsersController } from '@/modules/users/useCases/listAllUsers/ListAllUsersController'
import { UserValidatorRegister } from '@/validators/UserValidatorRegister'
import { Request, Response, Router } from 'express'

const userRoutes = Router()

const createUserController = new CreateUserController()
const listAllUsersController = new ListAllUsersController()
const getUserByIdController = new GetUserByIdController()

//list all users
userRoutes.get(
  '/users',
  authUserToken,
  userAndAdminUserToken,
  listAllUsersController.handle
)

//get user by id
userRoutes.get('/user/:id', authUserToken,
userAndAdminUserToken,
getUserByIdController.handle
)

//get user by email
userRoutes.get(
  '/user/:email',
  authUserToken,
  userAndAdminUserToken,
  getUserByIdController.handle
)

//create user
userRoutes.post(
  '/user',
  authUserToken,
  adminUserToken,
  UserValidatorRegister.register,
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
