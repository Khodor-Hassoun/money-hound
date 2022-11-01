// Middlewares
const authMiddleware = require("../middlewares/auth.middleware");
const ownerMiddleware = require("../middlewares/owner.middleware");

// Controllers
const {
  getUserCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/company.controller");
const {
  addCustomer,
  getCustomers,
} = require("../controllers/customer.controller");
const {
  getEmployees,
  addEmployee,
  updateEmployee,
} = require("../controllers/employee.controller");
// Router
const { Router } = require("express");
const router = Router();

// Customer routes
router.post("/customer", authMiddleware, ownerMiddleware, addCustomer);
router.get("/customers", authMiddleware, ownerMiddleware, getCustomers);

// Employee routes
router.post("/employee", authMiddleware, ownerMiddleware, addEmployee);
router.put("/employee/:id", authMiddleware, ownerMiddleware, updateEmployee);
router.get("/employees", authMiddleware, ownerMiddleware, getEmployees);

// Company routes
router.get("/user/:ownerId", authMiddleware, ownerMiddleware, getUserCompanies);
router.get("/:companyId", authMiddleware, ownerMiddleware, getCompany);
router.put("/", authMiddleware, ownerMiddleware, updateCompany);
// router.delete("/", authMiddleware, ownerMiddleware, deleteCompany);

module.exports = router;
