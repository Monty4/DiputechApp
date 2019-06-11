const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId} } = mongoose

const Stock = new Schema({
    centre: {
        type: ObjectId,
        ref: 'Centre'
    },
    title: {
        type: String,
        required: true
    },
    qt: {
        type: Number
    }
})