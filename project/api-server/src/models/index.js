const mongoose = require('mongoose')
const { User, Area, Centre, Unitat, Stock } = require('./schemas')

module.exports = {
    User: mongoose.model('User', User),
    Area: mongoose.model('Area', Area),
    Centre: mongoose.model('Centre', Centre),
    Unitat: mongoose.model('Unitat', Unitat),
    Stock: mongoose.model('Stock', Stock)
} 