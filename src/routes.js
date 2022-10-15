import express from 'express'

import { userController } from './controllers/userController.js'
import { authMiddleware } from './middlewares/authMiddleware.js'

export const router = express.Router()

router.post('/users', (req, res) => userController.create(req, res))

router.post('/auth', (req, res) => userController.authenticate(req, res))

router.get(
  '/users/:userId',
  (req, res, next) => authMiddleware.execute(req, res, next),
  (req, res) => userController.findOne(req, res)
)

router.put(
  '/users/:userId',
  (req, res, next) => authMiddleware.execute(req, res, next),
  (req, res) => userController.update(req, res)
)

router.delete(
  '/users/:userId',
  (req, res, next) => authMiddleware.execute(req, res, next),
  (req, res) => userController.delete(req, res)
)
