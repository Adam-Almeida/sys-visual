import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateFeedstockTypeController } from '@/modules/feedstockType/useCases/createFeedstockType/CreateFeedstockTypeController'
import { ListAllFeedstockTypeController } from '@/modules/feedstockType/useCases/listAllFeedstocktype/ListAllFeedstockTypeController'
import { Router } from 'express'

const createFeedstockTypeController = new CreateFeedstockTypeController()
const listAllFeedstockTypesController = new ListAllFeedstockTypeController()

const feedstockTypeRoutes = Router()

feedstockTypeRoutes.post(
  '/feedstockType',
  authUserToken,
  userAndAdminUserToken,
  createFeedstockTypeController.handle
)

feedstockTypeRoutes.get(
  '/feedstockType',
  authUserToken,
  userAndAdminUserToken,
  listAllFeedstockTypesController.handle
)
feedstockTypeRoutes.delete('/feedstockType')

export default feedstockTypeRoutes
