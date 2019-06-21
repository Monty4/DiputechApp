const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { id } = req.query
    
    logic.removeStock(id)
    .then(stock => res.json(success(stock)))
    .catch(err => res.json(fail(err)))
}