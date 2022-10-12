import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateStockController } from '@/modules/stock/useCases/createStock/CreateStockController'
import { ListAllStockController } from '@/modules/stock/useCases/listAllStock/ListAllStockController'
import { UpdateStockController } from '@/modules/stock/useCases/updateStock/UpdateStockController'
import { StockValidatorRegister } from '@/validators/stock/StockValidatorRegister'
import { StockValidatorUpdate } from '@/validators/stock/StockValidatorUpdate'

import { Router } from 'express'

const stockRoutes = Router()

const createStockController = new CreateStockController()
const listAllStockController = new ListAllStockController()
const updateStockController = new UpdateStockController()

// create stock route
stockRoutes.post(
  '/stock',
  authUserToken,
  userAndAdminUserToken,
  StockValidatorRegister.register,
  createStockController.handle
)

// get all stock route
stockRoutes.get(
  '/stock',
  authUserToken,
  userAndAdminUserToken,
  listAllStockController.handle
)

// update stock route
stockRoutes.patch(
  '/stock/:id',
  authUserToken,
  userAndAdminUserToken,
  StockValidatorUpdate.update,
  updateStockController.handle
)

// delete stock route

export default stockRoutes
