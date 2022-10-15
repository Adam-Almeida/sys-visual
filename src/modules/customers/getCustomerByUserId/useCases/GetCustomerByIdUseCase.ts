import { prisma } from '@/database/prismaClient'
import { BadRequestError } from '@/errors/ApiErrors'

export class GetCustomerByUserIdUseCase {
  async execute(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
      select: {
        id: true,
      },
    })

    if (!user) {
      throw new BadRequestError('O id informado não pertence a nenhum usuário.')
    }

    const customer = await prisma.customer.findFirst({
      where: {
        user_id: {
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
