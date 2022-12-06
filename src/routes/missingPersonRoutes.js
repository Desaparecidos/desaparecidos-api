import express from 'express'

import { missingPersonControler } from '../controllers/missingPersonController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

export const missingPeopleRouter = express.Router()

missingPeopleRouter.post(
  '/create',
  (req, res, next) => authMiddleware.execute(req, res, next),
  (req, res) => missingPersonControler.create(req, res)
)

missingPeopleRouter.get('/findAll', (req, res) =>
  missingPersonControler.findAll(req, res)
)

missingPeopleRouter.get('/:missingPersonId', (req, res) =>
  missingPersonControler.findOne(req, res)
)

missingPeopleRouter.post('/find', (req, res) =>
  missingPersonControler.filter(req, res)
)

missingPeopleRouter.post('/myPeople/:userId', (req, res) =>
  missingPersonControler.myMissingPersons(req, res)
)

missingPeopleRouter.get('/lastSix', (req, res) => missingPersonControler.getTheLastSixPeople(req, res))