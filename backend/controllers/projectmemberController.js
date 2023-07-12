const Projectmember = require('../models/projectmemberModel')
const mongoose = require('mongoose')
//get all projects

const getProjectmembers = async (req, res) => {
    try{
    const projects = await Projectmember.find({})
    res.status(200).json(projects)
}
catch(error){res.status(400).json({error: error.message})}
}



//get a single project
const getProjectmember = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Projectmember'})
    }
    const projectmember = await Project.findById(id)

    if(!projectmember){
        return res.status(404).json({error: 'No such error'})
    }
    res.status(200).json(projectmember)
}

//create new Projectmember
const createProjectmember = async(req, res) => {
    const{  projectId, memberId} = req.body

    //add doc to db
    try{
        const projectmember = await Projectmember.create({projectId, memberId})
        res.status(200).json(projectmember)
    }catch(error){res.status(400).json({error: error.message})}


}

//delete a project
const deleteProjectmember = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Projectmember'})
    }
    const projectmember = await Projectmember.findOneAndDelete({_id:id})
    if(!projectmember){
        return res.status(400).json({error: 'No such error'})
    }
    res.status(200).json(projectmember)
}
//update a project
const updateProjectmember = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such Projectmember'})
    }
    const projectmember = await Projectmember.findOneAndUpdate({_id:id}, {
        ...req.body
    })
    if(!projectmember){
        return res.status(400).json({error: 'No such error'})
    }
    res.status(200).json(projectmember)
}

module.exports = {
    getProjectmembers,
    getProjectmember,
    createProjectmember,
    deleteProjectmember,
    updateProjectmember
}