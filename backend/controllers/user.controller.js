const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  const { email } = req.user;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  res.status(200).json(user);
};
const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};
module.exports = { getUser, updateUser, deleteUser };
