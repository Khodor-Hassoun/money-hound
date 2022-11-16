const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getRevenues = async (req, res) => {
  const { id } = req.company;
  const revenues = await prisma.revenue.findMany({
    where: {
      companyId: parseInt(id),
    },
  });
  res.json(revenues);
};
const addRevenue = async (req, res) => {
  const { projectId, customer_email, payment } = req.body;
  const { id } = req.company;
  const revenue = await prisma.revenue.create({
    data: {
      projectId: parseInt(projectId),
      customer_email: customer_email,
      payment: parseInt(payment),
      companyId: parseInt(id),
    },
  });
  if (!revenue.id) res.json({ message: "Error" });
  const company = await prisma.company.update({
    where: {
      id: parseInt(id),
    },
    data: {
      capital: {
        increment: parseInt(revenue.payment),
      },
    },
  });
  res.json(revenue, company);
};
const addExpense = async (req, res) => {
  const { bill_name, price } = req.body;
  const { id } = req.company;
  if (!bill_name || !price) res.json({ message: "Incomplete data" });

  const expense = await prisma.expense.create({
    data: {
      companyId: parseInt(id),
      bill_name: bill_name,
      price: parseInt(price),
    },
  });
  if (!expense.id) res.json({ message: "Error" });
  const company = await prisma.company.update({
    where: {
      id: parseInt(id),
    },
    data: {
      capital: {
        decrement: parseInt(expense.price),
      },
    },
  });
  res.status(200).json({ expense, company });
};
const getExpenses = async (req, res) => {
  const { id } = req.company;
  const expenses = await prisma.expense.findMany({
    where: {
      companyId: parseInt(id),
    },
  });
  res.json(expenses);
};
module.exports = { addRevenue, addExpense, getExpenses, getRevenues };
