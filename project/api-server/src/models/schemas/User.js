const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    mobile: {
        type: Number
    },
    unitat: {
        type: ObjectId,
        ref: 'Unitat'
    },
    centre: {
        type: ObjectId,
        ref: 'Centre'
    },
    area: {
        type: ObjectId,
        ref: 'Area'
    },
})