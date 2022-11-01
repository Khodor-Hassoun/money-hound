require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/", userRoutes);

const companyRoutes = require("./routes/company.routes");
app.use("/company", companyRoutes);

const randomPassword = require("./helpers/generate_password");
const email = require("./helpers/send_email");
email();
// const transporter = nodemailer.createTransport({
//   service: "hotmail",
//   tls: { rejectUnauthorized: false },
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// const mailOptions = {
//   from: process.env.EMAIL_USERNAME,
//   to: "khodorhassoun26@gmail.com",
//   subject: "Subject",
//   text: "Email content",
// };
// const sendEmail = () => {
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//       // do something useful
//     }
//   });
// };
// sendEmail();
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on ${process.env.SERVER_PORT}`);
});
