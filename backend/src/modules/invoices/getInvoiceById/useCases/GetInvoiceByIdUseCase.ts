import { prisma } from '@/database/prismaClient'

export class GetInvoiceByIdUseCase {
  async execute(id: string) {
    const invoice = await prisma.invoice.findFirst({
      where: {
        id: { equals: id },
      },
      select: {
        id: true,
        status: true,
        customer_name: true,
        stock_media_name: true,
        qtd: true,
        comp: true,
        alt: true,
        price: true,
        file: true,
        payment_signal: true,
        payment_type: true,
        total_value: true,
        total_meters: true,
        stock: true,
        customer: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return invoice
  }
}
