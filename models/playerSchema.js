const mongoose = require('mongoose')
const playerSchema = new mongoose.Schema({
    player_name: {
        type: String,
        required:true
    },
    country: {
        type: String,
        required:true
    },
    player_image: {
        type: String,
        required:true
    },
    speciality: {
        type: String,
        required:true
    },
    team_name: {
        type: String,
        required: true
    },
    team_logo: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Player",playerSchema)