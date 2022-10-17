import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CanceledInvoiceController } from '@/modules/invoices/canceledInvoice/useCases/CanceledInvoiceController'
import { CreateInvoiceController } from '@/modules/invoices/createInvoice/useCases/CreateInvoiceController'
import { GetInvoiceByIdController } from '@/modules/invoices/getInvoiceById/useCases/GetInvoiceByIdController'
import { ListInvoiceBYStatusController } from '@/modules/invoices/listInvoiceByStatus/useCases/ListInvoiceByStatusController'
import { UpdateStatusInvoiceController } from '@/modules/invoices/updateStatusInvoice/useCases/UpdateStatusInvoiceController'
import { InvoiceValidatorRegister } from '@/validators/invoices/InvoiceValidatorRegister'
import { Router } from 'express'

const invoiceRoutes = Router()

const createInvoiceController = new CreateInvoiceController()
const canceledInvoiceController = new CanceledInvoiceController()
const listInvoiceByStatusController = new ListInvoiceBYStatusController()
const updateStatusInvoiceController = new UpdateStatusInvoiceController()
const getInvoiceByIdController = new GetInvoiceByIdController()

//create invoice
invoiceRoutes.post(
  '/invoice',
  authUserToken,
  userAndAdminUserToken,
  InvoiceValidatorRegister.register,
  createInvoiceController.handle
)

//list all invoices
invoiceRoutes.get(
  '/invoice',
  authUserToken,
  userAndAdminUserToken,
  listInvoiceByStatusController.handle
)

//alteração de status na invoice
invoiceRoutes.patch(
  '/invoice/:id',
  authUserToken,
  userAndAdminUserToken,
  updateStatusInvoiceController.handle
)

//get invoice by id
invoiceRoutes.get(
  '/invoice/:id',
  authUserToken,
  userAndAdminUserToken,
  getInvoiceByIdController.handle
)

//cancel invoice
invoiceRoutes.patch(
  '/invoice/canceled/:id',
  authUserToken,
  userAndAdminUserToken,
  canceledInvoiceController.handle
)

//exclude invoice

export default invoiceRoutes
