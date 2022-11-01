const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// to add an employee. they either already exist in the database or they do not. If they exist we only add them to employee table
// If not create a new account for them and send their details along the password in an email
const getEmployees = async (req, res) => {};
const addEmployee = async (req, res) => {
  const { companyId, firstname, lastname, email, wage, job_position } =
    req.body;
  // Check if user exists
  const userTestExist = await prisma.user.findFirst({
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
};

module.exports = { addEmployee, getEmployees };
