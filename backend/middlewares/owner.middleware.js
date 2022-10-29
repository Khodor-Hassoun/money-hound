const ownerMiddleware = async (req, res, next) => {
  if (req.user.userType === 1) {
    next();
  }
  return res.status(401).json({ message: "Unauthorized" });
};
module.exports = ownerMiddleware;
