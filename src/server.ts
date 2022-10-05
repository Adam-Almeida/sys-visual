import express, { Request, Response } from 'express'
import 'express-async-errors'
import { ErrorsCaptureMiddleware } from './middlewares/errorsCaptureMiddleware'
import userRoutes from '@/routes/userRoutes'
import authenticateRoutes from './routes/authenticateRoutes'
import { authUserToken } from './middlewares/authUserToken'
import { adminUserToken } from './middlewares/adminUserToken'

const port = process.env.PORT || 3333
const app = express()

app.use(express.json())

app.use(authenticateRoutes)
app.use(userRoutes)

app.get('/ping', authUserToken, adminUserToken, (req: Request, res: Response) => {
  const { user_id } = req

  res.json({ pong: true, user_id })
})

app.use(ErrorsCaptureMiddleware)
app.listen(port, () => console.log(`Server is running on port ${port}`))
