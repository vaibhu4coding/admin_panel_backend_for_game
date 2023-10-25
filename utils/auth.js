const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (bearerToken) {
    try {
      const token = bearerToken.startsWith("Bearer ")
        ? bearerToken.slice(7, bearerToken.length)
        : bearerToken;
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = {_id: decodedToken._id};
      next();
    } catch (error) {
      return res.status(401).json({error: "Invalid or expired token"});
    }
  } else {
    return res.status(401).json({error: "Authorization header missing"});
  }
};

module.exports = authMiddleware;