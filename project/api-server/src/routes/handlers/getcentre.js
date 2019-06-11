const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { _id } = req.query
    logic.getCentre(_id)
    .then( centre => res.json(success(centre)))
    .catch(err => res.json(fail(err)))
}