const mongoose = require('mongoose')
const { Schema, Schema: { objectId} } = mongoose

const Centre = new Schema({
    title: {
        type: String,
        required: true
    },
    updated: {
        type: String,
        required: true
    }
})