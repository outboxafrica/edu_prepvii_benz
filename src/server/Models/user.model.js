// User Model
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        },
    password: {
        type: String,
        required: true,
        set:(value)=>{
            return bcrypt.hashSync(value,10)
        }
        
      },
    contact: Number,
      answers: {
        type: Array,
    },
    questions: {
        type: Array,
    },
    Date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('User',userSchema)