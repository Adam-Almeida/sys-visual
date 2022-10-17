import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CanceledInvoiceController } from '@/modules/invoices/canceledInvoice/useCases/CanceledInvoiceController'
import { CreateInvoiceController } from '@/modules/invoices/createInvoice/useCases/CreateInvoiceController'
import { ListInvoiceBYStatusController } from '@/modules/invoices/listInvoiceByStatus/ListInvoiceByStatusController'
import { InvoiceValidatorRegister } from '@/validators/invoices/InvoiceValidatorRegister'
import { Router } from 'express'

const invoiceRoutes = Router()

const createInvoiceController = new CreateInvoiceController()
const canceledInvoiceController = new CanceledInvoiceController()
const listInvoiceByStatusController = new ListInvoiceBYStatusController()

//create invoice
invoiceRoutes.post(
  '/invoice',
  authUserToken,
  userAndAdminUserToken,
  InvoiceValidatorRegister.register,
  createInvoiceController.handle
)

//list all invoices
invoiceRoutes.get('/invoice/:status',
authUserToken,
userAndAdminUserToken,
listInvoiceByStatusController.handle
)

//status invoice

//cancel invoice
invoiceRoutes.patch(
  '/invoice/canceled/:id',
  authUserToken,
  userAndAdminUserToken,
  canceledInvoiceController.handle
)

//exclude invoice

export default invoiceRoutes
