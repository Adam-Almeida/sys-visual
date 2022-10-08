import { checkSchema } from 'express-validator'

export const UserValidatorUpdate = {
  update: checkSchema({
    username: {
      optional: true,
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O UserName precisa ter ao menos 2 caracteres.',
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
    password: {
      optional: true,
      notEmpty: {
        errorMessage: 'A senha não pode estar em branco.',
      },
      isLength: {
        options: { min: 8, max: 25 },
        errorMessage: 'A senha precisa ter entre 8 e 25 caracteres.',
      },
    },
    confirmPassword: {
      optional: true,
      notEmpty: {
        errorMessage: 'A confirmação de senha não pode estar em branco.',
      },
      isLength: {
        options: { min: 8, max: 25 },
        errorMessage:
          'A confirmação de senha precisa ter entre 8 e 25 caracteres.',
      },
    },
  }),
}
