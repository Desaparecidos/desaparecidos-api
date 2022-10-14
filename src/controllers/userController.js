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

    const user = await UserModel.findOne({ where: { email } }).catch((err) => {
      console.log('Error: ', err)
    })

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    const isValidPassword = await hashHelper.compare(password, user.password)

    if (!isValidPassword) {
      return res.status(401).json({ message: 'This password is incorrect' })
    }

    const token = tokenHelper.execute(user.id)

    return res.status(201).json({ user, token })
  }

  async findOne(req, res) {
    const { userid } = req.params
    const user = await UserModel.findOne( {
      where:{
        id: userid,
      },
    })
    return user ? res.status(201).json(user) : res.status(400).json({ message: 'User not found' })
  }

  async update(req, res) {
    const { userid } = req.params
    await UserModel.update(req.body, {where:{id : userid}})
    return res.status(204).send()
  }

  async delete(req, res) {
    const { userid } = req.params
    await UserModel.delete({where : { id : userid}})
    return res.status(204).send()
  }
}

export const userController = new UserController()
