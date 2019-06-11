const { Router } = require('express')
// const express = require('express')
const bodyParser = require('body-parser')
const { login, updateuser, listareas, list, getcentre, getunitat, listcentres, liststock } = require('./handlers')
const router = Router()
// const router = express.Router()
const jsonBodyParser = bodyParser.json()
// const jwtValidator = require('./handlers/jwtValidator')

router.post('/login', jsonBodyParser, login)
router.put('/updateuser', jsonBodyParser, updateuser)
router.get('/area', listareas)
router.get('/users', list)
router.get('/centre', getcentre)
router.get('/unitat', getunitat)
router.get('/centres', listcentres)
router.get('/stock', liststock)

module.exports = router