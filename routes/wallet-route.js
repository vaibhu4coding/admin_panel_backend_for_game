const express = require('express')
const showWalletCnt = require('../controllers/walletController')
const authMiddleware = require('../utils/auth')
const router = express.Router()
router.get('/get-wallet-cnt', authMiddleware,showWalletCnt.showWalletCnt)
router.get('/get-wallet', authMiddleware,showWalletCnt.showWallet)
module.exports = router