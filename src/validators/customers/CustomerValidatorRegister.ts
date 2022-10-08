import { checkSchema } from 'express-validator'

const newLocal = 'S/N'
export const CustomerValidatorRegister = {
  register: checkSchema({
    name: {
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O Nome precisa ter ao menos 2 caracteres.',
    },
    document: {
      trim: true,
      escape: true,
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
        errorMessage: 'Informe um tipo válido.',
      },
    },
    phone: {
      optional: true,
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
      isLength: {
        options: {
          max: 10,
          min: 9,
        },
        errorMessage: 'O CEP informado não parece válido',
      },
    },
    street: {
      trim: true,
      escape: true,
      isLength: {
        options: { min: 5, max: 255 },
      },
      errorMessage: 'O Nome da rua precisa ter ao menos 5 caracteres.',
    },
    number: {
      optional: true,
      trim: true,
      escape: true,
      isLength: {
        options: { min: 1, max: 10 },
      },
      errorMessage: 'O Número precisa ter ao menos 1 caracter.',
    },
    neighborhood: {
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 45 },
      },
      errorMessage: 'O Bairro precisa ter ao menos 2 caracteres.',
    },
    city: {
      trim: true,
      escape: true,
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
    user_id: {
      isUUID: true,
      notEmpty: true,
    },
  }),
}
