const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// to add an employee. they either already exist in the database or they do not. If they exist we only add them to employee table
// If not create a new account for them and send their details along the password in an email
const getEmployees = async (req, res) => {};
const addEmployee = async (req, res) => {
  const { companyId, firstname, lastname, email, wage, job_position } =
    req.body;
  // Check if all data is present
  if (!(firstname && lastname && email && wage && job_position)) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }

  // Check if user exists
  let userTestExist = await prisma.user.findFirst({
    where: {
      firstname: firstname,
      lastname: lastname,
      email: email,
    },
  });
  if (userTestExist) {
    const user = await prisma.employee.create({
      data: {
        companyId: parseInt(companyId),
        userId: parseInt(userTestExist.id),
        wage: wage,
        job_position: job_position,
      },
    });
    res.status(200).json(user);
    return;
  }

  //   If user does not exist
  // Check if email taken
  userTestExist = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (userTestExist) return res.status(400).json({ message: "Invalid data" });
  const user = await prisma.user.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      user_type: 3,
      // password:
    },
  });
};

module.exports = { addEmployee, getEmployees };
