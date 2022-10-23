import { AuthenticateUserController } from '@/modules/account/authenticateUser/useCases/AuthenticateUserController'
import { Router } from 'express'

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post('/login', authenticateUserController.handle)

export default authenticateRoutes
