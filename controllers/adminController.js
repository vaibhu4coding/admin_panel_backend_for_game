const Admin = require('../models/adminSchema')
const sendToken = require('../utils/sendTokens')

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({message:"Please enter all the details"})
        }
        const admin = await Admin.findOne({ email })
        if (!admin) {
            res.status(400).json({ message: "Invalid credentials" })
        }
        const isMatch = await admin.comparePassword(password)
        if (!isMatch) res.status(400).json({ message: "Invalid Credentials" })
        sendToken(res,admin,`Hii ${admin.name}`)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = {adminLogin}