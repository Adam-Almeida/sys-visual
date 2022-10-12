import { prisma } from '@/database/prismaClient'

interface IRequestStock {
  name: string
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
    type,
    qtd,
    losePerMeter,
    grammage,
    basePrice,
    description,
    notifyStorage,
  }: IRequestStock) {
    const stock = await prisma.stock.create({
      data: {
        name,
        type,
        qtd,
        lose_per_meter: losePerMeter ?? 0,
        grammage: grammage ?? 0,
        base_price: basePrice ?? 0.0,
        description,
        notify_storage: notifyStorage ?? true,
      },
    })

    return stock
  }
}
