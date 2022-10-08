import { checkSchema } from 'express-validator'

function sanitizeValue(value: String) {
  return value
    .replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿ\s]/g, ' ')
    .toUpperCase()
    .trim()
}

function sanitizeDocumentCepAndPhones(value: String) {
  return value.replace(/[^0-9]/gi, '')
}

function sanitizeAddresNumber(value: String) {
  return value.replace(/[^a-zA-Z0-9\s]/g, ' ').trim()
}

function sanitizeAddres(value: String) {
  return value.replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿ\s]/g, ' ').trim()
}

export const CustomerValidatorRegister = {
  register: checkSchema({
    name: {
      customSanitizer: {
        options: (value) => {
          return sanitizeValue(value)
        },
      },
      trim: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O Nome precisa ter ao menos 2 caracteres.',
    },
    document: {
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitizeDocumentCepAndPhones(value)
        },
      },
      isLength: {
        options: { min: 10, max: 18 },
      },
      errorMessage: 'O Documento não parece válido',
    },
    email: {
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
          return sanitizeDocumentCepAndPhones(value)
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
      notEmpty: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitizeDocumentCepAndPhones(value)
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
      notEmpty: true,
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitizeDocumentCepAndPhones(value)
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
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitizeAddres(value)
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
          return sanitizeAddresNumber(value)
        },
      },
      isLength: {
        options: { min: 1, max: 10 },
      },
      errorMessage: 'O Número precisa ter ao menos 1 caracter.',
    },
    neighborhood: {
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitizeAddres(value)
        },
      },
      isLength: {
        options: { min: 2, max: 45 },
      },
      errorMessage: 'O Bairro precisa ter ao menos 2 caracteres.',
    },
    city: {
      trim: true,
      customSanitizer: {
        options: (value) => {
          return sanitizeAddres(value)
        },
      },
      isLength: {
        options: { min: 2, max: 45 },
      },
      errorMessage: 'O Bairro precisa ter ao menos 2 caracteres.',
    },
    uf: {
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
