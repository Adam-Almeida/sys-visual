import express, { Request, Response } from 'express'
import 'express-async-errors'
import { ErrorsCaptureMiddleware } from './middlewares/errorsCaptureMiddleware'
import userRoutes from '@/routes/userRoutes'
import authenticateRoutes from './routes/authenticateRoutes'
import ApiErrors from './errors/ApiErrors'

const port = process.env.PORT || 3333
const app = express()

app.use(express.json())

app.use(authenticateRoutes)
app.use(userRoutes)

app.get('/ping', (req: Request, res: Response) => {
  throw new ApiErrors('Caiu no erro', 422)
  res.json({ pong: true })
})

app.use(ErrorsCaptureMiddleware)
app.listen(port, () => console.log(`Server is running on port ${port}`))
