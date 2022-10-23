import { missingPersonModel } from '../database/models/missingPersonModel.js'

class MissingPersonControler {
  async create(req, res) {
    const {
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
      illnesses,
      contacts,
      context,
      address,
      incidentReport,
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
      illnesses,
      contacts,
      context,
      address,
      incidentReport,
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
}

export const missingPersonControler = new MissingPersonControler()
