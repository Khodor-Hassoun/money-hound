const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addRevenue = async (req, res) => {};
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
module.exports = { addRevenue, addExpense };
