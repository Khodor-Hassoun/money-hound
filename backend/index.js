const express = require("express");
const app = express();
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on ${process.env.SERVER_PORT}`);
});
