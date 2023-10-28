const express = require('express')
const playerController = require('../controllers/playerController')
const authMiddleware = require('../utils/auth')
const router = express.Router()
router.post('/create-player', authMiddleware,playerController.createPlayer)
router.post('/get-players', authMiddleware, playerController.getPlayers)
router.delete('/delete-player/:id',authMiddleware,playerController.deletePlayer)
module.exports = router