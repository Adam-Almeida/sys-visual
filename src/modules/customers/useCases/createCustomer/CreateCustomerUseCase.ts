import { prisma } from '@/database/prismaClient'
import { BadRequestError, StatusRequestError } from '@/errors/ApiErrors'
import { PrismaClientValidationError } from '@prisma/client/runtime'
import { v4 } from 'uuid'

interface ICreateCustomer {
  user_id: string
  name: string
  document: string
  email: string
  type: incType | any
  phone?: string
  whats: string
  cep: number
  street: string
  number?: string | any
  neighborhood: string
  city: string
  uf: string
}

type incType = {
  LEGAL_PERSON: string
  NATURAL_PERSON: string
}

export class CreateCustomerUseCase {
  async execute({
    user_id,
    name,
    document,
    email,
    type,
    phone,
    whats,
    cep,
    street,
    number = 'sn',
    neighborhood,
    city,
    uf,
  }: ICreateCustomer) {
    const user = await prisma.user.findFirst({
      where: {
        id: { equals: user_id },
      },
    })

    if (!user) {
      throw new BadRequestError('Usuário não encontrado para este id.')
    }

    const customerExists = await prisma.customer.findFirst({
      where: {
        document: {
          equals: document,
        },
      },
    })

    if (customerExists) {
      throw new BadRequestError('Este documento já pertence a um cliente.')
    }

    const customerID = v4()

    try {
      const customer = prisma.customer.create({
        data: {
          id: customerID,
          name,
          document,
          email,
          type,
          phone,
          whats,
          user_id,
        },
      })

      const address = prisma.address.create({
        data: {
          cep: Number(cep),
          street,
          number,
          neighborhood,
          city,
          uf,
          id_customer: customerID,
        },
      })

      const result = await prisma.$transaction([customer, address])
      return result
    } catch (err: unknown) {
      throw new StatusRequestError('Tivemos um erro inesperado.', 500)
    }
  }
}
