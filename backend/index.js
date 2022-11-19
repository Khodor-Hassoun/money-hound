require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const companyRoutes = require("./routes/company.routes");
app.use("/company", companyRoutes);

const projectRoutes = require("./routes/project.routes");
app.use("/project", projectRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on ${process.env.SERVER_PORT}`);
});
