require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const database = process.env.MONGO_DB

mongoose.connect(`mongodb://${host}:${port}/${database}`,{ useNewUrlParser: true })

    .then(() => {
        const app = express()
        app.use(cors())
        app.use('/api', routes)

        const port = process.env.PORT
        app.listen(port, () => console.log(`api Server running on port ${port}`))
    })
    .catch()