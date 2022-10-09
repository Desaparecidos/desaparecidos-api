import express from 'express'

import { userController } from './controllers/userController.js'

export const router = express.Router()

router.post('/users', (req, res) => userController.create(req, res))
