const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const payEmployees = async (req, res, next) => {
  const { id } = req.company;
  // GET ALL EMPLOYEES
  const date = new Date();
  if (date.getDate() + 1 == 1) {
    const employees = await prisma.employee.findMany({
      where: {
        companyId: parseInt(id),
      },
    });
    // PAY EMPLOYEE VERY FIRST DAY OF THE MONTH
    for (let employee of employees) {
      const expense = await prisma.expense.create({
        data: {
          companyId: parseInt(id),
          bill_name: "Employee pay",
          price: parseInt(employee.wage),
        },
      });
    }
  }
  next();
};
module.exports = payEmployees;
