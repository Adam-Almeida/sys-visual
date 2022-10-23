import { prisma } from '@/database/prismaClient'

export class GetCustomerByIdUseCase {
  async execute(id: string) {
    const customer = await prisma.customer.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
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
    })

    return customer
  }
}
