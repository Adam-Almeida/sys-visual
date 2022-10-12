import { prisma } from '@/database/prismaClient'
import { BadRequestError, NotFoundError } from '@/errors/ApiErrors'

interface IRequest {
  name?: string
  qtd?: number
  grammage?: number
  basePrice?: number
}

export class UpdateStockUseCase {
  async execute(id: string, slug: string, { ...stockData }: IRequest) {
    const stockExists = await prisma.stock.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
      select: {
        id: true,
        slug: true,
        qtd: true,
      },
    })

    if (!stockExists) {
      throw new NotFoundError(
        'Não foi encontrado nenhum produto no estoque para este id.'
      )
    }

    if (stockExists.slug !== slug) {
      const nameStockExists = await prisma.stock.findFirst({
        where: {
          slug: {
            equals: slug,
          },
        },
        select: {
          slug: true,
        },
      })

      if (nameStockExists) {
        throw new BadRequestError(
          'Já existe um produto no estoque com estas características.'
        )
      }
    }

    const newQtd = stockExists.qtd + Number(stockData.qtd)

    console.log(newQtd)
  }
}
