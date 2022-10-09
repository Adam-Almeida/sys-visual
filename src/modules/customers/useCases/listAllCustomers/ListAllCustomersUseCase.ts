import { prisma } from '@/database/prismaClient'

export class ListAllCustomerUseCase {
  async execute(limit?: number, offset?: number) {
    const total = await prisma.customer.findMany({
      select: {
        id: true,
      },
    })

    const newLimit = !limit || isNaN(limit) ? total.length : limit
    const newOffset = !offset || isNaN(offset) ? 0 : offset

    const customers = await prisma.customer.findMany({
      select: {
        id: true,
        name: true,
        document: true,
        type: true,
        email: true,
        phone: true,
        whats: true,
        status: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            roleType: true,
          },
        },
        address: {
          select: {
            cep: true,
            street: true,
            number: true,
            neighborhood: true,
            city: true,
            uf: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
      take: Number(newLimit),
      skip: Number(newOffset),
    })

    return { customers, total: total.length ?? 0 }
  }
}
