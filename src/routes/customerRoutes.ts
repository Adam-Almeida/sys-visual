import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateCustomerController } from '@/modules/customers/useCases/createCustomer/CreateCustomerController'
import { GetCustomerByIdController } from '@/modules/customers/useCases/getCustomerById/GetCustomerByIdController'
import { GetCustomerByUserIdController } from '@/modules/customers/useCases/getCustomerByUserId/GetCustomerByUserIdController'
import { ListAllCustomerController } from '@/modules/customers/useCases/listAllCustomers/ListAllCustomersController'
import { CustomerValidatorRegister } from '@/validators/customers/CustomerValidatorRegister'
import { Router } from 'express'

const customerRoutes = Router()

const createCustomerController = new CreateCustomerController()
const listAllCustomersController = new ListAllCustomerController()
const getCustomerByIdController = new GetCustomerByIdController()
const getCustomerByUserIdController = new GetCustomerByUserIdController()

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

export default customerRoutes
