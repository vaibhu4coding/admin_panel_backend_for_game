const express = require('express')
const showUsersOnParticularDate = require('../controllers/userController')
const authMiddleware = require('../utils/auth')
const router = express.Router()
router.post("/user-cnt",authMiddleware,showUsersOnParticularDate)
module.exports = router