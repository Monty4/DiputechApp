const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    // const { title } = req.query
    logic.listUnitats()
    .then(unitats => res.json(success(unitats)))
    .catch(err => res.json(fail(err)))
}