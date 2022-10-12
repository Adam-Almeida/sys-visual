import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { Router } from 'express'

const stockRoutes = Router()

// create stock route
stockRoutes.post('/stock', authUserToken, userAndAdminUserToken)

// get all stock route

// update stock route

// delete stock route

export default stockRoutes
