const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const ownerMiddleware = async (req, res, next) => {
  console.log(
    "---------------------OWNERMIDDLEWARE------------------------------"
  );
  console.log(req.user);
  console.log("---------------------------------------");
  // return;
  if (req.user.user_type === 1) {
    const company = await prisma.company.findFirst({
      where: {
        ownerId: parseInt(req.user.id),
      },
    });
    req.company = company;
    console.log(company);
    console.log(
      "--------------------/OWNERMIDDLEWARE------------------------------"
    );
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = ownerMiddleware;
