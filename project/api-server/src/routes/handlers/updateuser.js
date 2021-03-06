const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { id, password } } = req
    // const { _id, password } = req.body
    
    logic.updateUser(id, password)
    .then( user => res.json(success(user)))
    .catch(err => res.json(fail(err)))
}