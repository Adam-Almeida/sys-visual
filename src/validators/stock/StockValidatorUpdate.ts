import { checkSchema } from 'express-validator'

export const StockValidatorUpdate = {
  update: checkSchema({
    name: {
      optional: true,
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O Nome para o produto precisa ter ao menos 2 caracteres.',
    },
    qtd: {
      optional: true,
      isNumeric: true,
      notEmpty: true,
      errorMessage: 'A quantidade do produto não é válida.',
    },
    grammage: {
      optional: true,
      notEmpty: true,
      isNumeric: true,
      errorMessage: 'A gramatura do produto não é válida.',
    },
    basePrice: {
      optional: true,
      notEmpty: true,
      isNumeric: true,
      errorMessage: 'O preço base para o produto não é válido.',
    },
  }),
}
