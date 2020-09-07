// User Model
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2
    },
    Email:{
        type:String,
        required:true,
        min:5
    },
    Password:{
        type:String,
        required:true,
        min:3
    },
    Date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('User',userSchema)