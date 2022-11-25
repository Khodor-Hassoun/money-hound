const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const ownerMiddleware = async (req, res, next) => {
  // return;
  if (req.user.user_type === 1) {
    const company = await prisma.company.findFirst({
      where: {
        ownerId: parseInt(req.user.id),
      },
    });
    req.company = company;
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = ownerMiddleware;
