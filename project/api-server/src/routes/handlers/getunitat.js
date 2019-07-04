const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { _id } = req.query
    
    logic.getUnitat(_id)
    .then( unitat => res.json(success(unitat)))
    .catch(err => res.json(fail(err)))
}