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
    include: {
      Activity: {
        orderBy: [
          {
            start_date: "desc",
          },
        ],
      },
      manager: {
        include: {
          user: true,
        },
      },
      team: {
        include: {
          user: true,
        },
      },
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
  const { project_id } = req.body;
  let { project_name, managerId, budget, deadline } = req.body;
  let { project_phase, end_date } = req.body;
  let { team } = req.body;
  const user = req.user;

  if (!project_id) {
    return res.status(405).json({ message: "no project id" });
  }
  //   Get the company of the project
  const projectDet = await prisma.project.findUnique({
    where: {
      id: project_id,
    },
    include: {
      company: true,
      manager: {
        include: {
          user: true,
        },
      },
      team: true,
    },
  });
  //   res.json(projectDet);
  //   return;
  //   validate data
  project_name = project_name ? project_name : projectDet.project_name;
  managerId = managerId ? managerId : projectDet.managerId;
  budget = budget ? budget : projectDet.budget;
  deadline = deadline ? deadline : projectDet.deadline;
  project_phase = project_phase ? project_phase : projectDet.project_phase_id;
  end_date = end_date ? end_date : projectDet.end_date;
  team = team ? team : projectDet.team;

  let customerDeadline = new Date(deadline);
  let endDate = new Date(end_date);
  //   check if they are the owner
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
        team: team,
      },
    });
    res.status(200).json(project);
    return;
  }
  //   check if they are not the manager
  if (parseInt(projectDet.manager.user.id) !== parseInt(user.id))
    return res.json({ message: "Wrong place" });

  const project = await prisma.project.update({
    where: {
      id: parseInt(project_id),
    },
    data: {
      project_phase_id: project_phase,
      end_date: endDate,
    },
  });
  res.json(project);
};

module.exports = { addProject, getProject, getProjects, updateProject };
