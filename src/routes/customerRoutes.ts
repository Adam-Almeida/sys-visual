import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateCustomerController } from '@/modules/customers/useCases/createCustomer/CreateCustomerController'
import { Router } from 'express'

const customerRoutes = Router()

const createCustomerController = new CreateCustomerController()
//create complete customer
customerRoutes.post(
  '/customer',
  authUserToken,
  userAndAdminUserToken,
  createCustomerController.handle
)

//list all customers
customerRoutes.get('/customers', (req, res) => {
  res.json({ hellow: true })
})

//get customer by id
customerRoutes.get('/customer/:id', (req, res) => {
  res.json({ hellow: true })
})

//get customer by user
customerRoutes.get('/customer/:user_id', (req, res) => {
  res.json({ hellow: true })
})

export default customerRoutes
