const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    mobileNumber: String,
    DoB: Date,
    cashBonus: Number,
    firstName: String,
    gender: String,
    lastName: String,
    winningAmount: Number,
    email: String,
    lastVisited:Date
})
module.exports = mongoose.model("User",userSchema)