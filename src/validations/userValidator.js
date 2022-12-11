import * as yup from 'yup'

export const userValidator = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  phone_number: yup.string().required(),
  password: yup.string().required(),
})
