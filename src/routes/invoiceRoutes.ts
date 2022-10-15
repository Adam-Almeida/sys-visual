import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateInvoiceController } from '@/modules/invoices/createInvoice/useCases/CreateInvoiceController'
import { InvoiceValidatorRegister } from '@/validators/invoices/InvoiceValidatorRegister'
import { Router } from 'express'

const invoiceRoutes = Router()

const createInvoiceController = new CreateInvoiceController()

//create invoice
invoiceRoutes.post(
  '/invoice',
  authUserToken,
  userAndAdminUserToken,
  InvoiceValidatorRegister.register,
  createInvoiceController.handle
)

//list all invoices

//status invoice

//cancel invoice

//exclude invoice

export default invoiceRoutes
