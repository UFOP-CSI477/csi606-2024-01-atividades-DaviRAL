import express from 'express'
import { mainRouter } from './routes/main.js'
import { statesRouter } from './routes/states.js'
import { citiesRouter } from './routes/cities.js'
import { bloodTypeRouter } from './routes/blood_type.js'
import { personsRouter } from './routes/persons.js'
import { collectionLocalsRouter } from './routes/collection_locals.js'
import { donationsRouter } from './routes/donation.js'

const PORT = 3000
const server = express()

server.use(express.json())

server.use(mainRouter)
server.use(statesRouter)   
server.use(citiesRouter)
server.use(bloodTypeRouter)
server.use(personsRouter)
server.use(collectionLocalsRouter)
server.use(donationsRouter)

server.listen(PORT, () => {
    console.log(`[SERVER] Server is runing on port ${PORT}.`)
})