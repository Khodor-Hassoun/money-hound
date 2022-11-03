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
  const { project_phase, end_date } = req.body;
  const user = req.user;
  let customerDeadline = new Date(deadline);
  //   Get the company of the project
  const projectDet = await prisma.project.findUnique({
    where: {
      id: project_id,
    },
    select: {
      managerId: true,
      company: true,
    },
  });
  //   res.json(company);
  //   return;
  if (parseInt(projectDet.company.ownerId) === parseInt(user.id)) {
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
    return;
  }
  if (parseInt(projectDet.managerId) !== parseInt(managerId))
    return { message: "Wrong place" };

  const project = await prisma.project.update({
    where: {
      id: parseInt(project_id),
    },
    data: {
      project_phase: project_phase,
      end_date: end_date,
    },
  });
  res.json(project);
};

module.exports = { addProject, getProject, getProjects, updateProject };
