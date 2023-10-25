const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const adminSchema = new mongoose.Schema({
  name:String,
    email: {
        type: String, 
        unique: true,
        required:true
    },
    password: {
        type: String,
        required: true
    }
})
adminSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
  adminSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  adminSchema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
  };
module.exports = mongoose.model("Admin",adminSchema)