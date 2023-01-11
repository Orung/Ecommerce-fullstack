const express = require('express')
const userController = require('../controllers/userControl')


const userRouter = express.Router()


userRouter.post('/', userController.registerUser)


module.exports = userRouter