const mongoose = require('mongoose')
const { Area, User } = require('./schemas')

module.exports = {
    Area: mongoose.model('Area', Area),
    User: mongoose.model('User', User)
} 