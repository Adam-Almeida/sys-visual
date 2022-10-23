import { prisma } from '@/database/prismaClient'
import { BadRequestError } from '@/errors/ApiErrors'

interface IRequestFeedstockType {
  name: string
  slug: string
}

export class CreateFeedstockTypeUseCase {
  async execute({ name, slug }: IRequestFeedstockType) {
    const feedstockType = await prisma.feedstockType.findFirst({
      where: {
        slug: {
          equals: slug,
        },
      },
      select: {
        id: true,
      },
    })

    if (feedstockType) {
      throw new BadRequestError('Este tipo de insumo já está cadastrado.')
    }

    const result = await prisma.feedstockType.create({
      data: {
        name,
        slug,
      },
    })

    return result
  }
}
