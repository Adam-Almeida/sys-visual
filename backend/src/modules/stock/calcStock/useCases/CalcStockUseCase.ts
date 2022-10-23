import { prisma } from '@/database/prismaClient'
import { StatusRequestError } from '@/errors/ApiErrors'

export class CalcStockUseCase {
  async execute(newStock: number, id: string) {
    try {
      return await prisma.stock.update({
        where: {
          id,
        },
        data: {
          qtd: newStock,
        },
      })
    } catch (err: unknown) {
      throw new StatusRequestError('Tivemos um erro inesperado.', 500)
    }
  }
}
