import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateCustomerController } from '@/modules/customers/useCases/createCustomer/CreateCustomerController'
import { ListAllCustomerController } from '@/modules/customers/useCases/listAllCustomers/ListAllCustomersController'
import { CustomerValidatorRegister } from '@/validators/customers/CustomerValidatorRegister'
import { Router } from 'express'

const customerRoutes = Router()

const createCustomerController = new CreateCustomerController()
const listAllCustomersController = new ListAllCustomerController()

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
customerRoutes.get('/customer/:id', (req, res) => {
  res.json({ hellow: true })
})

//get customer by user
customerRoutes.get('/customer/:user_id', (req, res) => {
  res.json({ hellow: true })
})

export default customerRoutes
