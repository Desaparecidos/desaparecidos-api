import * as yup from 'yup'

export const userValidator = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  cpf: yup.string().min(11).max(11).required('CPF must be 11 characters long'),
  phone_number: yup.string().required(),
  address: yup.string().required(),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required(),
})
