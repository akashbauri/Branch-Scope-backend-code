module.exports = (req, res, next) => {
  const key = req.headers["x-api-key"];

  if (!key || key !== process.env.POLLINATIONS_API_KEY) {
    return res.status(403).json({
      success: false,
      message: "Invalid API Key",
    });
  }

  next();
};
