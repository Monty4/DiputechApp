const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { name,surname,username,pasword,email,phone,mobile,unitat,centre,area } = req.query

    logic.newUser(name,surname,username,pasword,email,phone,mobile,unitat,centre,area)
    .then(user => res.json(success(user)))
    .catch(err => res.json(fail(err)))
}