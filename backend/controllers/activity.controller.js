const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addActivity = async (req, res) => {
  const { objective, money, end_date } = req.body;
  const projectId = req.params.id;
  if (!projectId) return res.json({ message: "No id to validate" });
  if (!objective || !money || !end_date)
    return res.json({ message: "Incomplete data" });
  let endDate = new Date(end_date);
  //   res.json({ endDate, objective, projectId });
  //   return;
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
  res.json({ activity, updatedProject });
};
module.exports = { addActivity };
