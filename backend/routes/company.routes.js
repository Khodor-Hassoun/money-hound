// Middlewares
const authMiddleware = require("../middlewares/auth.middleware");
const ownerMiddleware = require("../middlewares/owner.middleware");
const payEmployees = require("../middlewares/payroll.middleware");

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
  getEmployeesManager,
} = require("../controllers/employee.controller");

const {
  addExpense,
  getExpenses,
  addRevenue,
  getRevenues,
} = require("../controllers/finances.controller");
// Router
const { Router } = require("express");
const router = Router();

// Customer routes
router.post("/customer", authMiddleware, ownerMiddleware, addCustomer);
router.get("/customers", authMiddleware, ownerMiddleware, getCustomers);

// Money route
router.post(
  "/expense",
  authMiddleware,
  ownerMiddleware,
  payEmployees,
  addExpense
);
router.post("/revenue", authMiddleware, ownerMiddleware, addRevenue);
router.get("/expenses", authMiddleware, ownerMiddleware, getExpenses);
router.get("/revenues", authMiddleware, ownerMiddleware, getRevenues);

// Employee routes
router.post("/employee", authMiddleware, ownerMiddleware, addEmployee);
router.put("/employee/:id", authMiddleware, ownerMiddleware, updateEmployee);
router.get("/employees", authMiddleware, ownerMiddleware, getEmployees);
router.get("/manager/:companyId", authMiddleware, getEmployeesManager);

// Company routes
router.get("/user/:ownerId", authMiddleware, ownerMiddleware, getUserCompanies);
router.get("/:companyId", authMiddleware, ownerMiddleware, getCompany);
router.put("/", authMiddleware, ownerMiddleware, updateCompany);
// router.delete("/", authMiddleware, ownerMiddleware, deleteCompany);

module.exports = router;
