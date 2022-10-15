import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { Router } from 'express'

const invoiceRoutes = Router()

//create invoice
invoiceRoutes.post('/invoice', authUserToken, userAndAdminUserToken)

//list all invoices

//status invoice

//cancel invoice

//exclude invoice

export default invoiceRoutes
