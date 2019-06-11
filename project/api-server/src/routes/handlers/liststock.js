const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { id, description } = req.query
    logic.listStock(id, description)
    .then(stock => res.json(success(stock)))
    .catch(err => res.json(fail(err)))
}