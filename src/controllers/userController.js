import { UserModel } from '../database/models/userModel.js'
import { hashHelper } from '../helpers/hashHelper.js'
import { tokenHelper } from '../helpers/tokenHelper.js'
import { userValidator } from '../validations/userValidator.js'

class UserController {
  async create(req, res) {
    await userValidator.validate(req.body)

    const { email, username, cpf, phone_number, address, password } = req.body

    const encryptedPassword = await hashHelper.hash(password)

    const user = await UserModel.create({
      email,
      username,
      cpf,
      phone_number,
      address,
      password: encryptedPassword,
    })

    const token = tokenHelper.execute(user.id)

    return res.status(201).json({ user, token })
  }

  async authenticate(req, res) {
    const { email, password } = req.body

    const userWithEmail = await UserModel.findOne({ where: { email } }).catch(
      (err) => {
        console.log('Error: ', err)
      }
    )

    if (!userWithEmail) {
      return res
        .status(400)
        .json({ message: 'Email or password does not match!' })
    }

    const isValidPassword = await hashHelper.compare(
      password,
      userWithEmail.password
    )

    if (!isValidPassword) {
      return res.status(401).json({ message: 'This password is incorrect' })
    }

    const token = tokenHelper.execute(userWithEmail.id)

    return res.status(201).json({ userWithEmail, token })
  }

  async findOne() {}

  async update() {}

  async delete() {}
}

export const userController = new UserController()
