const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { id } = req.query
    
    logic.getDate(id)
    .then(id => res.json(success(id)))
    .catch(err => res.json(fail(err)))
} 