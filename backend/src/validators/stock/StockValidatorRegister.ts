import { checkSchema } from 'express-validator'

export const StockValidatorRegister = {
  register: checkSchema({
    name: {
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O Nome para o produto precisa ter ao menos 2 caracteres.',
    },
    type: {
      isUUID: true,
      notEmpty: true,
      errorMessage: 'O tipo de insumo informado não é válido.',
    },
    qtd: {
      isNumeric: true,
      notEmpty: true,
      errorMessage: 'A quantidade do produto não é válida.',
    },
    losePerMeter: {
      isNumeric: true,
      notEmpty: true,
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
      errorMessage: 'O preço base para o produto não é válido.',
    },
    description: {
      notEmpty: true,
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'Escreve uma descrição válida.',
    },
    notifyStorage: {
      notEmpty: true,
      isBoolean: true,
      errorMessage: 'Erro ao selecionar a notificação.',
    },
  }),
}
