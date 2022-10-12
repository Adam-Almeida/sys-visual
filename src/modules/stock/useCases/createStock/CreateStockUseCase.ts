import { prisma } from '@/database/prismaClient'
import { BadRequestError } from '@/errors/ApiErrors'

interface IRequestStock {
  name: string
  slug: string
  type: string
  qtd: number
  losePerMeter: number
  grammage: number
  basePrice: number
  description: string
  notifyStorage: boolean
}

export class CreateStockUseCase {
  async execute({
    name,
    slug,
    type,
    qtd,
    losePerMeter,
    grammage,
    basePrice,
    description,
    notifyStorage,
  }: IRequestStock) {
    const typeExists = await prisma.feedstockType.findFirst({
      where: {
        id: {
          equals: type,
        },
      },
      select: {
        name: true,
      },
    })

    const stockExists = await prisma.stock.findFirst({
      where: {
        slug: {
          equals: slug,
        },
      },
      select: {
        id: true,
      },
    })

    if (stockExists) {
      throw new BadRequestError(
        'Já existe um produto no estoque com estas características.'
      )
    }

    if (!typeExists) {
      throw new BadRequestError('O tipo de insumo ainda não está cadastrado.')
    }

    const stock = await prisma.stock.create({
      data: {
        name,
        slug,
        type,
        qtd: Number(qtd) ?? 0.0,
        lose_per_meter: Number(losePerMeter) ?? 0,
        grammage: Number(grammage) ?? 0,
        base_price: Number(basePrice) ?? 0.0,
        description,
        notify_storage: Boolean(notifyStorage) ?? true,
      },
    })

    return stock
  }
}
