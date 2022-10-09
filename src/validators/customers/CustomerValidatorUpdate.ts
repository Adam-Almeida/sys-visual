import { sanitizeValidate } from '@/utils/sanitizeValidate'
import { checkSchema } from 'express-validator'

const sanitize = new sanitizeValidate()

export const CustomerValidatorUpdate = {
  update: checkSchema({
    name: {
      optional: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeStringToUppercase(value)
        },
      },
      trim: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O Nome precisa ter ao menos 2 caracteres.',
    },
    document: {
      optional: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeDocumentCepAndPhones(value)
        },
      },
      isLength: {
        options: { min: 10, max: 18 },
      },
      errorMessage: 'O Documento não parece válido',
    },
    email: {
      optional: true,
      notEmpty: {
        errorMessage: 'O email não pode estar em branco.',
      },
      trim: true,
      normalizeEmail: true,
      isEmail: {
        errorMessage: 'O email não parece ser válido.',
      },
    },
    type: {
      optional: true,
      isIn: {
        options: [['NATURAL_PERSON', 'LEGAL_PERSON']],
        errorMessage: 'Informe um tipo empresarial válido.',
      },
    },
    phone: {
      optional: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeDocumentCepAndPhones(value)
        },
      },
      isLength: {
        options: {
          max: 12,
          min: 10,
        },
        errorMessage: 'Informe um telefone válido',
      },
    },
    whats: {
      optional: true,
      notEmpty: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeDocumentCepAndPhones(value)
        },
      },
      isLength: {
        options: {
          max: 13,
          min: 10,
        },
        errorMessage: 'Informe um whats válido',
      },
    },
    cep: {
      optional: true,
      notEmpty: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeDocumentCepAndPhones(value)
        },
      },
      isLength: {
        options: {
          max: 10,
          min: 5,
        },
        errorMessage: 'O CEP informado não parece válido',
      },
    },
    street: {
      optional: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeAddres(value)
        },
      },
      isLength: {
        options: { min: 5, max: 255 },
      },
      errorMessage: 'O Nome da rua precisa ter ao menos 5 caracteres.',
    },
    number: {
      optional: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeAddresNumber(value)
        },
      },
      isLength: {
        options: { min: 1, max: 10 },
      },
      errorMessage: 'O Número precisa ter ao menos 1 caracter.',
    },
    neighborhood: {
      optional: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeAddres(value)
        },
      },
      isLength: {
        options: { min: 2, max: 45 },
      },
      errorMessage: 'O Bairro precisa ter ao menos 2 caracteres.',
    },
    city: {
      optional: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitize.sanitizeAddres(value)
        },
      },
      isLength: {
        options: { min: 2, max: 45 },
      },
      errorMessage: 'O Bairro precisa ter ao menos 2 caracteres.',
    },
    uf: {
      optional: true,
      isLength: {
        options: {
          max: 2,
          min: 2,
        },
        errorMessage: 'Informe o UF correto para o estado',
      },
      isIn: {
        options: [
          [
            'AL',
            'AC',
            'AP',
            'AM',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG',
            'PA',
            'PB',
            'PR',
            'PE',
            'PI',
            'RJ',
            'RN',
            'RS',
            'RO',
            'RR',
            'SC',
            'SP',
            'SE',
            'TO',
          ],
        ],
        errorMessage: 'A sigla do estado é inválida.',
      },
    },
  }),
}
