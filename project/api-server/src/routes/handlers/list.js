const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports= (req,res) => {
    const { unitat ,name, surname } = req.query
    logic.listUsers(unitat, name, surname)
    .then(users => res.json(success(users)))
    .catch(err => res.json(fail(err)))
} 