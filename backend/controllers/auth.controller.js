const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const signUp = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
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
