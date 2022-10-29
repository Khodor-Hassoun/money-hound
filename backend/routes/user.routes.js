const authMiddleware = require("../middlewares/auth.middleware");
const ownerMiddleware = require("../middlewares/owner.middleware");
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { Router } = require("express");
const router = Router();

router.get("/:id", authMiddleware, getUser);
// router.put("/", authMiddleware, updateUser);
// router.delete("/", authMiddleware, deleteUser);

module.exports = router;
