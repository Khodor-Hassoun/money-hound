const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addActivity = async (req, res) => {
  const { objective, money, end_date } = req.body;
  const projectId = req.params.id;
  let endDate = new Date(end_date);
  //   res.json({ endDate, objective, projectId });
  //   return;
  const activity = await prisma.activity.create({
    data: {
      objective: objective,
      money: parseInt(money),
      end_date: endDate,
      projectId: parseInt(projectId),
    },
  });
  if (!activity.id) return res.json({ message: "whoops" });
  const updateProject = await prisma.project.update({
    where: {
      id: parseInt(projectId),
    },
    data: {
      money_spent: {
        increment: parseInt(money),
      },
    },
  });
  res.json({ activity, updateProject });
};
module.exports = { addActivity };
