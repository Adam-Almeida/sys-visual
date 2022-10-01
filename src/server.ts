import express, { Request, Response } from 'express'
import 'express-async-errors'
import { ErrorsCaptureMiddleware } from '@/middlewares/errorsCaptureMiddleware'
import userRoutes from '@/routes/userRoutes'
import authenticateRoutes from './routes/authenticateRoutes'

const port = process.env.PORT || 3333
const app = express()

app.use(express.json())

app.use(ErrorsCaptureMiddleware)
app.use(userRoutes)
app.use(authenticateRoutes)

app.get('/ping', (req: Request, res: Response) => {
  res.json({ pong: true })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
