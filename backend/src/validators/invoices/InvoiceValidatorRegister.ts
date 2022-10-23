import { sanitizeValidate } from '@/utils/sanitizeValidate'
import { checkSchema } from 'express-validator'

const sanitize = new sanitizeValidate()

export const InvoiceValidatorRegister = {
  register: checkSchema({
    status: {
      isIn: {
        options: [['PRODUCTION', 'AVAILABLE', 'NEW', 'URGENT', 'FINISHED']],
        errorMessage: 'O Status do pedido é inválido.',
      },
    },
    customerId: {
      isUUID: true,
      errorMessage: 'O id informado para o cliente  não é válido',
    },
    stockMediaId: {
      isUUID: true,
      errorMessage: 'O id informado para o item de estoque não é válido',
    },
    qtd: {
      notEmpty: true,
      isInt: true,
      isNumeric: true,
      errorMessage: 'O valor para a quantidade não parece válida',
    },
    comp: {
      notEmpty: true,
      isFloat: true,
      isNumeric: true,
      errorMessage: 'O valor para o comprimento não parece válido',
    },
    alt: {
      notEmpty: true,
      isFloat: true,
      isNumeric: true,
      errorMessage: 'O valor para a altura não parece válida',
    },
    price: {
      notEmpty: true,
      isFloat: true,
      isNumeric: true,
      errorMessage: 'O valor informado para o preço não parece válido',
    },
    file: {
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeStringToUppercase(value)
        },
      },
      isLength: {
        options: { min: 2, max: 45 },
      },
      errorMessage: 'O Nome do arquivo precisa ter ao menos 2 caracteres.',
    },
    paymentSignal: {
      optional: true,
      isFloat: true,
      isNumeric: true,
      errorMessage: 'O valor informado para o sinal não parece válido',
    },
    paymentType: {
      isIn: {
        options: [['WITHDRAWAL', 'INCASH', 'PIX', 'CREDIT', 'DEBIT']],
        errorMessage: 'A forma de pagamento é inválida',
      },
    },
  }),
}
