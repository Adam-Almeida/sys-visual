import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateFeedstockTypeController } from '@/modules/feedstockType/createFeedstockType/useCases/CreateFeedstockTypeController'
import { DeleteFeedstockTypeController } from '@/modules/feedstockType/deleteFeedstockType/useCases/DeleteFeedstockTypeController'
import { ListAllFeedstockTypeController } from '@/modules/feedstockType/listAllFeedstocktype/useCases/ListAllFeedstockTypeController'
import { Router } from 'express'

const createFeedstockTypeController = new CreateFeedstockTypeController()
const listAllFeedstockTypesController = new ListAllFeedstockTypeController()
const deleteFeedstockTypeController = new DeleteFeedstockTypeController()

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
feedstockTypeRoutes.delete(
  '/feedstockType',
  authUserToken,
  userAndAdminUserToken,
  deleteFeedstockTypeController.handle
)

export default feedstockTypeRoutes
