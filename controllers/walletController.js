const Wallet = require('../models/walletSchema')
const showWalletCnt = async (req, res) => {
    try {
        const succ_cnt = await Wallet.countDocuments({status:"success"})
        const pend_cnt = await Wallet.countDocuments({ status:"pending" })
        const fail_cnt = await Wallet.countDocuments({ status:"failure" })
        res.status(200).json({succ_cnt:succ_cnt,pend_cnt:pend_cnt,fail_cnt:fail_cnt})
    } catch (error) {
        res.status(500).json('admin-dashboard',{error:error})
    }
}
const showWallet = async (req, res) => {
    try {
        const { status } = req.body
        const walletEntries = await Wallet.find({status:status},{_id:0})
        res.status(200).json(walletEntries)
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = { showWalletCnt, showWallet }