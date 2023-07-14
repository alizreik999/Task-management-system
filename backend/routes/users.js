const express = require('express')
const{
    getUsers,
    getUser,
    // createUser,
    deleteUser,
    updateUser,
    signupUser,
    loginUser
} = require('../controllers/userController')
const router = express.Router()

// login route
routgiter.post('/login', loginUser)

//signup route 
router.post('/signup', signupUser)


//GET all users
router.get('/',getUsers)


//GET a single user
router.get('/:id',getUser)

//POST a new task

// router.post('/', createUser)

//DELETE a user 
router.delete('/:id',deleteUser)
//UPDATE a user
router.patch('/:id',updateUser)

module.exports = router