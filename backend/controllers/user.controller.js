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
      // user_type: 1,
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
const selectCompany = async (req, res) => {
  const { companyId } = req.body;
  const { id } = req.user;

  const company = await prisma.company.findUnique({
    where: {
      id: companyId,
    },
  });
  if (parseInt(company.ownerId) === parseInt(id)) {
    console.log("OWNER");
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        user_type: 1,
      },
    });
    res.status(200).json({ message: "This is the owner", user });
    return;
  }
  const employee = await prisma.employee.findFirst({
    where: {
      AND: [{ companyId: parseInt(company.id) }, { userId: parseInt(id) }],
    },
  });
  const projectMangerTest = await prisma.project.findMany({
    where: {
      managerId: parseInt(employee.employeeId),
      end_date: undefined,
    },
  });
  if (projectMangerTest.length > 0) {
    console.log("PROJECT MANAGER");
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        user_type: 3,
      },
    });
    res.status(200).json({ message: "This is the PROJECT MANAGER", user });
    return;
  } else {
    console.log("EMPLOYEE");
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        user_type: 2,
      },
    });
    res.status(200).json({ message: "This is an Employee", user });
  }
};
const deleteUser = async (req, res) => {};
module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getCompanies,
  selectCompany,
};
