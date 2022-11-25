const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addActivity = async (req, res) => {
  const { objective, money, end_date } = req.body;
  const projectId = req.params.id;
  if (!projectId) return res.json({ message: "No id to validate" });
  if (!objective || !money || !end_date)
    return res.json({ message: "Incomplete data" });
  let endDate = new Date(end_date);
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(projectId),
    },
  });
  const activity = await prisma.activity.create({
    data: {
      objective: objective,
      money: parseInt(money),
      end_date: endDate,
      projectId: parseInt(projectId),
      project_phase: parseInt(project.project_phase_id),
    },
  });
  if (!activity.id) return res.json({ message: "whoops" });
  const updatedProject = await prisma.project.update({
    where: {
      id: parseInt(projectId),
    },
    data: {
      money_spent: {
        increment: parseInt(money),
      },
    },
  });
  const addExpense = await prisma.expense.create({
    data: {
      bill_name: "Project Expense",
      companyId: parseInt(updatedProject.companyId),
      price: parseInt(money),
    },
  });
  const newProject = await prisma.project.findFirst({
    where: {
      id: parseInt(projectId),
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
      project_phase: true,
      customer: true,
    },
  });
  res.json(newProject);
};

const getProjectActivities = async (req, res) => {
  const { id } = req.params;
  const activities = await prisma.activity.findMany({
    where: {
      projectId: parseInt(id),
    },
    orderBy: [
      {
        start_date: "desc",
      },
    ],
  });
  res.status(200).json(activities);
};

module.exports = { addActivity, getProjectActivities };
