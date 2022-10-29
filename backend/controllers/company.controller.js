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
const updateCompany = async (req, res) => {
  const { id } = req.body;
  let { name, company_email, address, phone, capital, logo } = req.body;
  //   Get user
  const company = await prisma.company.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!name) name = company.name;
  if (!phone) phone = company.phone;
  if (!address) address = company.address;
  if (!capital) capital = company.capital;
  if (logo) {
    let image = saveImage(logo);
    logo = `${image.localPath}${image.filename}`;
  } else logo = company.logo;
  if (company_email) {
    const companyEmailTest = await prisma.company.findMany({
      where: {
        email: {
          // not: company.email,
          equals: company_email,
        },
        id: {
          not: company.id,
        },
      },
    });
    if (companyEmailTest.length > 0) {
      res.status(400).json({ message: "Email taken" });
      return;
    }
  } else company_email = company.email;

  const updatedCompany = await prisma.company.update({
    where: {
      id: company.id,
    },
    data: {
      name: name,
      email: company_email,
      phone: phone,
      logo: logo,
      address: address,
      capital: capital,
    },
  });
  res.status(200).json(updatedCompany);
};
const deleteCompany = async (req, res) => {};
module.exports = { getUserCompanies, getCompany, updateCompany, deleteCompany };
