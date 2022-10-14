import express from 'express'
import { userController } from './controllers/userController.js'

export const router = express.Router()

router.post('/users', (req, res) => userController.create(req, res))

router.get("/users/:userid", (req, res) => userController.findOne(req, res))
router.put("/users/:userid", (req, res) => userController.update(req, res))
router.delete("/users/:userid", (req, res) => userController.delete(req, res))

router.post('/auth', (req, res) => userController.authenticate(req, res))
