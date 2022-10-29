const ownerMiddleware = async (req, res, next) => {
  console.log(
    "---------------------OWNERMIDDLEWARE------------------------------"
  );
  console.log(req.user);
  console.log(
    "--------------------/OWNERMIDDLEWARE------------------------------"
  );
  // return;
  if (req.user.user_type === 1) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = ownerMiddleware;
