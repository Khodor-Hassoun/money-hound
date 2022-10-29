const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const getUserCompanies = async (req, res) => {
  const { id } = req.user;
  const companies = await prisma.company.findMany({
    where: {
      ownerId: id,
    },
  });
  if (companies.length === 1) {
    res.status(200).json(...companies);
  } else {
    res.status(200).json(companies);
  }
};
const getCompany = async (req, res) => {
  const { companyId } = req.params;
  const company = await prisma.company.findUnique({
    where: {
      id: parseInt(companyId),
    },
  });
  res.json(company);
};
const updateCompany = async (req, res) => {};
const deleteCompany = async (req, res) => {};
module.exports = { getUserCompanies, getCompany, updateCompany, deleteCompany };
