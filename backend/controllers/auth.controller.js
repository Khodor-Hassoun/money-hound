const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const saveImage = require("../helpers/save_images");
const signUp = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const { name, company_email, address, phone, capital } = req.body;
  //   validate if email exists
  const userEmailTest = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  //   if (!email || userEmailTest) {
  //     res.status(400).json({ message: "user Email Something went wrong" });
  //     return;
  //   }
  const companyEmailTest = await prisma.company.findFirst({
    where: {
      email: company_email,
    },
  });
  if (!company_email || companyEmailTest) {
    res.status(400).json({ message: " company Email Something went wrong" });
    return;
  }
  //   Create user
  //   const user = await prisma.user.create({
  //     data: {
  //       firstname: firstname,
  //       lastname: lastname,
  //       email: email,
  //       password: password,
  //       user_type: 1,
  //     },
  //   });
  //   console.log(user);
  const company = await prisma.company.create({
    data: {
      name: name,
      email: company_email,
      phone: phone,
      address: address,
      capital: capital,
      ownerId: 2,
    },
  });

  res.json(company);
};

const logIn = async (req, res) => {};

module.exports = { signUp, logIn };
