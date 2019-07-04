const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { _id } = req.query
    logic.getArea(_id)
    .then( area => res.json(success(area)))
    .catch(err => res.json(fail(err)))
}