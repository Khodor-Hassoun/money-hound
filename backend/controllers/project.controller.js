const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addProject = async (req, res) => {
  const { customer_email, project_name, budget, deadline, managerId } =
    req.body;
  const { id } = req.company;
  if (!(customer_email && project_name && budget && deadline && managerId)) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }
  let customerDeadline = new Date(deadline);
  const project = await prisma.project.create({
    data: {
      project_name: project_name,
      customerId: customer_email,
      companyId: id,
      deadline: customerDeadline,
      budget: budget,
      managerId: parseInt(managerId),
      project_phase_id: 1,
    },
  });
  res.status(200).json(project);
};
const getProjects = async (req, res) => {
  const { id } = req.company;
  const projects = await prisma.project.findMany({
    where: {
      companyId: id,
    },
  });
  res.status(200).json(projects);
};
const getProject = async (req, res) => {};
const updateProject = async (req, res) => {};

module.exports = { addProject, getProject, getProjects, updateProject };
