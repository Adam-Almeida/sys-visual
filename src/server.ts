import express, { Request, Response } from 'express'
import userRoutes from '@/routes/userRoutes'

const port = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(userRoutes)

app.get('/ping', (req: Request, res: Response) => {
  res.json({ pong: true })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
