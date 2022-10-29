const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        email: decoded.user.email,
      },
    });
    console.log("---------------------------------------------------");
    console.log(decoded);
    console.log("---------------------------------------------------");

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized22222222222" });
  }
};
module.exports = authMiddleware;
