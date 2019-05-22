// const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const { login, edit, listareas, list } = require('./handlers')
// const router = Router()
const router = express.Router()
const jsonBodyParser = bodyParser.json()
// const jwtValidator = require('./handlers/jwtValidator')

router.post('/login', jsonBodyParser, login)
router.post('/edit', jsonBodyParser, edit)
router.get('/area', listareas)
router.get('/users', list)

module.exports = router