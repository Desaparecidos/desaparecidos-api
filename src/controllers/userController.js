import { UserModel } from '../database/models/userModel.js'
import { HashHelper } from '../helpers/hashHelper.js'

class UserController {
  async create(req, res) {
    const hashHelper = new HashHelper()

    const { email, username, phone_number, password } = req.body

    const encryptedPassword = await hashHelper.hash(password)

    const user = await UserModel.create({
      email,
      username,
      phone_number,
      password: encryptedPassword,
    })

    return res.status(201).json(user)
  }

  async authenticate() {}

  async findOne() {}

  async update() {}

  async delete() {}
}

export const userController = new UserController()
