const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addCustomer = async (req, res) => {
  const { id } = req.body;
  const { customer_email, customer_name } = req.body;
  if (!customer_email || !customer_name)
    return res.status(400).json({ message: "Customer already exists" });

  const customerExistTest = await prisma.customer.findFirst({
    where: {
      companyId: parseInt(id),
      OR: [
        {
          customer_email: customer_email,
        },
        {
          customer_name: customer_name,
        },
      ],
    },
  });
  if (customerExistTest)
    return res.status(400).json({ message: "Customer already exists" });
  const customer = await prisma.customer.create({
    data: {
      customer_email: customer_email,
      customer_name: customer_name,
      companyId: id,
    },
  });
  res.status(200).json(customer);
};
const getCustomers = async (req, res) => {
  const { id } = req.body;
  const customers = await prisma.customer.findMany({
    where: {
      companyId: parseInt(id),
    },
  });
  res.status(200).json(customers);
};
module.exports = { addCustomer, getCustomers };
