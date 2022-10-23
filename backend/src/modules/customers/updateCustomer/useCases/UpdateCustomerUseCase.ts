import { prisma } from '@/database/prismaClient'
import {
  BadRequestError,
  NotFoundError,
  StatusRequestError,
} from '@/errors/ApiErrors'

interface IRequestProps {
  name?: string
  document?: string
  email?: string
  type?: incType | any
  phone?: string
  whats?: string
  cep?: number
  street?: string
  number?: string | any
  neighborhood?: string
  city?: string
  uf?: string
}

type incType = {
  LEGAL_PERSON: string
  NATURAL_PERSON: string
}

export class UpdateCustomerUseCase {
  async execute(id: string, { ...customerData }: IRequestProps) {
    const customerIdFind = await prisma.customer.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
      select: {
        id: true,
        document: true,
        address: true,
      },
    })

    if (!customerIdFind) {
      throw new NotFoundError('Cliente não encontrado para este id.')
    }

    const { name, document, email, type, phone, whats } = customerData
    const { cep, street, number, neighborhood, city, uf } = customerData

    if (document && customerIdFind.document !== document) {
      const customerExists = await prisma.customer.findFirst({
        where: {
          document: {
            equals: customerData.document,
          },
        },
      })

      if (customerExists) {
        throw new BadRequestError('Este documento já pertence a um cliente.')
      }
    }

    try {
      const customer = prisma.customer.update({
        where: {
          id,
        },
        data: {
          name,
          document,
          email,
          type,
          phone,
          whats,
        },
      })

      const address = prisma.address.update({
        where: {
          id: customerIdFind.address?.id,
        },
        data: {
          cep: Number(cep),
          street,
          number,
          neighborhood,
          city,
          uf,
        },
      })

      const result = await prisma.$transaction([customer, address])
      return result
    } catch (err: unknown) {
      throw new StatusRequestError('Tivemos um erro inesperado.', 500)
    }
  }
}
