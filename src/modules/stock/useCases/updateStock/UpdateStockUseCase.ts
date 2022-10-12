import { prisma } from '@/database/prismaClient'
import { BadRequestError, NotFoundError } from '@/errors/ApiErrors'
import { slugIFy } from '@/utils/slugIFy'

const slugIFyCreate = new slugIFy().slug

interface IRequest {
  name?: string
  qtd?: number
  grammage?: number
  basePrice?: number
}

export class UpdateStockUseCase {
  async execute(id: string, { name, qtd, grammage, basePrice }: IRequest) {
    const stockExists = await prisma.stock.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
      select: {
        id: true,
        name: true,
        slug: true,
        qtd: true,
        grammage: true,
      },
    })

    if (!stockExists) {
      throw new NotFoundError(
        'Não foi encontrado nenhum produto no estoque para este id.'
      )
    }

    let newSlug = stockExists.slug

    if (name && grammage) {
      newSlug = slugIFyCreate(name + '-' + grammage.toString() + '-g')
    } else if (name) {
      newSlug = slugIFyCreate(
        name + '-' + stockExists.grammage.toString() + '-g'
      )
    } else if (grammage) {
      newSlug = slugIFyCreate(
        stockExists.name + '-' + grammage.toString() + '-g'
      )
    }

    if (stockExists.slug !== newSlug) {
      const nameStockExists = await prisma.stock.findFirst({
        where: {
          slug: {
            equals: newSlug,
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

    let newQtd = stockExists.qtd

    if (qtd) {
      newQtd += qtd
    }

    return await prisma.stock.update({
      where: {
        id,
      },
      data: {
        name,
        slug: newSlug,
        qtd: Number(newQtd),
        grammage: grammage,
        base_price: basePrice,
      },
    })
  }
}
