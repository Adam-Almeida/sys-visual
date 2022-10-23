import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateStockController } from '@/modules/stock/createStock/useCases/CreateStockController'
import { DeleteStockController } from '@/modules/stock/deleteStock/useCases/DeleteStockController'
import { ListAllStockController } from '@/modules/stock/listAllStock/useCases/ListAllStockController'
import { UpdateStockController } from '@/modules/stock/updateStock/useCases/UpdateStockController'
import { StockValidatorRegister } from '@/validators/stock/StockValidatorRegister'
import { StockValidatorUpdate } from '@/validators/stock/StockValidatorUpdate'

import { Router } from 'express'

const stockRoutes = Router()

const createStockController = new CreateStockController()
const listAllStockController = new ListAllStockController()
const updateStockController = new UpdateStockController()
const deleteStockController = new DeleteStockController()

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

stockRoutes.delete(
  '/stock',
  authUserToken,
  userAndAdminUserToken,
  deleteStockController.handle
)

export default stockRoutes
