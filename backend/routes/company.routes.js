const authMiddleware = require("../middlewares/auth.middleware");
const ownerMiddleware = require("../middlewares/owner.middleware");
const { Router } = require("express");
const router = Router();

router.get("/:id", authMiddleware, ownerMiddleware, getCompany);
// router.put("/", authMiddleware, ownerMiddleware, updateCompany);
// router.delete("/", authMiddleware, ownerMiddleware, deleteCompany);
module.exports = router;
