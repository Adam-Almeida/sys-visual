import { authUserToken } from '@/middlewares/authUserToken'
import { userAndAdminUserToken } from '@/middlewares/userAndAdminUserToken'
import { CreateFeedstockTypeController } from '@/modules/feedstockType/useCases/createFeedstockType/CreateFeedstockTypeController'
import { Router } from 'express'

const createFeedstockTypeController = new CreateFeedstockTypeController()

const feedstockTypeRoutes = Router()

feedstockTypeRoutes.post(
  '/feedstockType',
  authUserToken,
  userAndAdminUserToken,
  createFeedstockTypeController.handle
)

feedstockTypeRoutes.get('/feedstockType')
feedstockTypeRoutes.delete('/feedstockType')

export default feedstockTypeRoutes
