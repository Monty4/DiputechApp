const login = require('./login')
const verify = require('./verify')
const newuser = require('./newuser')
const updateuser = require('./updateuser')
const listareas = require('./listareas')
const listunitats = require('./listunitats')
const listusers = require('./listusers')
const list = require('./list')
const getcentre = require('./getcentre')
const getunitat = require('./getunitat')
const getarea = require('./getarea')
const listcentres = require('./listcentres')
const liststock = require('./liststock')
const newstock = require('./newstock')
const updatestock = require('./updatestock')
const removestock = require('./removestock')
const getdate = require('./getdate')

module.exports = {
    login,
    verify,
    newuser,
    updateuser,
    listareas,
    listunitats,
    listusers,
    list,
    getcentre,
    getunitat,
    getarea,
    listcentres,
    liststock,
    newstock,
    updatestock,
    removestock,
    getdate
}