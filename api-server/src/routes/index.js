// const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const { login, listusers, listareas, list, listuser } = require('./handlers')
// const router = Router()
const router = express.Router()
const jsonBodyParser = bodyParser.json()
const jwtValidator = require('./handlers/jwtValidator')

router.post('/login', jsonBodyParser, login)

router.get('/area', listareas)
router.get('/users', list)

module.exports = router
