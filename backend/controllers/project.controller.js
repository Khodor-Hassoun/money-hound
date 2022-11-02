const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addProject = async (req, res) => {};
const getProjects = async (req, res) => {};
const getProject = async (req, res) => {};
const updateProject = async (req, res) => {};

module.exports = { addProject, getProject, getProjects, updateProject };
