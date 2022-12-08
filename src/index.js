import express from 'express'
import 'express-async-errors'
import { router } from './routes/routes.js'
import cors from 'cors';

const server = express()

server.use(express.json())

server.use(cors())

server.use(router)
server.use((err, req, res, next) => {
  console.log('ERROR:', err)
  return res.status(500).json({ error: err })
})

server.listen(3000, () => console.log('Server is listened on port 3000'))
