const saveImage = require("../helpers/save_images");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const { name, company_email, address, phone, capital } = req.body;
  let { logo } = req.body;
  let encryptedpassword;

  //   const deleteCompanies = await prisma.company.deleteMany({});
  //   const deleteUsers = await prisma.user.deleteMany({});
  //   res.json({ deleteCompanies, deleteUsers });
  //   return;
  //   Check logo
  if (logo) {
    let image = saveImage(logo);
    logo = `${image.localPath}${image.filename}`;
  } else logo = null;
  //   validate if email exists
  const userEmailTest = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  const companyEmailTest = await prisma.company.findFirst({
    where: {
      email: company_email,
    },
  });
  if (!email || userEmailTest) {
    res.status(400).json({ message: "user Email Something went wrong" });
    return;
  }
  if (!company_email || companyEmailTest) {
    res.status(400).json({ message: " company Email Something went wrong" });
    return;
  }
  //   Check if password
  if (password) {
    encryptedpassword = await bcrypt.hash(password, 10);
  } else {
    res.status(400).json({ message: " User password Something went wrong" });
    return;
  }
  // Create user
  const user = await prisma.user.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: encryptedpassword,
      user_type: 1,
    },
  });
  console.log(user);
  const company = await prisma.company.create({
    data: {
      name: name,
      email: company_email,
      phone: phone,
      address: address,
      capital: capital,
      ownerId: user.id,
      logo: logo,
    },
  });
  console.log(company);
  res.json({ user, company });
};

const logIn = async (req, res) => {};

module.exports = { signUp, logIn };
