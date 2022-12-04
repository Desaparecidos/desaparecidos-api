import { missingPersonModel } from '../database/models/missingPersonModel.js'

class MissingPersonControler {
  async create(req, res) {
    const {
      profilePhoto,
      missingPersonName,
      age,
      weight,
      height,
      sex,
      eyeColor,
      hairType,
      hairColor,
      features,
      clothing,
      contacts,
      context,
      address,
      incidentReport,
      comments,
      skinColor,
    } = req.body

    const missingPerson = await missingPersonModel.create({
      profilePhoto,
      missingPersonName,
      age,
      weight,
      height,
      eyeColor,
      hairType,
      hairColor,
      features,
      clothing,
      contacts,
      context,
      address,
      incidentReport,
      comments,
      skinColor,
      sex,
      userId: req.user.userId,
    })

    return res.status(201).json({ missingPerson })
  }

  async findAll(req, res) {
    const missingPeople = await missingPersonModel.findAll()

    return missingPeople.length > 0
      ? res.status(200).json(missingPeople)
      : res.status(404).send()
  }

  async findOne(req, res) {
    const { missingPersonId } = req.params

    const missingPerson = await missingPersonModel.findOne({
      where: {
        id: missingPersonId,
      },
    })

    return missingPerson
      ? res.status(202).json(missingPerson)
      : res.status(404).json({ message: 'Person not found' })
  }

  async filter(req, res) {
    const find = await missingPersonModel.findAll({
      where: {
        age: req.body.age,
        address: req.body.address,
        skinColor: req.body.skinColor,
      },
    })

    console.log(find)

    return res.status(200).json(find)
  }

  async myMissingPersons(req, res) {
    const { userId } = req.params
    const myPerson = await missingPersonModel.findAll({
      where: {
        userId: userId,
      },
    })

    return res.status(200).json(myPerson)
  }
  
}



export const missingPersonControler = new MissingPersonControler()
