const saveImage = require("../helpers/save_images");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const { name, company_email, address, phone, capital } = req.body;
  let { logo } = req.body;
  let encryptedpassword;
  if (!firstname || !lastname || !name || !address || !phone || !capital)
    return res.status(400).json({ message: "Incomplete data" });

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
      phone: parseInt(phone),
      address: address,
      capital: parseInt(capital),
      ownerId: user.id,
      logo: logo,
    },
  });
  console.log(company);
  res.json({ user, company });
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) return res.status(404).json({ message: "Invalid Credentials" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(404).json({ message: "Invalid Credentials" });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "100000000h",
  });
  // res.redirect
  res.status(200).json({ user, token });
};

module.exports = { signUp, logIn };
