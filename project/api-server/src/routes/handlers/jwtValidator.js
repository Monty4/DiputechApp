const { success, fail } = require('./list')
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

function jwtValidator(req, res, next) {
    const auth = req.get('authorization')

    try {
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
        req.tokencito = jwt.verify(token, secret)
        next()
    }
    catch(err) {
        res.json(fail('invalid token'))
    }
}

module.exports = jwtValidator