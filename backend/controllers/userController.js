const User = require('../models/userModel')
const mongoose = require('mongoose')
//get all tasks
const getUsers = async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
}

//get a single User
const getUser = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such user'})
    }
    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({error: 'No such error'})
    }
    res.status(200).json(user)
}

//create new user
// const createUser = async(req, res) => {
//     const{username, email, status, password, role} = req.body

//     //add doc to db
//     try{
//         const user = await User.create({username, email, status, password, role})
//         res.status(200).json(user)
//     }catch(error){res.status(400).json({error: error.message})}


// }

//login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}
//signup user
const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

//delete a task
const deleteUser = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such User '})
    }
    const user = await User.findOneAndDelete({_id:id})
    if(!user){
        return res.status(400).json({error: 'No such error'})
    }
    res.status(200).json(user)
}

//update a task
const updateUser  = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such user'})
    }
    const user = await User.findOneAndUpdate({_id:id}, {
        ...req.body
    })
    if(!user){
        return res.status(400).json({error: 'No such error'})
    }
    res.status(200).json(user)
}



module.exports = {
    getUsers,
    getUser,
    // createUser,
    deleteUser,
    updateUser,
    signupUser,
    loginUser
}