const Player = require('../models/playerSchema')
const createPlayer = async (req, res) => {
    try {
        const { player_name, country, player_image, speciality, team_logo,team_name } = req.body;
        if (!player_image || !player_name || !country || !speciality || !team_logo) {
            res.status(400).json({message:"Fill all the details"})
        }
        const player = new Player({ player_name, country, player_image, speciality, team_logo,team_name })
        player.save();
        res.status(200).json({ message: "Player created successfully" });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getPlayers = async (req, res) => {
    try {
        const { team_name, country } = req.body;
        
        const filter = {};
        if (team_name) filter.team_name = team_name;
        if (country) filter.country = country;
    
        const players = await Player.find(filter);
    
        const counts = await Player.aggregate([
          {
            $match: filter,
          },
          {
            $group: {
              _id: '$speciality',
              count: { $sum: 1 },
            },
          },
        ]);
        const response = {
          players: players,
          counts: counts,
        };
        res.json(response);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred.' });
      }
}
const deletePlayer = async (req, res) => {
  try {
    const playerId = req.params.id
    const player = await Player.findById(playerId)
    if (!player) {
      res.status(400).json({message: "Player not found"})
    }
    await Player.findByIdAndDelete(playerId)
    res.status(200).json({message:"Player deleted successfully"})
  } catch (error) {
    res.status(500).json({message:"An error occured",error:error.message})
  }
}
module.exports = {
    createPlayer,getPlayers,deletePlayer
}