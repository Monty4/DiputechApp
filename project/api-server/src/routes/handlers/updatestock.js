const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { id, title, qt } = req.query
    
    logic.updateStock(id, title, qt)
    .then(stock => res.json(success(stock)))
    .catch(err => res.json(fail(err)))
}