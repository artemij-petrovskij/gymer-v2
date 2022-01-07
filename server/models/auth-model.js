const { Schema, model } = require('mongoose')

const users = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    weight:
        []
    ,
    training:
        []
})
module.exports = model('users', users)