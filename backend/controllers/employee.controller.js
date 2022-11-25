const randomPassword = require("../helpers/generate_password");
const registerEmail = require("../helpers/send_email");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

// to add an employee. they either already exist in the database or they do not. If they exist we only add them to employee table
// If not create a new account for them and send their details along the password in an email
const getEmployees = async (req, res) => {
  const companyId = req.company.id;
  const employees = await prisma.employee.findMany({
    where: {
      companyId: parseInt(companyId),
      Project: {
        every: {
          companyId: parseInt(companyId),
        },
      },
      ProjectId: {
        every: {
          companyId: parseInt(companyId),
        },
      },
    },
    include: {
      user: true,
      Project: true,
      ProjectId: true,
    },
  });
  const count = employees.length;
  res.status(200).json({ employees, count: count });
};

const getEmployeesManager = async (req, res) => {
  const { companyId } = req.params;
  const employees = await prisma.employee.findMany({
    where: {
      companyId: parseInt(companyId),
    },
    include: {
      user: true,
    },
  });
  res.status(200).json(employees);
};

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
    // Check if user is already an employee
    const employee = await prisma.employee.findFirst({
      where: {
        userId: parseInt(userTestExist.id),
        companyId: parseInt(companyId),
      },
    });
    if (employee)
      return res.status(400).json({ message: "User already is an employee" });
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

  const password = randomPassword();
  const encryptedpassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      user_type: 3,
      password: encryptedpassword,
      user_type: 2,
    },
  });

  const employee = await prisma.employee.create({
    data: {
      companyId: parseInt(companyId),
      userId: parseInt(user.id),
      wage: parseInt(wage),
      job_position: job_position,
    },
  });
  if (employee) {
    registerEmail(user.email, password);
  }
  res.status(200).json({
    message: "User created succesfully",
    user: user,
    employee: employee,
  });
};

const updateEmployee = async (req, res) => {
  let { job_position, wage } = req.body;
  const employeeId = req.params.id;
  const employee = await prisma.employee.findFirst({
    where: {
      employeeId: parseInt(employeeId),
    },
  });
  if (!employee)
    return res.status(400).json({ message: "Something went wrong" });
  if (!job_position) job_position = employee.job_position;
  if (!wage) wage = employee.wage;
  const updatedEmployee = await prisma.employee.update({
    where: {
      employeeId: parseInt(employeeId),
    },
    data: {
      wage: parseInt(wage),
      job_position: job_position,
    },
  });
  res.status(200).json(updatedEmployee);
};
const deleteEmployee = async (req, res) => {
  const { employeeId } = req.body;

  const deleted = await prisma.employee.delete({
    where: {
      employeeId: parseInt(employeeId),
    },
  });
  res.json(deleted);
};
module.exports = {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  getEmployeesManager,
};
