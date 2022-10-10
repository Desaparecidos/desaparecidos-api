import { DataTypes } from 'sequelize'
import { db } from '../db.js'
import { UserModel } from './userModel.js'

export const missingPersonModel = db.define('missingPerson', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  profilePhoto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  missingPersonName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  height: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eyeColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hairType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hairColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  features: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clothing: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  illnesses: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contacts: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  context: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  incidentReport: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

missingPersonModel
  .sync({ force: false })
  .then(() => console.log('missing person table created'))
  .catch((error) => console.log(error))
