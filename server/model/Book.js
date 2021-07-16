const connection = require('../connection/database')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const bookSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String, 
        required: true
    },
    isbn: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema)