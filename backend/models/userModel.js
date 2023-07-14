const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['online', 'offline'],
        default: 'offline'
    }
},{timestamps:true})

//static signup method
userSchema.statics.signup = async (username, email, password, role, status) => {
    const exists = await this.findOne({email})

    if (exists){
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash= await bcrypt.hash(password)
}

module.exports = mongoose.model('user', userSchema )