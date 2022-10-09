import express from 'express'
import 'express-async-errors'
import { router } from './routes.js'

const server = express()

server.use(express.json())

server.use(router)
server.use((err, req, res, next) => {
  return res.status(500).json({ error: err })
})

server.listen(3000, () => console.log('Server is listened on port 3000'))
