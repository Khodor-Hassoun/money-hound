require("dotenv").config();
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

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on ${process.env.SERVER_PORT}`);
});
