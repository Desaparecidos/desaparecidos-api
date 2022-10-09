import express from 'express'
import { router } from './routes.js'

const server = express()

server.use(express.json())

server.use(router)

server.listen(3000, () => console.log('Server is listened on port 3000'))
