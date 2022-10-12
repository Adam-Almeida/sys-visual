import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateStockController } from '@/modules/stock/useCases/CreateStockController'
import { StockValidatorRegister } from '@/validators/stock/StockValidatorRegister'
import { Router } from 'express'

const stockRoutes = Router()

const createStockController = new CreateStockController()

// create stock route
stockRoutes.post(
  '/stock',
  authUserToken,
  userAndAdminUserToken,
  StockValidatorRegister.register,
  createStockController.handle
)

// get all stock route

// update stock route

// delete stock route

export default stockRoutes
