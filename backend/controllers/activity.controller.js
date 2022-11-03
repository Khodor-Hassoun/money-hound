const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addActivity = async (req, res) => {
  let { objective, money, end_date } = req.body;
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
  res.json(activity);
};
module.exports = { addActivity };
