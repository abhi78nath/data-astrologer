const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type:Number,
        required:true
    }
})

const User = mongoose.model('USER_Info', userSchema)
module.exports = User