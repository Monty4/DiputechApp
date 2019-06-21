const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId} } = mongoose
// const Schema = mongoose.Schema

module.exports = new Schema({
    centre: {
        type: ObjectId,
        required: true,
        ref: 'Centre',
        default: '5cfa536132a80d082cbd8edb'
    },    
    title: {
        type: String,
        required: true,
        default: 'New Item'
    },
    qt: {
        type: Number,
        default: 0
    }
})