const User = require('../models/userSchema')
const showUsersOnParticularDate = async (req, res) => {
    try {
      const year = parseInt(req.body.year);
      const month = parseInt(req.body.month);
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);
  
      const result = await User.aggregate([
        {
          $match: {
            lastVisited: {
              $gte: startDate,
              $lte: endDate,
            },
          },
        },
        {
          $group: {
            _id: { $dayOfMonth: '$lastVisited' },
            date: { $first: '$lastVisited' }, 
            count: { $sum: 1 },
            users: { $push: '$$ROOT' }, 
          },
        },
        {
          $sort: { '_id': 1 },
        },
      ]);
  
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
module.exports = showUsersOnParticularDate