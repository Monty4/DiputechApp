const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports= (req,res) => {
    const { name, surname } = req.query
    logic.listUsers(name, surname)
    .then(users => res.json(success(users)))
    .catch(err => res.json(fail(err)))
} 