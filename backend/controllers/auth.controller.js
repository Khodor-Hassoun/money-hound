const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const signUp = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  //   validate if email exists
  const userTest = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!email || userTest) {
    res.status(400).json({ message: " Email Something went wrong" });
    return;
  }

  //   Create user
  const user = await prisma.user.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      user_type: 1,
    },
  });
  console.log(user);
  res.json(user);
};

const logIn = async (req, res) => {};

module.exports = { signUp, logIn };
