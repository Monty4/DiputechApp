const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    // const { title } = req.query
    logic.listAreas()
    .then(areas => res.json(success(areas)))
    .catch(err => res.json(fail(err)))
}