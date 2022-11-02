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
const updateUser = async (req, res) => {
  const { id } = req.user;
  let { email, password, firstname, lastname } = req.body;
  let encryptedpassword;
  //   Get user
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  if (!email) email = user.email;
  if (!password) {
    encryptedpassword = user.password;
  } else {
    encryptedpassword = await bcrypt.hash(password, 10);
  }
  if (!firstname) firstname = user.firstname;
  if (!lastname) lastname = user.lastname;

  //   Check if email is taken
  const userEmailTest = await prisma.user.findMany({
    where: {
      email: {
        not: user.email,
        equals: email,
      },
    },
  });
  console.log(userEmailTest);
  if (userEmailTest.length > 0) {
    res.status(400).json({ message: "Email taken" });
    return;
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: encryptedpassword,
      user_type: 1,
    },
  });
  res.json(updatedUser);
};
const getCompanies = async (req, res) => {
  const { id } = req.user;
  const options = [];

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  //   Get the companies the user works for
  const isOwner = await prisma.company.findMany({
    where: {
      ownerId: parseInt(user.id),
    },
  });
  for (isntance of isOwner) {
    options.push(isntance.id);
  }
  const isEmployee = await prisma.employee.findMany({
    where: {
      userId: user.id,
    },
  });
  for (isntance of isEmployee) {
    options.push(isntance.companyId);
  }
  const companies = await prisma.company.findMany({
    where: {
      id: {
        in: options,
      },
    },
  });
  res.status(200).json(companies);
};
const deleteUser = async (req, res) => {};
module.exports = { getUser, updateUser, deleteUser, getCompanies };
