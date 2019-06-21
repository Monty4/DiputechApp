const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { centre, title, qt } = req.query
    
    logic.newStock(centre, title, qt)
    .then(stock => res.json(success(stock)))
    .catch(err => res.json(fail(err)))
}