import { DataTypes } from 'sequelize'
import { missingPersonModel } from './missingPersonModel.js'
import { db } from '../db.js'

export const UserModel = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

const missingPerson = new missingPersonModel()

UserModel.hasMany(missingPerson, {
  foreignKey: 'idUser',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

UserModel.sync({ force: true })
  .then(() => console.log('users table created'))
  .catch((error) => console.log(error))
