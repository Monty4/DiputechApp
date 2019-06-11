const mongoose = require('mongoose')
const { Schema, Schema: { objectId} } = mongoose

const Unitat = new Schema({
    title: {
        type: String,
        required: true
    }
})