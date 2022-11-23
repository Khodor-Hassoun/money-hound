require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "uploads")));

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
