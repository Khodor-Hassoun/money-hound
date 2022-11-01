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

// const email = require("./helpers/send_email");
// email();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on ${process.env.SERVER_PORT}`);
});
