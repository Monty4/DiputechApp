const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose

const Area = new Schema({
    title: {
        type: String,
        required: true
    }
})