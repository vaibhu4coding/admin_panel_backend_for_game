const sendToken = (res, user, message, statusCode = 200) => {
    const token = user.getJWTToken();
  
    const options = {
      expires: new Date(Date.now() + 15 * 24 * 60 * 50 * 1000),
      httpOnly: true,
    };
  
    res.status(statusCode).json({
      success: true,
      message,
      token
    });
  };
  
  module.exports = sendToken;