import express from 'express'
import { mainRouter } from './routes/main.js'
import {statesRouter} from './routes/states.js'

const PORT = 3000
const server = express()

server.use(express.json())

server.use(mainRouter)
server.use(statesRouter)   


server.listen(PORT, () => {
    console.log(`[SERVER] Server is runing on port ${PORT}.`)
})