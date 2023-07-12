const express = require('express')
const{
    getProjectmembers,
    getProjectmember,
    createProjectmember,
    updateProjectmember,
    deleteProjectmember
} = require('../controllers/projectmemberController')

const router = express.Router()

//GET all projectmembers
router.get('/', getProjectmembers)


//GET a single projectmember
router.get('/:id',getProjectmember)

//POST a new team

router.post('/', createProjectmember)

//DELETE a projectmember 
router.delete('/:id',deleteProjectmember)
//update a projectmember
router.patch('/:id',updateProjectmember)

module.exports = router