const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: String,
    username: String,
    password: String
})

module.exports = mongoose.model('User', schema )