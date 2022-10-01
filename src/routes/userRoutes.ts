import { Request, Response, Router } from 'express'

const userRoutes = Router()

//list all users
userRoutes.get('/user', (req: Request, res: Response) => {
  res.json({ users: true })
})

//get user by id
userRoutes.get('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//get user by email
userRoutes.get('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//create user
userRoutes.post('/user', (req: Request, res: Response) => {
  res.json({ users: true })
})

//update user
userRoutes.patch('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

//delete user
userRoutes.delete('/user/:id', (req: Request, res: Response) => {
  res.json({ users: true })
})

export default userRoutes
