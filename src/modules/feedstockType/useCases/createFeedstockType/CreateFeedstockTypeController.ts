import { Request, Response } from 'express'
import { slugIFy } from '@/utils/slugIFy'

const slugFy = new slugIFy()

export class CreateFeedstockTypeController {
  async handle(req: Request, res: Response) {
    const { name } = req.body

    const slug = slugFy.slug(name)

    res.json({ name, slug })
  }
}
