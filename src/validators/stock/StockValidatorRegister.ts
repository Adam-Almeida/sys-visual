import { checkSchema } from 'express-validator'

export const StockValidatorRegister = {
  register: checkSchema({
    name: {
      notEmpty: true,
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O Nome para o produto precisa ter ao menos 2 caracteres.',
    },
    type: {
      notEmpty: true,
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O Nome para o produto precisa ter ao menos 2 caracteres.',
    },
    qtd: {
      notEmpty: true,
      isNumeric: true,
      errorMessage: 'A quantidade do produto não é válida.',
    },
    losePerMeter: {
      isNumeric: true,
      errorMessage: 'O preço base não parece válido.',
    },
    grammage: {
      notEmpty: true,
      isNumeric: true,
      errorMessage: 'A gramatura do produto não é válida.',
    },
    basePrice: {
      notEmpty: true,
      isNumeric: true,
      errorMessage: 'O preço para o produto não é válido.',
    },
    description: {
      notEmpty: true,
      errorMessage: 'O preço para o produto não é válido.',
    },
    notifyStorage: {
      notEmpty: true,
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'Preencha a descrição para o estoque.',
    },
  }),
}
