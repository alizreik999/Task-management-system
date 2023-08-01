const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const Schema = mongoose.Schema
const validator=require('validator')

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
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

userSchema.statics.signup=async function (username,email,password,role,status){
    //validation
    if(!email || !password){
        throw Error('All field must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid ')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    const exists =await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)
    const user =await this.create({username,email,password:hash,role,status})
    return user

}
module.exports = mongoose.model('user', userSchema )