const mongoose = require('mongoose')
const walletSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref:"User"
    },
    amount:Number,
    status:String
})
module.exports = mongoose.model("Wallet",walletSchema)