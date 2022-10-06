import { checkSchema } from 'express-validator'

export const UserValidatorRegister = {
  register: checkSchema({
    username: {
      trim: true,
      escape: true,
      isLength: {
        options: { min: 2, max: 255 },
      },
      errorMessage: 'O UserName precisa ter ao menos 2 caracteres.',
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
    password: {
      notEmpty: {
        errorMessage: 'A senha não pode estar em branco.',
      },
      isLength: {
        options: { min: 8, max: 25 },
        errorMessage: 'A senha precisa ter entre 8 e 25 caracteres.',
      },
    },
    confirmPassword: {
      notEmpty: {
        errorMessage: 'A confirmação de senha não pode estar em branco.',
      },
      isLength: {
        options: { min: 8, max: 25 },
        errorMessage:
          'A confirmação de senha precisa ter entre 8 e 25 caracteres.',
      },
    },
    roleType: {
      notEmpty: {
        errorMessage: 'O nível de autorização não pode estar em branco.',
      },
      isIn: {
        options: [['ADMIN', 'USER', 'CLIENT']],
        errorMessage: 'O nível de autorização não parece ser válido.',
      },
    },
  }),
}
