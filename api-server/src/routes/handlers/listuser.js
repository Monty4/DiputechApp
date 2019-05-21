const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports= (req,res) => {
    const { username, password } = req.query
    logic.listUser(username, password)
    .then(user => res.json(success(user)))
    .catch(err => res.json(fail(err)))
} 