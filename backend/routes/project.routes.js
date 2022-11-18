const authMiddleware = require("../middlewares/auth.middleware");
const ownerMiddleware = require("../middlewares/owner.middleware");

const {
  addProject,
  getProject,
  getProjects,
  updateProject,
} = require("../controllers/project.controller");
const { addActivity } = require("../controllers/activity.controller");
const { Router } = require("express");
const router = Router();

router.post("/", authMiddleware, ownerMiddleware, addProject);
router.get("/", authMiddleware, ownerMiddleware, getProjects);
router.get("/:id", authMiddleware, getProject);
router.put("/", authMiddleware, updateProject);

router.post("/:id/add", authMiddleware, addActivity);

module.exports = router;
