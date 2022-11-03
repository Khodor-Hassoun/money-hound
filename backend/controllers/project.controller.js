const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addProject = async (req, res) => {
  const { customer_email, project_name, budget, deadline, managerId } =
    req.body;
  const { id } = req.company;
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
};
const getProjects = async (req, res) => {};
const getProject = async (req, res) => {};
const updateProject = async (req, res) => {};

module.exports = { addProject, getProject, getProjects, updateProject };
