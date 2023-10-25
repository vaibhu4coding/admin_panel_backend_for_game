const express = require('express')
const adminControllers = require('../controllers/adminController')
const router = express.Router()
router.post('/login', adminControllers.adminLogin)
module.exports = router