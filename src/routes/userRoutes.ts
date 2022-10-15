import { adminUserToken } from '@/middlewares/adminUserToken'
import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateUserController } from '@/modules/users/createUser/useCases/CreateUserController'
import { DeleteUserController } from '@/modules/users/deleteUser/useCases/DeleteUserController'
import { GetUserByIdController } from '@/modules/users/getUserById/useCases/GetUserByIdController'
import { ListAllUsersController } from '@/modules/users/listAllUsers/useCases/ListAllUsersController'
import { UpdateUserController } from '@/modules/users/updateUser/useCases/UpdateUserController'
import { UserValidatorRegister } from '@/validators/users/UserValidatorRegister'
import { UserValidatorUpdate } from '@/validators/users/UserValidatorUpdate'
import { Router } from 'express'

const userRoutes = Router()

const createUserController = new CreateUserController()
const listAllUsersController = new ListAllUsersController()
const getUserByIdController = new GetUserByIdController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

//list all users
userRoutes.get(
  '/users',
  authUserToken,
  userAndAdminUserToken,
  listAllUsersController.handle
)

//get user by id
userRoutes.get(
  '/user/:id',
  authUserToken,
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
userRoutes.patch(
  '/user/:id',
  authUserToken,
  adminUserToken,
  UserValidatorUpdate.update,
  updateUserController.handle
)

//delete user
userRoutes.delete(
  '/user/:id',
  authUserToken,
  adminUserToken,
  deleteUserController.handle
)

export default userRoutes
