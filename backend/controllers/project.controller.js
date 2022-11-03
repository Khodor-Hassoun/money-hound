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
      companyId: parseInt(id),
    },
  });
  res.status(200).json(projects);
};
const getProject = async (req, res) => {
  const { id } = req.params;
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      team: true,
      Activity: true,
      Revenue: true,
      manager: true,
      company: true,
    },
  });
  res.status(200).json(project);
};
const updateProject = async (req, res) => {
  const { project_id, project_name, managerId, budget, deadline } = req.body;
  const userId = req.user.id;
  const company = req.company;

  let customerDeadline = new Date(deadline);
  if (parseInt(company.ownerId) === parseInt(userId)) {
    const project = await prisma.project.update({
      where: {
        id: parseInt(project_id),
      },
      data: {
        managerId: parseInt(managerId),
        project_name: project_name,
        deadline: customerDeadline,
        budget: parseInt(budget),
      },
    });
    res.status(200).json(project);
  }
};

module.exports = { addProject, getProject, getProjects, updateProject };
