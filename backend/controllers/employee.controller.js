const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// to add an employee. they either already exist in the database or they do not. If they exist we only add them to employee table
// If not create a new account for them and send their details along the password in an email
const addEmployee = async (req, res) => {};
const getEmployees = async (req, res) => {};
