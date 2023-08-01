const express = require('express')
const{
    getUsers,
    getUser,
    loginUser,
    signupUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')
const router = express.Router()

//GET all users
router.get('/',getUsers)


//GET a single user
router.get('/:id',getUser)

//POST a new user

router.post('/login', loginUser)
router.post('/signup', signupUser)


//DELETE a user 
router.delete('/:id',deleteUser)
//UPDATE a user
router.patch('/:id',updateUser)

module.exports = router