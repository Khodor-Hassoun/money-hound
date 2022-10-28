const { logIn, signUp } = require("../controllers/auth.controller");
const { Router } = require("express");
const router = Router();

router.post("/signup", signUp);
router.post("/login", logIn);

module.exports = router;
