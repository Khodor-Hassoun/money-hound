const authMiddleware = require("../middlewares/auth.middleware");
const ownerMiddleware = require("../middlewares/owner.middleware");
const {
  getUserCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/company.controller");
const { Router } = require("express");
const router = Router();

router.get("/user/:ownerId", authMiddleware, ownerMiddleware, getUserCompanies);
router.get("/:companyId", authMiddleware, ownerMiddleware, getCompany);
router.put("/", authMiddleware, ownerMiddleware, updateCompany);
// router.delete("/", authMiddleware, ownerMiddleware, deleteCompany);
module.exports = router;
