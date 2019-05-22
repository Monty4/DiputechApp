const { success, fail } = require('./api-utils')
const logic = require('../../logic')
const jwt = require('jsonwebtoken')

const { JWT_SECRET: secret } = process.env

module.exports = (req, res) => {
    const { body: { username, password } } = req

    logic.verify(username, password)
    .then( user => {
        const token = jwt.sign({ id:user._id }, secret)
        const idUser = user._id
        res.json(success({ token, idUser }))
    })
    .catch(err => {
        res.json(fail(err.message))
    })
}