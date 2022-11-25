const authMiddleware = require("../middlewares/auth.middleware");
const {
  getUser,
  updateUser,
  deleteUser,
  getCompanies,
  selectCompany,
} = require("../controllers/user.controller");
const { Router } = require("express");
const router = Router();
router.get("/companies", authMiddleware, getCompanies);
router.post("/companies", authMiddleware, selectCompany);
router.get("/:id", authMiddleware, getUser);
router.put("/", authMiddleware, updateUser);

module.exports = router;
