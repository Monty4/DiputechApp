const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { username, password } } = req

    logic.verify(username, password)
    .then(user => res.json(success(user)))
    .catch(err => res.json(fail(err)))
}