import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateCustomerController } from '@/modules/customers/useCases/createCustomer/CreateCustomerController'
import { DeleteCustomerController } from '@/modules/customers/useCases/deleteCustomer/DeleteCustomerController'
import { GetCustomerByIdController } from '@/modules/customers/useCases/getCustomerById/GetCustomerByIdController'
import { GetCustomerByUserIdController } from '@/modules/customers/useCases/getCustomerByUserId/GetCustomerByUserIdController'
import { ListAllCustomerController } from '@/modules/customers/useCases/listAllCustomers/ListAllCustomersController'
import { UpdateCustomerController } from '@/modules/customers/useCases/updateCustomer/UpdateCustomerController'
import { CustomerValidatorRegister } from '@/validators/customers/CustomerValidatorRegister'
import { CustomerValidatorUpdate } from '@/validators/customers/CustomerValidatorUpdate'

import { Router } from 'express'

const customerRoutes = Router()

const createCustomerController = new CreateCustomerController()
const listAllCustomersController = new ListAllCustomerController()
const getCustomerByIdController = new GetCustomerByIdController()
const getCustomerByUserIdController = new GetCustomerByUserIdController()
const deleteCustomerController = new DeleteCustomerController()
const updateCustomerController = new UpdateCustomerController()

//create complete customer
customerRoutes.post(
  '/customer/:id',
  authUserToken,
  userAndAdminUserToken,
  CustomerValidatorRegister.register,
  createCustomerController.handle
)

//list all customers
customerRoutes.get(
  '/customers',
  authUserToken,
  userAndAdminUserToken,
  listAllCustomersController.handle
)

//get customer by id
customerRoutes.get(
  '/customer/:id',
  authUserToken,
  userAndAdminUserToken,
  getCustomerByIdController.handle
)

//get customer by user
customerRoutes.get(
  '/customer/user/:id',
  authUserToken,
  userAndAdminUserToken,
  getCustomerByUserIdController.handle
)

customerRoutes.delete(
  '/customer',
  authUserToken,
  userAndAdminUserToken,
  deleteCustomerController.handle
)

customerRoutes.patch(
  '/customer/:id',
  authUserToken,
  userAndAdminUserToken,
  CustomerValidatorUpdate.update,
  updateCustomerController.handle
)

export default customerRoutes
